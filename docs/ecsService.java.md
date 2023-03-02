# `ecsService` Submodule <a name="`ecsService` Submodule" id="@cdktf/provider-aws.ecsService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsService <a name="EcsService" id="@cdktf/provider-aws.ecsService.EcsService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_service aws_ecs_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsService;

EcsService.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .alarms(EcsServiceAlarms)
//  .capacityProviderStrategy(IResolvable)
//  .capacityProviderStrategy(java.util.List<EcsServiceCapacityProviderStrategy>)
//  .cluster(java.lang.String)
//  .deploymentCircuitBreaker(EcsServiceDeploymentCircuitBreaker)
//  .deploymentController(EcsServiceDeploymentController)
//  .deploymentMaximumPercent(java.lang.Number)
//  .deploymentMinimumHealthyPercent(java.lang.Number)
//  .desiredCount(java.lang.Number)
//  .enableEcsManagedTags(java.lang.Boolean)
//  .enableEcsManagedTags(IResolvable)
//  .enableExecuteCommand(java.lang.Boolean)
//  .enableExecuteCommand(IResolvable)
//  .forceNewDeployment(java.lang.Boolean)
//  .forceNewDeployment(IResolvable)
//  .healthCheckGracePeriodSeconds(java.lang.Number)
//  .iamRole(java.lang.String)
//  .id(java.lang.String)
//  .launchType(java.lang.String)
//  .loadBalancer(IResolvable)
//  .loadBalancer(java.util.List<EcsServiceLoadBalancer>)
//  .networkConfiguration(EcsServiceNetworkConfiguration)
//  .orderedPlacementStrategy(IResolvable)
//  .orderedPlacementStrategy(java.util.List<EcsServiceOrderedPlacementStrategy>)
//  .placementConstraints(IResolvable)
//  .placementConstraints(java.util.List<EcsServicePlacementConstraints>)
//  .platformVersion(java.lang.String)
//  .propagateTags(java.lang.String)
//  .schedulingStrategy(java.lang.String)
//  .serviceConnectConfiguration(EcsServiceServiceConnectConfiguration)
//  .serviceRegistries(EcsServiceServiceRegistries)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .taskDefinition(java.lang.String)
//  .timeouts(EcsServiceTimeouts)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
//  .waitForSteadyState(java.lang.Boolean)
//  .waitForSteadyState(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.alarms">alarms</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | alarms block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>></code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#cluster EcsService#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentCircuitBreaker">deploymentCircuitBreaker</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | deployment_circuit_breaker block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentController">deploymentController</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | deployment_controller block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentMaximumPercent">deploymentMaximumPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentMinimumHealthyPercent">deploymentMinimumHealthyPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.desiredCount">desiredCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#desired_count EcsService#desired_count}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_execute_command EcsService#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.forceNewDeployment">forceNewDeployment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#force_new_deployment EcsService#force_new_deployment}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.healthCheckGracePeriodSeconds">healthCheckGracePeriodSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.iamRole">iamRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#iam_role EcsService#iam_role}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#id EcsService#id}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.launchType">launchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#launch_type EcsService#launch_type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.loadBalancer">loadBalancer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.orderedPlacementStrategy">orderedPlacementStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>></code> | ordered_placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.placementConstraints">placementConstraints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>></code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#platform_version EcsService#platform_version}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#propagate_tags EcsService#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.schedulingStrategy">schedulingStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#scheduling_strategy EcsService#scheduling_strategy}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.serviceConnectConfiguration">serviceConnectConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | service_connect_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | service_registries block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags EcsService#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags_all EcsService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#task_definition EcsService#task_definition}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#triggers EcsService#triggers}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.waitForSteadyState">waitForSteadyState</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}.

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.alarms"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

alarms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarms EcsService#alarms}

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.capacityProviderStrategy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>>

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#capacity_provider_strategy EcsService#capacity_provider_strategy}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#cluster EcsService#cluster}.

---

##### `deploymentCircuitBreaker`<sup>Optional</sup> <a name="deploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentCircuitBreaker"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

deployment_circuit_breaker block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_circuit_breaker EcsService#deployment_circuit_breaker}

---

##### `deploymentController`<sup>Optional</sup> <a name="deploymentController" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentController"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

deployment_controller block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_controller EcsService#deployment_controller}

---

##### `deploymentMaximumPercent`<sup>Optional</sup> <a name="deploymentMaximumPercent" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentMaximumPercent"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}.

---

##### `deploymentMinimumHealthyPercent`<sup>Optional</sup> <a name="deploymentMinimumHealthyPercent" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.deploymentMinimumHealthyPercent"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}.

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.desiredCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#desired_count EcsService#desired_count}.

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.enableEcsManagedTags"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.enableExecuteCommand"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_execute_command EcsService#enable_execute_command}.

---

##### `forceNewDeployment`<sup>Optional</sup> <a name="forceNewDeployment" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.forceNewDeployment"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#force_new_deployment EcsService#force_new_deployment}.

---

##### `healthCheckGracePeriodSeconds`<sup>Optional</sup> <a name="healthCheckGracePeriodSeconds" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.healthCheckGracePeriodSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}.

---

##### `iamRole`<sup>Optional</sup> <a name="iamRole" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.iamRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#iam_role EcsService#iam_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#id EcsService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.launchType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#launch_type EcsService#launch_type}.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.loadBalancer"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>>

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#load_balancer EcsService#load_balancer}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#network_configuration EcsService#network_configuration}

---

##### `orderedPlacementStrategy`<sup>Optional</sup> <a name="orderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.orderedPlacementStrategy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>>

ordered_placement_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#ordered_placement_strategy EcsService#ordered_placement_strategy}

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.placementConstraints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>>

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#placement_constraints EcsService#placement_constraints}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.platformVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#platform_version EcsService#platform_version}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.propagateTags"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#propagate_tags EcsService#propagate_tags}.

---

##### `schedulingStrategy`<sup>Optional</sup> <a name="schedulingStrategy" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.schedulingStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#scheduling_strategy EcsService#scheduling_strategy}.

---

##### `serviceConnectConfiguration`<sup>Optional</sup> <a name="serviceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.serviceConnectConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

service_connect_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service_connect_configuration EcsService#service_connect_configuration}

---

##### `serviceRegistries`<sup>Optional</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.serviceRegistries"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

service_registries block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service_registries EcsService#service_registries}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags EcsService#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags_all EcsService#tags_all}.

---

