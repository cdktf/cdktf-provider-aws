# `autoscalingGroup` Submodule <a name="`autoscalingGroup` Submodule" id="@cdktf/provider-aws.autoscalingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingGroup <a name="AutoscalingGroup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group aws_autoscaling_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroup;

AutoscalingGroup.Builder.create(Construct scope, java.lang.String id)
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
    .maxSize(java.lang.Number)
    .minSize(java.lang.Number)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .capacityRebalance(java.lang.Boolean)
//  .capacityRebalance(IResolvable)
//  .context(java.lang.String)
//  .defaultCooldown(java.lang.Number)
//  .defaultInstanceWarmup(java.lang.Number)
//  .desiredCapacity(java.lang.Number)
//  .desiredCapacityType(java.lang.String)
//  .enabledMetrics(java.util.List<java.lang.String>)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .forceDeleteWarmPool(java.lang.Boolean)
//  .forceDeleteWarmPool(IResolvable)
//  .healthCheckGracePeriod(java.lang.Number)
//  .healthCheckType(java.lang.String)
//  .id(java.lang.String)
//  .initialLifecycleHook(IResolvable)
//  .initialLifecycleHook(java.util.List<AutoscalingGroupInitialLifecycleHook>)
//  .instanceRefresh(AutoscalingGroupInstanceRefresh)
//  .launchConfiguration(java.lang.String)
//  .launchTemplate(AutoscalingGroupLaunchTemplate)
//  .loadBalancers(java.util.List<java.lang.String>)
//  .maxInstanceLifetime(java.lang.Number)
//  .metricsGranularity(java.lang.String)
//  .minElbCapacity(java.lang.Number)
//  .mixedInstancesPolicy(AutoscalingGroupMixedInstancesPolicy)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .placementGroup(java.lang.String)
//  .protectFromScaleIn(java.lang.Boolean)
//  .protectFromScaleIn(IResolvable)
//  .serviceLinkedRoleArn(java.lang.String)
//  .suspendedProcesses(java.util.List<java.lang.String>)
//  .tag(IResolvable)
//  .tag(java.util.List<AutoscalingGroupTag>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .targetGroupArns(java.util.List<java.lang.String>)
//  .terminationPolicies(java.util.List<java.lang.String>)
//  .timeouts(AutoscalingGroupTimeouts)
//  .vpcZoneIdentifier(java.util.List<java.lang.String>)
//  .waitForCapacityTimeout(java.lang.String)
//  .waitForElbCapacity(java.lang.Number)
//  .warmPool(AutoscalingGroupWarmPool)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max_size AutoscalingGroup#max_size}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_size AutoscalingGroup#min_size}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#availability_zones AutoscalingGroup#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.capacityRebalance">capacityRebalance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#capacity_rebalance AutoscalingGroup#capacity_rebalance}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.context">context</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#context AutoscalingGroup#context}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.defaultCooldown">defaultCooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#default_cooldown AutoscalingGroup#default_cooldown}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.defaultInstanceWarmup">defaultInstanceWarmup</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#default_instance_warmup AutoscalingGroup#default_instance_warmup}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#desired_capacity AutoscalingGroup#desired_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.desiredCapacityType">desiredCapacityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#desired_capacity_type AutoscalingGroup#desired_capacity_type}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.enabledMetrics">enabledMetrics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#enabled_metrics AutoscalingGroup#enabled_metrics}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#force_delete AutoscalingGroup#force_delete}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.forceDeleteWarmPool">forceDeleteWarmPool</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#health_check_grace_period AutoscalingGroup#health_check_grace_period}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#health_check_type AutoscalingGroup#health_check_type}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#id AutoscalingGroup#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.initialLifecycleHook">initialLifecycleHook</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>></code> | initial_lifecycle_hook block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.instanceRefresh">instanceRefresh</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a></code> | instance_refresh block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.launchConfiguration">launchConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_configuration AutoscalingGroup#launch_configuration}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.loadBalancers">loadBalancers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#load_balancers AutoscalingGroup#load_balancers}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.maxInstanceLifetime">maxInstanceLifetime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.metricsGranularity">metricsGranularity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#metrics_granularity AutoscalingGroup#metrics_granularity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.minElbCapacity">minElbCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_elb_capacity AutoscalingGroup#min_elb_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.mixedInstancesPolicy">mixedInstancesPolicy</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a></code> | mixed_instances_policy block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name AutoscalingGroup#name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name_prefix AutoscalingGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#placement_group AutoscalingGroup#placement_group}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.protectFromScaleIn">protectFromScaleIn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.serviceLinkedRoleArn">serviceLinkedRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.suspendedProcesses">suspendedProcesses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#suspended_processes AutoscalingGroup#suspended_processes}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#tags AutoscalingGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.targetGroupArns">targetGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#target_group_arns AutoscalingGroup#target_group_arns}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.terminationPolicies">terminationPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#termination_policies AutoscalingGroup#termination_policies}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.vpcZoneIdentifier">vpcZoneIdentifier</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.waitForCapacityTimeout">waitForCapacityTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.waitForElbCapacity">waitForElbCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.warmPool">warmPool</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a></code> | warm_pool block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.maxSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max_size AutoscalingGroup#max_size}.

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.minSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_size AutoscalingGroup#min_size}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#availability_zones AutoscalingGroup#availability_zones}.

---

##### `capacityRebalance`<sup>Optional</sup> <a name="capacityRebalance" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.capacityRebalance"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#capacity_rebalance AutoscalingGroup#capacity_rebalance}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.context"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#context AutoscalingGroup#context}.

---

##### `defaultCooldown`<sup>Optional</sup> <a name="defaultCooldown" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.defaultCooldown"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#default_cooldown AutoscalingGroup#default_cooldown}.

---

##### `defaultInstanceWarmup`<sup>Optional</sup> <a name="defaultInstanceWarmup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.defaultInstanceWarmup"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#default_instance_warmup AutoscalingGroup#default_instance_warmup}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.desiredCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#desired_capacity AutoscalingGroup#desired_capacity}.

---

##### `desiredCapacityType`<sup>Optional</sup> <a name="desiredCapacityType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.desiredCapacityType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#desired_capacity_type AutoscalingGroup#desired_capacity_type}.

---

##### `enabledMetrics`<sup>Optional</sup> <a name="enabledMetrics" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.enabledMetrics"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#enabled_metrics AutoscalingGroup#enabled_metrics}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#force_delete AutoscalingGroup#force_delete}.

---

##### `forceDeleteWarmPool`<sup>Optional</sup> <a name="forceDeleteWarmPool" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.forceDeleteWarmPool"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}.

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.healthCheckGracePeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#health_check_grace_period AutoscalingGroup#health_check_grace_period}.

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.healthCheckType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#health_check_type AutoscalingGroup#health_check_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#id AutoscalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialLifecycleHook`<sup>Optional</sup> <a name="initialLifecycleHook" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.initialLifecycleHook"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>>

initial_lifecycle_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#initial_lifecycle_hook AutoscalingGroup#initial_lifecycle_hook}

---

##### `instanceRefresh`<sup>Optional</sup> <a name="instanceRefresh" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.instanceRefresh"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a>

instance_refresh block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#instance_refresh AutoscalingGroup#instance_refresh}

---

##### `launchConfiguration`<sup>Optional</sup> <a name="launchConfiguration" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.launchConfiguration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_configuration AutoscalingGroup#launch_configuration}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.launchTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template AutoscalingGroup#launch_template}

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.loadBalancers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#load_balancers AutoscalingGroup#load_balancers}.

---

##### `maxInstanceLifetime`<sup>Optional</sup> <a name="maxInstanceLifetime" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.maxInstanceLifetime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}.

---

##### `metricsGranularity`<sup>Optional</sup> <a name="metricsGranularity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.metricsGranularity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#metrics_granularity AutoscalingGroup#metrics_granularity}.

---

##### `minElbCapacity`<sup>Optional</sup> <a name="minElbCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.minElbCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_elb_capacity AutoscalingGroup#min_elb_capacity}.

---

##### `mixedInstancesPolicy`<sup>Optional</sup> <a name="mixedInstancesPolicy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.mixedInstancesPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a>

mixed_instances_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#mixed_instances_policy AutoscalingGroup#mixed_instances_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name AutoscalingGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name_prefix AutoscalingGroup#name_prefix}.

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.placementGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#placement_group AutoscalingGroup#placement_group}.

---

##### `protectFromScaleIn`<sup>Optional</sup> <a name="protectFromScaleIn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.protectFromScaleIn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}.

---

##### `serviceLinkedRoleArn`<sup>Optional</sup> <a name="serviceLinkedRoleArn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.serviceLinkedRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}.

---

##### `suspendedProcesses`<sup>Optional</sup> <a name="suspendedProcesses" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.suspendedProcesses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#suspended_processes AutoscalingGroup#suspended_processes}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.tag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#tag AutoscalingGroup#tag}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#tags AutoscalingGroup#tags}.

---

##### `targetGroupArns`<sup>Optional</sup> <a name="targetGroupArns" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.targetGroupArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#target_group_arns AutoscalingGroup#target_group_arns}.

---

##### `terminationPolicies`<sup>Optional</sup> <a name="terminationPolicies" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.terminationPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#termination_policies AutoscalingGroup#termination_policies}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#timeouts AutoscalingGroup#timeouts}

---

##### `vpcZoneIdentifier`<sup>Optional</sup> <a name="vpcZoneIdentifier" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.vpcZoneIdentifier"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}.

---

##### `waitForCapacityTimeout`<sup>Optional</sup> <a name="waitForCapacityTimeout" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.waitForCapacityTimeout"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}.

---

##### `waitForElbCapacity`<sup>Optional</sup> <a name="waitForElbCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.waitForElbCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}.

---

##### `warmPool`<sup>Optional</sup> <a name="warmPool" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.Initializer.parameter.warmPool"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a>

warm_pool block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#warm_pool AutoscalingGroup#warm_pool}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putInitialLifecycleHook">putInitialLifecycleHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putInstanceRefresh">putInstanceRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putMixedInstancesPolicy">putMixedInstancesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putWarmPool">putWarmPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetCapacityRebalance">resetCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetDefaultCooldown">resetDefaultCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetDefaultInstanceWarmup">resetDefaultInstanceWarmup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetDesiredCapacity">resetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetDesiredCapacityType">resetDesiredCapacityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetEnabledMetrics">resetEnabledMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetForceDeleteWarmPool">resetForceDeleteWarmPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetHealthCheckGracePeriod">resetHealthCheckGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetHealthCheckType">resetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetInitialLifecycleHook">resetInitialLifecycleHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetInstanceRefresh">resetInstanceRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetLaunchConfiguration">resetLaunchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetLaunchTemplate">resetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetLoadBalancers">resetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetMaxInstanceLifetime">resetMaxInstanceLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetMetricsGranularity">resetMetricsGranularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetMinElbCapacity">resetMinElbCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetMixedInstancesPolicy">resetMixedInstancesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetPlacementGroup">resetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetProtectFromScaleIn">resetProtectFromScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetServiceLinkedRoleArn">resetServiceLinkedRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetSuspendedProcesses">resetSuspendedProcesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetTargetGroupArns">resetTargetGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetTerminationPolicies">resetTerminationPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetVpcZoneIdentifier">resetVpcZoneIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetWaitForCapacityTimeout">resetWaitForCapacityTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetWaitForElbCapacity">resetWaitForElbCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetWarmPool">resetWarmPool</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putInitialLifecycleHook` <a name="putInitialLifecycleHook" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putInitialLifecycleHook"></a>

