# `spotFleetRequest` Submodule <a name="`spotFleetRequest` Submodule" id="@cdktf/provider-aws.spotFleetRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotFleetRequest <a name="SpotFleetRequest" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request aws_spot_fleet_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iam_fleet_role: str,
  target_capacity: typing.Union[int, float],
  allocation_strategy: str = None,
  excess_capacity_termination_policy: str = None,
  fleet_type: str = None,
  id: str = None,
  instance_interruption_behaviour: str = None,
  instance_pools_to_use_count: typing.Union[int, float] = None,
  launch_specification: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecification]] = None,
  launch_template_config: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchTemplateConfig]] = None,
  load_balancers: typing.List[str] = None,
  on_demand_allocation_strategy: str = None,
  on_demand_max_total_price: str = None,
  on_demand_target_capacity: typing.Union[int, float] = None,
  replace_unhealthy_instances: typing.Union[bool, IResolvable] = None,
  spot_maintenance_strategies: SpotFleetRequestSpotMaintenanceStrategies = None,
  spot_price: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target_capacity_unit_type: str = None,
  target_group_arns: typing.List[str] = None,
  terminate_instances_on_delete: str = None,
  terminate_instances_with_expiration: typing.Union[bool, IResolvable] = None,
  timeouts: SpotFleetRequestTimeouts = None,
  valid_from: str = None,
  valid_until: str = None,
  wait_for_fulfillment: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.iamFleetRole">iam_fleet_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetCapacity">target_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.excessCapacityTerminationPolicy">excess_capacity_termination_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.fleetType">fleet_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.instanceInterruptionBehaviour">instance_interruption_behaviour</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.instancePoolsToUseCount">instance_pools_to_use_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.launchSpecification">launch_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>]]</code> | launch_specification block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.launchTemplateConfig">launch_template_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>]]</code> | launch_template_config block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.loadBalancers">load_balancers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandAllocationStrategy">on_demand_allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandMaxTotalPrice">on_demand_max_total_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandTargetCapacity">on_demand_target_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.replaceUnhealthyInstances">replace_unhealthy_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.spotMaintenanceStrategies">spot_maintenance_strategies</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | spot_maintenance_strategies block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.spotPrice">spot_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags_all SpotFleetRequest#tags_all}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetCapacityUnitType">target_capacity_unit_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity_unit_type SpotFleetRequest#target_capacity_unit_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetGroupArns">target_group_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.terminateInstancesOnDelete">terminate_instances_on_delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_on_delete SpotFleetRequest#terminate_instances_on_delete}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.terminateInstancesWithExpiration">terminate_instances_with_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.validFrom">valid_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_from SpotFleetRequest#valid_from}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.validUntil">valid_until</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_until SpotFleetRequest#valid_until}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.waitForFulfillment">wait_for_fulfillment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iam_fleet_role`<sup>Required</sup> <a name="iam_fleet_role" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.iamFleetRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}.

---

##### `target_capacity`<sup>Required</sup> <a name="target_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}.

---

##### `allocation_strategy`<sup>Optional</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.allocationStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}.

---

##### `excess_capacity_termination_policy`<sup>Optional</sup> <a name="excess_capacity_termination_policy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.excessCapacityTerminationPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}.

---

##### `fleet_type`<sup>Optional</sup> <a name="fleet_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.fleetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_interruption_behaviour`<sup>Optional</sup> <a name="instance_interruption_behaviour" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.instanceInterruptionBehaviour"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}.

---

##### `instance_pools_to_use_count`<sup>Optional</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.instancePoolsToUseCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}.

---

##### `launch_specification`<sup>Optional</sup> <a name="launch_specification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.launchSpecification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>]]

launch_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_specification SpotFleetRequest#launch_specification}

---

##### `launch_template_config`<sup>Optional</sup> <a name="launch_template_config" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.launchTemplateConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>]]

launch_template_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_template_config SpotFleetRequest#launch_template_config}

---

##### `load_balancers`<sup>Optional</sup> <a name="load_balancers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.loadBalancers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}.

---

##### `on_demand_allocation_strategy`<sup>Optional</sup> <a name="on_demand_allocation_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandAllocationStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}.

---

##### `on_demand_max_total_price`<sup>Optional</sup> <a name="on_demand_max_total_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandMaxTotalPrice"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}.

---

##### `on_demand_target_capacity`<sup>Optional</sup> <a name="on_demand_target_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.onDemandTargetCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}.

---

##### `replace_unhealthy_instances`<sup>Optional</sup> <a name="replace_unhealthy_instances" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.replaceUnhealthyInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}.

---

##### `spot_maintenance_strategies`<sup>Optional</sup> <a name="spot_maintenance_strategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.spotMaintenanceStrategies"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

spot_maintenance_strategies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}

---

##### `spot_price`<sup>Optional</sup> <a name="spot_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.spotPrice"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags_all SpotFleetRequest#tags_all}.

---

##### `target_capacity_unit_type`<sup>Optional</sup> <a name="target_capacity_unit_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetCapacityUnitType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity_unit_type SpotFleetRequest#target_capacity_unit_type}.

---

##### `target_group_arns`<sup>Optional</sup> <a name="target_group_arns" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.targetGroupArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}.

---

##### `terminate_instances_on_delete`<sup>Optional</sup> <a name="terminate_instances_on_delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.terminateInstancesOnDelete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_on_delete SpotFleetRequest#terminate_instances_on_delete}.

---

##### `terminate_instances_with_expiration`<sup>Optional</sup> <a name="terminate_instances_with_expiration" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.terminateInstancesWithExpiration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#timeouts SpotFleetRequest#timeouts}

---

##### `valid_from`<sup>Optional</sup> <a name="valid_from" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.validFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_from SpotFleetRequest#valid_from}.

---

##### `valid_until`<sup>Optional</sup> <a name="valid_until" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.validUntil"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_until SpotFleetRequest#valid_until}.

---

##### `wait_for_fulfillment`<sup>Optional</sup> <a name="wait_for_fulfillment" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.waitForFulfillment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchSpecification">put_launch_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig">put_launch_template_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies">put_spot_maintenance_strategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetAllocationStrategy">reset_allocation_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetExcessCapacityTerminationPolicy">reset_excess_capacity_termination_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetFleetType">reset_fleet_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstanceInterruptionBehaviour">reset_instance_interruption_behaviour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstancePoolsToUseCount">reset_instance_pools_to_use_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchSpecification">reset_launch_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchTemplateConfig">reset_launch_template_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLoadBalancers">reset_load_balancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandAllocationStrategy">reset_on_demand_allocation_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandMaxTotalPrice">reset_on_demand_max_total_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandTargetCapacity">reset_on_demand_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetReplaceUnhealthyInstances">reset_replace_unhealthy_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotMaintenanceStrategies">reset_spot_maintenance_strategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotPrice">reset_spot_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetCapacityUnitType">reset_target_capacity_unit_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetGroupArns">reset_target_group_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesOnDelete">reset_terminate_instances_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesWithExpiration">reset_terminate_instances_with_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidFrom">reset_valid_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidUntil">reset_valid_until</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetWaitForFulfillment">reset_wait_for_fulfillment</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_launch_specification` <a name="put_launch_specification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchSpecification"></a>

```python
def put_launch_specification(
  value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchSpecification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>]]

---

##### `put_launch_template_config` <a name="put_launch_template_config" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig"></a>

```python
def put_launch_template_config(
  value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchTemplateConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>]]

---

##### `put_spot_maintenance_strategies` <a name="put_spot_maintenance_strategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies"></a>

```python
def put_spot_maintenance_strategies(
  capacity_rebalance: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance = None
) -> None
```

###### `capacity_rebalance`<sup>Optional</sup> <a name="capacity_rebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies.parameter.capacityRebalance"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

capacity_rebalance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#capacity_rebalance SpotFleetRequest#capacity_rebalance}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#create SpotFleetRequest#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete SpotFleetRequest#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#update SpotFleetRequest#update}.

---

##### `reset_allocation_strategy` <a name="reset_allocation_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetAllocationStrategy"></a>

```python
def reset_allocation_strategy() -> None
```

##### `reset_excess_capacity_termination_policy` <a name="reset_excess_capacity_termination_policy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetExcessCapacityTerminationPolicy"></a>

```python
def reset_excess_capacity_termination_policy() -> None
```

##### `reset_fleet_type` <a name="reset_fleet_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetFleetType"></a>

```python
def reset_fleet_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_interruption_behaviour` <a name="reset_instance_interruption_behaviour" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstanceInterruptionBehaviour"></a>

```python
def reset_instance_interruption_behaviour() -> None
```