##### `taskDefinition`<sup>Optional</sup> <a name="taskDefinition" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.taskDefinition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#task_definition EcsService#task_definition}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#timeouts EcsService#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.triggers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#triggers EcsService#triggers}.

---

##### `waitForSteadyState`<sup>Optional</sup> <a name="waitForSteadyState" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.waitForSteadyState"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putAlarms">putAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker">putDeploymentCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putDeploymentController">putDeploymentController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy">putOrderedPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints">putPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration">putServiceConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries">putServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentCircuitBreaker">resetDeploymentCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentController">resetDeploymentController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMaximumPercent">resetDeploymentMaximumPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMinimumHealthyPercent">resetDeploymentMinimumHealthyPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDesiredCount">resetDesiredCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetEnableEcsManagedTags">resetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetEnableExecuteCommand">resetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetForceNewDeployment">resetForceNewDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetHealthCheckGracePeriodSeconds">resetHealthCheckGracePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetIamRole">resetIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetOrderedPlacementStrategy">resetOrderedPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPlacementConstraints">resetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetSchedulingStrategy">resetSchedulingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetServiceConnectConfiguration">resetServiceConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetServiceRegistries">resetServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTaskDefinition">resetTaskDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTriggers">resetTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetWaitForSteadyState">resetWaitForSteadyState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecsService.EcsService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsService.EcsService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecsService.EcsService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecsService.EcsService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecsService.EcsService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAlarms` <a name="putAlarms" id="@cdktf/provider-aws.ecsService.EcsService.putAlarms"></a>