```java
public void putInitialLifecycleHook(IResolvable OR java.util.List<AutoscalingGroupInitialLifecycleHook> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putInitialLifecycleHook.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>>

---

##### `putInstanceRefresh` <a name="putInstanceRefresh" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putInstanceRefresh"></a>

```java
public void putInstanceRefresh(AutoscalingGroupInstanceRefresh value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putInstanceRefresh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a>

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putLaunchTemplate"></a>

```java
public void putLaunchTemplate(AutoscalingGroupLaunchTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a>

---

##### `putMixedInstancesPolicy` <a name="putMixedInstancesPolicy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putMixedInstancesPolicy"></a>

```java
public void putMixedInstancesPolicy(AutoscalingGroupMixedInstancesPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putMixedInstancesPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a>

---

##### `putTag` <a name="putTag" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putTag"></a>

```java
public void putTag(IResolvable OR java.util.List<AutoscalingGroupTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putTimeouts"></a>

```java
public void putTimeouts(AutoscalingGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

---

##### `putWarmPool` <a name="putWarmPool" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putWarmPool"></a>

```java
public void putWarmPool(AutoscalingGroupWarmPool value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.putWarmPool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a>

---

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetAvailabilityZones"></a>

```java
public void resetAvailabilityZones()
```

##### `resetCapacityRebalance` <a name="resetCapacityRebalance" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetCapacityRebalance"></a>

```java
public void resetCapacityRebalance()
```

##### `resetContext` <a name="resetContext" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetContext"></a>

```java
public void resetContext()
```

##### `resetDefaultCooldown` <a name="resetDefaultCooldown" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetDefaultCooldown"></a>

```java
public void resetDefaultCooldown()
```

##### `resetDefaultInstanceWarmup` <a name="resetDefaultInstanceWarmup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetDefaultInstanceWarmup"></a>

```java
public void resetDefaultInstanceWarmup()
```

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetDesiredCapacity"></a>

```java
public void resetDesiredCapacity()
```

##### `resetDesiredCapacityType` <a name="resetDesiredCapacityType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetDesiredCapacityType"></a>

```java
public void resetDesiredCapacityType()
```

##### `resetEnabledMetrics` <a name="resetEnabledMetrics" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetEnabledMetrics"></a>

```java
public void resetEnabledMetrics()
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetForceDeleteWarmPool` <a name="resetForceDeleteWarmPool" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetForceDeleteWarmPool"></a>

```java
public void resetForceDeleteWarmPool()
```

##### `resetHealthCheckGracePeriod` <a name="resetHealthCheckGracePeriod" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetHealthCheckGracePeriod"></a>

```java
public void resetHealthCheckGracePeriod()
```

##### `resetHealthCheckType` <a name="resetHealthCheckType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetHealthCheckType"></a>

```java
public void resetHealthCheckType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetId"></a>

```java
public void resetId()
```

##### `resetInitialLifecycleHook` <a name="resetInitialLifecycleHook" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetInitialLifecycleHook"></a>

```java
public void resetInitialLifecycleHook()
```

##### `resetInstanceRefresh` <a name="resetInstanceRefresh" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetInstanceRefresh"></a>

```java
public void resetInstanceRefresh()
```

##### `resetLaunchConfiguration` <a name="resetLaunchConfiguration" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetLaunchConfiguration"></a>

```java
public void resetLaunchConfiguration()
```

##### `resetLaunchTemplate` <a name="resetLaunchTemplate" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetLaunchTemplate"></a>

```java
public void resetLaunchTemplate()
```

##### `resetLoadBalancers` <a name="resetLoadBalancers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetLoadBalancers"></a>

```java
public void resetLoadBalancers()
```

##### `resetMaxInstanceLifetime` <a name="resetMaxInstanceLifetime" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetMaxInstanceLifetime"></a>

```java
public void resetMaxInstanceLifetime()
```

##### `resetMetricsGranularity` <a name="resetMetricsGranularity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetMetricsGranularity"></a>

```java
public void resetMetricsGranularity()
```

##### `resetMinElbCapacity` <a name="resetMinElbCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetMinElbCapacity"></a>

```java
public void resetMinElbCapacity()
```

##### `resetMixedInstancesPolicy` <a name="resetMixedInstancesPolicy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetMixedInstancesPolicy"></a>

```java
public void resetMixedInstancesPolicy()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPlacementGroup` <a name="resetPlacementGroup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetPlacementGroup"></a>

```java
public void resetPlacementGroup()
```

##### `resetProtectFromScaleIn` <a name="resetProtectFromScaleIn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetProtectFromScaleIn"></a>

```java
public void resetProtectFromScaleIn()
```

##### `resetServiceLinkedRoleArn` <a name="resetServiceLinkedRoleArn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetServiceLinkedRoleArn"></a>

```java
public void resetServiceLinkedRoleArn()
```

##### `resetSuspendedProcesses` <a name="resetSuspendedProcesses" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetSuspendedProcesses"></a>

```java
public void resetSuspendedProcesses()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetTag"></a>

```java
public void resetTag()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetGroupArns` <a name="resetTargetGroupArns" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetTargetGroupArns"></a>

```java
public void resetTargetGroupArns()
```

##### `resetTerminationPolicies` <a name="resetTerminationPolicies" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetTerminationPolicies"></a>

```java
public void resetTerminationPolicies()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcZoneIdentifier` <a name="resetVpcZoneIdentifier" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetVpcZoneIdentifier"></a>

```java
public void resetVpcZoneIdentifier()
```

##### `resetWaitForCapacityTimeout` <a name="resetWaitForCapacityTimeout" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetWaitForCapacityTimeout"></a>

```java
public void resetWaitForCapacityTimeout()
```

##### `resetWaitForElbCapacity` <a name="resetWaitForElbCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetWaitForElbCapacity"></a>

```java
public void resetWaitForElbCapacity()
```

##### `resetWarmPool` <a name="resetWarmPool" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.resetWarmPool"></a>

```java
public void resetWarmPool()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroup;

AutoscalingGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroup;

AutoscalingGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroup;

AutoscalingGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.initialLifecycleHook">initialLifecycleHook</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList">AutoscalingGroupInitialLifecycleHookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.instanceRefresh">instanceRefresh</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference">AutoscalingGroupInstanceRefreshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference">AutoscalingGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.mixedInstancesPolicy">mixedInstancesPolicy</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference">AutoscalingGroupMixedInstancesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList">AutoscalingGroupTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference">AutoscalingGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.warmPool">warmPool</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference">AutoscalingGroupWarmPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.capacityRebalanceInput">capacityRebalanceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.contextInput">contextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.defaultCooldownInput">defaultCooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.defaultInstanceWarmupInput">defaultInstanceWarmupInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.desiredCapacityTypeInput">desiredCapacityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.enabledMetricsInput">enabledMetricsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.forceDeleteWarmPoolInput">forceDeleteWarmPoolInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.healthCheckGracePeriodInput">healthCheckGracePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.initialLifecycleHookInput">initialLifecycleHookInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.instanceRefreshInput">instanceRefreshInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.launchConfigurationInput">launchConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.loadBalancersInput">loadBalancersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.maxInstanceLifetimeInput">maxInstanceLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.metricsGranularityInput">metricsGranularityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.minElbCapacityInput">minElbCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.mixedInstancesPolicyInput">mixedInstancesPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.placementGroupInput">placementGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.protectFromScaleInInput">protectFromScaleInInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.serviceLinkedRoleArnInput">serviceLinkedRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.suspendedProcessesInput">suspendedProcessesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.tagInput">tagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.targetGroupArnsInput">targetGroupArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.terminationPoliciesInput">terminationPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.vpcZoneIdentifierInput">vpcZoneIdentifierInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.waitForCapacityTimeoutInput">waitForCapacityTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.waitForElbCapacityInput">waitForElbCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.warmPoolInput">warmPoolInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.capacityRebalance">capacityRebalance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.context">context</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.defaultCooldown">defaultCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.defaultInstanceWarmup">defaultInstanceWarmup</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.desiredCapacityType">desiredCapacityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.enabledMetrics">enabledMetrics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.forceDeleteWarmPool">forceDeleteWarmPool</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.launchConfiguration">launchConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.loadBalancers">loadBalancers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.maxInstanceLifetime">maxInstanceLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.metricsGranularity">metricsGranularity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.minElbCapacity">minElbCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.protectFromScaleIn">protectFromScaleIn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.serviceLinkedRoleArn">serviceLinkedRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.suspendedProcesses">suspendedProcesses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.targetGroupArns">targetGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.terminationPolicies">terminationPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.vpcZoneIdentifier">vpcZoneIdentifier</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.waitForCapacityTimeout">waitForCapacityTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.waitForElbCapacity">waitForElbCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `initialLifecycleHook`<sup>Required</sup> <a name="initialLifecycleHook" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.initialLifecycleHook"></a>

```java
public AutoscalingGroupInitialLifecycleHookList getInitialLifecycleHook();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList">AutoscalingGroupInitialLifecycleHookList</a>

---

##### `instanceRefresh`<sup>Required</sup> <a name="instanceRefresh" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.instanceRefresh"></a>

```java
public AutoscalingGroupInstanceRefreshOutputReference getInstanceRefresh();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference">AutoscalingGroupInstanceRefreshOutputReference</a>

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.launchTemplate"></a>

```java
public AutoscalingGroupLaunchTemplateOutputReference getLaunchTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference">AutoscalingGroupLaunchTemplateOutputReference</a>

---

##### `mixedInstancesPolicy`<sup>Required</sup> <a name="mixedInstancesPolicy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.mixedInstancesPolicy"></a>

```java
public AutoscalingGroupMixedInstancesPolicyOutputReference getMixedInstancesPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference">AutoscalingGroupMixedInstancesPolicyOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.tag"></a>

```java
public AutoscalingGroupTagList getTag();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList">AutoscalingGroupTagList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.timeouts"></a>

```java
public AutoscalingGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference">AutoscalingGroupTimeoutsOutputReference</a>

---

##### `warmPool`<sup>Required</sup> <a name="warmPool" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.warmPool"></a>

```java
public AutoscalingGroupWarmPoolOutputReference getWarmPool();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference">AutoscalingGroupWarmPoolOutputReference</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capacityRebalanceInput`<sup>Optional</sup> <a name="capacityRebalanceInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.capacityRebalanceInput"></a>

```java
public java.lang.Object getCapacityRebalanceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.contextInput"></a>

```java
public java.lang.String getContextInput();
```

- *Type:* java.lang.String

---

##### `defaultCooldownInput`<sup>Optional</sup> <a name="defaultCooldownInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.defaultCooldownInput"></a>

```java
public java.lang.Number getDefaultCooldownInput();
```

- *Type:* java.lang.Number

---

##### `defaultInstanceWarmupInput`<sup>Optional</sup> <a name="defaultInstanceWarmupInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.defaultInstanceWarmupInput"></a>

```java
public java.lang.Number getDefaultInstanceWarmupInput();
```

- *Type:* java.lang.Number

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.desiredCapacityInput"></a>

```java
public java.lang.Number getDesiredCapacityInput();
```

- *Type:* java.lang.Number

---

##### `desiredCapacityTypeInput`<sup>Optional</sup> <a name="desiredCapacityTypeInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.desiredCapacityTypeInput"></a>

```java
public java.lang.String getDesiredCapacityTypeInput();
```

- *Type:* java.lang.String

---

##### `enabledMetricsInput`<sup>Optional</sup> <a name="enabledMetricsInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.enabledMetricsInput"></a>

```java
public java.util.List<java.lang.String> getEnabledMetricsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.forceDeleteInput"></a>

```java
public java.lang.Object getForceDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceDeleteWarmPoolInput`<sup>Optional</sup> <a name="forceDeleteWarmPoolInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.forceDeleteWarmPoolInput"></a>

```java
public java.lang.Object getForceDeleteWarmPoolInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckGracePeriodInput`<sup>Optional</sup> <a name="healthCheckGracePeriodInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.healthCheckGracePeriodInput"></a>

```java
public java.lang.Number getHealthCheckGracePeriodInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.healthCheckTypeInput"></a>

```java
public java.lang.String getHealthCheckTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialLifecycleHookInput`<sup>Optional</sup> <a name="initialLifecycleHookInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.initialLifecycleHookInput"></a>

```java
public java.lang.Object getInitialLifecycleHookInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>>

---

##### `instanceRefreshInput`<sup>Optional</sup> <a name="instanceRefreshInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.instanceRefreshInput"></a>

```java
public AutoscalingGroupInstanceRefresh getInstanceRefreshInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a>

---

##### `launchConfigurationInput`<sup>Optional</sup> <a name="launchConfigurationInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.launchConfigurationInput"></a>

```java
public java.lang.String getLaunchConfigurationInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.launchTemplateInput"></a>

```java
public AutoscalingGroupLaunchTemplate getLaunchTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a>

---

##### `loadBalancersInput`<sup>Optional</sup> <a name="loadBalancersInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.loadBalancersInput"></a>

```java
public java.util.List<java.lang.String> getLoadBalancersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxInstanceLifetimeInput`<sup>Optional</sup> <a name="maxInstanceLifetimeInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.maxInstanceLifetimeInput"></a>

```java
public java.lang.Number getMaxInstanceLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `metricsGranularityInput`<sup>Optional</sup> <a name="metricsGranularityInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.metricsGranularityInput"></a>

```java
public java.lang.String getMetricsGranularityInput();
```

- *Type:* java.lang.String

---

##### `minElbCapacityInput`<sup>Optional</sup> <a name="minElbCapacityInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.minElbCapacityInput"></a>

```java
public java.lang.Number getMinElbCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `mixedInstancesPolicyInput`<sup>Optional</sup> <a name="mixedInstancesPolicyInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.mixedInstancesPolicyInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicy getMixedInstancesPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `placementGroupInput`<sup>Optional</sup> <a name="placementGroupInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.placementGroupInput"></a>

```java
public java.lang.String getPlacementGroupInput();
```

- *Type:* java.lang.String

---

##### `protectFromScaleInInput`<sup>Optional</sup> <a name="protectFromScaleInInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.protectFromScaleInInput"></a>

```java
public java.lang.Object getProtectFromScaleInInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceLinkedRoleArnInput`<sup>Optional</sup> <a name="serviceLinkedRoleArnInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.serviceLinkedRoleArnInput"></a>

```java
public java.lang.String getServiceLinkedRoleArnInput();
```

- *Type:* java.lang.String

---

##### `suspendedProcessesInput`<sup>Optional</sup> <a name="suspendedProcessesInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.suspendedProcessesInput"></a>

```java
public java.util.List<java.lang.String> getSuspendedProcessesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.tagInput"></a>

```java
public java.lang.Object getTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetGroupArnsInput`<sup>Optional</sup> <a name="targetGroupArnsInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.targetGroupArnsInput"></a>

```java
public java.util.List<java.lang.String> getTargetGroupArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `terminationPoliciesInput`<sup>Optional</sup> <a name="terminationPoliciesInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.terminationPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTerminationPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcZoneIdentifierInput`<sup>Optional</sup> <a name="vpcZoneIdentifierInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.vpcZoneIdentifierInput"></a>

```java
public java.util.List<java.lang.String> getVpcZoneIdentifierInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitForCapacityTimeoutInput`<sup>Optional</sup> <a name="waitForCapacityTimeoutInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.waitForCapacityTimeoutInput"></a>

```java
public java.lang.String getWaitForCapacityTimeoutInput();
```

- *Type:* java.lang.String

---

##### `waitForElbCapacityInput`<sup>Optional</sup> <a name="waitForElbCapacityInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.waitForElbCapacityInput"></a>

```java
public java.lang.Number getWaitForElbCapacityInput();
```

- *Type:* java.lang.Number

---

##### `warmPoolInput`<sup>Optional</sup> <a name="warmPoolInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.warmPoolInput"></a>

```java
public AutoscalingGroupWarmPool getWarmPoolInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capacityRebalance`<sup>Required</sup> <a name="capacityRebalance" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.capacityRebalance"></a>

```java
public java.lang.Object getCapacityRebalance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

---

##### `defaultCooldown`<sup>Required</sup> <a name="defaultCooldown" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.defaultCooldown"></a>

```java
public java.lang.Number getDefaultCooldown();
```

- *Type:* java.lang.Number

---

##### `defaultInstanceWarmup`<sup>Required</sup> <a name="defaultInstanceWarmup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.defaultInstanceWarmup"></a>

```java
public java.lang.Number getDefaultInstanceWarmup();
```

- *Type:* java.lang.Number

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

---

##### `desiredCapacityType`<sup>Required</sup> <a name="desiredCapacityType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.desiredCapacityType"></a>

```java
public java.lang.String getDesiredCapacityType();
```

- *Type:* java.lang.String

---

##### `enabledMetrics`<sup>Required</sup> <a name="enabledMetrics" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.enabledMetrics"></a>

```java
public java.util.List<java.lang.String> getEnabledMetrics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceDeleteWarmPool`<sup>Required</sup> <a name="forceDeleteWarmPool" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.forceDeleteWarmPool"></a>

```java
public java.lang.Object getForceDeleteWarmPool();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckGracePeriod`<sup>Required</sup> <a name="healthCheckGracePeriod" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.healthCheckGracePeriod"></a>

```java
public java.lang.Number getHealthCheckGracePeriod();
```

- *Type:* java.lang.Number

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `launchConfiguration`<sup>Required</sup> <a name="launchConfiguration" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.launchConfiguration"></a>

```java
public java.lang.String getLaunchConfiguration();
```

- *Type:* java.lang.String

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.loadBalancers"></a>

```java
public java.util.List<java.lang.String> getLoadBalancers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxInstanceLifetime`<sup>Required</sup> <a name="maxInstanceLifetime" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.maxInstanceLifetime"></a>

```java
public java.lang.Number getMaxInstanceLifetime();
```

- *Type:* java.lang.Number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `metricsGranularity`<sup>Required</sup> <a name="metricsGranularity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.metricsGranularity"></a>

```java
public java.lang.String getMetricsGranularity();
```

- *Type:* java.lang.String

---

##### `minElbCapacity`<sup>Required</sup> <a name="minElbCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.minElbCapacity"></a>

```java
public java.lang.Number getMinElbCapacity();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.placementGroup"></a>

```java
public java.lang.String getPlacementGroup();
```

- *Type:* java.lang.String

---

##### `protectFromScaleIn`<sup>Required</sup> <a name="protectFromScaleIn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.protectFromScaleIn"></a>

```java
public java.lang.Object getProtectFromScaleIn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceLinkedRoleArn`<sup>Required</sup> <a name="serviceLinkedRoleArn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.serviceLinkedRoleArn"></a>

```java
public java.lang.String getServiceLinkedRoleArn();
```

- *Type:* java.lang.String

---

##### `suspendedProcesses`<sup>Required</sup> <a name="suspendedProcesses" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.suspendedProcesses"></a>

```java
public java.util.List<java.lang.String> getSuspendedProcesses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetGroupArns`<sup>Required</sup> <a name="targetGroupArns" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.targetGroupArns"></a>

```java
public java.util.List<java.lang.String> getTargetGroupArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `terminationPolicies`<sup>Required</sup> <a name="terminationPolicies" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.terminationPolicies"></a>

```java
public java.util.List<java.lang.String> getTerminationPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcZoneIdentifier`<sup>Required</sup> <a name="vpcZoneIdentifier" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.vpcZoneIdentifier"></a>

```java
public java.util.List<java.lang.String> getVpcZoneIdentifier();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitForCapacityTimeout`<sup>Required</sup> <a name="waitForCapacityTimeout" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.waitForCapacityTimeout"></a>

```java
public java.lang.String getWaitForCapacityTimeout();
```

- *Type:* java.lang.String

---

##### `waitForElbCapacity`<sup>Required</sup> <a name="waitForElbCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.waitForElbCapacity"></a>

```java
public java.lang.Number getWaitForElbCapacity();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingGroupConfig <a name="AutoscalingGroupConfig" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupConfig;

AutoscalingGroupConfig.builder()
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
    .maxSize(java.lang.Number)
    .minSize(java.lang.Number)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .capacityRebalance(java.lang.Boolean)
//  .capacityRebalance(IResolvable)
//  .context(java.lang.String)
//  .defaultCooldown(java.lang.Number)
//  .defaultInstanceWarmup(java.lang.Number)
//  .desiredCapacity(java.lang.Number)
//  .desiredCapacityType(java.lang.String)
//  .enabledMetrics(java.util.List<java.lang.String>)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .forceDeleteWarmPool(java.lang.Boolean)
//  .forceDeleteWarmPool(IResolvable)
//  .healthCheckGracePeriod(java.lang.Number)
//  .healthCheckType(java.lang.String)
//  .id(java.lang.String)
//  .initialLifecycleHook(IResolvable)
//  .initialLifecycleHook(java.util.List<AutoscalingGroupInitialLifecycleHook>)
//  .instanceRefresh(AutoscalingGroupInstanceRefresh)
//  .launchConfiguration(java.lang.String)
//  .launchTemplate(AutoscalingGroupLaunchTemplate)
//  .loadBalancers(java.util.List<java.lang.String>)
//  .maxInstanceLifetime(java.lang.Number)
//  .metricsGranularity(java.lang.String)
//  .minElbCapacity(java.lang.Number)
//  .mixedInstancesPolicy(AutoscalingGroupMixedInstancesPolicy)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .placementGroup(java.lang.String)
//  .protectFromScaleIn(java.lang.Boolean)
//  .protectFromScaleIn(IResolvable)
//  .serviceLinkedRoleArn(java.lang.String)
//  .suspendedProcesses(java.util.List<java.lang.String>)
//  .tag(IResolvable)
//  .tag(java.util.List<AutoscalingGroupTag>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .targetGroupArns(java.util.List<java.lang.String>)
//  .terminationPolicies(java.util.List<java.lang.String>)
//  .timeouts(AutoscalingGroupTimeouts)
//  .vpcZoneIdentifier(java.util.List<java.lang.String>)
//  .waitForCapacityTimeout(java.lang.String)
//  .waitForElbCapacity(java.lang.Number)
//  .warmPool(AutoscalingGroupWarmPool)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max_size AutoscalingGroup#max_size}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_size AutoscalingGroup#min_size}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#availability_zones AutoscalingGroup#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.capacityRebalance">capacityRebalance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#capacity_rebalance AutoscalingGroup#capacity_rebalance}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.context">context</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#context AutoscalingGroup#context}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.defaultCooldown">defaultCooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#default_cooldown AutoscalingGroup#default_cooldown}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.defaultInstanceWarmup">defaultInstanceWarmup</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#default_instance_warmup AutoscalingGroup#default_instance_warmup}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#desired_capacity AutoscalingGroup#desired_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.desiredCapacityType">desiredCapacityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#desired_capacity_type AutoscalingGroup#desired_capacity_type}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.enabledMetrics">enabledMetrics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#enabled_metrics AutoscalingGroup#enabled_metrics}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#force_delete AutoscalingGroup#force_delete}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.forceDeleteWarmPool">forceDeleteWarmPool</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#health_check_grace_period AutoscalingGroup#health_check_grace_period}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#health_check_type AutoscalingGroup#health_check_type}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#id AutoscalingGroup#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.initialLifecycleHook">initialLifecycleHook</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>></code> | initial_lifecycle_hook block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.instanceRefresh">instanceRefresh</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a></code> | instance_refresh block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.launchConfiguration">launchConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_configuration AutoscalingGroup#launch_configuration}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.loadBalancers">loadBalancers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#load_balancers AutoscalingGroup#load_balancers}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.maxInstanceLifetime">maxInstanceLifetime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.metricsGranularity">metricsGranularity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#metrics_granularity AutoscalingGroup#metrics_granularity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.minElbCapacity">minElbCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_elb_capacity AutoscalingGroup#min_elb_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.mixedInstancesPolicy">mixedInstancesPolicy</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a></code> | mixed_instances_policy block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name AutoscalingGroup#name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name_prefix AutoscalingGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.placementGroup">placementGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#placement_group AutoscalingGroup#placement_group}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.protectFromScaleIn">protectFromScaleIn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.serviceLinkedRoleArn">serviceLinkedRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.suspendedProcesses">suspendedProcesses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#suspended_processes AutoscalingGroup#suspended_processes}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#tags AutoscalingGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.targetGroupArns">targetGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#target_group_arns AutoscalingGroup#target_group_arns}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.terminationPolicies">terminationPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#termination_policies AutoscalingGroup#termination_policies}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.vpcZoneIdentifier">vpcZoneIdentifier</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.waitForCapacityTimeout">waitForCapacityTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.waitForElbCapacity">waitForElbCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.warmPool">warmPool</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a></code> | warm_pool block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max_size AutoscalingGroup#max_size}.

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_size AutoscalingGroup#min_size}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#availability_zones AutoscalingGroup#availability_zones}.

---

##### `capacityRebalance`<sup>Optional</sup> <a name="capacityRebalance" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.capacityRebalance"></a>

```java
public java.lang.Object getCapacityRebalance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#capacity_rebalance AutoscalingGroup#capacity_rebalance}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#context AutoscalingGroup#context}.

---

##### `defaultCooldown`<sup>Optional</sup> <a name="defaultCooldown" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.defaultCooldown"></a>

```java
public java.lang.Number getDefaultCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#default_cooldown AutoscalingGroup#default_cooldown}.

---

##### `defaultInstanceWarmup`<sup>Optional</sup> <a name="defaultInstanceWarmup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.defaultInstanceWarmup"></a>

```java
public java.lang.Number getDefaultInstanceWarmup();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#default_instance_warmup AutoscalingGroup#default_instance_warmup}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#desired_capacity AutoscalingGroup#desired_capacity}.

---

##### `desiredCapacityType`<sup>Optional</sup> <a name="desiredCapacityType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.desiredCapacityType"></a>

```java
public java.lang.String getDesiredCapacityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#desired_capacity_type AutoscalingGroup#desired_capacity_type}.

---

##### `enabledMetrics`<sup>Optional</sup> <a name="enabledMetrics" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.enabledMetrics"></a>

```java
public java.util.List<java.lang.String> getEnabledMetrics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#enabled_metrics AutoscalingGroup#enabled_metrics}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#force_delete AutoscalingGroup#force_delete}.

---

##### `forceDeleteWarmPool`<sup>Optional</sup> <a name="forceDeleteWarmPool" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.forceDeleteWarmPool"></a>

```java
public java.lang.Object getForceDeleteWarmPool();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}.

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.healthCheckGracePeriod"></a>

```java
public java.lang.Number getHealthCheckGracePeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#health_check_grace_period AutoscalingGroup#health_check_grace_period}.

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#health_check_type AutoscalingGroup#health_check_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#id AutoscalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialLifecycleHook`<sup>Optional</sup> <a name="initialLifecycleHook" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.initialLifecycleHook"></a>

```java
public java.lang.Object getInitialLifecycleHook();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>>

initial_lifecycle_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#initial_lifecycle_hook AutoscalingGroup#initial_lifecycle_hook}

---

##### `instanceRefresh`<sup>Optional</sup> <a name="instanceRefresh" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.instanceRefresh"></a>

```java
public AutoscalingGroupInstanceRefresh getInstanceRefresh();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a>

instance_refresh block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#instance_refresh AutoscalingGroup#instance_refresh}

---

##### `launchConfiguration`<sup>Optional</sup> <a name="launchConfiguration" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.launchConfiguration"></a>

```java
public java.lang.String getLaunchConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_configuration AutoscalingGroup#launch_configuration}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.launchTemplate"></a>

```java
public AutoscalingGroupLaunchTemplate getLaunchTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template AutoscalingGroup#launch_template}

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.loadBalancers"></a>

```java
public java.util.List<java.lang.String> getLoadBalancers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#load_balancers AutoscalingGroup#load_balancers}.

---

##### `maxInstanceLifetime`<sup>Optional</sup> <a name="maxInstanceLifetime" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.maxInstanceLifetime"></a>

```java
public java.lang.Number getMaxInstanceLifetime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}.

---

##### `metricsGranularity`<sup>Optional</sup> <a name="metricsGranularity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.metricsGranularity"></a>

```java
public java.lang.String getMetricsGranularity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#metrics_granularity AutoscalingGroup#metrics_granularity}.

---

##### `minElbCapacity`<sup>Optional</sup> <a name="minElbCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.minElbCapacity"></a>

```java
public java.lang.Number getMinElbCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_elb_capacity AutoscalingGroup#min_elb_capacity}.

---

##### `mixedInstancesPolicy`<sup>Optional</sup> <a name="mixedInstancesPolicy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.mixedInstancesPolicy"></a>

```java
public AutoscalingGroupMixedInstancesPolicy getMixedInstancesPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a>

mixed_instances_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#mixed_instances_policy AutoscalingGroup#mixed_instances_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name AutoscalingGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name_prefix AutoscalingGroup#name_prefix}.

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.placementGroup"></a>

```java
public java.lang.String getPlacementGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#placement_group AutoscalingGroup#placement_group}.

---

##### `protectFromScaleIn`<sup>Optional</sup> <a name="protectFromScaleIn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.protectFromScaleIn"></a>

```java
public java.lang.Object getProtectFromScaleIn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}.

---

##### `serviceLinkedRoleArn`<sup>Optional</sup> <a name="serviceLinkedRoleArn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.serviceLinkedRoleArn"></a>

```java
public java.lang.String getServiceLinkedRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}.