##### `reset_instance_pools_to_use_count` <a name="reset_instance_pools_to_use_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstancePoolsToUseCount"></a>

```python
def reset_instance_pools_to_use_count() -> None
```

##### `reset_launch_specification` <a name="reset_launch_specification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchSpecification"></a>

```python
def reset_launch_specification() -> None
```

##### `reset_launch_template_config` <a name="reset_launch_template_config" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchTemplateConfig"></a>

```python
def reset_launch_template_config() -> None
```

##### `reset_load_balancers` <a name="reset_load_balancers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLoadBalancers"></a>

```python
def reset_load_balancers() -> None
```

##### `reset_on_demand_allocation_strategy` <a name="reset_on_demand_allocation_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandAllocationStrategy"></a>

```python
def reset_on_demand_allocation_strategy() -> None
```

##### `reset_on_demand_max_total_price` <a name="reset_on_demand_max_total_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandMaxTotalPrice"></a>

```python
def reset_on_demand_max_total_price() -> None
```

##### `reset_on_demand_target_capacity` <a name="reset_on_demand_target_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandTargetCapacity"></a>

```python
def reset_on_demand_target_capacity() -> None
```

##### `reset_replace_unhealthy_instances` <a name="reset_replace_unhealthy_instances" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetReplaceUnhealthyInstances"></a>

```python
def reset_replace_unhealthy_instances() -> None
```

##### `reset_spot_maintenance_strategies` <a name="reset_spot_maintenance_strategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotMaintenanceStrategies"></a>

```python
def reset_spot_maintenance_strategies() -> None
```

##### `reset_spot_price` <a name="reset_spot_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotPrice"></a>

```python
def reset_spot_price() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_target_capacity_unit_type` <a name="reset_target_capacity_unit_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetCapacityUnitType"></a>

```python
def reset_target_capacity_unit_type() -> None
```

##### `reset_target_group_arns` <a name="reset_target_group_arns" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetGroupArns"></a>

```python
def reset_target_group_arns() -> None
```

##### `reset_terminate_instances_on_delete` <a name="reset_terminate_instances_on_delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesOnDelete"></a>

```python
def reset_terminate_instances_on_delete() -> None
```

##### `reset_terminate_instances_with_expiration` <a name="reset_terminate_instances_with_expiration" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesWithExpiration"></a>

```python
def reset_terminate_instances_with_expiration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_valid_from` <a name="reset_valid_from" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidFrom"></a>

```python
def reset_valid_from() -> None
```

##### `reset_valid_until` <a name="reset_valid_until" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidUntil"></a>

```python
def reset_valid_until() -> None
```

##### `reset_wait_for_fulfillment` <a name="reset_wait_for_fulfillment" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetWaitForFulfillment"></a>

```python
def reset_wait_for_fulfillment() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequest.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecification">launch_specification</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList">SpotFleetRequestLaunchSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfig">launch_template_config</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList">SpotFleetRequestLaunchTemplateConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategies">spot_maintenance_strategies</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference">SpotFleetRequestSpotMaintenanceStrategiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotRequestState">spot_request_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference">SpotFleetRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicyInput">excess_capacity_termination_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetTypeInput">fleet_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRoleInput">iam_fleet_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviourInput">instance_interruption_behaviour_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCountInput">instance_pools_to_use_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecificationInput">launch_specification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfigInput">launch_template_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancersInput">load_balancers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategyInput">on_demand_allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPriceInput">on_demand_max_total_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacityInput">on_demand_target_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstancesInput">replace_unhealthy_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategiesInput">spot_maintenance_strategies_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPriceInput">spot_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityInput">target_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitTypeInput">target_capacity_unit_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArnsInput">target_group_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDeleteInput">terminate_instances_on_delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpirationInput">terminate_instances_with_expiration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFromInput">valid_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntilInput">valid_until_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillmentInput">wait_for_fulfillment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicy">excess_capacity_termination_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetType">fleet_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRole">iam_fleet_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviour">instance_interruption_behaviour</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCount">instance_pools_to_use_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancers">load_balancers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategy">on_demand_allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPrice">on_demand_max_total_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacity">on_demand_target_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstances">replace_unhealthy_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPrice">spot_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacity">target_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitType">target_capacity_unit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArns">target_group_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDelete">terminate_instances_on_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpiration">terminate_instances_with_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFrom">valid_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntil">valid_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillment">wait_for_fulfillment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `launch_specification`<sup>Required</sup> <a name="launch_specification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecification"></a>

```python
launch_specification: SpotFleetRequestLaunchSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList">SpotFleetRequestLaunchSpecificationList</a>

---

##### `launch_template_config`<sup>Required</sup> <a name="launch_template_config" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfig"></a>

```python
launch_template_config: SpotFleetRequestLaunchTemplateConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList">SpotFleetRequestLaunchTemplateConfigList</a>

---

##### `spot_maintenance_strategies`<sup>Required</sup> <a name="spot_maintenance_strategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategies"></a>

```python
spot_maintenance_strategies: SpotFleetRequestSpotMaintenanceStrategiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference">SpotFleetRequestSpotMaintenanceStrategiesOutputReference</a>

---

##### `spot_request_state`<sup>Required</sup> <a name="spot_request_state" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotRequestState"></a>

```python
spot_request_state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeouts"></a>

```python
timeouts: SpotFleetRequestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference">SpotFleetRequestTimeoutsOutputReference</a>

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `excess_capacity_termination_policy_input`<sup>Optional</sup> <a name="excess_capacity_termination_policy_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicyInput"></a>

```python
excess_capacity_termination_policy_input: str
```

- *Type:* str

---

##### `fleet_type_input`<sup>Optional</sup> <a name="fleet_type_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetTypeInput"></a>

```python
fleet_type_input: str
```

- *Type:* str

---

##### `iam_fleet_role_input`<sup>Optional</sup> <a name="iam_fleet_role_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRoleInput"></a>

```python
iam_fleet_role_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_interruption_behaviour_input`<sup>Optional</sup> <a name="instance_interruption_behaviour_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviourInput"></a>

```python
instance_interruption_behaviour_input: str
```

- *Type:* str

---

##### `instance_pools_to_use_count_input`<sup>Optional</sup> <a name="instance_pools_to_use_count_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCountInput"></a>

```python
instance_pools_to_use_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `launch_specification_input`<sup>Optional</sup> <a name="launch_specification_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecificationInput"></a>

```python
launch_specification_input: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>]]

---

##### `launch_template_config_input`<sup>Optional</sup> <a name="launch_template_config_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfigInput"></a>

```python
launch_template_config_input: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchTemplateConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>]]

---

##### `load_balancers_input`<sup>Optional</sup> <a name="load_balancers_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancersInput"></a>

```python
load_balancers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_demand_allocation_strategy_input`<sup>Optional</sup> <a name="on_demand_allocation_strategy_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategyInput"></a>

```python
on_demand_allocation_strategy_input: str
```

- *Type:* str

---

##### `on_demand_max_total_price_input`<sup>Optional</sup> <a name="on_demand_max_total_price_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPriceInput"></a>

```python
on_demand_max_total_price_input: str
```

- *Type:* str

---

##### `on_demand_target_capacity_input`<sup>Optional</sup> <a name="on_demand_target_capacity_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacityInput"></a>

```python
on_demand_target_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replace_unhealthy_instances_input`<sup>Optional</sup> <a name="replace_unhealthy_instances_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstancesInput"></a>

```python
replace_unhealthy_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spot_maintenance_strategies_input`<sup>Optional</sup> <a name="spot_maintenance_strategies_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategiesInput"></a>

```python
spot_maintenance_strategies_input: SpotFleetRequestSpotMaintenanceStrategies
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

---

##### `spot_price_input`<sup>Optional</sup> <a name="spot_price_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPriceInput"></a>

```python
spot_price_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_capacity_input`<sup>Optional</sup> <a name="target_capacity_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityInput"></a>

```python
target_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_capacity_unit_type_input`<sup>Optional</sup> <a name="target_capacity_unit_type_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitTypeInput"></a>

```python
target_capacity_unit_type_input: str
```

- *Type:* str

---

##### `target_group_arns_input`<sup>Optional</sup> <a name="target_group_arns_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArnsInput"></a>

```python
target_group_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `terminate_instances_on_delete_input`<sup>Optional</sup> <a name="terminate_instances_on_delete_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDeleteInput"></a>

```python
terminate_instances_on_delete_input: str
```

- *Type:* str

---

##### `terminate_instances_with_expiration_input`<sup>Optional</sup> <a name="terminate_instances_with_expiration_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpirationInput"></a>

```python
terminate_instances_with_expiration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SpotFleetRequestTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>, cdktf.IResolvable]

---

