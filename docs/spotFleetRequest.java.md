# `spotFleetRequest` Submodule <a name="`spotFleetRequest` Submodule" id="@cdktf/provider-aws.spotFleetRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotFleetRequest <a name="SpotFleetRequest" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request aws_spot_fleet_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequest;

SpotFleetRequest.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .iamFleetRole(java.lang.String)
    .targetCapacity(java.lang.Number)
//  .allocationStrategy(java.lang.String)
//  .excessCapacityTerminationPolicy(java.lang.String)
//  .fleetType(java.lang.String)
//  .id(java.lang.String)
//  .instanceInterruptionBehaviour(java.lang.String)
//  .instancePoolsToUseCount(java.lang.Number)
//  .launchSpecification(IResolvable)
//  .launchSpecification(java.util.List<SpotFleetRequestLaunchSpecification>)
//  .launchTemplateConfig(IResolvable)
//  .launchTemplateConfig(java.util.List<SpotFleetRequestLaunchTemplateConfig>)
//  .loadBalancers(java.util.List<java.lang.String>)
//  .onDemandAllocationStrategy(java.lang.String)
//  .onDemandMaxTotalPrice(java.lang.String)
//  .onDemandTargetCapacity(java.lang.Number)
//  .replaceUnhealthyInstances(java.lang.Boolean)
//  .replaceUnhealthyInstances(IResolvable)
//  .spotMaintenanceStrategies(SpotFleetRequestSpotMaintenanceStrategies)
//  .spotPrice(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .targetCapacityUnitType(java.lang.String)
//  .targetGroupArns(java.util.List<java.lang.String>)
//  .terminateInstancesOnDelete(java.lang.String)
//  .terminateInstancesWithExpiration(java.lang.Boolean)
//  .terminateInstancesWithExpiration(IResolvable)
//  .timeouts(SpotFleetRequestTimeouts)
//  .validFrom(java.lang.String)
//  .validUntil(java.lang.String)
//  .waitForFulfillment(java.lang.Boolean)
//  .waitForFulfillment(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.iamFleetRole">iamFleetRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetCapacity">targetCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.excessCapacityTerminationPolicy">excessCapacityTerminationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.fleetType">fleetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.instanceInterruptionBehaviour">instanceInterruptionBehaviour</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.launchSpecification">launchSpecification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>></code> | launch_specification block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.launchTemplateConfig">launchTemplateConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>></code> | launch_template_config block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.loadBalancers">loadBalancers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandAllocationStrategy">onDemandAllocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandMaxTotalPrice">onDemandMaxTotalPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandTargetCapacity">onDemandTargetCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.replaceUnhealthyInstances">replaceUnhealthyInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.spotMaintenanceStrategies">spotMaintenanceStrategies</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | spot_maintenance_strategies block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags_all SpotFleetRequest#tags_all}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetCapacityUnitType">targetCapacityUnitType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity_unit_type SpotFleetRequest#target_capacity_unit_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetGroupArns">targetGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.terminateInstancesOnDelete">terminateInstancesOnDelete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_on_delete SpotFleetRequest#terminate_instances_on_delete}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.terminateInstancesWithExpiration">terminateInstancesWithExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.validFrom">validFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_from SpotFleetRequest#valid_from}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.validUntil">validUntil</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_until SpotFleetRequest#valid_until}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.waitForFulfillment">waitForFulfillment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iamFleetRole`<sup>Required</sup> <a name="iamFleetRole" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.iamFleetRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}.

---

##### `targetCapacity`<sup>Required</sup> <a name="targetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}.

---

##### `allocationStrategy`<sup>Optional</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.allocationStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}.

---

##### `excessCapacityTerminationPolicy`<sup>Optional</sup> <a name="excessCapacityTerminationPolicy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.excessCapacityTerminationPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}.

---

##### `fleetType`<sup>Optional</sup> <a name="fleetType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.fleetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceInterruptionBehaviour`<sup>Optional</sup> <a name="instanceInterruptionBehaviour" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.instanceInterruptionBehaviour"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}.

---

##### `instancePoolsToUseCount`<sup>Optional</sup> <a name="instancePoolsToUseCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.instancePoolsToUseCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}.

---

##### `launchSpecification`<sup>Optional</sup> <a name="launchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.launchSpecification"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>>

launch_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_specification SpotFleetRequest#launch_specification}

---

##### `launchTemplateConfig`<sup>Optional</sup> <a name="launchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.launchTemplateConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>>

launch_template_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_template_config SpotFleetRequest#launch_template_config}

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.loadBalancers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}.

---

##### `onDemandAllocationStrategy`<sup>Optional</sup> <a name="onDemandAllocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandAllocationStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}.

---

##### `onDemandMaxTotalPrice`<sup>Optional</sup> <a name="onDemandMaxTotalPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandMaxTotalPrice"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}.

---

##### `onDemandTargetCapacity`<sup>Optional</sup> <a name="onDemandTargetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandTargetCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}.

---

##### `replaceUnhealthyInstances`<sup>Optional</sup> <a name="replaceUnhealthyInstances" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.replaceUnhealthyInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}.

---

##### `spotMaintenanceStrategies`<sup>Optional</sup> <a name="spotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.spotMaintenanceStrategies"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

spot_maintenance_strategies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.spotPrice"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags_all SpotFleetRequest#tags_all}.

---

##### `targetCapacityUnitType`<sup>Optional</sup> <a name="targetCapacityUnitType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetCapacityUnitType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity_unit_type SpotFleetRequest#target_capacity_unit_type}.

---

##### `targetGroupArns`<sup>Optional</sup> <a name="targetGroupArns" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetGroupArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}.

---

##### `terminateInstancesOnDelete`<sup>Optional</sup> <a name="terminateInstancesOnDelete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.terminateInstancesOnDelete"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_on_delete SpotFleetRequest#terminate_instances_on_delete}.

---

##### `terminateInstancesWithExpiration`<sup>Optional</sup> <a name="terminateInstancesWithExpiration" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.terminateInstancesWithExpiration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#timeouts SpotFleetRequest#timeouts}

---

##### `validFrom`<sup>Optional</sup> <a name="validFrom" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.validFrom"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_from SpotFleetRequest#valid_from}.

---

##### `validUntil`<sup>Optional</sup> <a name="validUntil" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.validUntil"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_until SpotFleetRequest#valid_until}.

---

##### `waitForFulfillment`<sup>Optional</sup> <a name="waitForFulfillment" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.waitForFulfillment"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchSpecification">putLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig">putLaunchTemplateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies">putSpotMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetAllocationStrategy">resetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetExcessCapacityTerminationPolicy">resetExcessCapacityTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetFleetType">resetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstanceInterruptionBehaviour">resetInstanceInterruptionBehaviour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstancePoolsToUseCount">resetInstancePoolsToUseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchSpecification">resetLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchTemplateConfig">resetLaunchTemplateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLoadBalancers">resetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandAllocationStrategy">resetOnDemandAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandMaxTotalPrice">resetOnDemandMaxTotalPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandTargetCapacity">resetOnDemandTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetReplaceUnhealthyInstances">resetReplaceUnhealthyInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotMaintenanceStrategies">resetSpotMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotPrice">resetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetCapacityUnitType">resetTargetCapacityUnitType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetGroupArns">resetTargetGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesOnDelete">resetTerminateInstancesOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesWithExpiration">resetTerminateInstancesWithExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidFrom">resetValidFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidUntil">resetValidUntil</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetWaitForFulfillment">resetWaitForFulfillment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLaunchSpecification` <a name="putLaunchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchSpecification"></a>