---

##### `suspendedProcesses`<sup>Optional</sup> <a name="suspendedProcesses" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.suspendedProcesses"></a>

```java
public java.util.List<java.lang.String> getSuspendedProcesses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#suspended_processes AutoscalingGroup#suspended_processes}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.tag"></a>

```java
public java.lang.Object getTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#tag AutoscalingGroup#tag}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#tags AutoscalingGroup#tags}.

---

##### `targetGroupArns`<sup>Optional</sup> <a name="targetGroupArns" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.targetGroupArns"></a>

```java
public java.util.List<java.lang.String> getTargetGroupArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#target_group_arns AutoscalingGroup#target_group_arns}.

---

##### `terminationPolicies`<sup>Optional</sup> <a name="terminationPolicies" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.terminationPolicies"></a>

```java
public java.util.List<java.lang.String> getTerminationPolicies();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#termination_policies AutoscalingGroup#termination_policies}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.timeouts"></a>

```java
public AutoscalingGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#timeouts AutoscalingGroup#timeouts}

---

##### `vpcZoneIdentifier`<sup>Optional</sup> <a name="vpcZoneIdentifier" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.vpcZoneIdentifier"></a>

```java
public java.util.List<java.lang.String> getVpcZoneIdentifier();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}.

---

##### `waitForCapacityTimeout`<sup>Optional</sup> <a name="waitForCapacityTimeout" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.waitForCapacityTimeout"></a>