##### `valid_from_input`<sup>Optional</sup> <a name="valid_from_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFromInput"></a>

```python
valid_from_input: str
```

- *Type:* str

---

##### `valid_until_input`<sup>Optional</sup> <a name="valid_until_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntilInput"></a>

```python
valid_until_input: str
```

- *Type:* str

---

##### `wait_for_fulfillment_input`<sup>Optional</sup> <a name="wait_for_fulfillment_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillmentInput"></a>

```python
wait_for_fulfillment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `excess_capacity_termination_policy`<sup>Required</sup> <a name="excess_capacity_termination_policy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicy"></a>

```python
excess_capacity_termination_policy: str
```

- *Type:* str

---

##### `fleet_type`<sup>Required</sup> <a name="fleet_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetType"></a>

```python
fleet_type: str
```

- *Type:* str

---

##### `iam_fleet_role`<sup>Required</sup> <a name="iam_fleet_role" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRole"></a>

```python
iam_fleet_role: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_interruption_behaviour`<sup>Required</sup> <a name="instance_interruption_behaviour" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviour"></a>

```python
instance_interruption_behaviour: str
```

- *Type:* str

---

##### `instance_pools_to_use_count`<sup>Required</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCount"></a>

```python
instance_pools_to_use_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_balancers`<sup>Required</sup> <a name="load_balancers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancers"></a>

```python
load_balancers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_demand_allocation_strategy`<sup>Required</sup> <a name="on_demand_allocation_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategy"></a>

```python
on_demand_allocation_strategy: str
```

- *Type:* str

---

##### `on_demand_max_total_price`<sup>Required</sup> <a name="on_demand_max_total_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPrice"></a>

```python
on_demand_max_total_price: str
```

- *Type:* str

---

##### `on_demand_target_capacity`<sup>Required</sup> <a name="on_demand_target_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacity"></a>

```python
on_demand_target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replace_unhealthy_instances`<sup>Required</sup> <a name="replace_unhealthy_instances" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstances"></a>

```python
replace_unhealthy_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spot_price`<sup>Required</sup> <a name="spot_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_capacity`<sup>Required</sup> <a name="target_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacity"></a>

```python
target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_capacity_unit_type`<sup>Required</sup> <a name="target_capacity_unit_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitType"></a>

```python
target_capacity_unit_type: str
```

- *Type:* str

---

##### `target_group_arns`<sup>Required</sup> <a name="target_group_arns" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArns"></a>

```python
target_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `terminate_instances_on_delete`<sup>Required</sup> <a name="terminate_instances_on_delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDelete"></a>

```python
terminate_instances_on_delete: str
```

- *Type:* str

---

##### `terminate_instances_with_expiration`<sup>Required</sup> <a name="terminate_instances_with_expiration" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpiration"></a>

```python
terminate_instances_with_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `valid_from`<sup>Required</sup> <a name="valid_from" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFrom"></a>

```python
valid_from: str
```

- *Type:* str

---

##### `valid_until`<sup>Required</sup> <a name="valid_until" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntil"></a>

```python
valid_until: str
```

- *Type:* str

---

##### `wait_for_fulfillment`<sup>Required</sup> <a name="wait_for_fulfillment" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillment"></a>

```python
wait_for_fulfillment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpotFleetRequestConfig <a name="SpotFleetRequestConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iam_fleet_role: str,
  target_capacity: typing.Union[int, float],
  allocation_strategy: str = None,
  excess_capacity_termination_policy: str = None,
  fleet_type: str = None,
  id: str = None,
  instance_interruption_behaviour: str = None,
  instance_pools_to_use_count: typing.Union[int, float] = None,
  launch_specification: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecification]] = None,
  launch_template_config: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchTemplateConfig]] = None,
  load_balancers: typing.List[str] = None,
  on_demand_allocation_strategy: str = None,
  on_demand_max_total_price: str = None,
  on_demand_target_capacity: typing.Union[int, float] = None,
  replace_unhealthy_instances: typing.Union[bool, IResolvable] = None,
  spot_maintenance_strategies: SpotFleetRequestSpotMaintenanceStrategies = None,
  spot_price: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target_capacity_unit_type: str = None,
  target_group_arns: typing.List[str] = None,
  terminate_instances_on_delete: str = None,
  terminate_instances_with_expiration: typing.Union[bool, IResolvable] = None,
  timeouts: SpotFleetRequestTimeouts = None,
  valid_from: str = None,
  valid_until: str = None,
  wait_for_fulfillment: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.iamFleetRole">iam_fleet_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacity">target_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.excessCapacityTerminationPolicy">excess_capacity_termination_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.fleetType">fleet_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instanceInterruptionBehaviour">instance_interruption_behaviour</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instancePoolsToUseCount">instance_pools_to_use_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchSpecification">launch_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>]]</code> | launch_specification block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchTemplateConfig">launch_template_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>]]</code> | launch_template_config block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.loadBalancers">load_balancers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandAllocationStrategy">on_demand_allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandMaxTotalPrice">on_demand_max_total_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandTargetCapacity">on_demand_target_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.replaceUnhealthyInstances">replace_unhealthy_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotMaintenanceStrategies">spot_maintenance_strategies</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | spot_maintenance_strategies block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotPrice">spot_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags_all SpotFleetRequest#tags_all}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacityUnitType">target_capacity_unit_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity_unit_type SpotFleetRequest#target_capacity_unit_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetGroupArns">target_group_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesOnDelete">terminate_instances_on_delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_on_delete SpotFleetRequest#terminate_instances_on_delete}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesWithExpiration">terminate_instances_with_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validFrom">valid_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_from SpotFleetRequest#valid_from}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validUntil">valid_until</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_until SpotFleetRequest#valid_until}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.waitForFulfillment">wait_for_fulfillment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iam_fleet_role`<sup>Required</sup> <a name="iam_fleet_role" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.iamFleetRole"></a>

```python
iam_fleet_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}.

---

##### `target_capacity`<sup>Required</sup> <a name="target_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacity"></a>

```python
target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}.

---

##### `allocation_strategy`<sup>Optional</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}.

---

##### `excess_capacity_termination_policy`<sup>Optional</sup> <a name="excess_capacity_termination_policy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.excessCapacityTerminationPolicy"></a>

```python
excess_capacity_termination_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}.

---

##### `fleet_type`<sup>Optional</sup> <a name="fleet_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.fleetType"></a>

```python
fleet_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_interruption_behaviour`<sup>Optional</sup> <a name="instance_interruption_behaviour" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instanceInterruptionBehaviour"></a>

```python
instance_interruption_behaviour: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}.

---

##### `instance_pools_to_use_count`<sup>Optional</sup> <a name="instance_pools_to_use_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instancePoolsToUseCount"></a>

```python
instance_pools_to_use_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}.

---

##### `launch_specification`<sup>Optional</sup> <a name="launch_specification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchSpecification"></a>

```python
launch_specification: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>]]

launch_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_specification SpotFleetRequest#launch_specification}

---

##### `launch_template_config`<sup>Optional</sup> <a name="launch_template_config" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchTemplateConfig"></a>

```python
launch_template_config: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchTemplateConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>]]

launch_template_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_template_config SpotFleetRequest#launch_template_config}

---

##### `load_balancers`<sup>Optional</sup> <a name="load_balancers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.loadBalancers"></a>

```python
load_balancers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}.

---

##### `on_demand_allocation_strategy`<sup>Optional</sup> <a name="on_demand_allocation_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandAllocationStrategy"></a>

```python
on_demand_allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}.

---

##### `on_demand_max_total_price`<sup>Optional</sup> <a name="on_demand_max_total_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandMaxTotalPrice"></a>

```python
on_demand_max_total_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}.

---

##### `on_demand_target_capacity`<sup>Optional</sup> <a name="on_demand_target_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandTargetCapacity"></a>

```python
on_demand_target_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}.

---

##### `replace_unhealthy_instances`<sup>Optional</sup> <a name="replace_unhealthy_instances" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.replaceUnhealthyInstances"></a>

```python
replace_unhealthy_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}.

---

##### `spot_maintenance_strategies`<sup>Optional</sup> <a name="spot_maintenance_strategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotMaintenanceStrategies"></a>

```python
spot_maintenance_strategies: SpotFleetRequestSpotMaintenanceStrategies
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

spot_maintenance_strategies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}

---

##### `spot_price`<sup>Optional</sup> <a name="spot_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags_all SpotFleetRequest#tags_all}.

---

##### `target_capacity_unit_type`<sup>Optional</sup> <a name="target_capacity_unit_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacityUnitType"></a>

```python
target_capacity_unit_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity_unit_type SpotFleetRequest#target_capacity_unit_type}.

---