```java
public void putAlarms(EcsServiceAlarms value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putAlarms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

---

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy"></a>

```java
public void putCapacityProviderStrategy(IResolvable OR java.util.List<EcsServiceCapacityProviderStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>>

---

##### `putDeploymentCircuitBreaker` <a name="putDeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker"></a>

```java
public void putDeploymentCircuitBreaker(EcsServiceDeploymentCircuitBreaker value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

---

##### `putDeploymentController` <a name="putDeploymentController" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentController"></a>

```java
public void putDeploymentController(EcsServiceDeploymentController value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer"></a>

```java
public void putLoadBalancer(IResolvable OR java.util.List<EcsServiceLoadBalancer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(EcsServiceNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

---

##### `putOrderedPlacementStrategy` <a name="putOrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy"></a>

```java
public void putOrderedPlacementStrategy(IResolvable OR java.util.List<EcsServiceOrderedPlacementStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>>

---

##### `putPlacementConstraints` <a name="putPlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints"></a>

```java
public void putPlacementConstraints(IResolvable OR java.util.List<EcsServicePlacementConstraints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>>

---

##### `putServiceConnectConfiguration` <a name="putServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration"></a>

```java
public void putServiceConnectConfiguration(EcsServiceServiceConnectConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

---

##### `putServiceRegistries` <a name="putServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries"></a>

```java
public void putServiceRegistries(EcsServiceServiceRegistries value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ecsService.EcsService.putTimeouts"></a>

```java
public void putTimeouts(EcsServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>

---

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.ecsService.EcsService.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsService.resetCapacityProviderStrategy"></a>

```java
public void resetCapacityProviderStrategy()
```

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-aws.ecsService.EcsService.resetCluster"></a>

```java
public void resetCluster()
```

##### `resetDeploymentCircuitBreaker` <a name="resetDeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentCircuitBreaker"></a>

```java
public void resetDeploymentCircuitBreaker()
```

##### `resetDeploymentController` <a name="resetDeploymentController" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentController"></a>

```java
public void resetDeploymentController()
```

##### `resetDeploymentMaximumPercent` <a name="resetDeploymentMaximumPercent" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMaximumPercent"></a>

```java
public void resetDeploymentMaximumPercent()
```

##### `resetDeploymentMinimumHealthyPercent` <a name="resetDeploymentMinimumHealthyPercent" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMinimumHealthyPercent"></a>

```java
public void resetDeploymentMinimumHealthyPercent()
```

##### `resetDesiredCount` <a name="resetDesiredCount" id="@cdktf/provider-aws.ecsService.EcsService.resetDesiredCount"></a>

```java
public void resetDesiredCount()
```

##### `resetEnableEcsManagedTags` <a name="resetEnableEcsManagedTags" id="@cdktf/provider-aws.ecsService.EcsService.resetEnableEcsManagedTags"></a>

```java
public void resetEnableEcsManagedTags()
```

##### `resetEnableExecuteCommand` <a name="resetEnableExecuteCommand" id="@cdktf/provider-aws.ecsService.EcsService.resetEnableExecuteCommand"></a>

```java
public void resetEnableExecuteCommand()
```

##### `resetForceNewDeployment` <a name="resetForceNewDeployment" id="@cdktf/provider-aws.ecsService.EcsService.resetForceNewDeployment"></a>

```java
public void resetForceNewDeployment()
```

##### `resetHealthCheckGracePeriodSeconds` <a name="resetHealthCheckGracePeriodSeconds" id="@cdktf/provider-aws.ecsService.EcsService.resetHealthCheckGracePeriodSeconds"></a>

```java
public void resetHealthCheckGracePeriodSeconds()
```

##### `resetIamRole` <a name="resetIamRole" id="@cdktf/provider-aws.ecsService.EcsService.resetIamRole"></a>

```java
public void resetIamRole()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecsService.EcsService.resetId"></a>

```java
public void resetId()
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktf/provider-aws.ecsService.EcsService.resetLaunchType"></a>

```java
public void resetLaunchType()
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-aws.ecsService.EcsService.resetLoadBalancer"></a>

```java
public void resetLoadBalancer()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetOrderedPlacementStrategy` <a name="resetOrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsService.resetOrderedPlacementStrategy"></a>

```java
public void resetOrderedPlacementStrategy()
```

##### `resetPlacementConstraints` <a name="resetPlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsService.resetPlacementConstraints"></a>

```java
public void resetPlacementConstraints()
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktf/provider-aws.ecsService.EcsService.resetPlatformVersion"></a>

```java
public void resetPlatformVersion()
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktf/provider-aws.ecsService.EcsService.resetPropagateTags"></a>

```java
public void resetPropagateTags()
```

##### `resetSchedulingStrategy` <a name="resetSchedulingStrategy" id="@cdktf/provider-aws.ecsService.EcsService.resetSchedulingStrategy"></a>

```java
public void resetSchedulingStrategy()
```

##### `resetServiceConnectConfiguration` <a name="resetServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.resetServiceConnectConfiguration"></a>

```java
public void resetServiceConnectConfiguration()
```

##### `resetServiceRegistries` <a name="resetServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsService.resetServiceRegistries"></a>

```java
public void resetServiceRegistries()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecsService.EcsService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ecsService.EcsService.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTaskDefinition` <a name="resetTaskDefinition" id="@cdktf/provider-aws.ecsService.EcsService.resetTaskDefinition"></a>

```java
public void resetTaskDefinition()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ecsService.EcsService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-aws.ecsService.EcsService.resetTriggers"></a>

```java
public void resetTriggers()
```

##### `resetWaitForSteadyState` <a name="resetWaitForSteadyState" id="@cdktf/provider-aws.ecsService.EcsService.resetWaitForSteadyState"></a>

```java
public void resetWaitForSteadyState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecsService.EcsService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsService;

EcsService.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsService;

EcsService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsService;

EcsService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.alarms">alarms</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference">EcsServiceAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList">EcsServiceCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreaker">deploymentCircuitBreaker</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference">EcsServiceDeploymentCircuitBreakerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentController">deploymentController</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference">EcsServiceDeploymentControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList">EcsServiceLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference">EcsServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategy">orderedPlacementStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList">EcsServiceOrderedPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList">EcsServicePlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfiguration">serviceConnectConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference">EcsServiceServiceConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference">EcsServiceServiceRegistriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference">EcsServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.alarmsInput">alarmsInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreakerInput">deploymentCircuitBreakerInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentControllerInput">deploymentControllerInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercentInput">deploymentMaximumPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercentInput">deploymentMinimumHealthyPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.desiredCountInput">desiredCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTagsInput">enableEcsManagedTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommandInput">enableExecuteCommandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeploymentInput">forceNewDeploymentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSecondsInput">healthCheckGracePeriodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.iamRoleInput">iamRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.launchTypeInput">launchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.loadBalancerInput">loadBalancerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategyInput">orderedPlacementStrategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.placementConstraintsInput">placementConstraintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.platformVersionInput">platformVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.propagateTagsInput">propagateTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategyInput">schedulingStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfigurationInput">serviceConnectConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistriesInput">serviceRegistriesInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.taskDefinitionInput">taskDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.triggersInput">triggersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyStateInput">waitForSteadyStateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercent">deploymentMaximumPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercent">deploymentMinimumHealthyPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.desiredCount">desiredCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeployment">forceNewDeployment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSeconds">healthCheckGracePeriodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.iamRole">iamRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.launchType">launchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategy">schedulingStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyState">waitForSteadyState</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsService.EcsService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecsService.EcsService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecsService.EcsService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsService.EcsService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsService.EcsService.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsService.EcsService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsService.EcsService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsService.EcsService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsService.EcsService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsService.EcsService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.ecsService.EcsService.property.alarms"></a>

```java
public EcsServiceAlarmsOutputReference getAlarms();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference">EcsServiceAlarmsOutputReference</a>

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategy"></a>

```java
public EcsServiceCapacityProviderStrategyList getCapacityProviderStrategy();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList">EcsServiceCapacityProviderStrategyList</a>

---

##### `deploymentCircuitBreaker`<sup>Required</sup> <a name="deploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreaker"></a>

```java
public EcsServiceDeploymentCircuitBreakerOutputReference getDeploymentCircuitBreaker();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference">EcsServiceDeploymentCircuitBreakerOutputReference</a>

---

##### `deploymentController`<sup>Required</sup> <a name="deploymentController" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentController"></a>

```java
public EcsServiceDeploymentControllerOutputReference getDeploymentController();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference">EcsServiceDeploymentControllerOutputReference</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-aws.ecsService.EcsService.property.loadBalancer"></a>

```java
public EcsServiceLoadBalancerList getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList">EcsServiceLoadBalancerList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.property.networkConfiguration"></a>

```java
public EcsServiceNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference">EcsServiceNetworkConfigurationOutputReference</a>

---

##### `orderedPlacementStrategy`<sup>Required</sup> <a name="orderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategy"></a>

```java
public EcsServiceOrderedPlacementStrategyList getOrderedPlacementStrategy();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList">EcsServiceOrderedPlacementStrategyList</a>

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktf/provider-aws.ecsService.EcsService.property.placementConstraints"></a>

```java
public EcsServicePlacementConstraintsList getPlacementConstraints();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList">EcsServicePlacementConstraintsList</a>

---

##### `serviceConnectConfiguration`<sup>Required</sup> <a name="serviceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfiguration"></a>

```java
public EcsServiceServiceConnectConfigurationOutputReference getServiceConnectConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference">EcsServiceServiceConnectConfigurationOutputReference</a>

---

##### `serviceRegistries`<sup>Required</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistries"></a>

```java
public EcsServiceServiceRegistriesOutputReference getServiceRegistries();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference">EcsServiceServiceRegistriesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsService.EcsService.property.timeouts"></a>

```java
public EcsServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference">EcsServiceTimeoutsOutputReference</a>

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.alarmsInput"></a>

```java
public EcsServiceAlarms getAlarmsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategyInput"></a>

```java
public java.lang.Object getCapacityProviderStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-aws.ecsService.EcsService.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `deploymentCircuitBreakerInput`<sup>Optional</sup> <a name="deploymentCircuitBreakerInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreakerInput"></a>

```java
public EcsServiceDeploymentCircuitBreaker getDeploymentCircuitBreakerInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

---

##### `deploymentControllerInput`<sup>Optional</sup> <a name="deploymentControllerInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentControllerInput"></a>

```java
public EcsServiceDeploymentController getDeploymentControllerInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

---

##### `deploymentMaximumPercentInput`<sup>Optional</sup> <a name="deploymentMaximumPercentInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercentInput"></a>

```java
public java.lang.Number getDeploymentMaximumPercentInput();
```

- *Type:* java.lang.Number

---

##### `deploymentMinimumHealthyPercentInput`<sup>Optional</sup> <a name="deploymentMinimumHealthyPercentInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercentInput"></a>

```java
public java.lang.Number getDeploymentMinimumHealthyPercentInput();
```

- *Type:* java.lang.Number

---

##### `desiredCountInput`<sup>Optional</sup> <a name="desiredCountInput" id="@cdktf/provider-aws.ecsService.EcsService.property.desiredCountInput"></a>

```java
public java.lang.Number getDesiredCountInput();
```

- *Type:* java.lang.Number

---

##### `enableEcsManagedTagsInput`<sup>Optional</sup> <a name="enableEcsManagedTagsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTagsInput"></a>

```java
public java.lang.Object getEnableEcsManagedTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableExecuteCommandInput`<sup>Optional</sup> <a name="enableExecuteCommandInput" id="@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommandInput"></a>

```java
public java.lang.Object getEnableExecuteCommandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceNewDeploymentInput`<sup>Optional</sup> <a name="forceNewDeploymentInput" id="@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeploymentInput"></a>

```java
public java.lang.Object getForceNewDeploymentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckGracePeriodSecondsInput`<sup>Optional</sup> <a name="healthCheckGracePeriodSecondsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSecondsInput"></a>

```java
public java.lang.Number getHealthCheckGracePeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `iamRoleInput`<sup>Optional</sup> <a name="iamRoleInput" id="@cdktf/provider-aws.ecsService.EcsService.property.iamRoleInput"></a>

```java
public java.lang.String getIamRoleInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecsService.EcsService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktf/provider-aws.ecsService.EcsService.property.launchTypeInput"></a>

```java
public java.lang.String getLaunchTypeInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-aws.ecsService.EcsService.property.loadBalancerInput"></a>

```java
public java.lang.Object getLoadBalancerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsService.EcsService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsService.property.networkConfigurationInput"></a>

```java
public EcsServiceNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

---

##### `orderedPlacementStrategyInput`<sup>Optional</sup> <a name="orderedPlacementStrategyInput" id="@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategyInput"></a>

```java
public java.lang.Object getOrderedPlacementStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>>

---

##### `placementConstraintsInput`<sup>Optional</sup> <a name="placementConstraintsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.placementConstraintsInput"></a>

```java
public java.lang.Object getPlacementConstraintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>>

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-aws.ecsService.EcsService.property.platformVersionInput"></a>

```java
public java.lang.String getPlatformVersionInput();
```

- *Type:* java.lang.String

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.propagateTagsInput"></a>

```java
public java.lang.String getPropagateTagsInput();
```

- *Type:* java.lang.String

---

##### `schedulingStrategyInput`<sup>Optional</sup> <a name="schedulingStrategyInput" id="@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategyInput"></a>

```java
public java.lang.String getSchedulingStrategyInput();
```

- *Type:* java.lang.String

---

##### `serviceConnectConfigurationInput`<sup>Optional</sup> <a name="serviceConnectConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfigurationInput"></a>

```java
public EcsServiceServiceConnectConfiguration getServiceConnectConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

---

##### `serviceRegistriesInput`<sup>Optional</sup> <a name="serviceRegistriesInput" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistriesInput"></a>

```java
public EcsServiceServiceRegistries getServiceRegistriesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskDefinitionInput`<sup>Optional</sup> <a name="taskDefinitionInput" id="@cdktf/provider-aws.ecsService.EcsService.property.taskDefinitionInput"></a>

```java
public java.lang.String getTaskDefinitionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-aws.ecsService.EcsService.property.triggersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `waitForSteadyStateInput`<sup>Optional</sup> <a name="waitForSteadyStateInput" id="@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyStateInput"></a>

```java
public java.lang.Object getWaitForSteadyStateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.ecsService.EcsService.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `deploymentMaximumPercent`<sup>Required</sup> <a name="deploymentMaximumPercent" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercent"></a>

```java
public java.lang.Number getDeploymentMaximumPercent();
```

- *Type:* java.lang.Number

---

##### `deploymentMinimumHealthyPercent`<sup>Required</sup> <a name="deploymentMinimumHealthyPercent" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercent"></a>

```java
public java.lang.Number getDeploymentMinimumHealthyPercent();
```

- *Type:* java.lang.Number

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="@cdktf/provider-aws.ecsService.EcsService.property.desiredCount"></a>

```java
public java.lang.Number getDesiredCount();
```

- *Type:* java.lang.Number

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTags"></a>

```java
public java.lang.Object getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommand"></a>

```java
public java.lang.Object getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceNewDeployment`<sup>Required</sup> <a name="forceNewDeployment" id="@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeployment"></a>

```java
public java.lang.Object getForceNewDeployment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckGracePeriodSeconds`<sup>Required</sup> <a name="healthCheckGracePeriodSeconds" id="@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSeconds"></a>

```java
public java.lang.Number getHealthCheckGracePeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktf/provider-aws.ecsService.EcsService.property.iamRole"></a>

```java
public java.lang.String getIamRole();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktf/provider-aws.ecsService.EcsService.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-aws.ecsService.EcsService.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.ecsService.EcsService.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

---

##### `schedulingStrategy`<sup>Required</sup> <a name="schedulingStrategy" id="@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategy"></a>

```java
public java.lang.String getSchedulingStrategy();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsService.EcsService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.ecsService.EcsService.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.ecsService.EcsService.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `waitForSteadyState`<sup>Required</sup> <a name="waitForSteadyState" id="@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyState"></a>

```java
public java.lang.Object getWaitForSteadyState();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsService.EcsService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcsServiceAlarms <a name="EcsServiceAlarms" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceAlarms;

EcsServiceAlarms.builder()
    .alarmNames(java.util.List<java.lang.String>)
    .enable(java.lang.Boolean)
    .enable(IResolvable)
    .rollback(java.lang.Boolean)
    .rollback(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.alarmNames">alarmNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarm_names EcsService#alarm_names}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.rollback">rollback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}. |

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.alarmNames"></a>

```java
public java.util.List<java.lang.String> getAlarmNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarm_names EcsService#alarm_names}.

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}.

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.rollback"></a>

```java
public java.lang.Object getRollback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}.

---

### EcsServiceCapacityProviderStrategy <a name="EcsServiceCapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceCapacityProviderStrategy;

EcsServiceCapacityProviderStrategy.builder()
    .capacityProvider(java.lang.String)
//  .base(java.lang.Number)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#capacity_provider EcsService#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.base">base</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#base EcsService#base}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#weight EcsService#weight}. |

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#capacity_provider EcsService#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#base EcsService#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#weight EcsService#weight}.

---

### EcsServiceConfig <a name="EcsServiceConfig" id="@cdktf/provider-aws.ecsService.EcsServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceConfig;

EcsServiceConfig.builder()
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
    .name(java.lang.String)
//  .alarms(EcsServiceAlarms)
//  .capacityProviderStrategy(IResolvable)
//  .capacityProviderStrategy(java.util.List<EcsServiceCapacityProviderStrategy>)
//  .cluster(java.lang.String)
//  .deploymentCircuitBreaker(EcsServiceDeploymentCircuitBreaker)
//  .deploymentController(EcsServiceDeploymentController)
//  .deploymentMaximumPercent(java.lang.Number)
//  .deploymentMinimumHealthyPercent(java.lang.Number)
//  .desiredCount(java.lang.Number)
//  .enableEcsManagedTags(java.lang.Boolean)
//  .enableEcsManagedTags(IResolvable)
//  .enableExecuteCommand(java.lang.Boolean)
//  .enableExecuteCommand(IResolvable)
//  .forceNewDeployment(java.lang.Boolean)
//  .forceNewDeployment(IResolvable)
//  .healthCheckGracePeriodSeconds(java.lang.Number)
//  .iamRole(java.lang.String)
//  .id(java.lang.String)
//  .launchType(java.lang.String)
//  .loadBalancer(IResolvable)
//  .loadBalancer(java.util.List<EcsServiceLoadBalancer>)
//  .networkConfiguration(EcsServiceNetworkConfiguration)
//  .orderedPlacementStrategy(IResolvable)
//  .orderedPlacementStrategy(java.util.List<EcsServiceOrderedPlacementStrategy>)
//  .placementConstraints(IResolvable)
//  .placementConstraints(java.util.List<EcsServicePlacementConstraints>)
//  .platformVersion(java.lang.String)
//  .propagateTags(java.lang.String)
//  .schedulingStrategy(java.lang.String)
//  .serviceConnectConfiguration(EcsServiceServiceConnectConfiguration)
//  .serviceRegistries(EcsServiceServiceRegistries)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .taskDefinition(java.lang.String)
//  .timeouts(EcsServiceTimeouts)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
//  .waitForSteadyState(java.lang.Boolean)
//  .waitForSteadyState(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.alarms">alarms</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | alarms block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>></code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#cluster EcsService#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentCircuitBreaker">deploymentCircuitBreaker</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | deployment_circuit_breaker block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentController">deploymentController</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | deployment_controller block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMaximumPercent">deploymentMaximumPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMinimumHealthyPercent">deploymentMinimumHealthyPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.desiredCount">desiredCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#desired_count EcsService#desired_count}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_execute_command EcsService#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forceNewDeployment">forceNewDeployment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#force_new_deployment EcsService#force_new_deployment}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.healthCheckGracePeriodSeconds">healthCheckGracePeriodSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.iamRole">iamRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#iam_role EcsService#iam_role}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#id EcsService#id}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.launchType">launchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#launch_type EcsService#launch_type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.loadBalancer">loadBalancer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.orderedPlacementStrategy">orderedPlacementStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>></code> | ordered_placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.placementConstraints">placementConstraints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>></code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#platform_version EcsService#platform_version}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#propagate_tags EcsService#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.schedulingStrategy">schedulingStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#scheduling_strategy EcsService#scheduling_strategy}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceConnectConfiguration">serviceConnectConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | service_connect_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | service_registries block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags EcsService#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags_all EcsService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#task_definition EcsService#task_definition}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#triggers EcsService#triggers}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.waitForSteadyState">waitForSteadyState</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}.

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.alarms"></a>

```java
public EcsServiceAlarms getAlarms();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

alarms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarms EcsService#alarms}

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.capacityProviderStrategy"></a>

```java
public java.lang.Object getCapacityProviderStrategy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>>

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#capacity_provider_strategy EcsService#capacity_provider_strategy}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#cluster EcsService#cluster}.

---

##### `deploymentCircuitBreaker`<sup>Optional</sup> <a name="deploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentCircuitBreaker"></a>

```java
public EcsServiceDeploymentCircuitBreaker getDeploymentCircuitBreaker();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

deployment_circuit_breaker block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_circuit_breaker EcsService#deployment_circuit_breaker}

---

##### `deploymentController`<sup>Optional</sup> <a name="deploymentController" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentController"></a>

```java
public EcsServiceDeploymentController getDeploymentController();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

deployment_controller block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_controller EcsService#deployment_controller}

---

##### `deploymentMaximumPercent`<sup>Optional</sup> <a name="deploymentMaximumPercent" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMaximumPercent"></a>

```java
public java.lang.Number getDeploymentMaximumPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}.

---

##### `deploymentMinimumHealthyPercent`<sup>Optional</sup> <a name="deploymentMinimumHealthyPercent" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMinimumHealthyPercent"></a>

```java
public java.lang.Number getDeploymentMinimumHealthyPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}.

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.desiredCount"></a>

```java
public java.lang.Number getDesiredCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#desired_count EcsService#desired_count}.

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableEcsManagedTags"></a>

```java
public java.lang.Object getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableExecuteCommand"></a>

```java
public java.lang.Object getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_execute_command EcsService#enable_execute_command}.

---

##### `forceNewDeployment`<sup>Optional</sup> <a name="forceNewDeployment" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forceNewDeployment"></a>

```java
public java.lang.Object getForceNewDeployment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#force_new_deployment EcsService#force_new_deployment}.

---

##### `healthCheckGracePeriodSeconds`<sup>Optional</sup> <a name="healthCheckGracePeriodSeconds" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.healthCheckGracePeriodSeconds"></a>

```java
public java.lang.Number getHealthCheckGracePeriodSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}.

---

##### `iamRole`<sup>Optional</sup> <a name="iamRole" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.iamRole"></a>

```java
public java.lang.String getIamRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#iam_role EcsService#iam_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#id EcsService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#launch_type EcsService#launch_type}.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.loadBalancer"></a>

```java
public java.lang.Object getLoadBalancer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>>

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#load_balancer EcsService#load_balancer}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.networkConfiguration"></a>

```java
public EcsServiceNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#network_configuration EcsService#network_configuration}

---

##### `orderedPlacementStrategy`<sup>Optional</sup> <a name="orderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.orderedPlacementStrategy"></a>

```java
public java.lang.Object getOrderedPlacementStrategy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>>

ordered_placement_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#ordered_placement_strategy EcsService#ordered_placement_strategy}

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.placementConstraints"></a>

```java
public java.lang.Object getPlacementConstraints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>>

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#placement_constraints EcsService#placement_constraints}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#platform_version EcsService#platform_version}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#propagate_tags EcsService#propagate_tags}.

---

##### `schedulingStrategy`<sup>Optional</sup> <a name="schedulingStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.schedulingStrategy"></a>

```java
public java.lang.String getSchedulingStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#scheduling_strategy EcsService#scheduling_strategy}.

---

##### `serviceConnectConfiguration`<sup>Optional</sup> <a name="serviceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceConnectConfiguration"></a>

```java
public EcsServiceServiceConnectConfiguration getServiceConnectConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

service_connect_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service_connect_configuration EcsService#service_connect_configuration}

---

##### `serviceRegistries`<sup>Optional</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceRegistries"></a>

```java
public EcsServiceServiceRegistries getServiceRegistries();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

service_registries block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service_registries EcsService#service_registries}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags EcsService#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags_all EcsService#tags_all}.

---

##### `taskDefinition`<sup>Optional</sup> <a name="taskDefinition" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#task_definition EcsService#task_definition}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.timeouts"></a>

```java
public EcsServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#timeouts EcsService#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#triggers EcsService#triggers}.

---

##### `waitForSteadyState`<sup>Optional</sup> <a name="waitForSteadyState" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.waitForSteadyState"></a>

```java
public java.lang.Object getWaitForSteadyState();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}.

---

### EcsServiceDeploymentCircuitBreaker <a name="EcsServiceDeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceDeploymentCircuitBreaker;

EcsServiceDeploymentCircuitBreaker.builder()
    .enable(java.lang.Boolean)
    .enable(IResolvable)
    .rollback(java.lang.Boolean)
    .rollback(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.rollback">rollback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}.

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.rollback"></a>

```java
public java.lang.Object getRollback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}.

---

### EcsServiceDeploymentController <a name="EcsServiceDeploymentController" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceDeploymentController;

EcsServiceDeploymentController.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}.

---

### EcsServiceLoadBalancer <a name="EcsServiceLoadBalancer" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceLoadBalancer;

EcsServiceLoadBalancer.builder()
    .containerName(java.lang.String)
    .containerPort(java.lang.Number)
//  .elbName(java.lang.String)
//  .targetGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.elbName">elbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#elb_name EcsService#elb_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#target_group_arn EcsService#target_group_arn}. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}.

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}.

---

##### `elbName`<sup>Optional</sup> <a name="elbName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.elbName"></a>

```java
public java.lang.String getElbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#elb_name EcsService#elb_name}.

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#target_group_arn EcsService#target_group_arn}.

---

### EcsServiceNetworkConfiguration <a name="EcsServiceNetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceNetworkConfiguration;

EcsServiceNetworkConfiguration.builder()
    .subnets(java.util.List<java.lang.String>)
//  .assignPublicIp(java.lang.Boolean)
//  .assignPublicIp(IResolvable)
//  .securityGroups(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#subnets EcsService#subnets}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#assign_public_ip EcsService#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#security_groups EcsService#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#subnets EcsService#subnets}.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#assign_public_ip EcsService#assign_public_ip}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#security_groups EcsService#security_groups}.

---

### EcsServiceOrderedPlacementStrategy <a name="EcsServiceOrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceOrderedPlacementStrategy;

EcsServiceOrderedPlacementStrategy.builder()
    .type(java.lang.String)
//  .field(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.field">field</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#field EcsService#field}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#field EcsService#field}.

---

### EcsServicePlacementConstraints <a name="EcsServicePlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServicePlacementConstraints;

EcsServicePlacementConstraints.builder()
    .type(java.lang.String)
//  .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#expression EcsService#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#expression EcsService#expression}.

---

### EcsServiceServiceConnectConfiguration <a name="EcsServiceServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfiguration;

EcsServiceServiceConnectConfiguration.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .logConfiguration(EcsServiceServiceConnectConfigurationLogConfiguration)
//  .namespace(java.lang.String)
//  .service(IResolvable)
//  .service(java.util.List<EcsServiceServiceConnectConfigurationService>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enabled EcsService#enabled}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#namespace EcsService#namespace}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.service">service</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>></code> | service block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enabled EcsService#enabled}.

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.logConfiguration"></a>

```java
public EcsServiceServiceConnectConfigurationLogConfiguration getLogConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#log_configuration EcsService#log_configuration}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#namespace EcsService#namespace}.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.service"></a>

```java
public java.lang.Object getService();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>>

service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service EcsService#service}

---

### EcsServiceServiceConnectConfigurationLogConfiguration <a name="EcsServiceServiceConnectConfigurationLogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfigurationLogConfiguration;

EcsServiceServiceConnectConfigurationLogConfiguration.builder()
    .logDriver(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .secretOption(IResolvable)
//  .secretOption(java.util.List<EcsServiceServiceConnectConfigurationLogConfigurationSecretOption>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.logDriver">logDriver</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#log_driver EcsService#log_driver}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#options EcsService#options}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.secretOption">secretOption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>></code> | secret_option block. |

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.logDriver"></a>

```java
public java.lang.String getLogDriver();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#log_driver EcsService#log_driver}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#options EcsService#options}.

---

##### `secretOption`<sup>Optional</sup> <a name="secretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.secretOption"></a>

```java
public java.lang.Object getSecretOption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>>

secret_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#secret_option EcsService#secret_option}

---

### EcsServiceServiceConnectConfigurationLogConfigurationSecretOption <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption;

EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.builder()
    .name(java.lang.String)
    .valueFrom(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#value_from EcsService#value_from}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}.

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#value_from EcsService#value_from}.

---

### EcsServiceServiceConnectConfigurationService <a name="EcsServiceServiceConnectConfigurationService" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfigurationService;

EcsServiceServiceConnectConfigurationService.builder()
    .portName(java.lang.String)
//  .clientAlias(EcsServiceServiceConnectConfigurationServiceClientAlias)
//  .discoveryName(java.lang.String)
//  .ingressPortOverride(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.portName">portName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port_name EcsService#port_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.clientAlias">clientAlias</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | client_alias block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.discoveryName">discoveryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#discovery_name EcsService#discovery_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.ingressPortOverride">ingressPortOverride</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#ingress_port_override EcsService#ingress_port_override}. |

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port_name EcsService#port_name}.

---

##### `clientAlias`<sup>Optional</sup> <a name="clientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.clientAlias"></a>

```java
public EcsServiceServiceConnectConfigurationServiceClientAlias getClientAlias();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

client_alias block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#client_alias EcsService#client_alias}

---

##### `discoveryName`<sup>Optional</sup> <a name="discoveryName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.discoveryName"></a>

```java
public java.lang.String getDiscoveryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#discovery_name EcsService#discovery_name}.

---

##### `ingressPortOverride`<sup>Optional</sup> <a name="ingressPortOverride" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.ingressPortOverride"></a>

```java
public java.lang.Number getIngressPortOverride();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#ingress_port_override EcsService#ingress_port_override}.

---

### EcsServiceServiceConnectConfigurationServiceClientAlias <a name="EcsServiceServiceConnectConfigurationServiceClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfigurationServiceClientAlias;

EcsServiceServiceConnectConfigurationServiceClientAlias.builder()
    .port(java.lang.Number)
//  .dnsName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#dns_name EcsService#dns_name}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}.

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#dns_name EcsService#dns_name}.

---

### EcsServiceServiceRegistries <a name="EcsServiceServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceRegistries;

EcsServiceServiceRegistries.builder()
    .registryArn(java.lang.String)
//  .containerName(java.lang.String)
//  .containerPort(java.lang.Number)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.registryArn">registryArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#registry_arn EcsService#registry_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}. |

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.registryArn"></a>

```java
public java.lang.String getRegistryArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#registry_arn EcsService#registry_arn}.

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}.

---

### EcsServiceTimeouts <a name="EcsServiceTimeouts" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceTimeouts;

EcsServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#create EcsService#create}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#delete EcsService#delete}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#update EcsService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#create EcsService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#delete EcsService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#update EcsService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsServiceAlarmsOutputReference <a name="EcsServiceAlarmsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceAlarmsOutputReference;

new EcsServiceAlarmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNamesInput">alarmNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollbackInput">rollbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNames">alarmNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollback">rollback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmNamesInput`<sup>Optional</sup> <a name="alarmNamesInput" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNamesInput"></a>

```java
public java.util.List<java.lang.String> getAlarmNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollbackInput`<sup>Optional</sup> <a name="rollbackInput" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollbackInput"></a>

```java
public java.lang.Object getRollbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNames"></a>

```java
public java.util.List<java.lang.String> getAlarmNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollback"></a>

```java
public java.lang.Object getRollback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.internalValue"></a>

```java
public EcsServiceAlarms getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

---


### EcsServiceCapacityProviderStrategyList <a name="EcsServiceCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceCapacityProviderStrategyList;

new EcsServiceCapacityProviderStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get"></a>

```java
public EcsServiceCapacityProviderStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a>>

---


### EcsServiceCapacityProviderStrategyOutputReference <a name="EcsServiceCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceCapacityProviderStrategyOutputReference;

new EcsServiceCapacityProviderStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetBase"></a>

```java
public void resetBase()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.baseInput"></a>

```java
public java.lang.Number getBaseInput();
```

- *Type:* java.lang.Number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```java
public java.lang.String getCapacityProviderInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy">EcsServiceCapacityProviderStrategy</a> OR com.hashicorp.cdktf.IResolvable

---


### EcsServiceDeploymentCircuitBreakerOutputReference <a name="EcsServiceDeploymentCircuitBreakerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceDeploymentCircuitBreakerOutputReference;

new EcsServiceDeploymentCircuitBreakerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollbackInput">rollbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollback">rollback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollbackInput`<sup>Optional</sup> <a name="rollbackInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollbackInput"></a>

```java
public java.lang.Object getRollbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollback"></a>

```java
public java.lang.Object getRollback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.internalValue"></a>

```java
public EcsServiceDeploymentCircuitBreaker getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

---


### EcsServiceDeploymentControllerOutputReference <a name="EcsServiceDeploymentControllerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceDeploymentControllerOutputReference;

new EcsServiceDeploymentControllerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.internalValue"></a>

```java
public EcsServiceDeploymentController getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

---


### EcsServiceLoadBalancerList <a name="EcsServiceLoadBalancerList" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceLoadBalancerList;

new EcsServiceLoadBalancerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get"></a>

```java
public EcsServiceLoadBalancerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a>>

---


### EcsServiceLoadBalancerOutputReference <a name="EcsServiceLoadBalancerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceLoadBalancerOutputReference;

new EcsServiceLoadBalancerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetElbName">resetElbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetElbName` <a name="resetElbName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetElbName"></a>

```java
public void resetElbName()
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetTargetGroupArn"></a>

```java
public void resetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbNameInput">elbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbName">elbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `elbNameInput`<sup>Optional</sup> <a name="elbNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbNameInput"></a>

```java
public java.lang.String getElbNameInput();
```

- *Type:* java.lang.String

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArnInput"></a>

```java
public java.lang.String getTargetGroupArnInput();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `elbName`<sup>Required</sup> <a name="elbName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbName"></a>

```java
public java.lang.String getElbName();
```

- *Type:* java.lang.String

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer">EcsServiceLoadBalancer</a> OR com.hashicorp.cdktf.IResolvable

---


### EcsServiceNetworkConfigurationOutputReference <a name="EcsServiceNetworkConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceNetworkConfigurationOutputReference;

new EcsServiceNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```java
public void resetAssignPublicIp()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```java
public java.lang.Object getAssignPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public EcsServiceNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

---


### EcsServiceOrderedPlacementStrategyList <a name="EcsServiceOrderedPlacementStrategyList" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceOrderedPlacementStrategyList;

new EcsServiceOrderedPlacementStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get"></a>

```java
public EcsServiceOrderedPlacementStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a>>

---


### EcsServiceOrderedPlacementStrategyOutputReference <a name="EcsServiceOrderedPlacementStrategyOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceOrderedPlacementStrategyOutputReference;

new EcsServiceOrderedPlacementStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resetField"></a>

```java
public void resetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy">EcsServiceOrderedPlacementStrategy</a> OR com.hashicorp.cdktf.IResolvable

---


### EcsServicePlacementConstraintsList <a name="EcsServicePlacementConstraintsList" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServicePlacementConstraintsList;

new EcsServicePlacementConstraintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get"></a>

```java
public EcsServicePlacementConstraintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a>>

---


### EcsServicePlacementConstraintsOutputReference <a name="EcsServicePlacementConstraintsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServicePlacementConstraintsOutputReference;

new EcsServicePlacementConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resetExpression"></a>

```java
public void resetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints">EcsServicePlacementConstraints</a> OR com.hashicorp.cdktf.IResolvable

---


### EcsServiceServiceConnectConfigurationLogConfigurationOutputReference <a name="EcsServiceServiceConnectConfigurationLogConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference;

new EcsServiceServiceConnectConfigurationLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption">putSecretOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetSecretOption">resetSecretOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretOption` <a name="putSecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption"></a>

```java
public void putSecretOption(IResolvable OR java.util.List<EcsServiceServiceConnectConfigurationLogConfigurationSecretOption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>>

---

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetSecretOption` <a name="resetSecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetSecretOption"></a>

```java
public void resetSecretOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOption">secretOption</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList">EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriverInput">logDriverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptionInput">secretOptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver">logDriver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretOption`<sup>Required</sup> <a name="secretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOption"></a>

```java
public EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList getSecretOption();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList">EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList</a>

---

##### `logDriverInput`<sup>Optional</sup> <a name="logDriverInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriverInput"></a>

```java
public java.lang.String getLogDriverInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `secretOptionInput`<sup>Optional</sup> <a name="secretOptionInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptionInput"></a>

```java
public java.lang.Object getSecretOptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>>

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver"></a>

```java
public java.lang.String getLogDriver();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```java
public EcsServiceServiceConnectConfigurationLogConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

---


### EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList;

new EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get"></a>

```java
public EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a>>

---


### EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference;

new EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFromInput"></a>

```java
public java.lang.String getValueFromInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption">EcsServiceServiceConnectConfigurationLogConfigurationSecretOption</a> OR com.hashicorp.cdktf.IResolvable

---


### EcsServiceServiceConnectConfigurationOutputReference <a name="EcsServiceServiceConnectConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfigurationOutputReference;

new EcsServiceServiceConnectConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService">putService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration"></a>

```java
public void putLogConfiguration(EcsServiceServiceConnectConfigurationLogConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

---

##### `putService` <a name="putService" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService"></a>

```java
public void putService(IResolvable OR java.util.List<EcsServiceServiceConnectConfigurationService> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>>

---

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetLogConfiguration"></a>

```java
public void resetLogConfiguration()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference">EcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.service">service</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList">EcsServiceServiceConnectConfigurationServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfigurationInput">logConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.serviceInput">serviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration"></a>

```java
public EcsServiceServiceConnectConfigurationLogConfigurationOutputReference getLogConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference">EcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.service"></a>

```java
public EcsServiceServiceConnectConfigurationServiceList getService();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList">EcsServiceServiceConnectConfigurationServiceList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfigurationInput"></a>

```java
public EcsServiceServiceConnectConfigurationLogConfiguration getLogConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.serviceInput"></a>

```java
public java.lang.Object getServiceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.internalValue"></a>

```java
public EcsServiceServiceConnectConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

---


### EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference <a name="EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference;

new EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resetDnsName">resetDnsName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsName` <a name="resetDnsName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resetDnsName"></a>

```java
public void resetDnsName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsNameInput">dnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsNameInput"></a>

```java
public java.lang.String getDnsNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.internalValue"></a>

```java
public EcsServiceServiceConnectConfigurationServiceClientAlias getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

---


### EcsServiceServiceConnectConfigurationServiceList <a name="EcsServiceServiceConnectConfigurationServiceList" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfigurationServiceList;

new EcsServiceServiceConnectConfigurationServiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get"></a>

```java
public EcsServiceServiceConnectConfigurationServiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a>>

---


### EcsServiceServiceConnectConfigurationServiceOutputReference <a name="EcsServiceServiceConnectConfigurationServiceOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceConnectConfigurationServiceOutputReference;

new EcsServiceServiceConnectConfigurationServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias">putClientAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetClientAlias">resetClientAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetDiscoveryName">resetDiscoveryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetIngressPortOverride">resetIngressPortOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientAlias` <a name="putClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias"></a>

```java
public void putClientAlias(EcsServiceServiceConnectConfigurationServiceClientAlias value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

---

##### `resetClientAlias` <a name="resetClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetClientAlias"></a>

```java
public void resetClientAlias()
```

##### `resetDiscoveryName` <a name="resetDiscoveryName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetDiscoveryName"></a>

```java
public void resetDiscoveryName()
```

##### `resetIngressPortOverride` <a name="resetIngressPortOverride" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetIngressPortOverride"></a>

```java
public void resetIngressPortOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAlias">clientAlias</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAliasInput">clientAliasInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryNameInput">discoveryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverrideInput">ingressPortOverrideInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryName">discoveryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverride">ingressPortOverride</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientAlias`<sup>Required</sup> <a name="clientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAlias"></a>

```java
public EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference getClientAlias();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference</a>

---

##### `clientAliasInput`<sup>Optional</sup> <a name="clientAliasInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAliasInput"></a>

```java
public EcsServiceServiceConnectConfigurationServiceClientAlias getClientAliasInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

---

##### `discoveryNameInput`<sup>Optional</sup> <a name="discoveryNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryNameInput"></a>

```java
public java.lang.String getDiscoveryNameInput();
```

- *Type:* java.lang.String

---

##### `ingressPortOverrideInput`<sup>Optional</sup> <a name="ingressPortOverrideInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverrideInput"></a>

```java
public java.lang.Number getIngressPortOverrideInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `discoveryName`<sup>Required</sup> <a name="discoveryName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryName"></a>

```java
public java.lang.String getDiscoveryName();
```

- *Type:* java.lang.String

---

##### `ingressPortOverride`<sup>Required</sup> <a name="ingressPortOverride" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverride"></a>

```java
public java.lang.Number getIngressPortOverride();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService">EcsServiceServiceConnectConfigurationService</a> OR com.hashicorp.cdktf.IResolvable

---


### EcsServiceServiceRegistriesOutputReference <a name="EcsServiceServiceRegistriesOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceServiceRegistriesOutputReference;

new EcsServiceServiceRegistriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerName"></a>

```java
public void resetContainerName()
```

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerPort"></a>

```java
public void resetContainerPort()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArnInput">registryArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArn">registryArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `registryArnInput`<sup>Optional</sup> <a name="registryArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArnInput"></a>

```java
public java.lang.String getRegistryArnInput();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArn"></a>

```java
public java.lang.String getRegistryArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.internalValue"></a>

```java
public EcsServiceServiceRegistries getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

---


### EcsServiceTimeoutsOutputReference <a name="EcsServiceTimeoutsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_service.EcsServiceTimeoutsOutputReference;

new EcsServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



