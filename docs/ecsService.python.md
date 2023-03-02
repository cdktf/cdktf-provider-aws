# `ecsService` Submodule <a name="`ecsService` Submodule" id="@cdktf/provider-aws.ecsService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsService <a name="EcsService" id="@cdktf/provider-aws.ecsService.EcsService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_service aws_ecs_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  alarms: EcsServiceAlarms = None,
  capacity_provider_strategy: typing.Union[IResolvable, typing.List[EcsServiceCapacityProviderStrategy]] = None,
  cluster: str = None,
  deployment_circuit_breaker: EcsServiceDeploymentCircuitBreaker = None,
  deployment_controller: EcsServiceDeploymentController = None,
  deployment_maximum_percent: typing.Union[int, float] = None,
  deployment_minimum_healthy_percent: typing.Union[int, float] = None,
  desired_count: typing.Union[int, float] = None,
  enable_ecs_managed_tags: typing.Union[bool, IResolvable] = None,
  enable_execute_command: typing.Union[bool, IResolvable] = None,
  force_new_deployment: typing.Union[bool, IResolvable] = None,
  health_check_grace_period_seconds: typing.Union[int, float] = None,
  iam_role: str = None,
  id: str = None,
  launch_type: str = None,
  load_balancer: typing.Union[IResolvable, typing.List[EcsServiceLoadBalancer]] = None,
  network_configuration: EcsServiceNetworkConfiguration = None,
  ordered_placement_strategy: typing.Union[IResolvable, typing.List[EcsServiceOrderedPlacementStrategy]] = None,
  placement_constraints: typing.Union[IResolvable, typing.List[EcsServicePlacementConstraints]] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  scheduling_strategy: str = None,
  service_connect_configuration: EcsServiceServiceConnectConfiguration = None,
  service_registries: EcsServiceServiceRegistries = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  task_definition: str = None,
  timeouts: EcsServiceTimeouts = None,
  triggers: typing.Mapping[str] = None,
  wait_for_steady_state: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.alarms">alarms</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | alarms block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>]]</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#cluster EcsService#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentCircuitBreaker">deployment_circuit_breaker</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | deployment_circuit_breaker block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentController">deployment_controller</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | deployment_controller block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentMaximumPercent">deployment_maximum_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentMinimumHealthyPercent">deployment_minimum_healthy_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.desiredCount">desired_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#desired_count EcsService#desired_count}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.enableExecuteCommand">enable_execute_command</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_execute_command EcsService#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.forceNewDeployment">force_new_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#force_new_deployment EcsService#force_new_deployment}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.healthCheckGracePeriodSeconds">health_check_grace_period_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.iamRole">iam_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#iam_role EcsService#iam_role}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#id EcsService#id}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.launchType">launch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#launch_type EcsService#launch_type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.loadBalancer">load_balancer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>]]</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.orderedPlacementStrategy">ordered_placement_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>]]</code> | ordered_placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.placementConstraints">placement_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>]]</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.platformVersion">platform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#platform_version EcsService#platform_version}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.propagateTags">propagate_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#propagate_tags EcsService#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.schedulingStrategy">scheduling_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#scheduling_strategy EcsService#scheduling_strategy}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.serviceConnectConfiguration">service_connect_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | service_connect_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.serviceRegistries">service_registries</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | service_registries block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags EcsService#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags_all EcsService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.taskDefinition">task_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#task_definition EcsService#task_definition}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#triggers EcsService#triggers}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.waitForSteadyState">wait_for_steady_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}.

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.alarms"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

alarms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarms EcsService#alarms}

---

##### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.capacityProviderStrategy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>]]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#capacity_provider_strategy EcsService#capacity_provider_strategy}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.cluster"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#cluster EcsService#cluster}.

---

##### `deployment_circuit_breaker`<sup>Optional</sup> <a name="deployment_circuit_breaker" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentCircuitBreaker"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

deployment_circuit_breaker block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_circuit_breaker EcsService#deployment_circuit_breaker}

---

##### `deployment_controller`<sup>Optional</sup> <a name="deployment_controller" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentController"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

deployment_controller block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_controller EcsService#deployment_controller}

---

##### `deployment_maximum_percent`<sup>Optional</sup> <a name="deployment_maximum_percent" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentMaximumPercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}.

---

##### `deployment_minimum_healthy_percent`<sup>Optional</sup> <a name="deployment_minimum_healthy_percent" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentMinimumHealthyPercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}.

---

##### `desired_count`<sup>Optional</sup> <a name="desired_count" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.desiredCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#desired_count EcsService#desired_count}.

---

##### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.enableEcsManagedTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}.

---

##### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.enableExecuteCommand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_execute_command EcsService#enable_execute_command}.

---

##### `force_new_deployment`<sup>Optional</sup> <a name="force_new_deployment" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.forceNewDeployment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#force_new_deployment EcsService#force_new_deployment}.

---

##### `health_check_grace_period_seconds`<sup>Optional</sup> <a name="health_check_grace_period_seconds" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.healthCheckGracePeriodSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}.

---

##### `iam_role`<sup>Optional</sup> <a name="iam_role" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.iamRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#iam_role EcsService#iam_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#id EcsService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.launchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#launch_type EcsService#launch_type}.

---

##### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.loadBalancer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>]]

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#load_balancer EcsService#load_balancer}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#network_configuration EcsService#network_configuration}

---

##### `ordered_placement_strategy`<sup>Optional</sup> <a name="ordered_placement_strategy" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.orderedPlacementStrategy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>]]

ordered_placement_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#ordered_placement_strategy EcsService#ordered_placement_strategy}

---

##### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.placementConstraints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>]]

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#placement_constraints EcsService#placement_constraints}

---

##### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.platformVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#platform_version EcsService#platform_version}.

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.propagateTags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#propagate_tags EcsService#propagate_tags}.

---

##### `scheduling_strategy`<sup>Optional</sup> <a name="scheduling_strategy" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.schedulingStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#scheduling_strategy EcsService#scheduling_strategy}.

---

##### `service_connect_configuration`<sup>Optional</sup> <a name="service_connect_configuration" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.serviceConnectConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

service_connect_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service_connect_configuration EcsService#service_connect_configuration}

---

##### `service_registries`<sup>Optional</sup> <a name="service_registries" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.serviceRegistries"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

service_registries block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service_registries EcsService#service_registries}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags EcsService#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags_all EcsService#tags_all}.

---

##### `task_definition`<sup>Optional</sup> <a name="task_definition" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.taskDefinition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#task_definition EcsService#task_definition}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#timeouts EcsService#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.triggers"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#triggers EcsService#triggers}.

---