##### `target_group_arns`<sup>Optional</sup> <a name="target_group_arns" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetGroupArns"></a>

```python
target_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}.

---

##### `terminate_instances_on_delete`<sup>Optional</sup> <a name="terminate_instances_on_delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesOnDelete"></a>

```python
terminate_instances_on_delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_on_delete SpotFleetRequest#terminate_instances_on_delete}.

---

##### `terminate_instances_with_expiration`<sup>Optional</sup> <a name="terminate_instances_with_expiration" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesWithExpiration"></a>

```python
terminate_instances_with_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.timeouts"></a>

```python
timeouts: SpotFleetRequestTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#timeouts SpotFleetRequest#timeouts}

---

##### `valid_from`<sup>Optional</sup> <a name="valid_from" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validFrom"></a>

```python
valid_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_from SpotFleetRequest#valid_from}.

---

##### `valid_until`<sup>Optional</sup> <a name="valid_until" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validUntil"></a>

```python
valid_until: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_until SpotFleetRequest#valid_until}.

---

##### `wait_for_fulfillment`<sup>Optional</sup> <a name="wait_for_fulfillment" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.waitForFulfillment"></a>

```python
wait_for_fulfillment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}.

---

### SpotFleetRequestLaunchSpecification <a name="SpotFleetRequestLaunchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecification(
  ami: str,
  instance_type: str,
  associate_public_ip_address: typing.Union[bool, IResolvable] = None,
  availability_zone: str = None,
  ebs_block_device: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationEbsBlockDevice]] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  ephemeral_block_device: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationEphemeralBlockDevice]] = None,
  iam_instance_profile: str = None,
  iam_instance_profile_arn: str = None,
  key_name: str = None,
  monitoring: typing.Union[bool, IResolvable] = None,
  placement_group: str = None,
  placement_tenancy: str = None,
  root_block_device: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationRootBlockDevice]] = None,
  spot_price: str = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  user_data: str = None,
  vpc_security_group_ids: typing.List[str] = None,
  weighted_capacity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ami">ami</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ami SpotFleetRequest#ami}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsBlockDevice">ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>]]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ebs_optimized SpotFleetRequest#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>]]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile SpotFleetRequest#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfileArn">iam_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#key_name SpotFleetRequest#key_name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#monitoring SpotFleetRequest#monitoring}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementGroup">placement_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_group SpotFleetRequest#placement_group}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementTenancy">placement_tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_tenancy SpotFleetRequest#placement_tenancy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.rootBlockDevice">root_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>]]</code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.spotPrice">spot_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#user_data SpotFleetRequest#user_data}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.weightedCapacity">weighted_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}. |

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ami"></a>

```python
ami: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ami SpotFleetRequest#ami}.

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}.

---

##### `ebs_block_device`<sup>Optional</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsBlockDevice"></a>

```python
ebs_block_device: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>]]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ebs_block_device SpotFleetRequest#ebs_block_device}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ebs_optimized SpotFleetRequest#ebs_optimized}.

---

##### `ephemeral_block_device`<sup>Optional</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>]]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ephemeral_block_device SpotFleetRequest#ephemeral_block_device}

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile SpotFleetRequest#iam_instance_profile}.

---

##### `iam_instance_profile_arn`<sup>Optional</sup> <a name="iam_instance_profile_arn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfileArn"></a>

```python
iam_instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#key_name SpotFleetRequest#key_name}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.monitoring"></a>

```python
monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#monitoring SpotFleetRequest#monitoring}.

---

##### `placement_group`<sup>Optional</sup> <a name="placement_group" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementGroup"></a>

```python
placement_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_group SpotFleetRequest#placement_group}.

---

##### `placement_tenancy`<sup>Optional</sup> <a name="placement_tenancy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementTenancy"></a>

```python
placement_tenancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_tenancy SpotFleetRequest#placement_tenancy}.

---

##### `root_block_device`<sup>Optional</sup> <a name="root_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.rootBlockDevice"></a>

```python
root_block_device: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationRootBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>]]

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#root_block_device SpotFleetRequest#root_block_device}

---

##### `spot_price`<sup>Optional</sup> <a name="spot_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#user_data SpotFleetRequest#user_data}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}.

---

##### `weighted_capacity`<sup>Optional</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.weightedCapacity"></a>

```python
weighted_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}.

---

### SpotFleetRequestLaunchSpecificationEbsBlockDevice <a name="SpotFleetRequestLaunchSpecificationEbsBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice(
  device_name: str,
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#snapshot_id SpotFleetRequest#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}.

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#snapshot_id SpotFleetRequest#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}.

---

### SpotFleetRequestLaunchSpecificationEphemeralBlockDevice <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice(
  device_name: str,
  virtual_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#virtual_name SpotFleetRequest#virtual_name}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}.

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#virtual_name SpotFleetRequest#virtual_name}.

---

### SpotFleetRequestLaunchSpecificationRootBlockDevice <a name="SpotFleetRequestLaunchSpecificationRootBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice(
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}.

---

### SpotFleetRequestLaunchTemplateConfig <a name="SpotFleetRequestLaunchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfig(
  launch_template_specification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification,
  overrides: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchTemplateConfigOverrides]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.launchTemplateSpecification">launch_template_specification</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | launch_template_specification block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.overrides">overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>]]</code> | overrides block. |

---

##### `launch_template_specification`<sup>Required</sup> <a name="launch_template_specification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.launchTemplateSpecification"></a>

```python
launch_template_specification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_template_specification SpotFleetRequest#launch_template_specification}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.overrides"></a>

```python
overrides: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchTemplateConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>]]

overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#overrides SpotFleetRequest#overrides}

---

### SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification <a name="SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification(
  id: str = None,
  name: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#name SpotFleetRequest#name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#version SpotFleetRequest#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#name SpotFleetRequest#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#version SpotFleetRequest#version}.

---

### SpotFleetRequestLaunchTemplateConfigOverrides <a name="SpotFleetRequestLaunchTemplateConfigOverrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides(
  availability_zone: str = None,
  instance_requirements: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements = None,
  instance_type: str = None,
  priority: typing.Union[int, float] = None,
  spot_price: str = None,
  subnet_id: str = None,
  weighted_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceRequirements">instance_requirements</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a></code> | instance_requirements block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#priority SpotFleetRequest#priority}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.spotPrice">spot_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}.

---

##### `instance_requirements`<sup>Optional</sup> <a name="instance_requirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceRequirements"></a>

```python
instance_requirements: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a>

instance_requirements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_requirements SpotFleetRequest#instance_requirements}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#priority SpotFleetRequest#priority}.

---

##### `spot_price`<sup>Optional</sup> <a name="spot_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}.

---

##### `weighted_capacity`<sup>Optional</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements(
  accelerator_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount = None,
  accelerator_manufacturers: typing.List[str] = None,
  accelerator_names: typing.List[str] = None,
  accelerator_total_memory_mib: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib = None,
  accelerator_types: typing.List[str] = None,
  bare_metal: str = None,
  baseline_ebs_bandwidth_mbps: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps = None,
  burstable_performance: str = None,
  cpu_manufacturers: typing.List[str] = None,
  excluded_instance_types: typing.List[str] = None,
  instance_generations: typing.List[str] = None,
  local_storage: str = None,
  local_storage_types: typing.List[str] = None,
  memory_gib_per_vcpu: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu = None,
  memory_mib: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib = None,
  network_interface_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount = None,
  on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  require_hibernate_support: typing.Union[bool, IResolvable] = None,
  spot_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  total_local_storage_gb: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb = None,
  vcpu_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorCount">accelerator_count</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a></code> | accelerator_count block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorManufacturers">accelerator_manufacturers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_manufacturers SpotFleetRequest#accelerator_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorNames">accelerator_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_names SpotFleetRequest#accelerator_names}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTotalMemoryMib">accelerator_total_memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | accelerator_total_memory_mib block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_types SpotFleetRequest#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.bareMetal">bare_metal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#bare_metal SpotFleetRequest#bare_metal}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.baselineEbsBandwidthMbps">baseline_ebs_bandwidth_mbps</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | baseline_ebs_bandwidth_mbps block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.burstablePerformance">burstable_performance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#burstable_performance SpotFleetRequest#burstable_performance}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.cpuManufacturers">cpu_manufacturers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#cpu_manufacturers SpotFleetRequest#cpu_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excluded_instance_types SpotFleetRequest#excluded_instance_types}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.instanceGenerations">instance_generations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_generations SpotFleetRequest#instance_generations}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorage">local_storage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage SpotFleetRequest#local_storage}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorageTypes">local_storage_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage_types SpotFleetRequest#local_storage_types}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryGibPerVcpu">memory_gib_per_vcpu</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a></code> | memory_gib_per_vcpu block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryMib">memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a></code> | memory_mib block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.networkInterfaceCount">network_interface_count</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | network_interface_count block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice">on_demand_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_price_percentage_over_lowest_price SpotFleetRequest#on_demand_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.requireHibernateSupport">require_hibernate_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#require_hibernate_support SpotFleetRequest#require_hibernate_support}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice">spot_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_max_price_percentage_over_lowest_price SpotFleetRequest#spot_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.totalLocalStorageGb">total_local_storage_gb</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | total_local_storage_gb block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.vcpuCount">vcpu_count</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a></code> | vcpu_count block. |

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorCount"></a>