```java
public void putLaunchSpecification(IResolvable OR java.util.List<SpotFleetRequestLaunchSpecification> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchSpecification.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>>

---

##### `putLaunchTemplateConfig` <a name="putLaunchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig"></a>

```java
public void putLaunchTemplateConfig(IResolvable OR java.util.List<SpotFleetRequestLaunchTemplateConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>>

---

##### `putSpotMaintenanceStrategies` <a name="putSpotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies"></a>

```java
public void putSpotMaintenanceStrategies(SpotFleetRequestSpotMaintenanceStrategies value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putTimeouts"></a>

```java
public void putTimeouts(SpotFleetRequestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>

---

##### `resetAllocationStrategy` <a name="resetAllocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetAllocationStrategy"></a>

```java
public void resetAllocationStrategy()
```

##### `resetExcessCapacityTerminationPolicy` <a name="resetExcessCapacityTerminationPolicy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetExcessCapacityTerminationPolicy"></a>

```java
public void resetExcessCapacityTerminationPolicy()
```

##### `resetFleetType` <a name="resetFleetType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetFleetType"></a>

```java
public void resetFleetType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceInterruptionBehaviour` <a name="resetInstanceInterruptionBehaviour" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstanceInterruptionBehaviour"></a>

```java
public void resetInstanceInterruptionBehaviour()
```

##### `resetInstancePoolsToUseCount` <a name="resetInstancePoolsToUseCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstancePoolsToUseCount"></a>

```java
public void resetInstancePoolsToUseCount()
```

##### `resetLaunchSpecification` <a name="resetLaunchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchSpecification"></a>

```java
public void resetLaunchSpecification()
```

##### `resetLaunchTemplateConfig` <a name="resetLaunchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchTemplateConfig"></a>

```java
public void resetLaunchTemplateConfig()
```

##### `resetLoadBalancers` <a name="resetLoadBalancers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLoadBalancers"></a>

```java
public void resetLoadBalancers()
```

##### `resetOnDemandAllocationStrategy` <a name="resetOnDemandAllocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandAllocationStrategy"></a>

```java
public void resetOnDemandAllocationStrategy()
```

##### `resetOnDemandMaxTotalPrice` <a name="resetOnDemandMaxTotalPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandMaxTotalPrice"></a>

```java
public void resetOnDemandMaxTotalPrice()
```

##### `resetOnDemandTargetCapacity` <a name="resetOnDemandTargetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandTargetCapacity"></a>

```java
public void resetOnDemandTargetCapacity()
```

##### `resetReplaceUnhealthyInstances` <a name="resetReplaceUnhealthyInstances" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetReplaceUnhealthyInstances"></a>

```java
public void resetReplaceUnhealthyInstances()
```

##### `resetSpotMaintenanceStrategies` <a name="resetSpotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotMaintenanceStrategies"></a>

```java
public void resetSpotMaintenanceStrategies()
```

##### `resetSpotPrice` <a name="resetSpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotPrice"></a>

```java
public void resetSpotPrice()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTargetCapacityUnitType` <a name="resetTargetCapacityUnitType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetCapacityUnitType"></a>

```java
public void resetTargetCapacityUnitType()
```

##### `resetTargetGroupArns` <a name="resetTargetGroupArns" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetGroupArns"></a>

```java
public void resetTargetGroupArns()
```

##### `resetTerminateInstancesOnDelete` <a name="resetTerminateInstancesOnDelete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesOnDelete"></a>

```java
public void resetTerminateInstancesOnDelete()
```

##### `resetTerminateInstancesWithExpiration` <a name="resetTerminateInstancesWithExpiration" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesWithExpiration"></a>

```java
public void resetTerminateInstancesWithExpiration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidFrom` <a name="resetValidFrom" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidFrom"></a>

```java
public void resetValidFrom()
```

##### `resetValidUntil` <a name="resetValidUntil" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidUntil"></a>

```java
public void resetValidUntil()
```

##### `resetWaitForFulfillment` <a name="resetWaitForFulfillment" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetWaitForFulfillment"></a>

```java
public void resetWaitForFulfillment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequest;

SpotFleetRequest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequest;

SpotFleetRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequest;

SpotFleetRequest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecification">launchSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList">SpotFleetRequestLaunchSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfig">launchTemplateConfig</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList">SpotFleetRequestLaunchTemplateConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategies">spotMaintenanceStrategies</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference">SpotFleetRequestSpotMaintenanceStrategiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotRequestState">spotRequestState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference">SpotFleetRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicyInput">excessCapacityTerminationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetTypeInput">fleetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRoleInput">iamFleetRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviourInput">instanceInterruptionBehaviourInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCountInput">instancePoolsToUseCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecificationInput">launchSpecificationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfigInput">launchTemplateConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancersInput">loadBalancersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategyInput">onDemandAllocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPriceInput">onDemandMaxTotalPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacityInput">onDemandTargetCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstancesInput">replaceUnhealthyInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategiesInput">spotMaintenanceStrategiesInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPriceInput">spotPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityInput">targetCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitTypeInput">targetCapacityUnitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArnsInput">targetGroupArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDeleteInput">terminateInstancesOnDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpirationInput">terminateInstancesWithExpirationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFromInput">validFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntilInput">validUntilInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillmentInput">waitForFulfillmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicy">excessCapacityTerminationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetType">fleetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRole">iamFleetRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviour">instanceInterruptionBehaviour</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancers">loadBalancers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategy">onDemandAllocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPrice">onDemandMaxTotalPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacity">onDemandTargetCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstances">replaceUnhealthyInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacity">targetCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitType">targetCapacityUnitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArns">targetGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDelete">terminateInstancesOnDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpiration">terminateInstancesWithExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFrom">validFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntil">validUntil</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillment">waitForFulfillment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `launchSpecification`<sup>Required</sup> <a name="launchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecification"></a>

```java
public SpotFleetRequestLaunchSpecificationList getLaunchSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList">SpotFleetRequestLaunchSpecificationList</a>

---

##### `launchTemplateConfig`<sup>Required</sup> <a name="launchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfig"></a>

```java
public SpotFleetRequestLaunchTemplateConfigList getLaunchTemplateConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList">SpotFleetRequestLaunchTemplateConfigList</a>

---

##### `spotMaintenanceStrategies`<sup>Required</sup> <a name="spotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategies"></a>

```java
public SpotFleetRequestSpotMaintenanceStrategiesOutputReference getSpotMaintenanceStrategies();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference">SpotFleetRequestSpotMaintenanceStrategiesOutputReference</a>

---

##### `spotRequestState`<sup>Required</sup> <a name="spotRequestState" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotRequestState"></a>

```java
public java.lang.String getSpotRequestState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeouts"></a>

```java
public SpotFleetRequestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference">SpotFleetRequestTimeoutsOutputReference</a>

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategyInput"></a>

```java
public java.lang.String getAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `excessCapacityTerminationPolicyInput`<sup>Optional</sup> <a name="excessCapacityTerminationPolicyInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicyInput"></a>

```java
public java.lang.String getExcessCapacityTerminationPolicyInput();
```

- *Type:* java.lang.String

---

##### `fleetTypeInput`<sup>Optional</sup> <a name="fleetTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetTypeInput"></a>

```java
public java.lang.String getFleetTypeInput();
```

- *Type:* java.lang.String

---

##### `iamFleetRoleInput`<sup>Optional</sup> <a name="iamFleetRoleInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRoleInput"></a>

```java
public java.lang.String getIamFleetRoleInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInterruptionBehaviourInput`<sup>Optional</sup> <a name="instanceInterruptionBehaviourInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviourInput"></a>

```java
public java.lang.String getInstanceInterruptionBehaviourInput();
```

- *Type:* java.lang.String

---

##### `instancePoolsToUseCountInput`<sup>Optional</sup> <a name="instancePoolsToUseCountInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCountInput"></a>

```java
public java.lang.Number getInstancePoolsToUseCountInput();
```

- *Type:* java.lang.Number

---

##### `launchSpecificationInput`<sup>Optional</sup> <a name="launchSpecificationInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecificationInput"></a>

```java
public java.lang.Object getLaunchSpecificationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>>

---

##### `launchTemplateConfigInput`<sup>Optional</sup> <a name="launchTemplateConfigInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfigInput"></a>

```java
public java.lang.Object getLaunchTemplateConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>>

---

##### `loadBalancersInput`<sup>Optional</sup> <a name="loadBalancersInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancersInput"></a>

```java
public java.util.List<java.lang.String> getLoadBalancersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onDemandAllocationStrategyInput`<sup>Optional</sup> <a name="onDemandAllocationStrategyInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategyInput"></a>

```java
public java.lang.String getOnDemandAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `onDemandMaxTotalPriceInput`<sup>Optional</sup> <a name="onDemandMaxTotalPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPriceInput"></a>

```java
public java.lang.String getOnDemandMaxTotalPriceInput();
```

- *Type:* java.lang.String

---

##### `onDemandTargetCapacityInput`<sup>Optional</sup> <a name="onDemandTargetCapacityInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacityInput"></a>

```java
public java.lang.Number getOnDemandTargetCapacityInput();
```

- *Type:* java.lang.Number

---

##### `replaceUnhealthyInstancesInput`<sup>Optional</sup> <a name="replaceUnhealthyInstancesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstancesInput"></a>

```java
public java.lang.Object getReplaceUnhealthyInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotMaintenanceStrategiesInput`<sup>Optional</sup> <a name="spotMaintenanceStrategiesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategiesInput"></a>

```java
public SpotFleetRequestSpotMaintenanceStrategies getSpotMaintenanceStrategiesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

---

##### `spotPriceInput`<sup>Optional</sup> <a name="spotPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPriceInput"></a>

```java
public java.lang.String getSpotPriceInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetCapacityInput`<sup>Optional</sup> <a name="targetCapacityInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityInput"></a>

```java
public java.lang.Number getTargetCapacityInput();
```

- *Type:* java.lang.Number

---

##### `targetCapacityUnitTypeInput`<sup>Optional</sup> <a name="targetCapacityUnitTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitTypeInput"></a>

```java
public java.lang.String getTargetCapacityUnitTypeInput();
```

- *Type:* java.lang.String

---

##### `targetGroupArnsInput`<sup>Optional</sup> <a name="targetGroupArnsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArnsInput"></a>

```java
public java.util.List<java.lang.String> getTargetGroupArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `terminateInstancesOnDeleteInput`<sup>Optional</sup> <a name="terminateInstancesOnDeleteInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDeleteInput"></a>

```java
public java.lang.String getTerminateInstancesOnDeleteInput();
```

- *Type:* java.lang.String

---

##### `terminateInstancesWithExpirationInput`<sup>Optional</sup> <a name="terminateInstancesWithExpirationInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpirationInput"></a>

```java
public java.lang.Object getTerminateInstancesWithExpirationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `validFromInput`<sup>Optional</sup> <a name="validFromInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFromInput"></a>

```java
public java.lang.String getValidFromInput();
```

- *Type:* java.lang.String

---

##### `validUntilInput`<sup>Optional</sup> <a name="validUntilInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntilInput"></a>

```java
public java.lang.String getValidUntilInput();
```

- *Type:* java.lang.String

---

##### `waitForFulfillmentInput`<sup>Optional</sup> <a name="waitForFulfillmentInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillmentInput"></a>

```java
public java.lang.Object getWaitForFulfillmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `excessCapacityTerminationPolicy`<sup>Required</sup> <a name="excessCapacityTerminationPolicy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicy"></a>

```java
public java.lang.String getExcessCapacityTerminationPolicy();
```

- *Type:* java.lang.String

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetType"></a>

```java
public java.lang.String getFleetType();
```

- *Type:* java.lang.String

---

##### `iamFleetRole`<sup>Required</sup> <a name="iamFleetRole" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRole"></a>

```java
public java.lang.String getIamFleetRole();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceInterruptionBehaviour`<sup>Required</sup> <a name="instanceInterruptionBehaviour" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviour"></a>

```java
public java.lang.String getInstanceInterruptionBehaviour();
```

- *Type:* java.lang.String

---

##### `instancePoolsToUseCount`<sup>Required</sup> <a name="instancePoolsToUseCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCount"></a>

```java
public java.lang.Number getInstancePoolsToUseCount();
```

- *Type:* java.lang.Number

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancers"></a>

```java
public java.util.List<java.lang.String> getLoadBalancers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onDemandAllocationStrategy`<sup>Required</sup> <a name="onDemandAllocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategy"></a>

```java
public java.lang.String getOnDemandAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `onDemandMaxTotalPrice`<sup>Required</sup> <a name="onDemandMaxTotalPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPrice"></a>

```java
public java.lang.String getOnDemandMaxTotalPrice();
```

- *Type:* java.lang.String

---

##### `onDemandTargetCapacity`<sup>Required</sup> <a name="onDemandTargetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacity"></a>

```java
public java.lang.Number getOnDemandTargetCapacity();
```

- *Type:* java.lang.Number

---

##### `replaceUnhealthyInstances`<sup>Required</sup> <a name="replaceUnhealthyInstances" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstances"></a>

```java
public java.lang.Object getReplaceUnhealthyInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPrice"></a>

```java
public java.lang.String getSpotPrice();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetCapacity`<sup>Required</sup> <a name="targetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacity"></a>

```java
public java.lang.Number getTargetCapacity();
```

- *Type:* java.lang.Number

---

##### `targetCapacityUnitType`<sup>Required</sup> <a name="targetCapacityUnitType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitType"></a>

```java
public java.lang.String getTargetCapacityUnitType();
```

- *Type:* java.lang.String

---

##### `targetGroupArns`<sup>Required</sup> <a name="targetGroupArns" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArns"></a>

```java
public java.util.List<java.lang.String> getTargetGroupArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `terminateInstancesOnDelete`<sup>Required</sup> <a name="terminateInstancesOnDelete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDelete"></a>

```java
public java.lang.String getTerminateInstancesOnDelete();
```

- *Type:* java.lang.String

---

##### `terminateInstancesWithExpiration`<sup>Required</sup> <a name="terminateInstancesWithExpiration" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpiration"></a>

```java
public java.lang.Object getTerminateInstancesWithExpiration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validFrom`<sup>Required</sup> <a name="validFrom" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFrom"></a>

```java
public java.lang.String getValidFrom();
```

- *Type:* java.lang.String

---

##### `validUntil`<sup>Required</sup> <a name="validUntil" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntil"></a>

```java
public java.lang.String getValidUntil();
```

- *Type:* java.lang.String

---

##### `waitForFulfillment`<sup>Required</sup> <a name="waitForFulfillment" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillment"></a>

```java
public java.lang.Object getWaitForFulfillment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpotFleetRequestConfig <a name="SpotFleetRequestConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestConfig;

SpotFleetRequestConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .iamFleetRole(java.lang.String)
    .targetCapacity(java.lang.Number)
//  .allocationStrategy(java.lang.String)
//  .excessCapacityTerminationPolicy(java.lang.String)
//  .fleetType(java.lang.String)
//  .id(java.lang.String)
//  .instanceInterruptionBehaviour(java.lang.String)
//  .instancePoolsToUseCount(java.lang.Number)
//  .launchSpecification(IResolvable)
//  .launchSpecification(java.util.List<SpotFleetRequestLaunchSpecification>)
//  .launchTemplateConfig(IResolvable)
//  .launchTemplateConfig(java.util.List<SpotFleetRequestLaunchTemplateConfig>)
//  .loadBalancers(java.util.List<java.lang.String>)
//  .onDemandAllocationStrategy(java.lang.String)
//  .onDemandMaxTotalPrice(java.lang.String)
//  .onDemandTargetCapacity(java.lang.Number)
//  .replaceUnhealthyInstances(java.lang.Boolean)
//  .replaceUnhealthyInstances(IResolvable)
//  .spotMaintenanceStrategies(SpotFleetRequestSpotMaintenanceStrategies)
//  .spotPrice(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .targetCapacityUnitType(java.lang.String)
//  .targetGroupArns(java.util.List<java.lang.String>)
//  .terminateInstancesOnDelete(java.lang.String)
//  .terminateInstancesWithExpiration(java.lang.Boolean)
//  .terminateInstancesWithExpiration(IResolvable)
//  .timeouts(SpotFleetRequestTimeouts)
//  .validFrom(java.lang.String)
//  .validUntil(java.lang.String)
//  .waitForFulfillment(java.lang.Boolean)
//  .waitForFulfillment(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.iamFleetRole">iamFleetRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacity">targetCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.excessCapacityTerminationPolicy">excessCapacityTerminationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.fleetType">fleetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instanceInterruptionBehaviour">instanceInterruptionBehaviour</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchSpecification">launchSpecification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>></code> | launch_specification block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchTemplateConfig">launchTemplateConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>></code> | launch_template_config block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.loadBalancers">loadBalancers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandAllocationStrategy">onDemandAllocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandMaxTotalPrice">onDemandMaxTotalPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandTargetCapacity">onDemandTargetCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.replaceUnhealthyInstances">replaceUnhealthyInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotMaintenanceStrategies">spotMaintenanceStrategies</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | spot_maintenance_strategies block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags_all SpotFleetRequest#tags_all}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacityUnitType">targetCapacityUnitType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity_unit_type SpotFleetRequest#target_capacity_unit_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetGroupArns">targetGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesOnDelete">terminateInstancesOnDelete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_on_delete SpotFleetRequest#terminate_instances_on_delete}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesWithExpiration">terminateInstancesWithExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validFrom">validFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_from SpotFleetRequest#valid_from}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validUntil">validUntil</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_until SpotFleetRequest#valid_until}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.waitForFulfillment">waitForFulfillment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iamFleetRole`<sup>Required</sup> <a name="iamFleetRole" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.iamFleetRole"></a>

```java
public java.lang.String getIamFleetRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}.

---

##### `targetCapacity`<sup>Required</sup> <a name="targetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacity"></a>

```java
public java.lang.Number getTargetCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}.

---

##### `allocationStrategy`<sup>Optional</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}.

---

##### `excessCapacityTerminationPolicy`<sup>Optional</sup> <a name="excessCapacityTerminationPolicy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.excessCapacityTerminationPolicy"></a>

```java
public java.lang.String getExcessCapacityTerminationPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}.

---

##### `fleetType`<sup>Optional</sup> <a name="fleetType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.fleetType"></a>

```java
public java.lang.String getFleetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceInterruptionBehaviour`<sup>Optional</sup> <a name="instanceInterruptionBehaviour" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instanceInterruptionBehaviour"></a>

```java
public java.lang.String getInstanceInterruptionBehaviour();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}.