##### `wait_for_steady_state`<sup>Optional</sup> <a name="wait_for_steady_state" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.waitForSteadyState"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putAlarms">put_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy">put_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker">put_deployment_circuit_breaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putDeploymentController">put_deployment_controller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer">put_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy">put_ordered_placement_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints">put_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration">put_service_connect_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries">put_service_registries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetCapacityProviderStrategy">reset_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetCluster">reset_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentCircuitBreaker">reset_deployment_circuit_breaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentController">reset_deployment_controller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMaximumPercent">reset_deployment_maximum_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMinimumHealthyPercent">reset_deployment_minimum_healthy_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDesiredCount">reset_desired_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetEnableEcsManagedTags">reset_enable_ecs_managed_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetEnableExecuteCommand">reset_enable_execute_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetForceNewDeployment">reset_force_new_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetHealthCheckGracePeriodSeconds">reset_health_check_grace_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetIamRole">reset_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetLaunchType">reset_launch_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetLoadBalancer">reset_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetOrderedPlacementStrategy">reset_ordered_placement_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPlacementConstraints">reset_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPlatformVersion">reset_platform_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPropagateTags">reset_propagate_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetSchedulingStrategy">reset_scheduling_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetServiceConnectConfiguration">reset_service_connect_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetServiceRegistries">reset_service_registries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTaskDefinition">reset_task_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTriggers">reset_triggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetWaitForSteadyState">reset_wait_for_steady_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ecsService.EcsService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsService.EcsService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ecsService.EcsService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ecsService.EcsService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ecsService.EcsService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_alarms` <a name="put_alarms" id="@cdktf/provider-aws.ecsService.EcsService.putAlarms"></a>

```python
def put_alarms(
  alarm_names: typing.List[str],
  enable: typing.Union[bool, IResolvable],
  rollback: typing.Union[bool, IResolvable]
) -> None
```

###### `alarm_names`<sup>Required</sup> <a name="alarm_names" id="@cdktf/provider-aws.ecsService.EcsService.putAlarms.parameter.alarmNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarm_names EcsService#alarm_names}.

---

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsService.putAlarms.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}.

---

###### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsService.putAlarms.parameter.rollback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}.

---

##### `put_capacity_provider_strategy` <a name="put_capacity_provider_strategy" id="@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy"></a>

```python
def put_capacity_provider_strategy(
  value: typing.Union[IResolvable, typing.List[EcsServiceCapacityProviderStrategy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>]]

---

##### `put_deployment_circuit_breaker` <a name="put_deployment_circuit_breaker" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker"></a>

```python
def put_deployment_circuit_breaker(
  enable: typing.Union[bool, IResolvable],
  rollback: typing.Union[bool, IResolvable]
) -> None
```

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}.

---

###### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker.parameter.rollback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}.

---

##### `put_deployment_controller` <a name="put_deployment_controller" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentController"></a>

```python
def put_deployment_controller(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentController.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}.

---

##### `put_load_balancer` <a name="put_load_balancer" id="@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer"></a>

```python
def put_load_balancer(
  value: typing.Union[IResolvable, typing.List[EcsServiceLoadBalancer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>]]

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  subnets: typing.List[str],
  assign_public_ip: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None
) -> None
```

###### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#subnets EcsService#subnets}.

---

###### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration.parameter.assignPublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#assign_public_ip EcsService#assign_public_ip}.

---

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#security_groups EcsService#security_groups}.

---

##### `put_ordered_placement_strategy` <a name="put_ordered_placement_strategy" id="@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy"></a>