```java
public java.lang.String getWaitForCapacityTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}.

---

##### `waitForElbCapacity`<sup>Optional</sup> <a name="waitForElbCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.waitForElbCapacity"></a>

```java
public java.lang.Number getWaitForElbCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}.

---

##### `warmPool`<sup>Optional</sup> <a name="warmPool" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupConfig.property.warmPool"></a>

```java
public AutoscalingGroupWarmPool getWarmPool();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a>

warm_pool block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#warm_pool AutoscalingGroup#warm_pool}

---

### AutoscalingGroupInitialLifecycleHook <a name="AutoscalingGroupInitialLifecycleHook" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupInitialLifecycleHook;

AutoscalingGroupInitialLifecycleHook.builder()
    .lifecycleTransition(java.lang.String)
    .name(java.lang.String)
//  .defaultResult(java.lang.String)
//  .heartbeatTimeout(java.lang.Number)
//  .notificationMetadata(java.lang.String)
//  .notificationTargetArn(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.lifecycleTransition">lifecycleTransition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#lifecycle_transition AutoscalingGroup#lifecycle_transition}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name AutoscalingGroup#name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.defaultResult">defaultResult</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#default_result AutoscalingGroup#default_result}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#heartbeat_timeout AutoscalingGroup#heartbeat_timeout}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.notificationMetadata">notificationMetadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#notification_metadata AutoscalingGroup#notification_metadata}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.notificationTargetArn">notificationTargetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#notification_target_arn AutoscalingGroup#notification_target_arn}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#role_arn AutoscalingGroup#role_arn}. |

---

##### `lifecycleTransition`<sup>Required</sup> <a name="lifecycleTransition" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.lifecycleTransition"></a>

```java
public java.lang.String getLifecycleTransition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#lifecycle_transition AutoscalingGroup#lifecycle_transition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name AutoscalingGroup#name}.

---

##### `defaultResult`<sup>Optional</sup> <a name="defaultResult" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.defaultResult"></a>

```java
public java.lang.String getDefaultResult();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#default_result AutoscalingGroup#default_result}.

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="heartbeatTimeout" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.heartbeatTimeout"></a>

```java
public java.lang.Number getHeartbeatTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#heartbeat_timeout AutoscalingGroup#heartbeat_timeout}.

---

##### `notificationMetadata`<sup>Optional</sup> <a name="notificationMetadata" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.notificationMetadata"></a>

```java
public java.lang.String getNotificationMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#notification_metadata AutoscalingGroup#notification_metadata}.

---

##### `notificationTargetArn`<sup>Optional</sup> <a name="notificationTargetArn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.notificationTargetArn"></a>

```java
public java.lang.String getNotificationTargetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#notification_target_arn AutoscalingGroup#notification_target_arn}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#role_arn AutoscalingGroup#role_arn}.

---

### AutoscalingGroupInstanceRefresh <a name="AutoscalingGroupInstanceRefresh" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupInstanceRefresh;

AutoscalingGroupInstanceRefresh.builder()
    .strategy(java.lang.String)
//  .preferences(AutoscalingGroupInstanceRefreshPreferences)
//  .triggers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.strategy">strategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#strategy AutoscalingGroup#strategy}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.preferences">preferences</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a></code> | preferences block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.triggers">triggers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#triggers AutoscalingGroup#triggers}. |

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#strategy AutoscalingGroup#strategy}.

---

##### `preferences`<sup>Optional</sup> <a name="preferences" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.preferences"></a>

```java
public AutoscalingGroupInstanceRefreshPreferences getPreferences();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a>

preferences block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#preferences AutoscalingGroup#preferences}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.triggers"></a>

```java
public java.util.List<java.lang.String> getTriggers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#triggers AutoscalingGroup#triggers}.

---

### AutoscalingGroupInstanceRefreshPreferences <a name="AutoscalingGroupInstanceRefreshPreferences" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupInstanceRefreshPreferences;

AutoscalingGroupInstanceRefreshPreferences.builder()
//  .checkpointDelay(java.lang.String)
//  .checkpointPercentages(java.util.List<java.lang.Number>)
//  .instanceWarmup(java.lang.String)
//  .minHealthyPercentage(java.lang.Number)
//  .skipMatching(java.lang.Boolean)
//  .skipMatching(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.checkpointDelay">checkpointDelay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#checkpoint_delay AutoscalingGroup#checkpoint_delay}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.checkpointPercentages">checkpointPercentages</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#checkpoint_percentages AutoscalingGroup#checkpoint_percentages}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.instanceWarmup">instanceWarmup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#instance_warmup AutoscalingGroup#instance_warmup}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.minHealthyPercentage">minHealthyPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_healthy_percentage AutoscalingGroup#min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.skipMatching">skipMatching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#skip_matching AutoscalingGroup#skip_matching}. |

---

##### `checkpointDelay`<sup>Optional</sup> <a name="checkpointDelay" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.checkpointDelay"></a>

```java
public java.lang.String getCheckpointDelay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#checkpoint_delay AutoscalingGroup#checkpoint_delay}.

---

##### `checkpointPercentages`<sup>Optional</sup> <a name="checkpointPercentages" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.checkpointPercentages"></a>

```java
public java.util.List<java.lang.Number> getCheckpointPercentages();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#checkpoint_percentages AutoscalingGroup#checkpoint_percentages}.

---

##### `instanceWarmup`<sup>Optional</sup> <a name="instanceWarmup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.instanceWarmup"></a>

```java
public java.lang.String getInstanceWarmup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#instance_warmup AutoscalingGroup#instance_warmup}.

---

##### `minHealthyPercentage`<sup>Optional</sup> <a name="minHealthyPercentage" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.minHealthyPercentage"></a>

```java
public java.lang.Number getMinHealthyPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_healthy_percentage AutoscalingGroup#min_healthy_percentage}.

---

##### `skipMatching`<sup>Optional</sup> <a name="skipMatching" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.skipMatching"></a>

```java
public java.lang.Object getSkipMatching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#skip_matching AutoscalingGroup#skip_matching}.

---

### AutoscalingGroupLaunchTemplate <a name="AutoscalingGroupLaunchTemplate" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupLaunchTemplate;

AutoscalingGroupLaunchTemplate.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#id AutoscalingGroup#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name AutoscalingGroup#name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#version AutoscalingGroup#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#id AutoscalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#name AutoscalingGroup#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#version AutoscalingGroup#version}.

---

### AutoscalingGroupMixedInstancesPolicy <a name="AutoscalingGroupMixedInstancesPolicy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicy;

AutoscalingGroupMixedInstancesPolicy.builder()
    .launchTemplate(AutoscalingGroupMixedInstancesPolicyLaunchTemplate)
//  .instancesDistribution(AutoscalingGroupMixedInstancesPolicyInstancesDistribution)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy.property.instancesDistribution">instancesDistribution</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a></code> | instances_distribution block. |

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy.property.launchTemplate"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplate getLaunchTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template AutoscalingGroup#launch_template}

---

##### `instancesDistribution`<sup>Optional</sup> <a name="instancesDistribution" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy.property.instancesDistribution"></a>

```java
public AutoscalingGroupMixedInstancesPolicyInstancesDistribution getInstancesDistribution();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a>

instances_distribution block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#instances_distribution AutoscalingGroup#instances_distribution}

---

### AutoscalingGroupMixedInstancesPolicyInstancesDistribution <a name="AutoscalingGroupMixedInstancesPolicyInstancesDistribution" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyInstancesDistribution;

AutoscalingGroupMixedInstancesPolicyInstancesDistribution.builder()
//  .onDemandAllocationStrategy(java.lang.String)
//  .onDemandBaseCapacity(java.lang.Number)
//  .onDemandPercentageAboveBaseCapacity(java.lang.Number)
//  .spotAllocationStrategy(java.lang.String)
//  .spotInstancePools(java.lang.Number)
//  .spotMaxPrice(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandAllocationStrategy">onDemandAllocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#on_demand_allocation_strategy AutoscalingGroup#on_demand_allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandBaseCapacity">onDemandBaseCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#on_demand_base_capacity AutoscalingGroup#on_demand_base_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandPercentageAboveBaseCapacity">onDemandPercentageAboveBaseCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#on_demand_percentage_above_base_capacity AutoscalingGroup#on_demand_percentage_above_base_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotAllocationStrategy">spotAllocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#spot_allocation_strategy AutoscalingGroup#spot_allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotInstancePools">spotInstancePools</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#spot_instance_pools AutoscalingGroup#spot_instance_pools}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotMaxPrice">spotMaxPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#spot_max_price AutoscalingGroup#spot_max_price}. |

---

##### `onDemandAllocationStrategy`<sup>Optional</sup> <a name="onDemandAllocationStrategy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandAllocationStrategy"></a>

```java
public java.lang.String getOnDemandAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#on_demand_allocation_strategy AutoscalingGroup#on_demand_allocation_strategy}.

---

##### `onDemandBaseCapacity`<sup>Optional</sup> <a name="onDemandBaseCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandBaseCapacity"></a>

```java
public java.lang.Number getOnDemandBaseCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#on_demand_base_capacity AutoscalingGroup#on_demand_base_capacity}.