---

##### `instancePoolsToUseCount`<sup>Optional</sup> <a name="instancePoolsToUseCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instancePoolsToUseCount"></a>

```java
public java.lang.Number getInstancePoolsToUseCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}.

---

##### `launchSpecification`<sup>Optional</sup> <a name="launchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchSpecification"></a>

```java
public java.lang.Object getLaunchSpecification();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>>

launch_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_specification SpotFleetRequest#launch_specification}

---

##### `launchTemplateConfig`<sup>Optional</sup> <a name="launchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchTemplateConfig"></a>

```java
public java.lang.Object getLaunchTemplateConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>>

launch_template_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_template_config SpotFleetRequest#launch_template_config}

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.loadBalancers"></a>

```java
public java.util.List<java.lang.String> getLoadBalancers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}.

---

##### `onDemandAllocationStrategy`<sup>Optional</sup> <a name="onDemandAllocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandAllocationStrategy"></a>

```java
public java.lang.String getOnDemandAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}.

---

##### `onDemandMaxTotalPrice`<sup>Optional</sup> <a name="onDemandMaxTotalPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandMaxTotalPrice"></a>

```java
public java.lang.String getOnDemandMaxTotalPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}.

---

##### `onDemandTargetCapacity`<sup>Optional</sup> <a name="onDemandTargetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandTargetCapacity"></a>