```python
def put_ordered_placement_strategy(
  value: typing.Union[IResolvable, typing.List[EcsServiceOrderedPlacementStrategy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>]]

---

##### `put_placement_constraints` <a name="put_placement_constraints" id="@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints"></a>

```python
def put_placement_constraints(
  value: typing.Union[IResolvable, typing.List[EcsServicePlacementConstraints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>]]

---

##### `put_service_connect_configuration` <a name="put_service_connect_configuration" id="@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration"></a>

```python
def put_service_connect_configuration(
  enabled: typing.Union[bool, IResolvable],
  log_configuration: EcsServiceServiceConnectConfigurationLogConfiguration = None,
  namespace: str = None,
  service: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationService]] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enabled EcsService#enabled}.

---

###### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration.parameter.logConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#log_configuration EcsService#log_configuration}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#namespace EcsService#namespace}.

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration.parameter.service"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>]]

service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service EcsService#service}

---

##### `put_service_registries` <a name="put_service_registries" id="@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries"></a>

```python
def put_service_registries(
  registry_arn: str,
  container_name: str = None,
  container_port: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `registry_arn`<sup>Required</sup> <a name="registry_arn" id="@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries.parameter.registryArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#registry_arn EcsService#registry_arn}.

---

###### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}.

---

###### `container_port`<sup>Optional</sup> <a name="container_port" id="@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries.parameter.containerPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ecsService.EcsService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ecsService.EcsService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#create EcsService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ecsService.EcsService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#delete EcsService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ecsService.EcsService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#update EcsService#update}.

---

##### `reset_alarms` <a name="reset_alarms" id="@cdktf/provider-aws.ecsService.EcsService.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_capacity_provider_strategy` <a name="reset_capacity_provider_strategy" id="@cdktf/provider-aws.ecsService.EcsService.resetCapacityProviderStrategy"></a>

```python
def reset_capacity_provider_strategy() -> None
```

##### `reset_cluster` <a name="reset_cluster" id="@cdktf/provider-aws.ecsService.EcsService.resetCluster"></a>

```python
def reset_cluster() -> None
```

##### `reset_deployment_circuit_breaker` <a name="reset_deployment_circuit_breaker" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentCircuitBreaker"></a>

```python
def reset_deployment_circuit_breaker() -> None
```

##### `reset_deployment_controller` <a name="reset_deployment_controller" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentController"></a>

```python
def reset_deployment_controller() -> None
```

##### `reset_deployment_maximum_percent` <a name="reset_deployment_maximum_percent" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMaximumPercent"></a>

```python
def reset_deployment_maximum_percent() -> None
```

##### `reset_deployment_minimum_healthy_percent` <a name="reset_deployment_minimum_healthy_percent" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMinimumHealthyPercent"></a>

```python
def reset_deployment_minimum_healthy_percent() -> None
```

##### `reset_desired_count` <a name="reset_desired_count" id="@cdktf/provider-aws.ecsService.EcsService.resetDesiredCount"></a>

```python
def reset_desired_count() -> None
```

##### `reset_enable_ecs_managed_tags` <a name="reset_enable_ecs_managed_tags" id="@cdktf/provider-aws.ecsService.EcsService.resetEnableEcsManagedTags"></a>

```python
def reset_enable_ecs_managed_tags() -> None
```

##### `reset_enable_execute_command` <a name="reset_enable_execute_command" id="@cdktf/provider-aws.ecsService.EcsService.resetEnableExecuteCommand"></a>

```python
def reset_enable_execute_command() -> None
```

##### `reset_force_new_deployment` <a name="reset_force_new_deployment" id="@cdktf/provider-aws.ecsService.EcsService.resetForceNewDeployment"></a>

```python
def reset_force_new_deployment() -> None
```

##### `reset_health_check_grace_period_seconds` <a name="reset_health_check_grace_period_seconds" id="@cdktf/provider-aws.ecsService.EcsService.resetHealthCheckGracePeriodSeconds"></a>

```python
def reset_health_check_grace_period_seconds() -> None
```

##### `reset_iam_role` <a name="reset_iam_role" id="@cdktf/provider-aws.ecsService.EcsService.resetIamRole"></a>

```python
def reset_iam_role() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ecsService.EcsService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_launch_type` <a name="reset_launch_type" id="@cdktf/provider-aws.ecsService.EcsService.resetLaunchType"></a>

```python
def reset_launch_type() -> None
```

##### `reset_load_balancer` <a name="reset_load_balancer" id="@cdktf/provider-aws.ecsService.EcsService.resetLoadBalancer"></a>

```python
def reset_load_balancer() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktf/provider-aws.ecsService.EcsService.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_ordered_placement_strategy` <a name="reset_ordered_placement_strategy" id="@cdktf/provider-aws.ecsService.EcsService.resetOrderedPlacementStrategy"></a>

```python
def reset_ordered_placement_strategy() -> None
```

##### `reset_placement_constraints` <a name="reset_placement_constraints" id="@cdktf/provider-aws.ecsService.EcsService.resetPlacementConstraints"></a>

```python
def reset_placement_constraints() -> None
```

##### `reset_platform_version` <a name="reset_platform_version" id="@cdktf/provider-aws.ecsService.EcsService.resetPlatformVersion"></a>

```python
def reset_platform_version() -> None
```

##### `reset_propagate_tags` <a name="reset_propagate_tags" id="@cdktf/provider-aws.ecsService.EcsService.resetPropagateTags"></a>

```python
def reset_propagate_tags() -> None
```

##### `reset_scheduling_strategy` <a name="reset_scheduling_strategy" id="@cdktf/provider-aws.ecsService.EcsService.resetSchedulingStrategy"></a>

```python
def reset_scheduling_strategy() -> None
```

##### `reset_service_connect_configuration` <a name="reset_service_connect_configuration" id="@cdktf/provider-aws.ecsService.EcsService.resetServiceConnectConfiguration"></a>

```python
def reset_service_connect_configuration() -> None
```

##### `reset_service_registries` <a name="reset_service_registries" id="@cdktf/provider-aws.ecsService.EcsService.resetServiceRegistries"></a>

```python
def reset_service_registries() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ecsService.EcsService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ecsService.EcsService.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_task_definition` <a name="reset_task_definition" id="@cdktf/provider-aws.ecsService.EcsService.resetTaskDefinition"></a>

```python
def reset_task_definition() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ecsService.EcsService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-aws.ecsService.EcsService.resetTriggers"></a>

```python
def reset_triggers() -> None
```

##### `reset_wait_for_steady_state` <a name="reset_wait_for_steady_state" id="@cdktf/provider-aws.ecsService.EcsService.resetWaitForSteadyState"></a>

```python
def reset_wait_for_steady_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ecsService.EcsService.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsService.EcsService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.alarms">alarms</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference">EcsServiceAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList">EcsServiceCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreaker">deployment_circuit_breaker</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference">EcsServiceDeploymentCircuitBreakerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentController">deployment_controller</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference">EcsServiceDeploymentControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList">EcsServiceLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference">EcsServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategy">ordered_placement_strategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList">EcsServiceOrderedPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.placementConstraints">placement_constraints</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList">EcsServicePlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfiguration">service_connect_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference">EcsServiceServiceConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistries">service_registries</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference">EcsServiceServiceRegistriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference">EcsServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.alarmsInput">alarms_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategyInput">capacity_provider_strategy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreakerInput">deployment_circuit_breaker_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentControllerInput">deployment_controller_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercentInput">deployment_maximum_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercentInput">deployment_minimum_healthy_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.desiredCountInput">desired_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTagsInput">enable_ecs_managed_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommandInput">enable_execute_command_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeploymentInput">force_new_deployment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSecondsInput">health_check_grace_period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.iamRoleInput">iam_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.launchTypeInput">launch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.loadBalancerInput">load_balancer_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategyInput">ordered_placement_strategy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.placementConstraintsInput">placement_constraints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.platformVersionInput">platform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.propagateTagsInput">propagate_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategyInput">scheduling_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfigurationInput">service_connect_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistriesInput">service_registries_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.taskDefinitionInput">task_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.triggersInput">triggers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyStateInput">wait_for_steady_state_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercent">deployment_maximum_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercent">deployment_minimum_healthy_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.desiredCount">desired_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommand">enable_execute_command</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeployment">force_new_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSeconds">health_check_grace_period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.iamRole">iam_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.launchType">launch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.propagateTags">propagate_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategy">scheduling_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.taskDefinition">task_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyState">wait_for_steady_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsService.EcsService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ecsService.EcsService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ecsService.EcsService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsService.EcsService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsService.EcsService.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsService.EcsService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsService.EcsService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsService.EcsService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsService.EcsService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsService.EcsService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.ecsService.EcsService.property.alarms"></a>

```python
alarms: EcsServiceAlarmsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference">EcsServiceAlarmsOutputReference</a>

---

##### `capacity_provider_strategy`<sup>Required</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: EcsServiceCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList">EcsServiceCapacityProviderStrategyList</a>

---

##### `deployment_circuit_breaker`<sup>Required</sup> <a name="deployment_circuit_breaker" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreaker"></a>

```python
deployment_circuit_breaker: EcsServiceDeploymentCircuitBreakerOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference">EcsServiceDeploymentCircuitBreakerOutputReference</a>

---

##### `deployment_controller`<sup>Required</sup> <a name="deployment_controller" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentController"></a>

```python
deployment_controller: EcsServiceDeploymentControllerOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference">EcsServiceDeploymentControllerOutputReference</a>

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-aws.ecsService.EcsService.property.loadBalancer"></a>

```python
load_balancer: EcsServiceLoadBalancerList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList">EcsServiceLoadBalancerList</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-aws.ecsService.EcsService.property.networkConfiguration"></a>

```python
network_configuration: EcsServiceNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference">EcsServiceNetworkConfigurationOutputReference</a>

---

##### `ordered_placement_strategy`<sup>Required</sup> <a name="ordered_placement_strategy" id="@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategy"></a>

```python
ordered_placement_strategy: EcsServiceOrderedPlacementStrategyList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList">EcsServiceOrderedPlacementStrategyList</a>

---

##### `placement_constraints`<sup>Required</sup> <a name="placement_constraints" id="@cdktf/provider-aws.ecsService.EcsService.property.placementConstraints"></a>

```python
placement_constraints: EcsServicePlacementConstraintsList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList">EcsServicePlacementConstraintsList</a>

---

##### `service_connect_configuration`<sup>Required</sup> <a name="service_connect_configuration" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfiguration"></a>

```python
service_connect_configuration: EcsServiceServiceConnectConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference">EcsServiceServiceConnectConfigurationOutputReference</a>

---

##### `service_registries`<sup>Required</sup> <a name="service_registries" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistries"></a>

```python
service_registries: EcsServiceServiceRegistriesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference">EcsServiceServiceRegistriesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsService.EcsService.property.timeouts"></a>

```python
timeouts: EcsServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference">EcsServiceTimeoutsOutputReference</a>

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktf/provider-aws.ecsService.EcsService.property.alarmsInput"></a>

```python
alarms_input: EcsServiceAlarms
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

---

##### `capacity_provider_strategy_input`<sup>Optional</sup> <a name="capacity_provider_strategy_input" id="@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategyInput"></a>

```python
capacity_provider_strategy_input: typing.Union[IResolvable, typing.List[EcsServiceCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>]]

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-aws.ecsService.EcsService.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `deployment_circuit_breaker_input`<sup>Optional</sup> <a name="deployment_circuit_breaker_input" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreakerInput"></a>

```python
deployment_circuit_breaker_input: EcsServiceDeploymentCircuitBreaker
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

---

##### `deployment_controller_input`<sup>Optional</sup> <a name="deployment_controller_input" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentControllerInput"></a>

```python
deployment_controller_input: EcsServiceDeploymentController
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

---

##### `deployment_maximum_percent_input`<sup>Optional</sup> <a name="deployment_maximum_percent_input" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercentInput"></a>

```python
deployment_maximum_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deployment_minimum_healthy_percent_input`<sup>Optional</sup> <a name="deployment_minimum_healthy_percent_input" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercentInput"></a>

```python
deployment_minimum_healthy_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_count_input`<sup>Optional</sup> <a name="desired_count_input" id="@cdktf/provider-aws.ecsService.EcsService.property.desiredCountInput"></a>

```python
desired_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_ecs_managed_tags_input`<sup>Optional</sup> <a name="enable_ecs_managed_tags_input" id="@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTagsInput"></a>

```python
enable_ecs_managed_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_execute_command_input`<sup>Optional</sup> <a name="enable_execute_command_input" id="@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommandInput"></a>

```python
enable_execute_command_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_new_deployment_input`<sup>Optional</sup> <a name="force_new_deployment_input" id="@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeploymentInput"></a>

```python
force_new_deployment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_check_grace_period_seconds_input`<sup>Optional</sup> <a name="health_check_grace_period_seconds_input" id="@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSecondsInput"></a>

```python
health_check_grace_period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iam_role_input`<sup>Optional</sup> <a name="iam_role_input" id="@cdktf/provider-aws.ecsService.EcsService.property.iamRoleInput"></a>

```python
iam_role_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ecsService.EcsService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `launch_type_input`<sup>Optional</sup> <a name="launch_type_input" id="@cdktf/provider-aws.ecsService.EcsService.property.launchTypeInput"></a>

```python
launch_type_input: str
```

- *Type:* str

---

##### `load_balancer_input`<sup>Optional</sup> <a name="load_balancer_input" id="@cdktf/provider-aws.ecsService.EcsService.property.loadBalancerInput"></a>

```python
load_balancer_input: typing.Union[IResolvable, typing.List[EcsServiceLoadBalancer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ecsService.EcsService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktf/provider-aws.ecsService.EcsService.property.networkConfigurationInput"></a>

```python
network_configuration_input: EcsServiceNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

---

##### `ordered_placement_strategy_input`<sup>Optional</sup> <a name="ordered_placement_strategy_input" id="@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategyInput"></a>

```python
ordered_placement_strategy_input: typing.Union[IResolvable, typing.List[EcsServiceOrderedPlacementStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>]]

---

##### `placement_constraints_input`<sup>Optional</sup> <a name="placement_constraints_input" id="@cdktf/provider-aws.ecsService.EcsService.property.placementConstraintsInput"></a>

```python
placement_constraints_input: typing.Union[IResolvable, typing.List[EcsServicePlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>]]

---

##### `platform_version_input`<sup>Optional</sup> <a name="platform_version_input" id="@cdktf/provider-aws.ecsService.EcsService.property.platformVersionInput"></a>

```python
platform_version_input: str
```

- *Type:* str

---

##### `propagate_tags_input`<sup>Optional</sup> <a name="propagate_tags_input" id="@cdktf/provider-aws.ecsService.EcsService.property.propagateTagsInput"></a>

```python
propagate_tags_input: str
```

- *Type:* str

---

##### `scheduling_strategy_input`<sup>Optional</sup> <a name="scheduling_strategy_input" id="@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategyInput"></a>

```python
scheduling_strategy_input: str
```

- *Type:* str

---

##### `service_connect_configuration_input`<sup>Optional</sup> <a name="service_connect_configuration_input" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfigurationInput"></a>

```python
service_connect_configuration_input: EcsServiceServiceConnectConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

---

##### `service_registries_input`<sup>Optional</sup> <a name="service_registries_input" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistriesInput"></a>

```python
service_registries_input: EcsServiceServiceRegistries
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_definition_input`<sup>Optional</sup> <a name="task_definition_input" id="@cdktf/provider-aws.ecsService.EcsService.property.taskDefinitionInput"></a>

```python
task_definition_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ecsService.EcsService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[EcsServiceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>, cdktf.IResolvable]

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-aws.ecsService.EcsService.property.triggersInput"></a>

```python
triggers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `wait_for_steady_state_input`<sup>Optional</sup> <a name="wait_for_steady_state_input" id="@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyStateInput"></a>

```python
wait_for_steady_state_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.ecsService.EcsService.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `deployment_maximum_percent`<sup>Required</sup> <a name="deployment_maximum_percent" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercent"></a>

```python
deployment_maximum_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deployment_minimum_healthy_percent`<sup>Required</sup> <a name="deployment_minimum_healthy_percent" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercent"></a>

```python
deployment_minimum_healthy_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_count`<sup>Required</sup> <a name="desired_count" id="@cdktf/provider-aws.ecsService.EcsService.property.desiredCount"></a>

```python
desired_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_ecs_managed_tags`<sup>Required</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_execute_command`<sup>Required</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommand"></a>

```python
enable_execute_command: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_new_deployment`<sup>Required</sup> <a name="force_new_deployment" id="@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeployment"></a>

```python
force_new_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_check_grace_period_seconds`<sup>Required</sup> <a name="health_check_grace_period_seconds" id="@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSeconds"></a>

```python
health_check_grace_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iam_role`<sup>Required</sup> <a name="iam_role" id="@cdktf/provider-aws.ecsService.EcsService.property.iamRole"></a>

```python
iam_role: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `launch_type`<sup>Required</sup> <a name="launch_type" id="@cdktf/provider-aws.ecsService.EcsService.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-aws.ecsService.EcsService.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `propagate_tags`<sup>Required</sup> <a name="propagate_tags" id="@cdktf/provider-aws.ecsService.EcsService.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

---

##### `scheduling_strategy`<sup>Required</sup> <a name="scheduling_strategy" id="@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategy"></a>

```python
scheduling_strategy: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsService.EcsService.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_definition`<sup>Required</sup> <a name="task_definition" id="@cdktf/provider-aws.ecsService.EcsService.property.taskDefinition"></a>

```python
task_definition: str
```

- *Type:* str

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.ecsService.EcsService.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `wait_for_steady_state`<sup>Required</sup> <a name="wait_for_steady_state" id="@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyState"></a>

```python
wait_for_steady_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsService.EcsService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcsServiceAlarms <a name="EcsServiceAlarms" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceAlarms(
  alarm_names: typing.List[str],
  enable: typing.Union[bool, IResolvable],
  rollback: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.alarmNames">alarm_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarm_names EcsService#alarm_names}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.rollback">rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}. |

---

##### `alarm_names`<sup>Required</sup> <a name="alarm_names" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.alarmNames"></a>

```python
alarm_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarm_names EcsService#alarm_names}.

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}.

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.rollback"></a>

```python
rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}.

---

### EcsServiceCapacityProviderStrategy <a name="EcsServiceCapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceCapacityProviderStrategy(
  capacity_provider: str,
  base: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#capacity_provider EcsService#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.base">base</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#base EcsService#base}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#weight EcsService#weight}. |

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#capacity_provider EcsService#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#base EcsService#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#weight EcsService#weight}.

---

### EcsServiceConfig <a name="EcsServiceConfig" id="@cdktf/provider-aws.ecsService.EcsServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  alarms: EcsServiceAlarms = None,
  capacity_provider_strategy: typing.Union[IResolvable, typing.List[EcsServiceCapacityProviderStrategy]] = None,
  cluster: str = None,
  deployment_circuit_breaker: EcsServiceDeploymentCircuitBreaker = None,
  deployment_controller: EcsServiceDeploymentController = None,
  deployment_maximum_percent: typing.Union[int, float] = None,
  deployment_minimum_healthy_percent: typing.Union[int, float] = None,
  desired_count: typing.Union[int, float] = None,
  enable_ecs_managed_tags: typing.Union[bool, IResolvable] = None,
  enable_execute_command: typing.Union[bool, IResolvable] = None,
  force_new_deployment: typing.Union[bool, IResolvable] = None,
  health_check_grace_period_seconds: typing.Union[int, float] = None,
  iam_role: str = None,
  id: str = None,
  launch_type: str = None,
  load_balancer: typing.Union[IResolvable, typing.List[EcsServiceLoadBalancer]] = None,
  network_configuration: EcsServiceNetworkConfiguration = None,
  ordered_placement_strategy: typing.Union[IResolvable, typing.List[EcsServiceOrderedPlacementStrategy]] = None,
  placement_constraints: typing.Union[IResolvable, typing.List[EcsServicePlacementConstraints]] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  scheduling_strategy: str = None,
  service_connect_configuration: EcsServiceServiceConnectConfiguration = None,
  service_registries: EcsServiceServiceRegistries = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  task_definition: str = None,
  timeouts: EcsServiceTimeouts = None,
  triggers: typing.Mapping[str] = None,
  wait_for_steady_state: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.alarms">alarms</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | alarms block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>]]</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.cluster">cluster</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#cluster EcsService#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentCircuitBreaker">deployment_circuit_breaker</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | deployment_circuit_breaker block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentController">deployment_controller</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | deployment_controller block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMaximumPercent">deployment_maximum_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMinimumHealthyPercent">deployment_minimum_healthy_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.desiredCount">desired_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#desired_count EcsService#desired_count}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableExecuteCommand">enable_execute_command</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_execute_command EcsService#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forceNewDeployment">force_new_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#force_new_deployment EcsService#force_new_deployment}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.healthCheckGracePeriodSeconds">health_check_grace_period_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.iamRole">iam_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#iam_role EcsService#iam_role}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#id EcsService#id}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.launchType">launch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#launch_type EcsService#launch_type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.loadBalancer">load_balancer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>]]</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.orderedPlacementStrategy">ordered_placement_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>]]</code> | ordered_placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.placementConstraints">placement_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>]]</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.platformVersion">platform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#platform_version EcsService#platform_version}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.propagateTags">propagate_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#propagate_tags EcsService#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.schedulingStrategy">scheduling_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#scheduling_strategy EcsService#scheduling_strategy}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceConnectConfiguration">service_connect_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | service_connect_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceRegistries">service_registries</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | service_registries block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags EcsService#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags_all EcsService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.taskDefinition">task_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#task_definition EcsService#task_definition}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#triggers EcsService#triggers}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.waitForSteadyState">wait_for_steady_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}.

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.alarms"></a>

```python
alarms: EcsServiceAlarms
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

alarms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarms EcsService#alarms}

---

##### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: typing.Union[IResolvable, typing.List[EcsServiceCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>]]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#capacity_provider_strategy EcsService#capacity_provider_strategy}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#cluster EcsService#cluster}.

---

##### `deployment_circuit_breaker`<sup>Optional</sup> <a name="deployment_circuit_breaker" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentCircuitBreaker"></a>

```python
deployment_circuit_breaker: EcsServiceDeploymentCircuitBreaker
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

deployment_circuit_breaker block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_circuit_breaker EcsService#deployment_circuit_breaker}

---

##### `deployment_controller`<sup>Optional</sup> <a name="deployment_controller" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentController"></a>

```python
deployment_controller: EcsServiceDeploymentController
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

deployment_controller block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_controller EcsService#deployment_controller}

---

##### `deployment_maximum_percent`<sup>Optional</sup> <a name="deployment_maximum_percent" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMaximumPercent"></a>

```python
deployment_maximum_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}.

---

##### `deployment_minimum_healthy_percent`<sup>Optional</sup> <a name="deployment_minimum_healthy_percent" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMinimumHealthyPercent"></a>

```python
deployment_minimum_healthy_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}.

---

##### `desired_count`<sup>Optional</sup> <a name="desired_count" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.desiredCount"></a>

```python
desired_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#desired_count EcsService#desired_count}.

---

##### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}.

---

##### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableExecuteCommand"></a>

```python
enable_execute_command: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_execute_command EcsService#enable_execute_command}.

---

##### `force_new_deployment`<sup>Optional</sup> <a name="force_new_deployment" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forceNewDeployment"></a>

```python
force_new_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#force_new_deployment EcsService#force_new_deployment}.

---

##### `health_check_grace_period_seconds`<sup>Optional</sup> <a name="health_check_grace_period_seconds" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.healthCheckGracePeriodSeconds"></a>

```python
health_check_grace_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}.

---

##### `iam_role`<sup>Optional</sup> <a name="iam_role" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.iamRole"></a>

```python
iam_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#iam_role EcsService#iam_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#id EcsService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#launch_type EcsService#launch_type}.

---

##### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.loadBalancer"></a>

```python
load_balancer: typing.Union[IResolvable, typing.List[EcsServiceLoadBalancer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>]]

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#load_balancer EcsService#load_balancer}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.networkConfiguration"></a>

```python
network_configuration: EcsServiceNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#network_configuration EcsService#network_configuration}

---

##### `ordered_placement_strategy`<sup>Optional</sup> <a name="ordered_placement_strategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.orderedPlacementStrategy"></a>

```python
ordered_placement_strategy: typing.Union[IResolvable, typing.List[EcsServiceOrderedPlacementStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>]]

ordered_placement_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#ordered_placement_strategy EcsService#ordered_placement_strategy}

---

##### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.placementConstraints"></a>

```python
placement_constraints: typing.Union[IResolvable, typing.List[EcsServicePlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>]]

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#placement_constraints EcsService#placement_constraints}

---

##### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#platform_version EcsService#platform_version}.

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#propagate_tags EcsService#propagate_tags}.

---

##### `scheduling_strategy`<sup>Optional</sup> <a name="scheduling_strategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.schedulingStrategy"></a>

```python
scheduling_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#scheduling_strategy EcsService#scheduling_strategy}.

---

##### `service_connect_configuration`<sup>Optional</sup> <a name="service_connect_configuration" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceConnectConfiguration"></a>

```python
service_connect_configuration: EcsServiceServiceConnectConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

service_connect_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service_connect_configuration EcsService#service_connect_configuration}

---

##### `service_registries`<sup>Optional</sup> <a name="service_registries" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceRegistries"></a>

```python
service_registries: EcsServiceServiceRegistries
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

service_registries block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service_registries EcsService#service_registries}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags EcsService#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags_all EcsService#tags_all}.

---

##### `task_definition`<sup>Optional</sup> <a name="task_definition" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.taskDefinition"></a>

```python
task_definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#task_definition EcsService#task_definition}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.timeouts"></a>

```python
timeouts: EcsServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#timeouts EcsService#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#triggers EcsService#triggers}.

---

##### `wait_for_steady_state`<sup>Optional</sup> <a name="wait_for_steady_state" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.waitForSteadyState"></a>

```python
wait_for_steady_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}.

---

### EcsServiceDeploymentCircuitBreaker <a name="EcsServiceDeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceDeploymentCircuitBreaker(
  enable: typing.Union[bool, IResolvable],
  rollback: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.rollback">rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}.

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.rollback"></a>

```python
rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}.

---

### EcsServiceDeploymentController <a name="EcsServiceDeploymentController" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceDeploymentController(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}.

---

### EcsServiceLoadBalancer <a name="EcsServiceLoadBalancer" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceLoadBalancer(
  container_name: str,
  container_port: typing.Union[int, float],
  elb_name: str = None,
  target_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.elbName">elb_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#elb_name EcsService#elb_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#target_group_arn EcsService#target_group_arn}. |

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}.

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}.

---

##### `elb_name`<sup>Optional</sup> <a name="elb_name" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.elbName"></a>

```python
elb_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#elb_name EcsService#elb_name}.

---

##### `target_group_arn`<sup>Optional</sup> <a name="target_group_arn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#target_group_arn EcsService#target_group_arn}.

---

### EcsServiceNetworkConfiguration <a name="EcsServiceNetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceNetworkConfiguration(
  subnets: typing.List[str],
  assign_public_ip: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#subnets EcsService#subnets}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#assign_public_ip EcsService#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#security_groups EcsService#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#subnets EcsService#subnets}.

---

##### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#assign_public_ip EcsService#assign_public_ip}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#security_groups EcsService#security_groups}.

---

### EcsServiceOrderedPlacementStrategy <a name="EcsServiceOrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceOrderedPlacementStrategy(
  type: str,
  field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#field EcsService#field}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.field"></a>

```python
field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#field EcsService#field}.

---

### EcsServicePlacementConstraints <a name="EcsServicePlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServicePlacementConstraints(
  type: str,
  expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#expression EcsService#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#expression EcsService#expression}.

---

### EcsServiceServiceConnectConfiguration <a name="EcsServiceServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfiguration(
  enabled: typing.Union[bool, IResolvable],
  log_configuration: EcsServiceServiceConnectConfigurationLogConfiguration = None,
  namespace: str = None,
  service: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationService]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enabled EcsService#enabled}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#namespace EcsService#namespace}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.service">service</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>]]</code> | service block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enabled EcsService#enabled}.

---

##### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.logConfiguration"></a>

```python
log_configuration: EcsServiceServiceConnectConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#log_configuration EcsService#log_configuration}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#namespace EcsService#namespace}.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.service"></a>

```python
service: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationService]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>]]

service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service EcsService#service}

---

### EcsServiceServiceConnectConfigurationLogConfiguration <a name="EcsServiceServiceConnectConfigurationLogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfigurationLogConfiguration(
  log_driver: str,
  options: typing.Mapping[str] = None,
  secret_option: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationLogConfigurationSecretOption]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.logDriver">log_driver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#log_driver EcsService#log_driver}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#options EcsService#options}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.secretOption">secret_option</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>]]</code> | secret_option block. |

---

##### `log_driver`<sup>Required</sup> <a name="log_driver" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.logDriver"></a>

```python
log_driver: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#log_driver EcsService#log_driver}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#options EcsService#options}.

---

##### `secret_option`<sup>Optional</sup> <a name="secret_option" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.secretOption"></a>

```python
secret_option: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationLogConfigurationSecretOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>]]

secret_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#secret_option EcsService#secret_option}

---

### EcsServiceServiceConnectConfigurationLogConfigurationSecretOption <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption(
  name: str,
  value_from: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.valueFrom">value_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#value_from EcsService#value_from}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}.

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#value_from EcsService#value_from}.

---

### EcsServiceServiceConnectConfigurationService <a name="EcsServiceServiceConnectConfigurationService" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfigurationService(
  port_name: str,
  client_alias: EcsServiceServiceConnectConfigurationServiceClientAlias = None,
  discovery_name: str = None,
  ingress_port_override: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.portName">port_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port_name EcsService#port_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.clientAlias">client_alias</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | client_alias block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.discoveryName">discovery_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#discovery_name EcsService#discovery_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.ingressPortOverride">ingress_port_override</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#ingress_port_override EcsService#ingress_port_override}. |

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port_name EcsService#port_name}.

---

##### `client_alias`<sup>Optional</sup> <a name="client_alias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.clientAlias"></a>

```python
client_alias: EcsServiceServiceConnectConfigurationServiceClientAlias
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

client_alias block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#client_alias EcsService#client_alias}

---

##### `discovery_name`<sup>Optional</sup> <a name="discovery_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.discoveryName"></a>

```python
discovery_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#discovery_name EcsService#discovery_name}.

---

##### `ingress_port_override`<sup>Optional</sup> <a name="ingress_port_override" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.ingressPortOverride"></a>

```python
ingress_port_override: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#ingress_port_override EcsService#ingress_port_override}.

---

### EcsServiceServiceConnectConfigurationServiceClientAlias <a name="EcsServiceServiceConnectConfigurationServiceClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias(
  port: typing.Union[int, float],
  dns_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.dnsName">dns_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#dns_name EcsService#dns_name}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}.

---

##### `dns_name`<sup>Optional</sup> <a name="dns_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#dns_name EcsService#dns_name}.

---

### EcsServiceServiceRegistries <a name="EcsServiceServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceRegistries(
  registry_arn: str,
  container_name: str = None,
  container_port: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.registryArn">registry_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#registry_arn EcsService#registry_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}. |

---

##### `registry_arn`<sup>Required</sup> <a name="registry_arn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.registryArn"></a>

```python
registry_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#registry_arn EcsService#registry_arn}.

---

##### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}.

---

##### `container_port`<sup>Optional</sup> <a name="container_port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}.

---

### EcsServiceTimeouts <a name="EcsServiceTimeouts" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#create EcsService#create}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#delete EcsService#delete}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#update EcsService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#create EcsService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#delete EcsService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#update EcsService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsServiceAlarmsOutputReference <a name="EcsServiceAlarmsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceAlarmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNamesInput">alarm_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollbackInput">rollback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNames">alarm_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollback">rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_names_input`<sup>Optional</sup> <a name="alarm_names_input" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNamesInput"></a>

```python
alarm_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rollback_input`<sup>Optional</sup> <a name="rollback_input" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollbackInput"></a>

```python
rollback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alarm_names`<sup>Required</sup> <a name="alarm_names" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNames"></a>

```python
alarm_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollback"></a>

```python
rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.internalValue"></a>

```python
internal_value: EcsServiceAlarms
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

---


### EcsServiceCapacityProviderStrategyList <a name="EcsServiceCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceCapacityProviderStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsServiceCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcsServiceCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>]]

---


### EcsServiceCapacityProviderStrategyOutputReference <a name="EcsServiceCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceCapacityProviderStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetBase">reset_base</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base` <a name="reset_base" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetBase"></a>

```python
def reset_base() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.baseInput">base_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_input`<sup>Optional</sup> <a name="base_input" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.baseInput"></a>

```python
base_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider_input`<sup>Optional</sup> <a name="capacity_provider_input" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```python
capacity_provider_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcsServiceCapacityProviderStrategy, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>, cdktf.IResolvable]

---


### EcsServiceDeploymentCircuitBreakerOutputReference <a name="EcsServiceDeploymentCircuitBreakerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceDeploymentCircuitBreakerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollbackInput">rollback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollback">rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rollback_input`<sup>Optional</sup> <a name="rollback_input" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollbackInput"></a>

```python
rollback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollback"></a>

```python
rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.internalValue"></a>

```python
internal_value: EcsServiceDeploymentCircuitBreaker
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

---


### EcsServiceDeploymentControllerOutputReference <a name="EcsServiceDeploymentControllerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceDeploymentControllerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.internalValue"></a>

```python
internal_value: EcsServiceDeploymentController
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

---


### EcsServiceLoadBalancerList <a name="EcsServiceLoadBalancerList" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceLoadBalancerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsServiceLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcsServiceLoadBalancer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>]]

---


### EcsServiceLoadBalancerOutputReference <a name="EcsServiceLoadBalancerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceLoadBalancerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetElbName">reset_elb_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetTargetGroupArn">reset_target_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_elb_name` <a name="reset_elb_name" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetElbName"></a>

```python
def reset_elb_name() -> None
```

##### `reset_target_group_arn` <a name="reset_target_group_arn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetTargetGroupArn"></a>

```python
def reset_target_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPortInput">container_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbNameInput">elb_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArnInput">target_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbName">elb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `container_port_input`<sup>Optional</sup> <a name="container_port_input" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPortInput"></a>

```python
container_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `elb_name_input`<sup>Optional</sup> <a name="elb_name_input" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbNameInput"></a>

```python
elb_name_input: str
```

- *Type:* str

---

##### `target_group_arn_input`<sup>Optional</sup> <a name="target_group_arn_input" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArnInput"></a>

```python
target_group_arn_input: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `elb_name`<sup>Required</sup> <a name="elb_name" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbName"></a>

```python
elb_name: str
```

- *Type:* str

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcsServiceLoadBalancer, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>, cdktf.IResolvable]

---


### EcsServiceNetworkConfigurationOutputReference <a name="EcsServiceNetworkConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetAssignPublicIp">reset_assign_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assign_public_ip` <a name="reset_assign_public_ip" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```python
def reset_assign_public_ip() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIpInput">assign_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assign_public_ip_input`<sup>Optional</sup> <a name="assign_public_ip_input" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```python
assign_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcsServiceNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

---


### EcsServiceOrderedPlacementStrategyList <a name="EcsServiceOrderedPlacementStrategyList" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceOrderedPlacementStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsServiceOrderedPlacementStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcsServiceOrderedPlacementStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>]]

---


### EcsServiceOrderedPlacementStrategyOutputReference <a name="EcsServiceOrderedPlacementStrategyOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceOrderedPlacementStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resetField">reset_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field` <a name="reset_field" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resetField"></a>

```python
def reset_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcsServiceOrderedPlacementStrategy, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>, cdktf.IResolvable]

---


### EcsServicePlacementConstraintsList <a name="EcsServicePlacementConstraintsList" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServicePlacementConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsServicePlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcsServicePlacementConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>]]

---


### EcsServicePlacementConstraintsOutputReference <a name="EcsServicePlacementConstraintsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServicePlacementConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcsServicePlacementConstraints, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>, cdktf.IResolvable]

---


### EcsServiceServiceConnectConfigurationLogConfigurationOutputReference <a name="EcsServiceServiceConnectConfigurationLogConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption">put_secret_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetSecretOption">reset_secret_option</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_option` <a name="put_secret_option" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption"></a>

```python
def put_secret_option(
  value: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationLogConfigurationSecretOption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>]]

---

##### `reset_options` <a name="reset_options" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_secret_option` <a name="reset_secret_option" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetSecretOption"></a>

```python
def reset_secret_option() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOption">secret_option</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList">EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriverInput">log_driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptionInput">secret_option_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver">log_driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_option`<sup>Required</sup> <a name="secret_option" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOption"></a>

```python
secret_option: EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList">EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList</a>

---

##### `log_driver_input`<sup>Optional</sup> <a name="log_driver_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriverInput"></a>

```python
log_driver_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_option_input`<sup>Optional</sup> <a name="secret_option_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptionInput"></a>

```python
secret_option_input: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationLogConfigurationSecretOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>]]