```python
accelerator_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_count SpotFleetRequest#accelerator_count}

---

##### `accelerator_manufacturers`<sup>Optional</sup> <a name="accelerator_manufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorManufacturers"></a>

```python
accelerator_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_manufacturers SpotFleetRequest#accelerator_manufacturers}.

---

##### `accelerator_names`<sup>Optional</sup> <a name="accelerator_names" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorNames"></a>

```python
accelerator_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_names SpotFleetRequest#accelerator_names}.

---

##### `accelerator_total_memory_mib`<sup>Optional</sup> <a name="accelerator_total_memory_mib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTotalMemoryMib"></a>

```python
accelerator_total_memory_mib: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_total_memory_mib SpotFleetRequest#accelerator_total_memory_mib}

---

##### `accelerator_types`<sup>Optional</sup> <a name="accelerator_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_types SpotFleetRequest#accelerator_types}.

---

##### `bare_metal`<sup>Optional</sup> <a name="bare_metal" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.bareMetal"></a>

```python
bare_metal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#bare_metal SpotFleetRequest#bare_metal}.

---

##### `baseline_ebs_bandwidth_mbps`<sup>Optional</sup> <a name="baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.baselineEbsBandwidthMbps"></a>

```python
baseline_ebs_bandwidth_mbps: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#baseline_ebs_bandwidth_mbps SpotFleetRequest#baseline_ebs_bandwidth_mbps}

---

##### `burstable_performance`<sup>Optional</sup> <a name="burstable_performance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.burstablePerformance"></a>

```python
burstable_performance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#burstable_performance SpotFleetRequest#burstable_performance}.

---

##### `cpu_manufacturers`<sup>Optional</sup> <a name="cpu_manufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.cpuManufacturers"></a>

```python
cpu_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#cpu_manufacturers SpotFleetRequest#cpu_manufacturers}.

---

##### `excluded_instance_types`<sup>Optional</sup> <a name="excluded_instance_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excluded_instance_types SpotFleetRequest#excluded_instance_types}.

---

##### `instance_generations`<sup>Optional</sup> <a name="instance_generations" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.instanceGenerations"></a>

```python
instance_generations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_generations SpotFleetRequest#instance_generations}.

---

##### `local_storage`<sup>Optional</sup> <a name="local_storage" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorage"></a>

```python
local_storage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage SpotFleetRequest#local_storage}.

---

##### `local_storage_types`<sup>Optional</sup> <a name="local_storage_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorageTypes"></a>

```python
local_storage_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage_types SpotFleetRequest#local_storage_types}.

---

##### `memory_gib_per_vcpu`<sup>Optional</sup> <a name="memory_gib_per_vcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryGibPerVcpu"></a>

```python
memory_gib_per_vcpu: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#memory_gib_per_vcpu SpotFleetRequest#memory_gib_per_vcpu}

---

##### `memory_mib`<sup>Optional</sup> <a name="memory_mib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryMib"></a>

```python
memory_mib: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#memory_mib SpotFleetRequest#memory_mib}

---

##### `network_interface_count`<sup>Optional</sup> <a name="network_interface_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.networkInterfaceCount"></a>

```python
network_interface_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#network_interface_count SpotFleetRequest#network_interface_count}

---

##### `on_demand_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```python
on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_price_percentage_over_lowest_price SpotFleetRequest#on_demand_max_price_percentage_over_lowest_price}.

---

##### `require_hibernate_support`<sup>Optional</sup> <a name="require_hibernate_support" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.requireHibernateSupport"></a>

```python
require_hibernate_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#require_hibernate_support SpotFleetRequest#require_hibernate_support}.

---

##### `spot_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice"></a>

```python
spot_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_max_price_percentage_over_lowest_price SpotFleetRequest#spot_max_price_percentage_over_lowest_price}.

---

##### `total_local_storage_gb`<sup>Optional</sup> <a name="total_local_storage_gb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.totalLocalStorageGb"></a>

```python
total_local_storage_gb: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#total_local_storage_gb SpotFleetRequest#total_local_storage_gb}

---

##### `vcpu_count`<sup>Optional</sup> <a name="vcpu_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.vcpuCount"></a>

```python
vcpu_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#vcpu_count SpotFleetRequest#vcpu_count}

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestSpotMaintenanceStrategies <a name="SpotFleetRequestSpotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies(
  capacity_rebalance: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.property.capacityRebalance">capacity_rebalance</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | capacity_rebalance block. |

---

##### `capacity_rebalance`<sup>Optional</sup> <a name="capacity_rebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.property.capacityRebalance"></a>

```python
capacity_rebalance: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

capacity_rebalance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#capacity_rebalance SpotFleetRequest#capacity_rebalance}

---

### SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance <a name="SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance(
  replacement_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.property.replacementStrategy">replacement_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replacement_strategy SpotFleetRequest#replacement_strategy}. |

---

##### `replacement_strategy`<sup>Optional</sup> <a name="replacement_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.property.replacementStrategy"></a>

```python
replacement_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replacement_strategy SpotFleetRequest#replacement_strategy}.

---

### SpotFleetRequestTimeouts <a name="SpotFleetRequestTimeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#create SpotFleetRequest#create}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete SpotFleetRequest#delete}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#update SpotFleetRequest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#create SpotFleetRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete SpotFleetRequest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#update SpotFleetRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpotFleetRequestLaunchSpecificationEbsBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationEbsBlockDeviceList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>]]

---


### SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpotFleetRequestLaunchSpecificationEbsBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>, cdktf.IResolvable]

---


### SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>]]

---


### SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpotFleetRequestLaunchSpecificationEphemeralBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>, cdktf.IResolvable]

---


### SpotFleetRequestLaunchSpecificationList <a name="SpotFleetRequestLaunchSpecificationList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpotFleetRequestLaunchSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>]]

---


### SpotFleetRequestLaunchSpecificationOutputReference <a name="SpotFleetRequestLaunchSpecificationOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice">put_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice">put_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice">put_root_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAssociatePublicIpAddress">reset_associate_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsBlockDevice">reset_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEphemeralBlockDevice">reset_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfile">reset_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfileArn">reset_iam_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetMonitoring">reset_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementGroup">reset_placement_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementTenancy">reset_placement_tenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetRootBlockDevice">reset_root_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSpotPrice">reset_spot_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetWeightedCapacity">reset_weighted_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs_block_device` <a name="put_ebs_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice"></a>

```python
def put_ebs_block_device(
  value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationEbsBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>]]

---

##### `put_ephemeral_block_device` <a name="put_ephemeral_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice"></a>

```python
def put_ephemeral_block_device(
  value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationEphemeralBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>]]

---

##### `put_root_block_device` <a name="put_root_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice"></a>

```python
def put_root_block_device(
  value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationRootBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>]]

---

##### `reset_associate_public_ip_address` <a name="reset_associate_public_ip_address" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAssociatePublicIpAddress"></a>

```python
def reset_associate_public_ip_address() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_ebs_block_device` <a name="reset_ebs_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsBlockDevice"></a>

```python
def reset_ebs_block_device() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_ephemeral_block_device` <a name="reset_ephemeral_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEphemeralBlockDevice"></a>

```python
def reset_ephemeral_block_device() -> None
```

##### `reset_iam_instance_profile` <a name="reset_iam_instance_profile" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfile"></a>

```python
def reset_iam_instance_profile() -> None
```

##### `reset_iam_instance_profile_arn` <a name="reset_iam_instance_profile_arn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfileArn"></a>

```python
def reset_iam_instance_profile_arn() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_monitoring` <a name="reset_monitoring" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetMonitoring"></a>

```python
def reset_monitoring() -> None
```

##### `reset_placement_group` <a name="reset_placement_group" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementGroup"></a>

```python
def reset_placement_group() -> None
```

##### `reset_placement_tenancy` <a name="reset_placement_tenancy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementTenancy"></a>

```python
def reset_placement_tenancy() -> None
```

##### `reset_root_block_device` <a name="reset_root_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetRootBlockDevice"></a>

```python
def reset_root_block_device() -> None
```

##### `reset_spot_price` <a name="reset_spot_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSpotPrice"></a>

```python
def reset_spot_price() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