```java
public java.lang.Number getOnDemandTargetCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}.

---

##### `replaceUnhealthyInstances`<sup>Optional</sup> <a name="replaceUnhealthyInstances" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.replaceUnhealthyInstances"></a>

```java
public java.lang.Object getReplaceUnhealthyInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}.

---

##### `spotMaintenanceStrategies`<sup>Optional</sup> <a name="spotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotMaintenanceStrategies"></a>

```java
public SpotFleetRequestSpotMaintenanceStrategies getSpotMaintenanceStrategies();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

spot_maintenance_strategies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotPrice"></a>

```java
public java.lang.String getSpotPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags_all SpotFleetRequest#tags_all}.

---

##### `targetCapacityUnitType`<sup>Optional</sup> <a name="targetCapacityUnitType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacityUnitType"></a>

```java
public java.lang.String getTargetCapacityUnitType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity_unit_type SpotFleetRequest#target_capacity_unit_type}.

---

##### `targetGroupArns`<sup>Optional</sup> <a name="targetGroupArns" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetGroupArns"></a>

```java
public java.util.List<java.lang.String> getTargetGroupArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}.

---

##### `terminateInstancesOnDelete`<sup>Optional</sup> <a name="terminateInstancesOnDelete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesOnDelete"></a>

```java
public java.lang.String getTerminateInstancesOnDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_on_delete SpotFleetRequest#terminate_instances_on_delete}.

---

##### `terminateInstancesWithExpiration`<sup>Optional</sup> <a name="terminateInstancesWithExpiration" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesWithExpiration"></a>

```java
public java.lang.Object getTerminateInstancesWithExpiration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.timeouts"></a>

```java
public SpotFleetRequestTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#timeouts SpotFleetRequest#timeouts}

---

##### `validFrom`<sup>Optional</sup> <a name="validFrom" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validFrom"></a>

```java
public java.lang.String getValidFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_from SpotFleetRequest#valid_from}.

---

##### `validUntil`<sup>Optional</sup> <a name="validUntil" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validUntil"></a>

```java
public java.lang.String getValidUntil();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_until SpotFleetRequest#valid_until}.

---

##### `waitForFulfillment`<sup>Optional</sup> <a name="waitForFulfillment" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.waitForFulfillment"></a>

```java
public java.lang.Object getWaitForFulfillment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}.

---

### SpotFleetRequestLaunchSpecification <a name="SpotFleetRequestLaunchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecification;

SpotFleetRequestLaunchSpecification.builder()
    .ami(java.lang.String)
    .instanceType(java.lang.String)
//  .associatePublicIpAddress(java.lang.Boolean)
//  .associatePublicIpAddress(IResolvable)
//  .availabilityZone(java.lang.String)
//  .ebsBlockDevice(IResolvable)
//  .ebsBlockDevice(java.util.List<SpotFleetRequestLaunchSpecificationEbsBlockDevice>)
//  .ebsOptimized(java.lang.Boolean)
//  .ebsOptimized(IResolvable)
//  .ephemeralBlockDevice(IResolvable)
//  .ephemeralBlockDevice(java.util.List<SpotFleetRequestLaunchSpecificationEphemeralBlockDevice>)
//  .iamInstanceProfile(java.lang.String)
//  .iamInstanceProfileArn(java.lang.String)
//  .keyName(java.lang.String)
//  .monitoring(java.lang.Boolean)
//  .monitoring(IResolvable)
//  .placementGroup(java.lang.String)
//  .placementTenancy(java.lang.String)
//  .rootBlockDevice(IResolvable)
//  .rootBlockDevice(java.util.List<SpotFleetRequestLaunchSpecificationRootBlockDevice>)
//  .spotPrice(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .userData(java.lang.String)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
//  .weightedCapacity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ami">ami</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ami SpotFleetRequest#ami}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>></code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ebs_optimized SpotFleetRequest#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>></code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile SpotFleetRequest#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#key_name SpotFleetRequest#key_name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.monitoring">monitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#monitoring SpotFleetRequest#monitoring}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_group SpotFleetRequest#placement_group}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementTenancy">placementTenancy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_tenancy SpotFleetRequest#placement_tenancy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.rootBlockDevice">rootBlockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#user_data SpotFleetRequest#user_data}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}. |

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ami"></a>

```java
public java.lang.String getAmi();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ami SpotFleetRequest#ami}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.associatePublicIpAddress"></a>

```java
public java.lang.Object getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsBlockDevice"></a>

```java
public java.lang.Object getEbsBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>>

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ebs_block_device SpotFleetRequest#ebs_block_device}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsOptimized"></a>

```java
public java.lang.Object getEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ebs_optimized SpotFleetRequest#ebs_optimized}.

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ephemeralBlockDevice"></a>

```java
public java.lang.Object getEphemeralBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>>

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ephemeral_block_device SpotFleetRequest#ephemeral_block_device}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile SpotFleetRequest#iam_instance_profile}.

---

##### `iamInstanceProfileArn`<sup>Optional</sup> <a name="iamInstanceProfileArn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfileArn"></a>

```java
public java.lang.String getIamInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#key_name SpotFleetRequest#key_name}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.monitoring"></a>

```java
public java.lang.Object getMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#monitoring SpotFleetRequest#monitoring}.

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementGroup"></a>

```java
public java.lang.String getPlacementGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_group SpotFleetRequest#placement_group}.

---

##### `placementTenancy`<sup>Optional</sup> <a name="placementTenancy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementTenancy"></a>

```java
public java.lang.String getPlacementTenancy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_tenancy SpotFleetRequest#placement_tenancy}.

---

##### `rootBlockDevice`<sup>Optional</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.rootBlockDevice"></a>

```java
public java.lang.Object getRootBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#root_block_device SpotFleetRequest#root_block_device}

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.spotPrice"></a>

```java
public java.lang.String getSpotPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#user_data SpotFleetRequest#user_data}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}.

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.weightedCapacity"></a>

```java
public java.lang.String getWeightedCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}.

---

### SpotFleetRequestLaunchSpecificationEbsBlockDevice <a name="SpotFleetRequestLaunchSpecificationEbsBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecificationEbsBlockDevice;

SpotFleetRequestLaunchSpecificationEbsBlockDevice.builder()
    .deviceName(java.lang.String)
//  .deleteOnTermination(java.lang.Boolean)
//  .deleteOnTermination(IResolvable)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .snapshotId(java.lang.String)
//  .throughput(java.lang.Number)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#snapshot_id SpotFleetRequest#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#snapshot_id SpotFleetRequest#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}.

---

### SpotFleetRequestLaunchSpecificationEphemeralBlockDevice <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice;

SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.builder()
    .deviceName(java.lang.String)
    .virtualName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#virtual_name SpotFleetRequest#virtual_name}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}.

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#virtual_name SpotFleetRequest#virtual_name}.

---

### SpotFleetRequestLaunchSpecificationRootBlockDevice <a name="SpotFleetRequestLaunchSpecificationRootBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecificationRootBlockDevice;