---

##### `log_driver`<sup>Required</sup> <a name="log_driver" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver"></a>

```python
log_driver: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcsServiceServiceConnectConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

---


### EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationLogConfigurationSecretOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>]]

---


### EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFromInput">value_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFrom">value_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_from_input`<sup>Optional</sup> <a name="value_from_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFromInput"></a>

```python
value_from_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcsServiceServiceConnectConfigurationLogConfigurationSecretOption, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>, cdktf.IResolvable]

---


### EcsServiceServiceConnectConfigurationOutputReference <a name="EcsServiceServiceConnectConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration">put_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService">put_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetLogConfiguration">reset_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_configuration` <a name="put_log_configuration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration"></a>

```python
def put_log_configuration(
  log_driver: str,
  options: typing.Mapping[str] = None,
  secret_option: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationLogConfigurationSecretOption]] = None
) -> None
```

###### `log_driver`<sup>Required</sup> <a name="log_driver" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration.parameter.logDriver"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#log_driver EcsService#log_driver}.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration.parameter.options"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#options EcsService#options}.

---

###### `secret_option`<sup>Optional</sup> <a name="secret_option" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration.parameter.secretOption"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>]]

secret_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#secret_option EcsService#secret_option}

---

##### `put_service` <a name="put_service" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService"></a>