##### `reset_weighted_capacity` <a name="reset_weighted_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetWeightedCapacity"></a>

```python
def reset_weighted_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDevice">ebs_block_device</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList">SpotFleetRequestLaunchSpecificationEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList">SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDevice">root_block_device</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList">SpotFleetRequestLaunchSpecificationRootBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.amiInput">ami_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddressInput">associate_public_ip_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDeviceInput">ebs_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDeviceInput">ephemeral_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArnInput">iam_instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoringInput">monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroupInput">placement_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancyInput">placement_tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDeviceInput">root_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPriceInput">spot_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacityInput">weighted_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ami">ami</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArn">iam_instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroup">placement_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancy">placement_tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPrice">spot_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacity">weighted_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_block_device`<sup>Required</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDevice"></a>

```python
ebs_block_device: SpotFleetRequestLaunchSpecificationEbsBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList">SpotFleetRequestLaunchSpecificationEbsBlockDeviceList</a>

---

##### `ephemeral_block_device`<sup>Required</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList">SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList</a>

---

##### `root_block_device`<sup>Required</sup> <a name="root_block_device" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDevice"></a>

```python
root_block_device: SpotFleetRequestLaunchSpecificationRootBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList">SpotFleetRequestLaunchSpecificationRootBlockDeviceList</a>

---

##### `ami_input`<sup>Optional</sup> <a name="ami_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.amiInput"></a>

```python
ami_input: str
```

- *Type:* str

---

##### `associate_public_ip_address_input`<sup>Optional</sup> <a name="associate_public_ip_address_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddressInput"></a>

```python
associate_public_ip_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `ebs_block_device_input`<sup>Optional</sup> <a name="ebs_block_device_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDeviceInput"></a>

```python
ebs_block_device_input: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>]]

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ephemeral_block_device_input`<sup>Optional</sup> <a name="ephemeral_block_device_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDeviceInput"></a>

```python
ephemeral_block_device_input: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>]]

---

##### `iam_instance_profile_arn_input`<sup>Optional</sup> <a name="iam_instance_profile_arn_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArnInput"></a>

```python
iam_instance_profile_arn_input: str
```

- *Type:* str

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `monitoring_input`<sup>Optional</sup> <a name="monitoring_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoringInput"></a>

```python
monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `placement_group_input`<sup>Optional</sup> <a name="placement_group_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroupInput"></a>

```python
placement_group_input: str
```

- *Type:* str

---

##### `placement_tenancy_input`<sup>Optional</sup> <a name="placement_tenancy_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancyInput"></a>

```python
placement_tenancy_input: str
```

- *Type:* str

---

##### `root_block_device_input`<sup>Optional</sup> <a name="root_block_device_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDeviceInput"></a>

```python
root_block_device_input: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationRootBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>]]

---

##### `spot_price_input`<sup>Optional</sup> <a name="spot_price_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPriceInput"></a>

```python
spot_price_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weighted_capacity_input`<sup>Optional</sup> <a name="weighted_capacity_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacityInput"></a>

```python
weighted_capacity_input: str
```

- *Type:* str

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ami"></a>

```python
ami: str
```

- *Type:* str

---

##### `associate_public_ip_address`<sup>Required</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

---

##### `iam_instance_profile_arn`<sup>Required</sup> <a name="iam_instance_profile_arn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArn"></a>

```python
iam_instance_profile_arn: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoring"></a>

```python
monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `placement_group`<sup>Required</sup> <a name="placement_group" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroup"></a>

```python
placement_group: str
```

- *Type:* str

---

##### `placement_tenancy`<sup>Required</sup> <a name="placement_tenancy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancy"></a>

```python
placement_tenancy: str
```

- *Type:* str

---

##### `spot_price`<sup>Required</sup> <a name="spot_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weighted_capacity`<sup>Required</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacity"></a>

```python
weighted_capacity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpotFleetRequestLaunchSpecification, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>, cdktf.IResolvable]

---


### SpotFleetRequestLaunchSpecificationRootBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationRootBlockDeviceList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchSpecificationRootBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>]]

---


### SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpotFleetRequestLaunchSpecificationRootBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>, cdktf.IResolvable]

---


### SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference <a name="SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

---


### SpotFleetRequestLaunchTemplateConfigList <a name="SpotFleetRequestLaunchTemplateConfigList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpotFleetRequestLaunchTemplateConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchTemplateConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>]]

---


### SpotFleetRequestLaunchTemplateConfigOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification">put_launch_template_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resetOverrides">reset_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_launch_template_specification` <a name="put_launch_template_specification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification"></a>

```python
def put_launch_template_specification(
  id: str = None,
  name: str = None,
  version: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#name SpotFleetRequest#name}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#version SpotFleetRequest#version}.

---

##### `put_overrides` <a name="put_overrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides"></a>

```python
def put_overrides(
  value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchTemplateConfigOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>]]

---

##### `reset_overrides` <a name="reset_overrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resetOverrides"></a>

```python
def reset_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecification">launch_template_specification</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList">SpotFleetRequestLaunchTemplateConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput">launch_template_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overridesInput">overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_template_specification`<sup>Required</sup> <a name="launch_template_specification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecification"></a>

```python
launch_template_specification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overrides"></a>

```python
overrides: SpotFleetRequestLaunchTemplateConfigOverridesList
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList">SpotFleetRequestLaunchTemplateConfigOverridesList</a>

---

##### `launch_template_specification_input`<sup>Optional</sup> <a name="launch_template_specification_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput"></a>