---

##### `onDemandPercentageAboveBaseCapacity`<sup>Optional</sup> <a name="onDemandPercentageAboveBaseCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandPercentageAboveBaseCapacity"></a>

```java
public java.lang.Number getOnDemandPercentageAboveBaseCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#on_demand_percentage_above_base_capacity AutoscalingGroup#on_demand_percentage_above_base_capacity}.

---

##### `spotAllocationStrategy`<sup>Optional</sup> <a name="spotAllocationStrategy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotAllocationStrategy"></a>

```java
public java.lang.String getSpotAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#spot_allocation_strategy AutoscalingGroup#spot_allocation_strategy}.

---

##### `spotInstancePools`<sup>Optional</sup> <a name="spotInstancePools" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotInstancePools"></a>

```java
public java.lang.Number getSpotInstancePools();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#spot_instance_pools AutoscalingGroup#spot_instance_pools}.

---

##### `spotMaxPrice`<sup>Optional</sup> <a name="spotMaxPrice" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotMaxPrice"></a>

```java
public java.lang.String getSpotMaxPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#spot_max_price AutoscalingGroup#spot_max_price}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplate <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplate" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplate;

AutoscalingGroupMixedInstancesPolicyLaunchTemplate.builder()
    .launchTemplateSpecification(AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification)
//  .override(IResolvable)
//  .override(java.util.List<AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a></code> | launch_template_specification block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate.property.override">override</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>></code> | override block. |

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate.property.launchTemplateSpecification"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification getLaunchTemplateSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template_specification AutoscalingGroup#launch_template_specification}

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate.property.override"></a>

```java
public java.lang.Object getOverride();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>>

override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#override AutoscalingGroup#override}

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.builder()
//  .launchTemplateId(java.lang.String)
//  .launchTemplateName(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#version AutoscalingGroup#version}. |

---

##### `launchTemplateId`<sup>Optional</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#version AutoscalingGroup#version}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.builder()
//  .instanceRequirements(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements)
//  .instanceType(java.lang.String)
//  .launchTemplateSpecification(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification)
//  .weightedCapacity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements</a></code> | instance_requirements block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#instance_type AutoscalingGroup#instance_type}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a></code> | launch_template_specification block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#weighted_capacity AutoscalingGroup#weighted_capacity}. |

---

##### `instanceRequirements`<sup>Optional</sup> <a name="instanceRequirements" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.instanceRequirements"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements getInstanceRequirements();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements</a>

instance_requirements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#instance_requirements AutoscalingGroup#instance_requirements}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#instance_type AutoscalingGroup#instance_type}.

---

##### `launchTemplateSpecification`<sup>Optional</sup> <a name="launchTemplateSpecification" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.launchTemplateSpecification"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification getLaunchTemplateSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template_specification AutoscalingGroup#launch_template_specification}

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.weightedCapacity"></a>

```java
public java.lang.String getWeightedCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#weighted_capacity AutoscalingGroup#weighted_capacity}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.builder()
//  .acceleratorCount(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount)
//  .acceleratorManufacturers(java.util.List<java.lang.String>)
//  .acceleratorNames(java.util.List<java.lang.String>)
//  .acceleratorTotalMemoryMib(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib)
//  .acceleratorTypes(java.util.List<java.lang.String>)
//  .bareMetal(java.lang.String)
//  .baselineEbsBandwidthMbps(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps)
//  .burstablePerformance(java.lang.String)
//  .cpuManufacturers(java.util.List<java.lang.String>)
//  .excludedInstanceTypes(java.util.List<java.lang.String>)
//  .instanceGenerations(java.util.List<java.lang.String>)
//  .localStorage(java.lang.String)
//  .localStorageTypes(java.util.List<java.lang.String>)
//  .memoryGibPerVcpu(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu)
//  .memoryMib(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib)
//  .networkInterfaceCount(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount)
//  .onDemandMaxPricePercentageOverLowestPrice(java.lang.Number)
//  .requireHibernateSupport(java.lang.Boolean)
//  .requireHibernateSupport(IResolvable)
//  .spotMaxPricePercentageOverLowestPrice(java.lang.Number)
//  .totalLocalStorageGb(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb)
//  .vcpuCount(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount</a></code> | accelerator_count block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.acceleratorManufacturers">acceleratorManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#accelerator_manufacturers AutoscalingGroup#accelerator_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.acceleratorNames">acceleratorNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#accelerator_names AutoscalingGroup#accelerator_names}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.acceleratorTotalMemoryMib">acceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | accelerator_total_memory_mib block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#accelerator_types AutoscalingGroup#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.bareMetal">bareMetal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#bare_metal AutoscalingGroup#bare_metal}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.baselineEbsBandwidthMbps">baselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | baseline_ebs_bandwidth_mbps block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.burstablePerformance">burstablePerformance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#burstable_performance AutoscalingGroup#burstable_performance}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.cpuManufacturers">cpuManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#cpu_manufacturers AutoscalingGroup#cpu_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#excluded_instance_types AutoscalingGroup#excluded_instance_types}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.instanceGenerations">instanceGenerations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#instance_generations AutoscalingGroup#instance_generations}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.localStorage">localStorage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#local_storage AutoscalingGroup#local_storage}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.localStorageTypes">localStorageTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#local_storage_types AutoscalingGroup#local_storage_types}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.memoryGibPerVcpu">memoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | memory_gib_per_vcpu block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.memoryMib">memoryMib</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib</a></code> | memory_mib block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.networkInterfaceCount">networkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | network_interface_count block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice">onDemandMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#on_demand_max_price_percentage_over_lowest_price AutoscalingGroup#on_demand_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.requireHibernateSupport">requireHibernateSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#require_hibernate_support AutoscalingGroup#require_hibernate_support}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice">spotMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#spot_max_price_percentage_over_lowest_price AutoscalingGroup#spot_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.totalLocalStorageGb">totalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | total_local_storage_gb block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.vcpuCount">vcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount</a></code> | vcpu_count block. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.acceleratorCount"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount getAcceleratorCount();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#accelerator_count AutoscalingGroup#accelerator_count}

---

##### `acceleratorManufacturers`<sup>Optional</sup> <a name="acceleratorManufacturers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.acceleratorManufacturers"></a>

```java
public java.util.List<java.lang.String> getAcceleratorManufacturers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#accelerator_manufacturers AutoscalingGroup#accelerator_manufacturers}.

---

##### `acceleratorNames`<sup>Optional</sup> <a name="acceleratorNames" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.acceleratorNames"></a>

```java
public java.util.List<java.lang.String> getAcceleratorNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#accelerator_names AutoscalingGroup#accelerator_names}.

---

##### `acceleratorTotalMemoryMib`<sup>Optional</sup> <a name="acceleratorTotalMemoryMib" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.acceleratorTotalMemoryMib"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib getAcceleratorTotalMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#accelerator_total_memory_mib AutoscalingGroup#accelerator_total_memory_mib}

---

##### `acceleratorTypes`<sup>Optional</sup> <a name="acceleratorTypes" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.acceleratorTypes"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#accelerator_types AutoscalingGroup#accelerator_types}.

---

##### `bareMetal`<sup>Optional</sup> <a name="bareMetal" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.bareMetal"></a>

```java
public java.lang.String getBareMetal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#bare_metal AutoscalingGroup#bare_metal}.

---

##### `baselineEbsBandwidthMbps`<sup>Optional</sup> <a name="baselineEbsBandwidthMbps" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.baselineEbsBandwidthMbps"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps getBaselineEbsBandwidthMbps();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#baseline_ebs_bandwidth_mbps AutoscalingGroup#baseline_ebs_bandwidth_mbps}

---

##### `burstablePerformance`<sup>Optional</sup> <a name="burstablePerformance" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.burstablePerformance"></a>

```java
public java.lang.String getBurstablePerformance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#burstable_performance AutoscalingGroup#burstable_performance}.

---

##### `cpuManufacturers`<sup>Optional</sup> <a name="cpuManufacturers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.cpuManufacturers"></a>

```java
public java.util.List<java.lang.String> getCpuManufacturers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#cpu_manufacturers AutoscalingGroup#cpu_manufacturers}.

---

##### `excludedInstanceTypes`<sup>Optional</sup> <a name="excludedInstanceTypes" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.excludedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#excluded_instance_types AutoscalingGroup#excluded_instance_types}.

---

##### `instanceGenerations`<sup>Optional</sup> <a name="instanceGenerations" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.instanceGenerations"></a>

```java
public java.util.List<java.lang.String> getInstanceGenerations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#instance_generations AutoscalingGroup#instance_generations}.

---

##### `localStorage`<sup>Optional</sup> <a name="localStorage" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.localStorage"></a>

```java
public java.lang.String getLocalStorage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#local_storage AutoscalingGroup#local_storage}.

---

##### `localStorageTypes`<sup>Optional</sup> <a name="localStorageTypes" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.localStorageTypes"></a>

```java
public java.util.List<java.lang.String> getLocalStorageTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#local_storage_types AutoscalingGroup#local_storage_types}.

---

##### `memoryGibPerVcpu`<sup>Optional</sup> <a name="memoryGibPerVcpu" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.memoryGibPerVcpu"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu getMemoryGibPerVcpu();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#memory_gib_per_vcpu AutoscalingGroup#memory_gib_per_vcpu}

---

##### `memoryMib`<sup>Optional</sup> <a name="memoryMib" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.memoryMib"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib getMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#memory_mib AutoscalingGroup#memory_mib}

---

##### `networkInterfaceCount`<sup>Optional</sup> <a name="networkInterfaceCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.networkInterfaceCount"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount getNetworkInterfaceCount();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#network_interface_count AutoscalingGroup#network_interface_count}

---

##### `onDemandMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="onDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getOnDemandMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#on_demand_max_price_percentage_over_lowest_price AutoscalingGroup#on_demand_max_price_percentage_over_lowest_price}.

---

##### `requireHibernateSupport`<sup>Optional</sup> <a name="requireHibernateSupport" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.requireHibernateSupport"></a>

```java
public java.lang.Object getRequireHibernateSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#require_hibernate_support AutoscalingGroup#require_hibernate_support}.

---

##### `spotMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="spotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getSpotMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#spot_max_price_percentage_over_lowest_price AutoscalingGroup#spot_max_price_percentage_over_lowest_price}.

---

##### `totalLocalStorageGb`<sup>Optional</sup> <a name="totalLocalStorageGb" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.totalLocalStorageGb"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb getTotalLocalStorageGb();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#total_local_storage_gb AutoscalingGroup#total_local_storage_gb}

---

##### `vcpuCount`<sup>Optional</sup> <a name="vcpuCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements.property.vcpuCount"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount getVcpuCount();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#vcpu_count AutoscalingGroup#vcpu_count}

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max AutoscalingGroup#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min AutoscalingGroup#min}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification;

AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.builder()
//  .launchTemplateId(java.lang.String)
//  .launchTemplateName(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#version AutoscalingGroup#version}. |

---

##### `launchTemplateId`<sup>Optional</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#version AutoscalingGroup#version}.

---

### AutoscalingGroupTag <a name="AutoscalingGroupTag" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupTag;

AutoscalingGroupTag.builder()
    .key(java.lang.String)
    .propagateAtLaunch(java.lang.Boolean)
    .propagateAtLaunch(IResolvable)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#key AutoscalingGroup#key}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag.property.propagateAtLaunch">propagateAtLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#propagate_at_launch AutoscalingGroup#propagate_at_launch}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#value AutoscalingGroup#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#key AutoscalingGroup#key}.

---

##### `propagateAtLaunch`<sup>Required</sup> <a name="propagateAtLaunch" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag.property.propagateAtLaunch"></a>

```java
public java.lang.Object getPropagateAtLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#propagate_at_launch AutoscalingGroup#propagate_at_launch}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#value AutoscalingGroup#value}.

---

### AutoscalingGroupTimeouts <a name="AutoscalingGroupTimeouts" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupTimeouts;

AutoscalingGroupTimeouts.builder()
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#delete AutoscalingGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#update AutoscalingGroup#update}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#delete AutoscalingGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#update AutoscalingGroup#update}.

---

### AutoscalingGroupWarmPool <a name="AutoscalingGroupWarmPool" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupWarmPool;

AutoscalingGroupWarmPool.builder()
//  .instanceReusePolicy(AutoscalingGroupWarmPoolInstanceReusePolicy)
//  .maxGroupPreparedCapacity(java.lang.Number)
//  .minSize(java.lang.Number)
//  .poolState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool.property.instanceReusePolicy">instanceReusePolicy</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicy">AutoscalingGroupWarmPoolInstanceReusePolicy</a></code> | instance_reuse_policy block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool.property.maxGroupPreparedCapacity">maxGroupPreparedCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max_group_prepared_capacity AutoscalingGroup#max_group_prepared_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_size AutoscalingGroup#min_size}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool.property.poolState">poolState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#pool_state AutoscalingGroup#pool_state}. |

---

##### `instanceReusePolicy`<sup>Optional</sup> <a name="instanceReusePolicy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool.property.instanceReusePolicy"></a>

```java
public AutoscalingGroupWarmPoolInstanceReusePolicy getInstanceReusePolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicy">AutoscalingGroupWarmPoolInstanceReusePolicy</a>