```python
def put_service(
  value: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationService]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>]]

---

##### `reset_log_configuration` <a name="reset_log_configuration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetLogConfiguration"></a>

```python
def reset_log_configuration() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference">EcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.service">service</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList">EcsServiceServiceConnectConfigurationServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfigurationInput">log_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.serviceInput">service_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_configuration`<sup>Required</sup> <a name="log_configuration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration"></a>

```python
log_configuration: EcsServiceServiceConnectConfigurationLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference">EcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.service"></a>

```python
service: EcsServiceServiceConnectConfigurationServiceList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList">EcsServiceServiceConnectConfigurationServiceList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_configuration_input`<sup>Optional</sup> <a name="log_configuration_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfigurationInput"></a>

```python
log_configuration_input: EcsServiceServiceConnectConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.serviceInput"></a>

```python
service_input: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationService]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcsServiceServiceConnectConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

---


### EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference <a name="EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resetDnsName">reset_dns_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_name` <a name="reset_dns_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resetDnsName"></a>

```python
def reset_dns_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsNameInput">dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name_input`<sup>Optional</sup> <a name="dns_name_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsNameInput"></a>

```python
dns_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.internalValue"></a>

```python
internal_value: EcsServiceServiceConnectConfigurationServiceClientAlias
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