SpotFleetRequestLaunchSpecificationRootBlockDevice.builder()
//  .deleteOnTermination(java.lang.Boolean)
//  .deleteOnTermination(IResolvable)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .throughput(java.lang.Number)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}.

---

### SpotFleetRequestLaunchTemplateConfig <a name="SpotFleetRequestLaunchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfig;

SpotFleetRequestLaunchTemplateConfig.builder()
    .launchTemplateSpecification(SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification)
//  .overrides(IResolvable)
//  .overrides(java.util.List<SpotFleetRequestLaunchTemplateConfigOverrides>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | launch_template_specification block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.overrides">overrides</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>></code> | overrides block. |

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.launchTemplateSpecification"></a>

```java
public SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification getLaunchTemplateSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_template_specification SpotFleetRequest#launch_template_specification}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.overrides"></a>

```java
public java.lang.Object getOverrides();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>>

overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#overrides SpotFleetRequest#overrides}

---

### SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification <a name="SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification;

SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#name SpotFleetRequest#name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#version SpotFleetRequest#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#name SpotFleetRequest#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#version SpotFleetRequest#version}.

---

### SpotFleetRequestLaunchTemplateConfigOverrides <a name="SpotFleetRequestLaunchTemplateConfigOverrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverrides;

SpotFleetRequestLaunchTemplateConfigOverrides.builder()
//  .availabilityZone(java.lang.String)
//  .instanceRequirements(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements)
//  .instanceType(java.lang.String)
//  .priority(java.lang.Number)
//  .spotPrice(java.lang.String)
//  .subnetId(java.lang.String)
//  .weightedCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a></code> | instance_requirements block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#priority SpotFleetRequest#priority}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}.

---

##### `instanceRequirements`<sup>Optional</sup> <a name="instanceRequirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceRequirements"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements getInstanceRequirements();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a>

instance_requirements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_requirements SpotFleetRequest#instance_requirements}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#priority SpotFleetRequest#priority}.

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.spotPrice"></a>

```java
public java.lang.String getSpotPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}.

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.weightedCapacity"></a>

```java
public java.lang.Number getWeightedCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements;

SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.builder()
//  .acceleratorCount(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount)
//  .acceleratorManufacturers(java.util.List<java.lang.String>)
//  .acceleratorNames(java.util.List<java.lang.String>)
//  .acceleratorTotalMemoryMib(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib)
//  .acceleratorTypes(java.util.List<java.lang.String>)
//  .bareMetal(java.lang.String)
//  .baselineEbsBandwidthMbps(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps)
//  .burstablePerformance(java.lang.String)
//  .cpuManufacturers(java.util.List<java.lang.String>)
//  .excludedInstanceTypes(java.util.List<java.lang.String>)
//  .instanceGenerations(java.util.List<java.lang.String>)
//  .localStorage(java.lang.String)
//  .localStorageTypes(java.util.List<java.lang.String>)
//  .memoryGibPerVcpu(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu)
//  .memoryMib(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib)
//  .networkInterfaceCount(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount)
//  .onDemandMaxPricePercentageOverLowestPrice(java.lang.Number)
//  .requireHibernateSupport(java.lang.Boolean)
//  .requireHibernateSupport(IResolvable)
//  .spotMaxPricePercentageOverLowestPrice(java.lang.Number)
//  .totalLocalStorageGb(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb)
//  .vcpuCount(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a></code> | accelerator_count block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorManufacturers">acceleratorManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_manufacturers SpotFleetRequest#accelerator_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorNames">acceleratorNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_names SpotFleetRequest#accelerator_names}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTotalMemoryMib">acceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | accelerator_total_memory_mib block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_types SpotFleetRequest#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.bareMetal">bareMetal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#bare_metal SpotFleetRequest#bare_metal}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.baselineEbsBandwidthMbps">baselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | baseline_ebs_bandwidth_mbps block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.burstablePerformance">burstablePerformance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#burstable_performance SpotFleetRequest#burstable_performance}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.cpuManufacturers">cpuManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#cpu_manufacturers SpotFleetRequest#cpu_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excluded_instance_types SpotFleetRequest#excluded_instance_types}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.instanceGenerations">instanceGenerations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_generations SpotFleetRequest#instance_generations}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorage">localStorage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage SpotFleetRequest#local_storage}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorageTypes">localStorageTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage_types SpotFleetRequest#local_storage_types}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryGibPerVcpu">memoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a></code> | memory_gib_per_vcpu block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryMib">memoryMib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a></code> | memory_mib block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.networkInterfaceCount">networkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | network_interface_count block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice">onDemandMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_price_percentage_over_lowest_price SpotFleetRequest#on_demand_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.requireHibernateSupport">requireHibernateSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#require_hibernate_support SpotFleetRequest#require_hibernate_support}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice">spotMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_max_price_percentage_over_lowest_price SpotFleetRequest#spot_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.totalLocalStorageGb">totalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | total_local_storage_gb block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.vcpuCount">vcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a></code> | vcpu_count block. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorCount"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount getAcceleratorCount();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_count SpotFleetRequest#accelerator_count}

---

##### `acceleratorManufacturers`<sup>Optional</sup> <a name="acceleratorManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorManufacturers"></a>

```java
public java.util.List<java.lang.String> getAcceleratorManufacturers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_manufacturers SpotFleetRequest#accelerator_manufacturers}.

---

##### `acceleratorNames`<sup>Optional</sup> <a name="acceleratorNames" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorNames"></a>

```java
public java.util.List<java.lang.String> getAcceleratorNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_names SpotFleetRequest#accelerator_names}.

---

##### `acceleratorTotalMemoryMib`<sup>Optional</sup> <a name="acceleratorTotalMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTotalMemoryMib"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib getAcceleratorTotalMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_total_memory_mib SpotFleetRequest#accelerator_total_memory_mib}

---

##### `acceleratorTypes`<sup>Optional</sup> <a name="acceleratorTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTypes"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_types SpotFleetRequest#accelerator_types}.

---

##### `bareMetal`<sup>Optional</sup> <a name="bareMetal" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.bareMetal"></a>

```java
public java.lang.String getBareMetal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#bare_metal SpotFleetRequest#bare_metal}.

---

##### `baselineEbsBandwidthMbps`<sup>Optional</sup> <a name="baselineEbsBandwidthMbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.baselineEbsBandwidthMbps"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps getBaselineEbsBandwidthMbps();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#baseline_ebs_bandwidth_mbps SpotFleetRequest#baseline_ebs_bandwidth_mbps}

---

##### `burstablePerformance`<sup>Optional</sup> <a name="burstablePerformance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.burstablePerformance"></a>

```java
public java.lang.String getBurstablePerformance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#burstable_performance SpotFleetRequest#burstable_performance}.

---

##### `cpuManufacturers`<sup>Optional</sup> <a name="cpuManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.cpuManufacturers"></a>

```java
public java.util.List<java.lang.String> getCpuManufacturers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#cpu_manufacturers SpotFleetRequest#cpu_manufacturers}.

---

##### `excludedInstanceTypes`<sup>Optional</sup> <a name="excludedInstanceTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.excludedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excluded_instance_types SpotFleetRequest#excluded_instance_types}.

---

##### `instanceGenerations`<sup>Optional</sup> <a name="instanceGenerations" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.instanceGenerations"></a>

```java
public java.util.List<java.lang.String> getInstanceGenerations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_generations SpotFleetRequest#instance_generations}.

---

##### `localStorage`<sup>Optional</sup> <a name="localStorage" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorage"></a>

```java
public java.lang.String getLocalStorage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage SpotFleetRequest#local_storage}.

---

##### `localStorageTypes`<sup>Optional</sup> <a name="localStorageTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorageTypes"></a>

```java
public java.util.List<java.lang.String> getLocalStorageTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage_types SpotFleetRequest#local_storage_types}.

---

##### `memoryGibPerVcpu`<sup>Optional</sup> <a name="memoryGibPerVcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryGibPerVcpu"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu getMemoryGibPerVcpu();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#memory_gib_per_vcpu SpotFleetRequest#memory_gib_per_vcpu}

---

##### `memoryMib`<sup>Optional</sup> <a name="memoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryMib"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib getMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#memory_mib SpotFleetRequest#memory_mib}

---

##### `networkInterfaceCount`<sup>Optional</sup> <a name="networkInterfaceCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.networkInterfaceCount"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount getNetworkInterfaceCount();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#network_interface_count SpotFleetRequest#network_interface_count}

---

##### `onDemandMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="onDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getOnDemandMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_price_percentage_over_lowest_price SpotFleetRequest#on_demand_max_price_percentage_over_lowest_price}.

---

##### `requireHibernateSupport`<sup>Optional</sup> <a name="requireHibernateSupport" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.requireHibernateSupport"></a>