instance_reuse_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#instance_reuse_policy AutoscalingGroup#instance_reuse_policy}

---

##### `maxGroupPreparedCapacity`<sup>Optional</sup> <a name="maxGroupPreparedCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool.property.maxGroupPreparedCapacity"></a>

```java
public java.lang.Number getMaxGroupPreparedCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#max_group_prepared_capacity AutoscalingGroup#max_group_prepared_capacity}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#min_size AutoscalingGroup#min_size}.

---

##### `poolState`<sup>Optional</sup> <a name="poolState" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool.property.poolState"></a>

```java
public java.lang.String getPoolState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#pool_state AutoscalingGroup#pool_state}.

---

### AutoscalingGroupWarmPoolInstanceReusePolicy <a name="AutoscalingGroupWarmPoolInstanceReusePolicy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupWarmPoolInstanceReusePolicy;

AutoscalingGroupWarmPoolInstanceReusePolicy.builder()
//  .reuseOnScaleIn(java.lang.Boolean)
//  .reuseOnScaleIn(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicy.property.reuseOnScaleIn">reuseOnScaleIn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#reuse_on_scale_in AutoscalingGroup#reuse_on_scale_in}. |

---

##### `reuseOnScaleIn`<sup>Optional</sup> <a name="reuseOnScaleIn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicy.property.reuseOnScaleIn"></a>

```java
public java.lang.Object getReuseOnScaleIn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group#reuse_on_scale_in AutoscalingGroup#reuse_on_scale_in}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingGroupInitialLifecycleHookList <a name="AutoscalingGroupInitialLifecycleHookList" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupInitialLifecycleHookList;

new AutoscalingGroupInitialLifecycleHookList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.get"></a>

```java
public AutoscalingGroupInitialLifecycleHookOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>>

---


### AutoscalingGroupInitialLifecycleHookOutputReference <a name="AutoscalingGroupInitialLifecycleHookOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupInitialLifecycleHookOutputReference;

new AutoscalingGroupInitialLifecycleHookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetDefaultResult">resetDefaultResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetHeartbeatTimeout">resetHeartbeatTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetNotificationMetadata">resetNotificationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetNotificationTargetArn">resetNotificationTargetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultResult` <a name="resetDefaultResult" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetDefaultResult"></a>

```java
public void resetDefaultResult()
```

##### `resetHeartbeatTimeout` <a name="resetHeartbeatTimeout" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetHeartbeatTimeout"></a>

```java
public void resetHeartbeatTimeout()
```

##### `resetNotificationMetadata` <a name="resetNotificationMetadata" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetNotificationMetadata"></a>

```java
public void resetNotificationMetadata()
```

##### `resetNotificationTargetArn` <a name="resetNotificationTargetArn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetNotificationTargetArn"></a>

```java
public void resetNotificationTargetArn()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.defaultResultInput">defaultResultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.heartbeatTimeoutInput">heartbeatTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.lifecycleTransitionInput">lifecycleTransitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationMetadataInput">notificationMetadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationTargetArnInput">notificationTargetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.defaultResult">defaultResult</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.lifecycleTransition">lifecycleTransition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationMetadata">notificationMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationTargetArn">notificationTargetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultResultInput`<sup>Optional</sup> <a name="defaultResultInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.defaultResultInput"></a>

```java
public java.lang.String getDefaultResultInput();
```

- *Type:* java.lang.String

---

##### `heartbeatTimeoutInput`<sup>Optional</sup> <a name="heartbeatTimeoutInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.heartbeatTimeoutInput"></a>

```java
public java.lang.Number getHeartbeatTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `lifecycleTransitionInput`<sup>Optional</sup> <a name="lifecycleTransitionInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.lifecycleTransitionInput"></a>

```java
public java.lang.String getLifecycleTransitionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationMetadataInput`<sup>Optional</sup> <a name="notificationMetadataInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationMetadataInput"></a>

```java
public java.lang.String getNotificationMetadataInput();
```

- *Type:* java.lang.String

---

##### `notificationTargetArnInput`<sup>Optional</sup> <a name="notificationTargetArnInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationTargetArnInput"></a>

```java
public java.lang.String getNotificationTargetArnInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `defaultResult`<sup>Required</sup> <a name="defaultResult" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.defaultResult"></a>

```java
public java.lang.String getDefaultResult();
```

- *Type:* java.lang.String

---

##### `heartbeatTimeout`<sup>Required</sup> <a name="heartbeatTimeout" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.heartbeatTimeout"></a>

```java
public java.lang.Number getHeartbeatTimeout();
```

- *Type:* java.lang.Number

---

##### `lifecycleTransition`<sup>Required</sup> <a name="lifecycleTransition" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.lifecycleTransition"></a>

```java
public java.lang.String getLifecycleTransition();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationMetadata`<sup>Required</sup> <a name="notificationMetadata" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationMetadata"></a>

```java
public java.lang.String getNotificationMetadata();
```

- *Type:* java.lang.String

---

##### `notificationTargetArn`<sup>Required</sup> <a name="notificationTargetArn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationTargetArn"></a>

```java
public java.lang.String getNotificationTargetArn();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a> OR com.hashicorp.cdktf.IResolvable

---


### AutoscalingGroupInstanceRefreshOutputReference <a name="AutoscalingGroupInstanceRefreshOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupInstanceRefreshOutputReference;

new AutoscalingGroupInstanceRefreshOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.putPreferences">putPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resetPreferences">resetPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreferences` <a name="putPreferences" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.putPreferences"></a>

```java
public void putPreferences(AutoscalingGroupInstanceRefreshPreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.putPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a>

---

##### `resetPreferences` <a name="resetPreferences" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resetPreferences"></a>

```java
public void resetPreferences()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resetTriggers"></a>

```java
public void resetTriggers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.preferences">preferences</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference">AutoscalingGroupInstanceRefreshPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.preferencesInput">preferencesInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.strategyInput">strategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.triggersInput">triggersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.strategy">strategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.triggers">triggers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preferences`<sup>Required</sup> <a name="preferences" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.preferences"></a>

```java
public AutoscalingGroupInstanceRefreshPreferencesOutputReference getPreferences();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference">AutoscalingGroupInstanceRefreshPreferencesOutputReference</a>

---

##### `preferencesInput`<sup>Optional</sup> <a name="preferencesInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.preferencesInput"></a>

```java
public AutoscalingGroupInstanceRefreshPreferences getPreferencesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a>

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.strategyInput"></a>

```java
public java.lang.String getStrategyInput();
```

- *Type:* java.lang.String

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.triggersInput"></a>

```java
public java.util.List<java.lang.String> getTriggersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.triggers"></a>

```java
public java.util.List<java.lang.String> getTriggers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupInstanceRefresh getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a>

---


### AutoscalingGroupInstanceRefreshPreferencesOutputReference <a name="AutoscalingGroupInstanceRefreshPreferencesOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupInstanceRefreshPreferencesOutputReference;

new AutoscalingGroupInstanceRefreshPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetCheckpointDelay">resetCheckpointDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetCheckpointPercentages">resetCheckpointPercentages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetInstanceWarmup">resetInstanceWarmup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetMinHealthyPercentage">resetMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetSkipMatching">resetSkipMatching</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckpointDelay` <a name="resetCheckpointDelay" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetCheckpointDelay"></a>

```java
public void resetCheckpointDelay()
```

##### `resetCheckpointPercentages` <a name="resetCheckpointPercentages" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetCheckpointPercentages"></a>

```java
public void resetCheckpointPercentages()
```

##### `resetInstanceWarmup` <a name="resetInstanceWarmup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetInstanceWarmup"></a>

```java
public void resetInstanceWarmup()
```

##### `resetMinHealthyPercentage` <a name="resetMinHealthyPercentage" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetMinHealthyPercentage"></a>

```java
public void resetMinHealthyPercentage()
```

##### `resetSkipMatching` <a name="resetSkipMatching" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetSkipMatching"></a>

```java
public void resetSkipMatching()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointDelayInput">checkpointDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointPercentagesInput">checkpointPercentagesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.instanceWarmupInput">instanceWarmupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.minHealthyPercentageInput">minHealthyPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.skipMatchingInput">skipMatchingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointDelay">checkpointDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointPercentages">checkpointPercentages</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.instanceWarmup">instanceWarmup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.minHealthyPercentage">minHealthyPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.skipMatching">skipMatching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `checkpointDelayInput`<sup>Optional</sup> <a name="checkpointDelayInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointDelayInput"></a>

```java
public java.lang.String getCheckpointDelayInput();
```

- *Type:* java.lang.String

---

##### `checkpointPercentagesInput`<sup>Optional</sup> <a name="checkpointPercentagesInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointPercentagesInput"></a>

```java
public java.util.List<java.lang.Number> getCheckpointPercentagesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `instanceWarmupInput`<sup>Optional</sup> <a name="instanceWarmupInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.instanceWarmupInput"></a>

```java
public java.lang.String getInstanceWarmupInput();
```

- *Type:* java.lang.String

---

##### `minHealthyPercentageInput`<sup>Optional</sup> <a name="minHealthyPercentageInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.minHealthyPercentageInput"></a>

```java
public java.lang.Number getMinHealthyPercentageInput();
```

- *Type:* java.lang.Number

---

##### `skipMatchingInput`<sup>Optional</sup> <a name="skipMatchingInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.skipMatchingInput"></a>

```java
public java.lang.Object getSkipMatchingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `checkpointDelay`<sup>Required</sup> <a name="checkpointDelay" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointDelay"></a>

```java
public java.lang.String getCheckpointDelay();
```

- *Type:* java.lang.String

---

##### `checkpointPercentages`<sup>Required</sup> <a name="checkpointPercentages" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointPercentages"></a>

```java
public java.util.List<java.lang.Number> getCheckpointPercentages();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `instanceWarmup`<sup>Required</sup> <a name="instanceWarmup" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.instanceWarmup"></a>

```java
public java.lang.String getInstanceWarmup();
```

- *Type:* java.lang.String

---

##### `minHealthyPercentage`<sup>Required</sup> <a name="minHealthyPercentage" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.minHealthyPercentage"></a>

```java
public java.lang.Number getMinHealthyPercentage();
```

- *Type:* java.lang.Number

---

##### `skipMatching`<sup>Required</sup> <a name="skipMatching" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.skipMatching"></a>

```java
public java.lang.Object getSkipMatching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupInstanceRefreshPreferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a>

---


### AutoscalingGroupLaunchTemplateOutputReference <a name="AutoscalingGroupLaunchTemplateOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupLaunchTemplateOutputReference;

new AutoscalingGroupLaunchTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupLaunchTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a>

---


### AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference <a name="AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference;

new AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandAllocationStrategy">resetOnDemandAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandBaseCapacity">resetOnDemandBaseCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandPercentageAboveBaseCapacity">resetOnDemandPercentageAboveBaseCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotAllocationStrategy">resetSpotAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotInstancePools">resetSpotInstancePools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotMaxPrice">resetSpotMaxPrice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnDemandAllocationStrategy` <a name="resetOnDemandAllocationStrategy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandAllocationStrategy"></a>

```java
public void resetOnDemandAllocationStrategy()
```

##### `resetOnDemandBaseCapacity` <a name="resetOnDemandBaseCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandBaseCapacity"></a>

```java
public void resetOnDemandBaseCapacity()
```

##### `resetOnDemandPercentageAboveBaseCapacity` <a name="resetOnDemandPercentageAboveBaseCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandPercentageAboveBaseCapacity"></a>

```java
public void resetOnDemandPercentageAboveBaseCapacity()
```

##### `resetSpotAllocationStrategy` <a name="resetSpotAllocationStrategy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotAllocationStrategy"></a>

```java
public void resetSpotAllocationStrategy()
```

##### `resetSpotInstancePools` <a name="resetSpotInstancePools" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotInstancePools"></a>

```java
public void resetSpotInstancePools()
```

##### `resetSpotMaxPrice` <a name="resetSpotMaxPrice" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotMaxPrice"></a>

```java
public void resetSpotMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategyInput">onDemandAllocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacityInput">onDemandBaseCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacityInput">onDemandPercentageAboveBaseCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategyInput">spotAllocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePoolsInput">spotInstancePoolsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPriceInput">spotMaxPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategy">onDemandAllocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacity">onDemandBaseCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacity">onDemandPercentageAboveBaseCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategy">spotAllocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePools">spotInstancePools</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPrice">spotMaxPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onDemandAllocationStrategyInput`<sup>Optional</sup> <a name="onDemandAllocationStrategyInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategyInput"></a>