---


### EcsServiceServiceConnectConfigurationServiceList <a name="EcsServiceServiceConnectConfigurationServiceList" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfigurationServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsServiceServiceConnectConfigurationServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcsServiceServiceConnectConfigurationService]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>]]

---


### EcsServiceServiceConnectConfigurationServiceOutputReference <a name="EcsServiceServiceConnectConfigurationServiceOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias">put_client_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetClientAlias">reset_client_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetDiscoveryName">reset_discovery_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetIngressPortOverride">reset_ingress_port_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_alias` <a name="put_client_alias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias"></a>

```python
def put_client_alias(
  port: typing.Union[int, float],
  dns_name: str = None
) -> None
```

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}.

---

###### `dns_name`<sup>Optional</sup> <a name="dns_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias.parameter.dnsName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#dns_name EcsService#dns_name}.

---

##### `reset_client_alias` <a name="reset_client_alias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetClientAlias"></a>

```python
def reset_client_alias() -> None
```

##### `reset_discovery_name` <a name="reset_discovery_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetDiscoveryName"></a>

```python
def reset_discovery_name() -> None
```

##### `reset_ingress_port_override` <a name="reset_ingress_port_override" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetIngressPortOverride"></a>

```python
def reset_ingress_port_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAlias">client_alias</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAliasInput">client_alias_input</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryNameInput">discovery_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverrideInput">ingress_port_override_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryName">discovery_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverride">ingress_port_override</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_alias`<sup>Required</sup> <a name="client_alias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAlias"></a>