```python
launch_template_specification_input: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overridesInput"></a>

```python
overrides_input: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchTemplateConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpotFleetRequestLaunchTemplateConfig, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>, cdktf.IResolvable]

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorCount">put_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib">put_accelerator_total_memory_mib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps">put_baseline_ebs_bandwidth_mbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryGibPerVcpu">put_memory_gib_per_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryMib">put_memory_mib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount">put_network_interface_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb">put_total_local_storage_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putVcpuCount">put_vcpu_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorManufacturers">reset_accelerator_manufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorNames">reset_accelerator_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib">reset_accelerator_total_memory_mib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTypes">reset_accelerator_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBareMetal">reset_bare_metal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps">reset_baseline_ebs_bandwidth_mbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBurstablePerformance">reset_burstable_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetCpuManufacturers">reset_cpu_manufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetExcludedInstanceTypes">reset_excluded_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetInstanceGenerations">reset_instance_generations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorage">reset_local_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorageTypes">reset_local_storage_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryGibPerVcpu">reset_memory_gib_per_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryMib">reset_memory_mib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetNetworkInterfaceCount">reset_network_interface_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice">reset_on_demand_max_price_percentage_over_lowest_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetRequireHibernateSupport">reset_require_hibernate_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice">reset_spot_max_price_percentage_over_lowest_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetTotalLocalStorageGb">reset_total_local_storage_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetVcpuCount">reset_vcpu_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerator_count` <a name="put_accelerator_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorCount"></a>

```python
def put_accelerator_count(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

##### `put_accelerator_total_memory_mib` <a name="put_accelerator_total_memory_mib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib"></a>

```python
def put_accelerator_total_memory_mib(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

##### `put_baseline_ebs_bandwidth_mbps` <a name="put_baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps"></a>

```python
def put_baseline_ebs_bandwidth_mbps(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

##### `put_memory_gib_per_vcpu` <a name="put_memory_gib_per_vcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryGibPerVcpu"></a>

```python
def put_memory_gib_per_vcpu(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

##### `put_memory_mib` <a name="put_memory_mib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryMib"></a>

```python
def put_memory_mib(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryMib.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryMib.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

##### `put_network_interface_count` <a name="put_network_interface_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount"></a>

```python
def put_network_interface_count(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

##### `put_total_local_storage_gb` <a name="put_total_local_storage_gb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb"></a>

```python
def put_total_local_storage_gb(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

##### `put_vcpu_count` <a name="put_vcpu_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putVcpuCount"></a>

```python
def put_vcpu_count(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putVcpuCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putVcpuCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_manufacturers` <a name="reset_accelerator_manufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorManufacturers"></a>

```python
def reset_accelerator_manufacturers() -> None
```

##### `reset_accelerator_names` <a name="reset_accelerator_names" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorNames"></a>

```python
def reset_accelerator_names() -> None
```

##### `reset_accelerator_total_memory_mib` <a name="reset_accelerator_total_memory_mib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib"></a>

```python
def reset_accelerator_total_memory_mib() -> None
```

##### `reset_accelerator_types` <a name="reset_accelerator_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTypes"></a>

```python
def reset_accelerator_types() -> None
```

##### `reset_bare_metal` <a name="reset_bare_metal" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBareMetal"></a>

```python
def reset_bare_metal() -> None
```

##### `reset_baseline_ebs_bandwidth_mbps` <a name="reset_baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps"></a>

```python
def reset_baseline_ebs_bandwidth_mbps() -> None
```

##### `reset_burstable_performance` <a name="reset_burstable_performance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBurstablePerformance"></a>

```python
def reset_burstable_performance() -> None
```

##### `reset_cpu_manufacturers` <a name="reset_cpu_manufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetCpuManufacturers"></a>

```python
def reset_cpu_manufacturers() -> None
```

##### `reset_excluded_instance_types` <a name="reset_excluded_instance_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```python
def reset_excluded_instance_types() -> None
```

##### `reset_instance_generations` <a name="reset_instance_generations" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetInstanceGenerations"></a>

```python
def reset_instance_generations() -> None
```

##### `reset_local_storage` <a name="reset_local_storage" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorage"></a>

```python
def reset_local_storage() -> None
```

##### `reset_local_storage_types` <a name="reset_local_storage_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorageTypes"></a>

```python
def reset_local_storage_types() -> None
```

##### `reset_memory_gib_per_vcpu` <a name="reset_memory_gib_per_vcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryGibPerVcpu"></a>

```python
def reset_memory_gib_per_vcpu() -> None
```

##### `reset_memory_mib` <a name="reset_memory_mib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryMib"></a>

```python
def reset_memory_mib() -> None
```

##### `reset_network_interface_count` <a name="reset_network_interface_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetNetworkInterfaceCount"></a>

```python
def reset_network_interface_count() -> None
```

##### `reset_on_demand_max_price_percentage_over_lowest_price` <a name="reset_on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice"></a>

```python
def reset_on_demand_max_price_percentage_over_lowest_price() -> None
```

##### `reset_require_hibernate_support` <a name="reset_require_hibernate_support" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetRequireHibernateSupport"></a>

```python
def reset_require_hibernate_support() -> None
```

##### `reset_spot_max_price_percentage_over_lowest_price` <a name="reset_spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice"></a>

```python
def reset_spot_max_price_percentage_over_lowest_price() -> None
```

##### `reset_total_local_storage_gb` <a name="reset_total_local_storage_gb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetTotalLocalStorageGb"></a>

```python
def reset_total_local_storage_gb() -> None
```

##### `reset_vcpu_count` <a name="reset_vcpu_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetVcpuCount"></a>

```python
def reset_vcpu_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">accelerator_total_memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baseline_ebs_bandwidth_mbps</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpu">memory_gib_per_vcpu</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMib">memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount">network_interface_count</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb">total_local_storage_gb</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCount">vcpu_count</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturersInput">accelerator_manufacturers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNamesInput">accelerator_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput">accelerator_total_memory_mib_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypesInput">accelerator_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetalInput">bare_metal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput">baseline_ebs_bandwidth_mbps_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformanceInput">burstable_performance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturersInput">cpu_manufacturers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">excluded_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerationsInput">instance_generations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageInput">local_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypesInput">local_storage_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput">memory_gib_per_vcpu_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMibInput">memory_mib_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCountInput">network_interface_count_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput">on_demand_max_price_percentage_over_lowest_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupportInput">require_hibernate_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput">spot_max_price_percentage_over_lowest_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGbInput">total_local_storage_gb_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCountInput">vcpu_count_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers">accelerator_manufacturers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNames">accelerator_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetal">bare_metal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformance">burstable_performance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturers">cpu_manufacturers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerations">instance_generations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorage">local_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypes">local_storage_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">on_demand_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport">require_hibernate_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spot_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `accelerator_total_memory_mib`<sup>Required</sup> <a name="accelerator_total_memory_mib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```python
accelerator_total_memory_mib: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a>

---

##### `baseline_ebs_bandwidth_mbps`<sup>Required</sup> <a name="baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```python
baseline_ebs_bandwidth_mbps: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `memory_gib_per_vcpu`<sup>Required</sup> <a name="memory_gib_per_vcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```python
memory_gib_per_vcpu: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference</a>

---

##### `memory_mib`<sup>Required</sup> <a name="memory_mib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMib"></a>

```python
memory_mib: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference</a>

---

##### `network_interface_count`<sup>Required</sup> <a name="network_interface_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```python
network_interface_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `total_local_storage_gb`<sup>Required</sup> <a name="total_local_storage_gb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```python
total_local_storage_gb: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `vcpu_count`<sup>Required</sup> <a name="vcpu_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCount"></a>

```python
vcpu_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference</a>

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

---

##### `accelerator_manufacturers_input`<sup>Optional</sup> <a name="accelerator_manufacturers_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturersInput"></a>

```python
accelerator_manufacturers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_names_input`<sup>Optional</sup> <a name="accelerator_names_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNamesInput"></a>

```python
accelerator_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_total_memory_mib_input`<sup>Optional</sup> <a name="accelerator_total_memory_mib_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput"></a>

```python
accelerator_total_memory_mib_input: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `accelerator_types_input`<sup>Optional</sup> <a name="accelerator_types_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypesInput"></a>

```python
accelerator_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bare_metal_input`<sup>Optional</sup> <a name="bare_metal_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetalInput"></a>

```python
bare_metal_input: str
```

- *Type:* str

---

##### `baseline_ebs_bandwidth_mbps_input`<sup>Optional</sup> <a name="baseline_ebs_bandwidth_mbps_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput"></a>

```python
baseline_ebs_bandwidth_mbps_input: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `burstable_performance_input`<sup>Optional</sup> <a name="burstable_performance_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformanceInput"></a>

```python
burstable_performance_input: str
```

- *Type:* str

---

##### `cpu_manufacturers_input`<sup>Optional</sup> <a name="cpu_manufacturers_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturersInput"></a>

```python
cpu_manufacturers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_instance_types_input`<sup>Optional</sup> <a name="excluded_instance_types_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```python
excluded_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_generations_input`<sup>Optional</sup> <a name="instance_generations_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerationsInput"></a>

```python
instance_generations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_storage_input`<sup>Optional</sup> <a name="local_storage_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageInput"></a>

```python
local_storage_input: str
```

- *Type:* str

---

##### `local_storage_types_input`<sup>Optional</sup> <a name="local_storage_types_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypesInput"></a>

```python
local_storage_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `memory_gib_per_vcpu_input`<sup>Optional</sup> <a name="memory_gib_per_vcpu_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput"></a>

```python
memory_gib_per_vcpu_input: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `memory_mib_input`<sup>Optional</sup> <a name="memory_mib_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMibInput"></a>

```python
memory_mib_input: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

---

##### `network_interface_count_input`<sup>Optional</sup> <a name="network_interface_count_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCountInput"></a>

```python
network_interface_count_input: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

---

##### `on_demand_max_price_percentage_over_lowest_price_input`<sup>Optional</sup> <a name="on_demand_max_price_percentage_over_lowest_price_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput"></a>

```python
on_demand_max_price_percentage_over_lowest_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_hibernate_support_input`<sup>Optional</sup> <a name="require_hibernate_support_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupportInput"></a>

```python
require_hibernate_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spot_max_price_percentage_over_lowest_price_input`<sup>Optional</sup> <a name="spot_max_price_percentage_over_lowest_price_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput"></a>

```python
spot_max_price_percentage_over_lowest_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_local_storage_gb_input`<sup>Optional</sup> <a name="total_local_storage_gb_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGbInput"></a>

```python
total_local_storage_gb_input: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

---

##### `vcpu_count_input`<sup>Optional</sup> <a name="vcpu_count_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCountInput"></a>

```python
vcpu_count_input: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

---

##### `accelerator_manufacturers`<sup>Required</sup> <a name="accelerator_manufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```python
accelerator_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_names`<sup>Required</sup> <a name="accelerator_names" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```python
accelerator_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_types`<sup>Required</sup> <a name="accelerator_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bare_metal`<sup>Required</sup> <a name="bare_metal" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetal"></a>

```python
bare_metal: str
```

- *Type:* str

---

##### `burstable_performance`<sup>Required</sup> <a name="burstable_performance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```python
burstable_performance: str
```

- *Type:* str

---

##### `cpu_manufacturers`<sup>Required</sup> <a name="cpu_manufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```python
cpu_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_instance_types`<sup>Required</sup> <a name="excluded_instance_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_generations`<sup>Required</sup> <a name="instance_generations" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```python
instance_generations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_storage`<sup>Required</sup> <a name="local_storage" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorage"></a>

```python
local_storage: str
```

- *Type:* str

---

##### `local_storage_types`<sup>Required</sup> <a name="local_storage_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```python
local_storage_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_demand_max_price_percentage_over_lowest_price`<sup>Required</sup> <a name="on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```python
on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_hibernate_support`<sup>Required</sup> <a name="require_hibernate_support" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```python
require_hibernate_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spot_max_price_percentage_over_lowest_price`<sup>Required</sup> <a name="spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```python
spot_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesList <a name="SpotFleetRequestLaunchTemplateConfigOverridesList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpotFleetRequestLaunchTemplateConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpotFleetRequestLaunchTemplateConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>]]

---


### SpotFleetRequestLaunchTemplateConfigOverridesOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements">put_instance_requirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceRequirements">reset_instance_requirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSpotPrice">reset_spot_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetWeightedCapacity">reset_weighted_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_instance_requirements` <a name="put_instance_requirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements"></a>

```python
def put_instance_requirements(
  accelerator_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount = None,
  accelerator_manufacturers: typing.List[str] = None,
  accelerator_names: typing.List[str] = None,
  accelerator_total_memory_mib: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib = None,
  accelerator_types: typing.List[str] = None,
  bare_metal: str = None,
  baseline_ebs_bandwidth_mbps: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps = None,
  burstable_performance: str = None,
  cpu_manufacturers: typing.List[str] = None,
  excluded_instance_types: typing.List[str] = None,
  instance_generations: typing.List[str] = None,
  local_storage: str = None,
  local_storage_types: typing.List[str] = None,
  memory_gib_per_vcpu: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu = None,
  memory_mib: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib = None,
  network_interface_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount = None,
  on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  require_hibernate_support: typing.Union[bool, IResolvable] = None,
  spot_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  total_local_storage_gb: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb = None,
  vcpu_count: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount = None
) -> None
```

###### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.acceleratorCount"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_count SpotFleetRequest#accelerator_count}

---

###### `accelerator_manufacturers`<sup>Optional</sup> <a name="accelerator_manufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.acceleratorManufacturers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_manufacturers SpotFleetRequest#accelerator_manufacturers}.

---

###### `accelerator_names`<sup>Optional</sup> <a name="accelerator_names" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.acceleratorNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_names SpotFleetRequest#accelerator_names}.

---

###### `accelerator_total_memory_mib`<sup>Optional</sup> <a name="accelerator_total_memory_mib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.acceleratorTotalMemoryMib"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_total_memory_mib SpotFleetRequest#accelerator_total_memory_mib}

---

###### `accelerator_types`<sup>Optional</sup> <a name="accelerator_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.acceleratorTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_types SpotFleetRequest#accelerator_types}.

---

###### `bare_metal`<sup>Optional</sup> <a name="bare_metal" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.bareMetal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#bare_metal SpotFleetRequest#bare_metal}.

---

###### `baseline_ebs_bandwidth_mbps`<sup>Optional</sup> <a name="baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.baselineEbsBandwidthMbps"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#baseline_ebs_bandwidth_mbps SpotFleetRequest#baseline_ebs_bandwidth_mbps}

---

###### `burstable_performance`<sup>Optional</sup> <a name="burstable_performance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.burstablePerformance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#burstable_performance SpotFleetRequest#burstable_performance}.

---

###### `cpu_manufacturers`<sup>Optional</sup> <a name="cpu_manufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.cpuManufacturers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#cpu_manufacturers SpotFleetRequest#cpu_manufacturers}.

---

###### `excluded_instance_types`<sup>Optional</sup> <a name="excluded_instance_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.excludedInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excluded_instance_types SpotFleetRequest#excluded_instance_types}.

---

###### `instance_generations`<sup>Optional</sup> <a name="instance_generations" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.instanceGenerations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_generations SpotFleetRequest#instance_generations}.

---

###### `local_storage`<sup>Optional</sup> <a name="local_storage" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.localStorage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage SpotFleetRequest#local_storage}.

---

###### `local_storage_types`<sup>Optional</sup> <a name="local_storage_types" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.localStorageTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage_types SpotFleetRequest#local_storage_types}.

---

###### `memory_gib_per_vcpu`<sup>Optional</sup> <a name="memory_gib_per_vcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.memoryGibPerVcpu"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#memory_gib_per_vcpu SpotFleetRequest#memory_gib_per_vcpu}

---

###### `memory_mib`<sup>Optional</sup> <a name="memory_mib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.memoryMib"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#memory_mib SpotFleetRequest#memory_mib}

---

###### `network_interface_count`<sup>Optional</sup> <a name="network_interface_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.networkInterfaceCount"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#network_interface_count SpotFleetRequest#network_interface_count}

---

###### `on_demand_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.onDemandMaxPricePercentageOverLowestPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_price_percentage_over_lowest_price SpotFleetRequest#on_demand_max_price_percentage_over_lowest_price}.

---

###### `require_hibernate_support`<sup>Optional</sup> <a name="require_hibernate_support" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.requireHibernateSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#require_hibernate_support SpotFleetRequest#require_hibernate_support}.

---

###### `spot_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.spotMaxPricePercentageOverLowestPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_max_price_percentage_over_lowest_price SpotFleetRequest#spot_max_price_percentage_over_lowest_price}.

---

###### `total_local_storage_gb`<sup>Optional</sup> <a name="total_local_storage_gb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.totalLocalStorageGb"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#total_local_storage_gb SpotFleetRequest#total_local_storage_gb}

---

###### `vcpu_count`<sup>Optional</sup> <a name="vcpu_count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.vcpuCount"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#vcpu_count SpotFleetRequest#vcpu_count}

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_instance_requirements` <a name="reset_instance_requirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceRequirements"></a>

```python
def reset_instance_requirements() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_spot_price` <a name="reset_spot_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSpotPrice"></a>

```python
def reset_spot_price() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_weighted_capacity` <a name="reset_weighted_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetWeightedCapacity"></a>

```python
def reset_weighted_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirements">instance_requirements</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirementsInput">instance_requirements_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPriceInput">spot_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacityInput">weighted_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPrice">spot_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_requirements`<sup>Required</sup> <a name="instance_requirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirements"></a>

```python
instance_requirements: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `instance_requirements_input`<sup>Optional</sup> <a name="instance_requirements_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirementsInput"></a>

```python
instance_requirements_input: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a>

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spot_price_input`<sup>Optional</sup> <a name="spot_price_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPriceInput"></a>

```python
spot_price_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `weighted_capacity_input`<sup>Optional</sup> <a name="weighted_capacity_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacityInput"></a>

```python
weighted_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spot_price`<sup>Required</sup> <a name="spot_price" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `weighted_capacity`<sup>Required</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpotFleetRequestLaunchTemplateConfigOverrides, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>, cdktf.IResolvable]

---


### SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference <a name="SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy">reset_replacement_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_replacement_strategy` <a name="reset_replacement_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy"></a>

```python
def reset_replacement_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput">replacement_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy">replacement_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replacement_strategy_input`<sup>Optional</sup> <a name="replacement_strategy_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput"></a>

```python
replacement_strategy_input: str
```

- *Type:* str

---

##### `replacement_strategy`<sup>Required</sup> <a name="replacement_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy"></a>

```python
replacement_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

---


### SpotFleetRequestSpotMaintenanceStrategiesOutputReference <a name="SpotFleetRequestSpotMaintenanceStrategiesOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance">put_capacity_rebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resetCapacityRebalance">reset_capacity_rebalance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_rebalance` <a name="put_capacity_rebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance"></a>

```python
def put_capacity_rebalance(
  replacement_strategy: str = None
) -> None
```

###### `replacement_strategy`<sup>Optional</sup> <a name="replacement_strategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance.parameter.replacementStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replacement_strategy SpotFleetRequest#replacement_strategy}.

---

##### `reset_capacity_rebalance` <a name="reset_capacity_rebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resetCapacityRebalance"></a>

```python
def reset_capacity_rebalance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalance">capacity_rebalance</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalanceInput">capacity_rebalance_input</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_rebalance`<sup>Required</sup> <a name="capacity_rebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalance"></a>

```python
capacity_rebalance: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference</a>

---

##### `capacity_rebalance_input`<sup>Optional</sup> <a name="capacity_rebalance_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalanceInput"></a>

```python
capacity_rebalance_input: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.internalValue"></a>

```python
internal_value: SpotFleetRequestSpotMaintenanceStrategies
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

---


### SpotFleetRequestTimeoutsOutputReference <a name="SpotFleetRequestTimeoutsOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import spot_fleet_request

spotFleetRequest.SpotFleetRequestTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpotFleetRequestTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>, cdktf.IResolvable]

---