```java
public java.lang.String getOnDemandAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `onDemandBaseCapacityInput`<sup>Optional</sup> <a name="onDemandBaseCapacityInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacityInput"></a>

```java
public java.lang.Number getOnDemandBaseCapacityInput();
```

- *Type:* java.lang.Number

---

##### `onDemandPercentageAboveBaseCapacityInput`<sup>Optional</sup> <a name="onDemandPercentageAboveBaseCapacityInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacityInput"></a>

```java
public java.lang.Number getOnDemandPercentageAboveBaseCapacityInput();
```

- *Type:* java.lang.Number

---

##### `spotAllocationStrategyInput`<sup>Optional</sup> <a name="spotAllocationStrategyInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategyInput"></a>

```java
public java.lang.String getSpotAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `spotInstancePoolsInput`<sup>Optional</sup> <a name="spotInstancePoolsInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePoolsInput"></a>

```java
public java.lang.Number getSpotInstancePoolsInput();
```

- *Type:* java.lang.Number

---

##### `spotMaxPriceInput`<sup>Optional</sup> <a name="spotMaxPriceInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPriceInput"></a>

```java
public java.lang.String getSpotMaxPriceInput();
```

- *Type:* java.lang.String

---

##### `onDemandAllocationStrategy`<sup>Required</sup> <a name="onDemandAllocationStrategy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategy"></a>

```java
public java.lang.String getOnDemandAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `onDemandBaseCapacity`<sup>Required</sup> <a name="onDemandBaseCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacity"></a>

```java
public java.lang.Number getOnDemandBaseCapacity();
```

- *Type:* java.lang.Number

---

##### `onDemandPercentageAboveBaseCapacity`<sup>Required</sup> <a name="onDemandPercentageAboveBaseCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacity"></a>

```java
public java.lang.Number getOnDemandPercentageAboveBaseCapacity();
```

- *Type:* java.lang.Number

---

##### `spotAllocationStrategy`<sup>Required</sup> <a name="spotAllocationStrategy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategy"></a>

```java
public java.lang.String getSpotAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `spotInstancePools`<sup>Required</sup> <a name="spotInstancePools" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePools"></a>

```java
public java.lang.Number getSpotInstancePools();
```

- *Type:* java.lang.Number

---

##### `spotMaxPrice`<sup>Required</sup> <a name="spotMaxPrice" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPrice"></a>

```java
public java.lang.String getSpotMaxPrice();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyInstancesDistribution getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId">resetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName">resetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLaunchTemplateId` <a name="resetLaunchTemplateId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId"></a>

```java
public void resetLaunchTemplateId()
```

##### `resetLaunchTemplateName` <a name="resetLaunchTemplateName" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName"></a>

```java
public void resetLaunchTemplateName()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput">launchTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput">launchTemplateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `launchTemplateIdInput`<sup>Optional</sup> <a name="launchTemplateIdInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput"></a>

```java
public java.lang.String getLaunchTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateNameInput`<sup>Optional</sup> <a name="launchTemplateNameInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput"></a>

```java
public java.lang.String getLaunchTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putLaunchTemplateSpecification">putLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putOverride">putOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resetOverride">resetOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchTemplateSpecification` <a name="putLaunchTemplateSpecification" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putLaunchTemplateSpecification"></a>