```java
public java.lang.Object getRequireHibernateSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#require_hibernate_support SpotFleetRequest#require_hibernate_support}.

---

##### `spotMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="spotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getSpotMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_max_price_percentage_over_lowest_price SpotFleetRequest#spot_max_price_percentage_over_lowest_price}.

---

##### `totalLocalStorageGb`<sup>Optional</sup> <a name="totalLocalStorageGb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.totalLocalStorageGb"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb getTotalLocalStorageGb();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#total_local_storage_gb SpotFleetRequest#total_local_storage_gb}

---

##### `vcpuCount`<sup>Optional</sup> <a name="vcpuCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.vcpuCount"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount getVcpuCount();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#vcpu_count SpotFleetRequest#vcpu_count}

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount;

SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib;

SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps;

SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu;

SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib;

SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount;

SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb;

SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount;

SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestSpotMaintenanceStrategies <a name="SpotFleetRequestSpotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestSpotMaintenanceStrategies;

SpotFleetRequestSpotMaintenanceStrategies.builder()
//  .capacityRebalance(SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.property.capacityRebalance">capacityRebalance</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | capacity_rebalance block. |

---

##### `capacityRebalance`<sup>Optional</sup> <a name="capacityRebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.property.capacityRebalance"></a>

```java
public SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance getCapacityRebalance();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

capacity_rebalance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#capacity_rebalance SpotFleetRequest#capacity_rebalance}

---

### SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance <a name="SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance;

SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.builder()
//  .replacementStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.property.replacementStrategy">replacementStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replacement_strategy SpotFleetRequest#replacement_strategy}. |

---

##### `replacementStrategy`<sup>Optional</sup> <a name="replacementStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.property.replacementStrategy"></a>

```java
public java.lang.String getReplacementStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replacement_strategy SpotFleetRequest#replacement_strategy}.

---

### SpotFleetRequestTimeouts <a name="SpotFleetRequestTimeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestTimeouts;

SpotFleetRequestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#create SpotFleetRequest#create}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete SpotFleetRequest#delete}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#update SpotFleetRequest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#create SpotFleetRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete SpotFleetRequest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#update SpotFleetRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpotFleetRequestLaunchSpecificationEbsBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationEbsBlockDeviceList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList;

new SpotFleetRequestLaunchSpecificationEbsBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get"></a>

```java
public SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>>

---


### SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference;

new SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a> OR com.hashicorp.cdktf.IResolvable

---


### SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList;

new SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get"></a>

```java
public SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>>

---


### SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference;

new SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```java
public java.lang.String getVirtualNameInput();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a> OR com.hashicorp.cdktf.IResolvable

---


### SpotFleetRequestLaunchSpecificationList <a name="SpotFleetRequestLaunchSpecificationList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecificationList;

new SpotFleetRequestLaunchSpecificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get"></a>

```java
public SpotFleetRequestLaunchSpecificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>>

---


### SpotFleetRequestLaunchSpecificationOutputReference <a name="SpotFleetRequestLaunchSpecificationOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecificationOutputReference;

new SpotFleetRequestLaunchSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice">putEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice">putEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice">putRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsBlockDevice">resetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEphemeralBlockDevice">resetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfileArn">resetIamInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementGroup">resetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementTenancy">resetPlacementTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetRootBlockDevice">resetRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSpotPrice">resetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsBlockDevice` <a name="putEbsBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice"></a>

```java
public void putEbsBlockDevice(IResolvable OR java.util.List<SpotFleetRequestLaunchSpecificationEbsBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>>

---

##### `putEphemeralBlockDevice` <a name="putEphemeralBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice"></a>

```java
public void putEphemeralBlockDevice(IResolvable OR java.util.List<SpotFleetRequestLaunchSpecificationEphemeralBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>>

---

##### `putRootBlockDevice` <a name="putRootBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice"></a>

```java
public void putRootBlockDevice(IResolvable OR java.util.List<SpotFleetRequestLaunchSpecificationRootBlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>>

---

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAssociatePublicIpAddress"></a>

```java
public void resetAssociatePublicIpAddress()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetEbsBlockDevice` <a name="resetEbsBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsBlockDevice"></a>

```java
public void resetEbsBlockDevice()
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsOptimized"></a>

```java
public void resetEbsOptimized()
```

##### `resetEphemeralBlockDevice` <a name="resetEphemeralBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEphemeralBlockDevice"></a>

```java
public void resetEphemeralBlockDevice()
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfile"></a>

```java
public void resetIamInstanceProfile()
```

##### `resetIamInstanceProfileArn` <a name="resetIamInstanceProfileArn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfileArn"></a>

```java
public void resetIamInstanceProfileArn()
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetMonitoring"></a>

```java
public void resetMonitoring()
```

##### `resetPlacementGroup` <a name="resetPlacementGroup" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementGroup"></a>

```java
public void resetPlacementGroup()
```

##### `resetPlacementTenancy` <a name="resetPlacementTenancy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementTenancy"></a>

```java
public void resetPlacementTenancy()
```

##### `resetRootBlockDevice` <a name="resetRootBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetRootBlockDevice"></a>

```java
public void resetRootBlockDevice()
```

##### `resetSpotPrice` <a name="resetSpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSpotPrice"></a>

```java
public void resetSpotPrice()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetUserData"></a>

```java
public void resetUserData()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetWeightedCapacity"></a>

```java
public void resetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList">SpotFleetRequestLaunchSpecificationEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList">SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList">SpotFleetRequestLaunchSpecificationRootBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.amiInput">amiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDeviceInput">ebsBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDeviceInput">ephemeralBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArnInput">iamInstanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoringInput">monitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroupInput">placementGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancyInput">placementTenancyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDeviceInput">rootBlockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPriceInput">spotPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ami">ami</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoring">monitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancy">placementTenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsBlockDevice`<sup>Required</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDevice"></a>

```java
public SpotFleetRequestLaunchSpecificationEbsBlockDeviceList getEbsBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList">SpotFleetRequestLaunchSpecificationEbsBlockDeviceList</a>

---

##### `ephemeralBlockDevice`<sup>Required</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDevice"></a>

```java
public SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList getEphemeralBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList">SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList</a>

---

##### `rootBlockDevice`<sup>Required</sup> <a name="rootBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDevice"></a>

```java
public SpotFleetRequestLaunchSpecificationRootBlockDeviceList getRootBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList">SpotFleetRequestLaunchSpecificationRootBlockDeviceList</a>

---

##### `amiInput`<sup>Optional</sup> <a name="amiInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.amiInput"></a>

```java
public java.lang.String getAmiInput();
```

- *Type:* java.lang.String

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddressInput"></a>

```java
public java.lang.Object getAssociatePublicIpAddressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `ebsBlockDeviceInput`<sup>Optional</sup> <a name="ebsBlockDeviceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDeviceInput"></a>

```java
public java.lang.Object getEbsBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>>

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimizedInput"></a>

```java
public java.lang.Object getEbsOptimizedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ephemeralBlockDeviceInput`<sup>Optional</sup> <a name="ephemeralBlockDeviceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDeviceInput"></a>

```java
public java.lang.Object getEphemeralBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>>

---

##### `iamInstanceProfileArnInput`<sup>Optional</sup> <a name="iamInstanceProfileArnInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArnInput"></a>

```java
public java.lang.String getIamInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileInput"></a>

```java
public java.lang.String getIamInstanceProfileInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoringInput"></a>

```java
public java.lang.Object getMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `placementGroupInput`<sup>Optional</sup> <a name="placementGroupInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroupInput"></a>

```java
public java.lang.String getPlacementGroupInput();
```

- *Type:* java.lang.String

---

##### `placementTenancyInput`<sup>Optional</sup> <a name="placementTenancyInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancyInput"></a>

```java
public java.lang.String getPlacementTenancyInput();
```

- *Type:* java.lang.String

---

##### `rootBlockDeviceInput`<sup>Optional</sup> <a name="rootBlockDeviceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDeviceInput"></a>

```java
public java.lang.Object getRootBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>>

---

##### `spotPriceInput`<sup>Optional</sup> <a name="spotPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPriceInput"></a>

```java
public java.lang.String getSpotPriceInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacityInput"></a>

```java
public java.lang.String getWeightedCapacityInput();
```

- *Type:* java.lang.String

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ami"></a>

```java
public java.lang.String getAmi();
```

- *Type:* java.lang.String

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddress"></a>

```java
public java.lang.Object getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimized"></a>

```java
public java.lang.Object getEbsOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfile"></a>

```java
public java.lang.String getIamInstanceProfile();
```

- *Type:* java.lang.String

---

##### `iamInstanceProfileArn`<sup>Required</sup> <a name="iamInstanceProfileArn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArn"></a>

```java
public java.lang.String getIamInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoring"></a>

```java
public java.lang.Object getMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroup"></a>

```java
public java.lang.String getPlacementGroup();
```

- *Type:* java.lang.String

---

##### `placementTenancy`<sup>Required</sup> <a name="placementTenancy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancy"></a>

```java
public java.lang.String getPlacementTenancy();
```

- *Type:* java.lang.String

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPrice"></a>

```java
public java.lang.String getSpotPrice();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacity"></a>

```java
public java.lang.String getWeightedCapacity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a> OR com.hashicorp.cdktf.IResolvable

---


### SpotFleetRequestLaunchSpecificationRootBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationRootBlockDeviceList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecificationRootBlockDeviceList;

new SpotFleetRequestLaunchSpecificationRootBlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get"></a>

```java
public SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>>

---


### SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference;

new SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a> OR com.hashicorp.cdktf.IResolvable

---


### SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference <a name="SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference;

new SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

---


### SpotFleetRequestLaunchTemplateConfigList <a name="SpotFleetRequestLaunchTemplateConfigList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigList;

new SpotFleetRequestLaunchTemplateConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>>

---


### SpotFleetRequestLaunchTemplateConfigOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOutputReference;

new SpotFleetRequestLaunchTemplateConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification">putLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchTemplateSpecification` <a name="putLaunchTemplateSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification"></a>

```java
public void putLaunchTemplateSpecification(SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides"></a>

```java
public void putOverrides(IResolvable OR java.util.List<SpotFleetRequestLaunchTemplateConfigOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>>

---

##### `resetOverrides` <a name="resetOverrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resetOverrides"></a>

```java
public void resetOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList">SpotFleetRequestLaunchTemplateConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput">launchTemplateSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overridesInput">overridesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecification"></a>

```java
public SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference getLaunchTemplateSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overrides"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesList getOverrides();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList">SpotFleetRequestLaunchTemplateConfigOverridesList</a>

---

##### `launchTemplateSpecificationInput`<sup>Optional</sup> <a name="launchTemplateSpecificationInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput"></a>

```java
public SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification getLaunchTemplateSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overridesInput"></a>

```java
public java.lang.Object getOverridesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a> OR com.hashicorp.cdktf.IResolvable

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorCount">putAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib">putAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps">putBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryGibPerVcpu">putMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryMib">putMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount">putNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb">putTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putVcpuCount">putVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorManufacturers">resetAcceleratorManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorNames">resetAcceleratorNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib">resetAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTypes">resetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBareMetal">resetBareMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps">resetBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBurstablePerformance">resetBurstablePerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetCpuManufacturers">resetCpuManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetExcludedInstanceTypes">resetExcludedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetInstanceGenerations">resetInstanceGenerations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorage">resetLocalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorageTypes">resetLocalStorageTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryGibPerVcpu">resetMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryMib">resetMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetNetworkInterfaceCount">resetNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice">resetOnDemandMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetRequireHibernateSupport">resetRequireHibernateSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice">resetSpotMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetTotalLocalStorageGb">resetTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetVcpuCount">resetVcpuCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcceleratorCount` <a name="putAcceleratorCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorCount"></a>

```java
public void putAcceleratorCount(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

---

##### `putAcceleratorTotalMemoryMib` <a name="putAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib"></a>

```java
public void putAcceleratorTotalMemoryMib(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `putBaselineEbsBandwidthMbps` <a name="putBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps"></a>

```java
public void putBaselineEbsBandwidthMbps(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `putMemoryGibPerVcpu` <a name="putMemoryGibPerVcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryGibPerVcpu"></a>

```java
public void putMemoryGibPerVcpu(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `putMemoryMib` <a name="putMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryMib"></a>

```java
public void putMemoryMib(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

---

##### `putNetworkInterfaceCount` <a name="putNetworkInterfaceCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount"></a>

```java
public void putNetworkInterfaceCount(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

---

##### `putTotalLocalStorageGb` <a name="putTotalLocalStorageGb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb"></a>

```java
public void putTotalLocalStorageGb(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

---

##### `putVcpuCount` <a name="putVcpuCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putVcpuCount"></a>

```java
public void putVcpuCount(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putVcpuCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

---

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorManufacturers` <a name="resetAcceleratorManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorManufacturers"></a>

```java
public void resetAcceleratorManufacturers()
```

##### `resetAcceleratorNames` <a name="resetAcceleratorNames" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorNames"></a>

```java
public void resetAcceleratorNames()
```

##### `resetAcceleratorTotalMemoryMib` <a name="resetAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib"></a>

```java
public void resetAcceleratorTotalMemoryMib()
```

##### `resetAcceleratorTypes` <a name="resetAcceleratorTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTypes"></a>

```java
public void resetAcceleratorTypes()
```

##### `resetBareMetal` <a name="resetBareMetal" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBareMetal"></a>

```java
public void resetBareMetal()
```

##### `resetBaselineEbsBandwidthMbps` <a name="resetBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps"></a>

```java
public void resetBaselineEbsBandwidthMbps()
```

##### `resetBurstablePerformance` <a name="resetBurstablePerformance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBurstablePerformance"></a>

```java
public void resetBurstablePerformance()
```

##### `resetCpuManufacturers` <a name="resetCpuManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetCpuManufacturers"></a>

```java
public void resetCpuManufacturers()
```

##### `resetExcludedInstanceTypes` <a name="resetExcludedInstanceTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```java
public void resetExcludedInstanceTypes()
```

##### `resetInstanceGenerations` <a name="resetInstanceGenerations" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetInstanceGenerations"></a>

```java
public void resetInstanceGenerations()
```

##### `resetLocalStorage` <a name="resetLocalStorage" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorage"></a>

```java
public void resetLocalStorage()
```

##### `resetLocalStorageTypes` <a name="resetLocalStorageTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorageTypes"></a>

```java
public void resetLocalStorageTypes()
```

##### `resetMemoryGibPerVcpu` <a name="resetMemoryGibPerVcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryGibPerVcpu"></a>

```java
public void resetMemoryGibPerVcpu()
```

##### `resetMemoryMib` <a name="resetMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryMib"></a>

```java
public void resetMemoryMib()
```

##### `resetNetworkInterfaceCount` <a name="resetNetworkInterfaceCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetNetworkInterfaceCount"></a>

```java
public void resetNetworkInterfaceCount()
```

##### `resetOnDemandMaxPricePercentageOverLowestPrice` <a name="resetOnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice"></a>

```java
public void resetOnDemandMaxPricePercentageOverLowestPrice()
```

##### `resetRequireHibernateSupport` <a name="resetRequireHibernateSupport" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetRequireHibernateSupport"></a>

```java
public void resetRequireHibernateSupport()
```

##### `resetSpotMaxPricePercentageOverLowestPrice` <a name="resetSpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice"></a>

```java
public void resetSpotMaxPricePercentageOverLowestPrice()
```

##### `resetTotalLocalStorageGb` <a name="resetTotalLocalStorageGb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetTotalLocalStorageGb"></a>

```java
public void resetTotalLocalStorageGb()
```

##### `resetVcpuCount` <a name="resetVcpuCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetVcpuCount"></a>

```java
public void resetVcpuCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">acceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpu">memoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMib">memoryMib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount">networkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb">totalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCount">vcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturersInput">acceleratorManufacturersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNamesInput">acceleratorNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput">acceleratorTotalMemoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypesInput">acceleratorTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetalInput">bareMetalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput">baselineEbsBandwidthMbpsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformanceInput">burstablePerformanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturersInput">cpuManufacturersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">excludedInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerationsInput">instanceGenerationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageInput">localStorageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypesInput">localStorageTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput">memoryGibPerVcpuInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMibInput">memoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCountInput">networkInterfaceCountInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput">onDemandMaxPricePercentageOverLowestPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupportInput">requireHibernateSupportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput">spotMaxPricePercentageOverLowestPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGbInput">totalLocalStorageGbInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCountInput">vcpuCountInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers">acceleratorManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNames">acceleratorNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetal">bareMetal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformance">burstablePerformance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturers">cpuManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerations">instanceGenerations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorage">localStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypes">localStorageTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">onDemandMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport">requireHibernateSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spotMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference getAcceleratorCount();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `acceleratorTotalMemoryMib`<sup>Required</sup> <a name="acceleratorTotalMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference getAcceleratorTotalMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a>

---

##### `baselineEbsBandwidthMbps`<sup>Required</sup> <a name="baselineEbsBandwidthMbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference getBaselineEbsBandwidthMbps();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `memoryGibPerVcpu`<sup>Required</sup> <a name="memoryGibPerVcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference getMemoryGibPerVcpu();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference</a>

---

##### `memoryMib`<sup>Required</sup> <a name="memoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMib"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference getMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference</a>

---

##### `networkInterfaceCount`<sup>Required</sup> <a name="networkInterfaceCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference getNetworkInterfaceCount();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `totalLocalStorageGb`<sup>Required</sup> <a name="totalLocalStorageGb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference getTotalLocalStorageGb();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCount"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference getVcpuCount();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference</a>

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCountInput"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount getAcceleratorCountInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

---

##### `acceleratorManufacturersInput`<sup>Optional</sup> <a name="acceleratorManufacturersInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturersInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorManufacturersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorNamesInput`<sup>Optional</sup> <a name="acceleratorNamesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNamesInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorTotalMemoryMibInput`<sup>Optional</sup> <a name="acceleratorTotalMemoryMibInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib getAcceleratorTotalMemoryMibInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `acceleratorTypesInput`<sup>Optional</sup> <a name="acceleratorTypesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypesInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bareMetalInput`<sup>Optional</sup> <a name="bareMetalInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetalInput"></a>

```java
public java.lang.String getBareMetalInput();
```

- *Type:* java.lang.String

---

##### `baselineEbsBandwidthMbpsInput`<sup>Optional</sup> <a name="baselineEbsBandwidthMbpsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps getBaselineEbsBandwidthMbpsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `burstablePerformanceInput`<sup>Optional</sup> <a name="burstablePerformanceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformanceInput"></a>

```java
public java.lang.String getBurstablePerformanceInput();
```

- *Type:* java.lang.String

---

##### `cpuManufacturersInput`<sup>Optional</sup> <a name="cpuManufacturersInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturersInput"></a>

```java
public java.util.List<java.lang.String> getCpuManufacturersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedInstanceTypesInput`<sup>Optional</sup> <a name="excludedInstanceTypesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instanceGenerationsInput`<sup>Optional</sup> <a name="instanceGenerationsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerationsInput"></a>

```java
public java.util.List<java.lang.String> getInstanceGenerationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localStorageInput`<sup>Optional</sup> <a name="localStorageInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageInput"></a>

```java
public java.lang.String getLocalStorageInput();
```

- *Type:* java.lang.String

---

##### `localStorageTypesInput`<sup>Optional</sup> <a name="localStorageTypesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypesInput"></a>

```java
public java.util.List<java.lang.String> getLocalStorageTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `memoryGibPerVcpuInput`<sup>Optional</sup> <a name="memoryGibPerVcpuInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu getMemoryGibPerVcpuInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `memoryMibInput`<sup>Optional</sup> <a name="memoryMibInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMibInput"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib getMemoryMibInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

---

##### `networkInterfaceCountInput`<sup>Optional</sup> <a name="networkInterfaceCountInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCountInput"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount getNetworkInterfaceCountInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

---

##### `onDemandMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="onDemandMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput"></a>

```java
public java.lang.Number getOnDemandMaxPricePercentageOverLowestPriceInput();
```

- *Type:* java.lang.Number

---

##### `requireHibernateSupportInput`<sup>Optional</sup> <a name="requireHibernateSupportInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupportInput"></a>

```java
public java.lang.Object getRequireHibernateSupportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="spotMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput"></a>

```java
public java.lang.Number getSpotMaxPricePercentageOverLowestPriceInput();
```

- *Type:* java.lang.Number

---

##### `totalLocalStorageGbInput`<sup>Optional</sup> <a name="totalLocalStorageGbInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGbInput"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb getTotalLocalStorageGbInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

---

##### `vcpuCountInput`<sup>Optional</sup> <a name="vcpuCountInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCountInput"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount getVcpuCountInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

---

##### `acceleratorManufacturers`<sup>Required</sup> <a name="acceleratorManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```java
public java.util.List<java.lang.String> getAcceleratorManufacturers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorNames`<sup>Required</sup> <a name="acceleratorNames" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```java
public java.util.List<java.lang.String> getAcceleratorNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorTypes`<sup>Required</sup> <a name="acceleratorTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bareMetal`<sup>Required</sup> <a name="bareMetal" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetal"></a>

```java
public java.lang.String getBareMetal();
```

- *Type:* java.lang.String

---

##### `burstablePerformance`<sup>Required</sup> <a name="burstablePerformance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```java
public java.lang.String getBurstablePerformance();
```

- *Type:* java.lang.String

---

##### `cpuManufacturers`<sup>Required</sup> <a name="cpuManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```java
public java.util.List<java.lang.String> getCpuManufacturers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedInstanceTypes`<sup>Required</sup> <a name="excludedInstanceTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instanceGenerations`<sup>Required</sup> <a name="instanceGenerations" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```java
public java.util.List<java.lang.String> getInstanceGenerations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localStorage`<sup>Required</sup> <a name="localStorage" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorage"></a>

```java
public java.lang.String getLocalStorage();
```

- *Type:* java.lang.String

---

##### `localStorageTypes`<sup>Required</sup> <a name="localStorageTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```java
public java.util.List<java.lang.String> getLocalStorageTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="onDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getOnDemandMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

---

##### `requireHibernateSupport`<sup>Required</sup> <a name="requireHibernateSupport" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```java
public java.lang.Object getRequireHibernateSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="spotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getSpotMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesList <a name="SpotFleetRequestLaunchTemplateConfigOverridesList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesList;

new SpotFleetRequestLaunchTemplateConfigOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>>

---


### SpotFleetRequestLaunchTemplateConfigOverridesOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference;

new SpotFleetRequestLaunchTemplateConfigOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements">putInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceRequirements">resetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSpotPrice">resetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceRequirements` <a name="putInstanceRequirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements"></a>

```java
public void putInstanceRequirements(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetInstanceRequirements` <a name="resetInstanceRequirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceRequirements"></a>

```java
public void resetInstanceRequirements()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetSpotPrice` <a name="resetSpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSpotPrice"></a>

```java
public void resetSpotPrice()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetWeightedCapacity"></a>

```java
public void resetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirementsInput">instanceRequirementsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPriceInput">spotPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPrice">spotPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirements"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference getInstanceRequirements();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `instanceRequirementsInput`<sup>Optional</sup> <a name="instanceRequirementsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirementsInput"></a>

```java
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements getInstanceRequirementsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `spotPriceInput`<sup>Optional</sup> <a name="spotPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPriceInput"></a>

```java
public java.lang.String getSpotPriceInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacityInput"></a>

```java
public java.lang.Number getWeightedCapacityInput();
```

- *Type:* java.lang.Number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPrice"></a>

```java
public java.lang.String getSpotPrice();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacity"></a>

```java
public java.lang.Number getWeightedCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a> OR com.hashicorp.cdktf.IResolvable

---


### SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference <a name="SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference;

new SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy">resetReplacementStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplacementStrategy` <a name="resetReplacementStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy"></a>

```java
public void resetReplacementStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput">replacementStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy">replacementStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replacementStrategyInput`<sup>Optional</sup> <a name="replacementStrategyInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput"></a>

```java
public java.lang.String getReplacementStrategyInput();
```

- *Type:* java.lang.String

---

##### `replacementStrategy`<sup>Required</sup> <a name="replacementStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy"></a>

```java
public java.lang.String getReplacementStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

---


### SpotFleetRequestSpotMaintenanceStrategiesOutputReference <a name="SpotFleetRequestSpotMaintenanceStrategiesOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestSpotMaintenanceStrategiesOutputReference;

new SpotFleetRequestSpotMaintenanceStrategiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance">putCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resetCapacityRebalance">resetCapacityRebalance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityRebalance` <a name="putCapacityRebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance"></a>

```java
public void putCapacityRebalance(SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

---

##### `resetCapacityRebalance` <a name="resetCapacityRebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resetCapacityRebalance"></a>

```java
public void resetCapacityRebalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalance">capacityRebalance</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalanceInput">capacityRebalanceInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityRebalance`<sup>Required</sup> <a name="capacityRebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalance"></a>

```java
public SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference getCapacityRebalance();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference</a>

---

##### `capacityRebalanceInput`<sup>Optional</sup> <a name="capacityRebalanceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalanceInput"></a>

```java
public SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance getCapacityRebalanceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.internalValue"></a>

```java
public SpotFleetRequestSpotMaintenanceStrategies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

---


### SpotFleetRequestTimeoutsOutputReference <a name="SpotFleetRequestTimeoutsOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.spot_fleet_request.SpotFleetRequestTimeoutsOutputReference;

new SpotFleetRequestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