```python
client_alias: EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference</a>

---

##### `client_alias_input`<sup>Optional</sup> <a name="client_alias_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAliasInput"></a>

```python
client_alias_input: EcsServiceServiceConnectConfigurationServiceClientAlias
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

---

##### `discovery_name_input`<sup>Optional</sup> <a name="discovery_name_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryNameInput"></a>

```python
discovery_name_input: str
```

- *Type:* str

---

##### `ingress_port_override_input`<sup>Optional</sup> <a name="ingress_port_override_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverrideInput"></a>

```python
ingress_port_override_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `discovery_name`<sup>Required</sup> <a name="discovery_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryName"></a>

```python
discovery_name: str
```

- *Type:* str

---

##### `ingress_port_override`<sup>Required</sup> <a name="ingress_port_override" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverride"></a>

```python
ingress_port_override: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcsServiceServiceConnectConfigurationService, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>, cdktf.IResolvable]

---


### EcsServiceServiceRegistriesOutputReference <a name="EcsServiceServiceRegistriesOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceServiceRegistriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerName">reset_container_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerPort">reset_container_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_name` <a name="reset_container_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerName"></a>

```python
def reset_container_name() -> None
```

##### `reset_container_port` <a name="reset_container_port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerPort"></a>

```python
def reset_container_port() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPortInput">container_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArnInput">registry_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArn">registry_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `container_port_input`<sup>Optional</sup> <a name="container_port_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPortInput"></a>

```python
container_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `registry_arn_input`<sup>Optional</sup> <a name="registry_arn_input" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArnInput"></a>

```python
registry_arn_input: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `registry_arn`<sup>Required</sup> <a name="registry_arn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArn"></a>

```python
registry_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.internalValue"></a>

```python
internal_value: EcsServiceServiceRegistries
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

---


### EcsServiceTimeoutsOutputReference <a name="EcsServiceTimeoutsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecs_service

ecsService.EcsServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcsServiceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>, cdktf.IResolvable]

---