```java
public void putLaunchTemplateSpecification(AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putLaunchTemplateSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a>

---

##### `putOverride` <a name="putOverride" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putOverride"></a>

```java
public void putOverride(IResolvable OR java.util.List<AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putOverride.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>>

---

##### `resetOverride` <a name="resetOverride" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resetOverride"></a>

```java
public void resetOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.override">override</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecificationInput">launchTemplateSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.overrideInput">overrideInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecification"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference getLaunchTemplateSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference</a>

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.override"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList getOverride();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList</a>

---

##### `launchTemplateSpecificationInput`<sup>Optional</sup> <a name="launchTemplateSpecificationInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecificationInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification getLaunchTemplateSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a>

---

##### `overrideInput`<sup>Optional</sup> <a name="overrideInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.overrideInput"></a>

```java
public java.lang.Object getOverrideInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putAcceleratorCount">putAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib">putAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps">putBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu">putMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putMemoryMib">putMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount">putNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb">putTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putVcpuCount">putVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetAcceleratorManufacturers">resetAcceleratorManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetAcceleratorNames">resetAcceleratorNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib">resetAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetAcceleratorTypes">resetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetBareMetal">resetBareMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps">resetBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetBurstablePerformance">resetBurstablePerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetCpuManufacturers">resetCpuManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetExcludedInstanceTypes">resetExcludedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetInstanceGenerations">resetInstanceGenerations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetLocalStorage">resetLocalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetLocalStorageTypes">resetLocalStorageTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetMemoryGibPerVcpu">resetMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetMemoryMib">resetMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetNetworkInterfaceCount">resetNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice">resetOnDemandMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetRequireHibernateSupport">resetRequireHibernateSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice">resetSpotMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetTotalLocalStorageGb">resetTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetVcpuCount">resetVcpuCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcceleratorCount` <a name="putAcceleratorCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putAcceleratorCount"></a>

```java
public void putAcceleratorCount(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putAcceleratorCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount</a>

---

##### `putAcceleratorTotalMemoryMib` <a name="putAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib"></a>

```java
public void putAcceleratorTotalMemoryMib(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `putBaselineEbsBandwidthMbps` <a name="putBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps"></a>

```java
public void putBaselineEbsBandwidthMbps(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `putMemoryGibPerVcpu` <a name="putMemoryGibPerVcpu" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu"></a>

```java
public void putMemoryGibPerVcpu(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `putMemoryMib` <a name="putMemoryMib" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putMemoryMib"></a>

```java
public void putMemoryMib(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib</a>

---

##### `putNetworkInterfaceCount` <a name="putNetworkInterfaceCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount"></a>

```java
public void putNetworkInterfaceCount(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount</a>

---

##### `putTotalLocalStorageGb` <a name="putTotalLocalStorageGb" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb"></a>

```java
public void putTotalLocalStorageGb(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb</a>

---

##### `putVcpuCount` <a name="putVcpuCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putVcpuCount"></a>

```java
public void putVcpuCount(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.putVcpuCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount</a>

---

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorManufacturers` <a name="resetAcceleratorManufacturers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetAcceleratorManufacturers"></a>

```java
public void resetAcceleratorManufacturers()
```

##### `resetAcceleratorNames` <a name="resetAcceleratorNames" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetAcceleratorNames"></a>

```java
public void resetAcceleratorNames()
```

##### `resetAcceleratorTotalMemoryMib` <a name="resetAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib"></a>

```java
public void resetAcceleratorTotalMemoryMib()
```

##### `resetAcceleratorTypes` <a name="resetAcceleratorTypes" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetAcceleratorTypes"></a>

```java
public void resetAcceleratorTypes()
```

##### `resetBareMetal` <a name="resetBareMetal" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetBareMetal"></a>

```java
public void resetBareMetal()
```

##### `resetBaselineEbsBandwidthMbps` <a name="resetBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps"></a>

```java
public void resetBaselineEbsBandwidthMbps()
```

##### `resetBurstablePerformance` <a name="resetBurstablePerformance" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetBurstablePerformance"></a>

```java
public void resetBurstablePerformance()
```

##### `resetCpuManufacturers` <a name="resetCpuManufacturers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetCpuManufacturers"></a>

```java
public void resetCpuManufacturers()
```

##### `resetExcludedInstanceTypes` <a name="resetExcludedInstanceTypes" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```java
public void resetExcludedInstanceTypes()
```

##### `resetInstanceGenerations` <a name="resetInstanceGenerations" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetInstanceGenerations"></a>

```java
public void resetInstanceGenerations()
```

##### `resetLocalStorage` <a name="resetLocalStorage" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetLocalStorage"></a>

```java
public void resetLocalStorage()
```

##### `resetLocalStorageTypes` <a name="resetLocalStorageTypes" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetLocalStorageTypes"></a>

```java
public void resetLocalStorageTypes()
```

##### `resetMemoryGibPerVcpu` <a name="resetMemoryGibPerVcpu" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetMemoryGibPerVcpu"></a>

```java
public void resetMemoryGibPerVcpu()
```

##### `resetMemoryMib` <a name="resetMemoryMib" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetMemoryMib"></a>

```java
public void resetMemoryMib()
```

##### `resetNetworkInterfaceCount` <a name="resetNetworkInterfaceCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetNetworkInterfaceCount"></a>

```java
public void resetNetworkInterfaceCount()
```

##### `resetOnDemandMaxPricePercentageOverLowestPrice` <a name="resetOnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice"></a>

```java
public void resetOnDemandMaxPricePercentageOverLowestPrice()
```

##### `resetRequireHibernateSupport` <a name="resetRequireHibernateSupport" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetRequireHibernateSupport"></a>

```java
public void resetRequireHibernateSupport()
```

##### `resetSpotMaxPricePercentageOverLowestPrice` <a name="resetSpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice"></a>

```java
public void resetSpotMaxPricePercentageOverLowestPrice()
```

##### `resetTotalLocalStorageGb` <a name="resetTotalLocalStorageGb" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetTotalLocalStorageGb"></a>

```java
public void resetTotalLocalStorageGb()
```

##### `resetVcpuCount` <a name="resetVcpuCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.resetVcpuCount"></a>

```java
public void resetVcpuCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">acceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpu">memoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.memoryMib">memoryMib</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.networkInterfaceCount">networkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGb">totalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.vcpuCount">vcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturersInput">acceleratorManufacturersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorNamesInput">acceleratorNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput">acceleratorTotalMemoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorTypesInput">acceleratorTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.bareMetalInput">bareMetalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput">baselineEbsBandwidthMbpsInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.burstablePerformanceInput">burstablePerformanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.cpuManufacturersInput">cpuManufacturersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">excludedInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.instanceGenerationsInput">instanceGenerationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.localStorageInput">localStorageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.localStorageTypesInput">localStorageTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput">memoryGibPerVcpuInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.memoryMibInput">memoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.networkInterfaceCountInput">networkInterfaceCountInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput">onDemandMaxPricePercentageOverLowestPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.requireHibernateSupportInput">requireHibernateSupportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput">spotMaxPricePercentageOverLowestPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGbInput">totalLocalStorageGbInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.vcpuCountInput">vcpuCountInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturers">acceleratorManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorNames">acceleratorNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.bareMetal">bareMetal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.burstablePerformance">burstablePerformance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.cpuManufacturers">cpuManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.instanceGenerations">instanceGenerations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.localStorage">localStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.localStorageTypes">localStorageTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">onDemandMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.requireHibernateSupport">requireHibernateSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spotMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference getAcceleratorCount();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `acceleratorTotalMemoryMib`<sup>Required</sup> <a name="acceleratorTotalMemoryMib" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference getAcceleratorTotalMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a>

---

##### `baselineEbsBandwidthMbps`<sup>Required</sup> <a name="baselineEbsBandwidthMbps" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference getBaselineEbsBandwidthMbps();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `memoryGibPerVcpu`<sup>Required</sup> <a name="memoryGibPerVcpu" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference getMemoryGibPerVcpu();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference</a>

---

##### `memoryMib`<sup>Required</sup> <a name="memoryMib" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.memoryMib"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference getMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference</a>

---

##### `networkInterfaceCount`<sup>Required</sup> <a name="networkInterfaceCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference getNetworkInterfaceCount();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `totalLocalStorageGb`<sup>Required</sup> <a name="totalLocalStorageGb" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference getTotalLocalStorageGb();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.vcpuCount"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference getVcpuCount();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference</a>

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorCountInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount getAcceleratorCountInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount</a>

---

##### `acceleratorManufacturersInput`<sup>Optional</sup> <a name="acceleratorManufacturersInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturersInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorManufacturersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorNamesInput`<sup>Optional</sup> <a name="acceleratorNamesInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorNamesInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorTotalMemoryMibInput`<sup>Optional</sup> <a name="acceleratorTotalMemoryMibInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib getAcceleratorTotalMemoryMibInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `acceleratorTypesInput`<sup>Optional</sup> <a name="acceleratorTypesInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorTypesInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bareMetalInput`<sup>Optional</sup> <a name="bareMetalInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.bareMetalInput"></a>

```java
public java.lang.String getBareMetalInput();
```

- *Type:* java.lang.String

---

##### `baselineEbsBandwidthMbpsInput`<sup>Optional</sup> <a name="baselineEbsBandwidthMbpsInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps getBaselineEbsBandwidthMbpsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `burstablePerformanceInput`<sup>Optional</sup> <a name="burstablePerformanceInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.burstablePerformanceInput"></a>

```java
public java.lang.String getBurstablePerformanceInput();
```

- *Type:* java.lang.String

---

##### `cpuManufacturersInput`<sup>Optional</sup> <a name="cpuManufacturersInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.cpuManufacturersInput"></a>

```java
public java.util.List<java.lang.String> getCpuManufacturersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedInstanceTypesInput`<sup>Optional</sup> <a name="excludedInstanceTypesInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instanceGenerationsInput`<sup>Optional</sup> <a name="instanceGenerationsInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.instanceGenerationsInput"></a>

```java
public java.util.List<java.lang.String> getInstanceGenerationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localStorageInput`<sup>Optional</sup> <a name="localStorageInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.localStorageInput"></a>

```java
public java.lang.String getLocalStorageInput();
```

- *Type:* java.lang.String

---

##### `localStorageTypesInput`<sup>Optional</sup> <a name="localStorageTypesInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.localStorageTypesInput"></a>

```java
public java.util.List<java.lang.String> getLocalStorageTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `memoryGibPerVcpuInput`<sup>Optional</sup> <a name="memoryGibPerVcpuInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu getMemoryGibPerVcpuInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `memoryMibInput`<sup>Optional</sup> <a name="memoryMibInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.memoryMibInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib getMemoryMibInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib</a>

---

##### `networkInterfaceCountInput`<sup>Optional</sup> <a name="networkInterfaceCountInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.networkInterfaceCountInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount getNetworkInterfaceCountInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount</a>

---

##### `onDemandMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="onDemandMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput"></a>

```java
public java.lang.Number getOnDemandMaxPricePercentageOverLowestPriceInput();
```

- *Type:* java.lang.Number

---

##### `requireHibernateSupportInput`<sup>Optional</sup> <a name="requireHibernateSupportInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.requireHibernateSupportInput"></a>

```java
public java.lang.Object getRequireHibernateSupportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="spotMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput"></a>

```java
public java.lang.Number getSpotMaxPricePercentageOverLowestPriceInput();
```

- *Type:* java.lang.Number

---

##### `totalLocalStorageGbInput`<sup>Optional</sup> <a name="totalLocalStorageGbInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGbInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb getTotalLocalStorageGbInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb</a>

---

##### `vcpuCountInput`<sup>Optional</sup> <a name="vcpuCountInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.vcpuCountInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount getVcpuCountInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount</a>

---

##### `acceleratorManufacturers`<sup>Required</sup> <a name="acceleratorManufacturers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```java
public java.util.List<java.lang.String> getAcceleratorManufacturers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorNames`<sup>Required</sup> <a name="acceleratorNames" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```java
public java.util.List<java.lang.String> getAcceleratorNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorTypes`<sup>Required</sup> <a name="acceleratorTypes" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bareMetal`<sup>Required</sup> <a name="bareMetal" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.bareMetal"></a>

```java
public java.lang.String getBareMetal();
```

- *Type:* java.lang.String

---

##### `burstablePerformance`<sup>Required</sup> <a name="burstablePerformance" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```java
public java.lang.String getBurstablePerformance();
```

- *Type:* java.lang.String

---

##### `cpuManufacturers`<sup>Required</sup> <a name="cpuManufacturers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```java
public java.util.List<java.lang.String> getCpuManufacturers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedInstanceTypes`<sup>Required</sup> <a name="excludedInstanceTypes" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instanceGenerations`<sup>Required</sup> <a name="instanceGenerations" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```java
public java.util.List<java.lang.String> getInstanceGenerations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localStorage`<sup>Required</sup> <a name="localStorage" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.localStorage"></a>

```java
public java.lang.String getLocalStorage();
```

- *Type:* java.lang.String

---

##### `localStorageTypes`<sup>Required</sup> <a name="localStorageTypes" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```java
public java.util.List<java.lang.String> getLocalStorageTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="onDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getOnDemandMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

---

##### `requireHibernateSupport`<sup>Required</sup> <a name="requireHibernateSupport" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```java
public java.lang.Object getRequireHibernateSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="spotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getSpotMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId">resetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName">resetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLaunchTemplateId` <a name="resetLaunchTemplateId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId"></a>

```java
public void resetLaunchTemplateId()
```

##### `resetLaunchTemplateName` <a name="resetLaunchTemplateName" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName"></a>

```java
public void resetLaunchTemplateName()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput">launchTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput">launchTemplateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `launchTemplateIdInput`<sup>Optional</sup> <a name="launchTemplateIdInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput"></a>

```java
public java.lang.String getLaunchTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateNameInput`<sup>Optional</sup> <a name="launchTemplateNameInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput"></a>

```java
public java.lang.String getLaunchTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.get"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference;

new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.putInstanceRequirements">putInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.putLaunchTemplateSpecification">putLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetInstanceRequirements">resetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetLaunchTemplateSpecification">resetLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceRequirements` <a name="putInstanceRequirements" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.putInstanceRequirements"></a>

```java
public void putInstanceRequirements(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements</a>

---

##### `putLaunchTemplateSpecification` <a name="putLaunchTemplateSpecification" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.putLaunchTemplateSpecification"></a>

```java
public void putLaunchTemplateSpecification(AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.putLaunchTemplateSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a>

---

##### `resetInstanceRequirements` <a name="resetInstanceRequirements" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetInstanceRequirements"></a>

```java
public void resetInstanceRequirements()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLaunchTemplateSpecification` <a name="resetLaunchTemplateSpecification" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetLaunchTemplateSpecification"></a>

```java
public void resetLaunchTemplateSpecification()
```

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetWeightedCapacity"></a>

```java
public void resetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceRequirementsInput">instanceRequirementsInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.launchTemplateSpecificationInput">launchTemplateSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceRequirements"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference getInstanceRequirements();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference</a>

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.launchTemplateSpecification"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference getLaunchTemplateSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference</a>

---

##### `instanceRequirementsInput`<sup>Optional</sup> <a name="instanceRequirementsInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceRequirementsInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements getInstanceRequirementsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements</a>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateSpecificationInput`<sup>Optional</sup> <a name="launchTemplateSpecificationInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.launchTemplateSpecificationInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification getLaunchTemplateSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a>

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.weightedCapacityInput"></a>

```java
public java.lang.String getWeightedCapacityInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.weightedCapacity"></a>

```java
public java.lang.String getWeightedCapacity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a> OR com.hashicorp.cdktf.IResolvable

---


### AutoscalingGroupMixedInstancesPolicyOutputReference <a name="AutoscalingGroupMixedInstancesPolicyOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupMixedInstancesPolicyOutputReference;

new AutoscalingGroupMixedInstancesPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putInstancesDistribution">putInstancesDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.resetInstancesDistribution">resetInstancesDistribution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstancesDistribution` <a name="putInstancesDistribution" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putInstancesDistribution"></a>

```java
public void putInstancesDistribution(AutoscalingGroupMixedInstancesPolicyInstancesDistribution value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putInstancesDistribution.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a>

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putLaunchTemplate"></a>

```java
public void putLaunchTemplate(AutoscalingGroupMixedInstancesPolicyLaunchTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a>

---

##### `resetInstancesDistribution` <a name="resetInstancesDistribution" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.resetInstancesDistribution"></a>

```java
public void resetInstancesDistribution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.instancesDistribution">instancesDistribution</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference">AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.instancesDistributionInput">instancesDistributionInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instancesDistribution`<sup>Required</sup> <a name="instancesDistribution" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.instancesDistribution"></a>

```java
public AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference getInstancesDistribution();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference">AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference</a>

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.launchTemplate"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference getLaunchTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference</a>

---

##### `instancesDistributionInput`<sup>Optional</sup> <a name="instancesDistributionInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.instancesDistributionInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyInstancesDistribution getInstancesDistributionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a>

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.launchTemplateInput"></a>

```java
public AutoscalingGroupMixedInstancesPolicyLaunchTemplate getLaunchTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupMixedInstancesPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a>

---


### AutoscalingGroupTagList <a name="AutoscalingGroupTagList" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupTagList;

new AutoscalingGroupTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.get"></a>

```java
public AutoscalingGroupTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>>

---


### AutoscalingGroupTagOutputReference <a name="AutoscalingGroupTagOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupTagOutputReference;

new AutoscalingGroupTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.propagateAtLaunchInput">propagateAtLaunchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.propagateAtLaunch">propagateAtLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `propagateAtLaunchInput`<sup>Optional</sup> <a name="propagateAtLaunchInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.propagateAtLaunchInput"></a>

```java
public java.lang.Object getPropagateAtLaunchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `propagateAtLaunch`<sup>Required</sup> <a name="propagateAtLaunch" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.propagateAtLaunch"></a>

```java
public java.lang.Object getPropagateAtLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a> OR com.hashicorp.cdktf.IResolvable

---


### AutoscalingGroupTimeoutsOutputReference <a name="AutoscalingGroupTimeoutsOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupTimeoutsOutputReference;

new AutoscalingGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference <a name="AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference;

new AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.resetReuseOnScaleIn">resetReuseOnScaleIn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReuseOnScaleIn` <a name="resetReuseOnScaleIn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.resetReuseOnScaleIn"></a>

```java
public void resetReuseOnScaleIn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleInInput">reuseOnScaleInInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleIn">reuseOnScaleIn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicy">AutoscalingGroupWarmPoolInstanceReusePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reuseOnScaleInInput`<sup>Optional</sup> <a name="reuseOnScaleInInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleInInput"></a>

```java
public java.lang.Object getReuseOnScaleInInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reuseOnScaleIn`<sup>Required</sup> <a name="reuseOnScaleIn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleIn"></a>

```java
public java.lang.Object getReuseOnScaleIn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupWarmPoolInstanceReusePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicy">AutoscalingGroupWarmPoolInstanceReusePolicy</a>

---


### AutoscalingGroupWarmPoolOutputReference <a name="AutoscalingGroupWarmPoolOutputReference" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group.AutoscalingGroupWarmPoolOutputReference;

new AutoscalingGroupWarmPoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.putInstanceReusePolicy">putInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetInstanceReusePolicy">resetInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetMaxGroupPreparedCapacity">resetMaxGroupPreparedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetPoolState">resetPoolState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceReusePolicy` <a name="putInstanceReusePolicy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.putInstanceReusePolicy"></a>

```java
public void putInstanceReusePolicy(AutoscalingGroupWarmPoolInstanceReusePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.putInstanceReusePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicy">AutoscalingGroupWarmPoolInstanceReusePolicy</a>

---

##### `resetInstanceReusePolicy` <a name="resetInstanceReusePolicy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetInstanceReusePolicy"></a>

```java
public void resetInstanceReusePolicy()
```

##### `resetMaxGroupPreparedCapacity` <a name="resetMaxGroupPreparedCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetMaxGroupPreparedCapacity"></a>

```java
public void resetMaxGroupPreparedCapacity()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetMinSize"></a>

```java
public void resetMinSize()
```

##### `resetPoolState` <a name="resetPoolState" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetPoolState"></a>

```java
public void resetPoolState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.instanceReusePolicy">instanceReusePolicy</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference">AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.instanceReusePolicyInput">instanceReusePolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicy">AutoscalingGroupWarmPoolInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.maxGroupPreparedCapacityInput">maxGroupPreparedCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.poolStateInput">poolStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.maxGroupPreparedCapacity">maxGroupPreparedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.poolState">poolState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceReusePolicy`<sup>Required</sup> <a name="instanceReusePolicy" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.instanceReusePolicy"></a>

```java
public AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference getInstanceReusePolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference">AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference</a>

---

##### `instanceReusePolicyInput`<sup>Optional</sup> <a name="instanceReusePolicyInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.instanceReusePolicyInput"></a>

```java
public AutoscalingGroupWarmPoolInstanceReusePolicy getInstanceReusePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolInstanceReusePolicy">AutoscalingGroupWarmPoolInstanceReusePolicy</a>

---

##### `maxGroupPreparedCapacityInput`<sup>Optional</sup> <a name="maxGroupPreparedCapacityInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.maxGroupPreparedCapacityInput"></a>

```java
public java.lang.Number getMaxGroupPreparedCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `poolStateInput`<sup>Optional</sup> <a name="poolStateInput" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.poolStateInput"></a>

```java
public java.lang.String getPoolStateInput();
```

- *Type:* java.lang.String

---

##### `maxGroupPreparedCapacity`<sup>Required</sup> <a name="maxGroupPreparedCapacity" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.maxGroupPreparedCapacity"></a>

```java
public java.lang.Number getMaxGroupPreparedCapacity();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `poolState`<sup>Required</sup> <a name="poolState" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.poolState"></a>

```java
public java.lang.String getPoolState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupWarmPool getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a>

---



