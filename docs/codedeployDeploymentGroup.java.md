# `codedeployDeploymentGroup` Submodule <a name="`codedeployDeploymentGroup` Submodule" id="@cdktf/provider-aws.codedeployDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentGroup <a name="CodedeployDeploymentGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group aws_codedeploy_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroup;

CodedeployDeploymentGroup.Builder.create(Construct scope, java.lang.String id)
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
    .appName(java.lang.String)
    .deploymentGroupName(java.lang.String)
    .serviceRoleArn(java.lang.String)
//  .alarmConfiguration(CodedeployDeploymentGroupAlarmConfiguration)
//  .autoRollbackConfiguration(CodedeployDeploymentGroupAutoRollbackConfiguration)
//  .autoscalingGroups(java.util.List<java.lang.String>)
//  .blueGreenDeploymentConfig(CodedeployDeploymentGroupBlueGreenDeploymentConfig)
//  .deploymentConfigName(java.lang.String)
//  .deploymentStyle(CodedeployDeploymentGroupDeploymentStyle)
//  .ec2TagFilter(IResolvable)
//  .ec2TagFilter(java.util.List<CodedeployDeploymentGroupEc2TagFilter>)
//  .ec2TagSet(IResolvable)
//  .ec2TagSet(java.util.List<CodedeployDeploymentGroupEc2TagSet>)
//  .ecsService(CodedeployDeploymentGroupEcsService)
//  .id(java.lang.String)
//  .loadBalancerInfo(CodedeployDeploymentGroupLoadBalancerInfo)
//  .onPremisesInstanceTagFilter(IResolvable)
//  .onPremisesInstanceTagFilter(java.util.List<CodedeployDeploymentGroupOnPremisesInstanceTagFilter>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .triggerConfiguration(IResolvable)
//  .triggerConfiguration(java.util.List<CodedeployDeploymentGroupTriggerConfiguration>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.appName">appName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#app_name CodedeployDeploymentGroup#app_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentGroupName">deploymentGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.alarmConfiguration">alarmConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | alarm_configuration block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | auto_rollback_configuration block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.autoscalingGroups">autoscalingGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.blueGreenDeploymentConfig">blueGreenDeploymentConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a></code> | blue_green_deployment_config block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentConfigName">deploymentConfigName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentStyle">deploymentStyle</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | deployment_style block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ec2TagFilter">ec2TagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>></code> | ec2_tag_filter block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ec2TagSet">ec2TagSet</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>></code> | ec2_tag_set block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ecsService">ecsService</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a></code> | ecs_service block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#id CodedeployDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.loadBalancerInfo">loadBalancerInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | load_balancer_info block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.onPremisesInstanceTagFilter">onPremisesInstanceTagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>></code> | on_premises_instance_tag_filter block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags_all CodedeployDeploymentGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.triggerConfiguration">triggerConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>></code> | trigger_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.appName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#app_name CodedeployDeploymentGroup#app_name}.

---

##### `deploymentGroupName`<sup>Required</sup> <a name="deploymentGroupName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}.

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.serviceRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}.

---

##### `alarmConfiguration`<sup>Optional</sup> <a name="alarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.alarmConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

alarm_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="autoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.autoRollbackConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

auto_rollback_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}

---

##### `autoscalingGroups`<sup>Optional</sup> <a name="autoscalingGroups" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.autoscalingGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}.

---

##### `blueGreenDeploymentConfig`<sup>Optional</sup> <a name="blueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.blueGreenDeploymentConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

blue_green_deployment_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#blue_green_deployment_config CodedeployDeploymentGroup#blue_green_deployment_config}

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="deploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentConfigName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}.

---

##### `deploymentStyle`<sup>Optional</sup> <a name="deploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.deploymentStyle"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

deployment_style block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_style CodedeployDeploymentGroup#deployment_style}

---

##### `ec2TagFilter`<sup>Optional</sup> <a name="ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ec2TagFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>>

ec2_tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}

---

##### `ec2TagSet`<sup>Optional</sup> <a name="ec2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ec2TagSet"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>>

ec2_tag_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_set CodedeployDeploymentGroup#ec2_tag_set}

---

##### `ecsService`<sup>Optional</sup> <a name="ecsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.ecsService"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

ecs_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ecs_service CodedeployDeploymentGroup#ecs_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#id CodedeployDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerInfo`<sup>Optional</sup> <a name="loadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.loadBalancerInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

load_balancer_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}

---

##### `onPremisesInstanceTagFilter`<sup>Optional</sup> <a name="onPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.onPremisesInstanceTagFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>>

on_premises_instance_tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#on_premises_instance_tag_filter CodedeployDeploymentGroup#on_premises_instance_tag_filter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags_all CodedeployDeploymentGroup#tags_all}.

---

##### `triggerConfiguration`<sup>Optional</sup> <a name="triggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.triggerConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>>

trigger_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_configuration CodedeployDeploymentGroup#trigger_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration">putAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration">putAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfig">putBlueGreenDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle">putDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilter">putEc2TagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet">putEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsService">putEcsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo">putLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilter">putOnPremisesInstanceTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfiguration">putTriggerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration">resetAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration">resetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoscalingGroups">resetAutoscalingGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfig">resetBlueGreenDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName">resetDeploymentConfigName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle">resetDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilter">resetEc2TagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet">resetEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsService">resetEcsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo">resetLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilter">resetOnPremisesInstanceTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfiguration">resetTriggerConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAlarmConfiguration` <a name="putAlarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration"></a>

```java
public void putAlarmConfiguration(CodedeployDeploymentGroupAlarmConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `putAutoRollbackConfiguration` <a name="putAutoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration"></a>

```java
public void putAutoRollbackConfiguration(CodedeployDeploymentGroupAutoRollbackConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `putBlueGreenDeploymentConfig` <a name="putBlueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfig"></a>

```java
public void putBlueGreenDeploymentConfig(CodedeployDeploymentGroupBlueGreenDeploymentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

---

##### `putDeploymentStyle` <a name="putDeploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle"></a>

```java
public void putDeploymentStyle(CodedeployDeploymentGroupDeploymentStyle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `putEc2TagFilter` <a name="putEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilter"></a>

```java
public void putEc2TagFilter(IResolvable OR java.util.List<CodedeployDeploymentGroupEc2TagFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>>

---

##### `putEc2TagSet` <a name="putEc2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet"></a>

```java
public void putEc2TagSet(IResolvable OR java.util.List<CodedeployDeploymentGroupEc2TagSet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>>

---

##### `putEcsService` <a name="putEcsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsService"></a>

```java
public void putEcsService(CodedeployDeploymentGroupEcsService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

---

##### `putLoadBalancerInfo` <a name="putLoadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo"></a>

```java
public void putLoadBalancerInfo(CodedeployDeploymentGroupLoadBalancerInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `putOnPremisesInstanceTagFilter` <a name="putOnPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilter"></a>

```java
public void putOnPremisesInstanceTagFilter(IResolvable OR java.util.List<CodedeployDeploymentGroupOnPremisesInstanceTagFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>>

---

##### `putTriggerConfiguration` <a name="putTriggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfiguration"></a>

```java
public void putTriggerConfiguration(IResolvable OR java.util.List<CodedeployDeploymentGroupTriggerConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>>

---

##### `resetAlarmConfiguration` <a name="resetAlarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration"></a>

```java
public void resetAlarmConfiguration()
```

##### `resetAutoRollbackConfiguration` <a name="resetAutoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration"></a>

```java
public void resetAutoRollbackConfiguration()
```

##### `resetAutoscalingGroups` <a name="resetAutoscalingGroups" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoscalingGroups"></a>

```java
public void resetAutoscalingGroups()
```

##### `resetBlueGreenDeploymentConfig` <a name="resetBlueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfig"></a>

```java
public void resetBlueGreenDeploymentConfig()
```

##### `resetDeploymentConfigName` <a name="resetDeploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName"></a>

```java
public void resetDeploymentConfigName()
```

##### `resetDeploymentStyle` <a name="resetDeploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle"></a>

```java
public void resetDeploymentStyle()
```

##### `resetEc2TagFilter` <a name="resetEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilter"></a>

```java
public void resetEc2TagFilter()
```

##### `resetEc2TagSet` <a name="resetEc2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet"></a>

```java
public void resetEc2TagSet()
```

##### `resetEcsService` <a name="resetEcsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsService"></a>

```java
public void resetEcsService()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetId"></a>

```java
public void resetId()
```

##### `resetLoadBalancerInfo` <a name="resetLoadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo"></a>

```java
public void resetLoadBalancerInfo()
```

##### `resetOnPremisesInstanceTagFilter` <a name="resetOnPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilter"></a>

```java
public void resetOnPremisesInstanceTagFilter()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTriggerConfiguration` <a name="resetTriggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfiguration"></a>

```java
public void resetTriggerConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroup;

CodedeployDeploymentGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroup;

CodedeployDeploymentGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroup;

CodedeployDeploymentGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration">alarmConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfig">blueGreenDeploymentConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.computePlatform">computePlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupId">deploymentGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle">deploymentStyle</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilter">ec2TagFilter</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList">CodedeployDeploymentGroupEc2TagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet">ec2TagSet</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList">CodedeployDeploymentGroupEc2TagSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsService">ecsService</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference">CodedeployDeploymentGroupEcsServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo">loadBalancerInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilter">onPremisesInstanceTagFilter</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList">CodedeployDeploymentGroupOnPremisesInstanceTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfiguration">triggerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList">CodedeployDeploymentGroupTriggerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput">alarmConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appNameInput">appNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput">autoRollbackConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroupsInput">autoscalingGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigInput">blueGreenDeploymentConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput">deploymentConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput">deploymentGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput">deploymentStyleInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilterInput">ec2TagFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput">ec2TagSetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServiceInput">ecsServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput">loadBalancerInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilterInput">onPremisesInstanceTagFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationInput">triggerConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appName">appName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroups">autoscalingGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName">deploymentConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName">deploymentGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarmConfiguration`<sup>Required</sup> <a name="alarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration"></a>

```java
public CodedeployDeploymentGroupAlarmConfigurationOutputReference getAlarmConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoRollbackConfiguration`<sup>Required</sup> <a name="autoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration"></a>

```java
public CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference getAutoRollbackConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a>

---

##### `blueGreenDeploymentConfig`<sup>Required</sup> <a name="blueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfig"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference getBlueGreenDeploymentConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference</a>

---

##### `computePlatform`<sup>Required</sup> <a name="computePlatform" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.computePlatform"></a>

```java
public java.lang.String getComputePlatform();
```

- *Type:* java.lang.String

---

##### `deploymentGroupId`<sup>Required</sup> <a name="deploymentGroupId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupId"></a>

```java
public java.lang.String getDeploymentGroupId();
```

- *Type:* java.lang.String

---

##### `deploymentStyle`<sup>Required</sup> <a name="deploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle"></a>

```java
public CodedeployDeploymentGroupDeploymentStyleOutputReference getDeploymentStyle();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a>

---

##### `ec2TagFilter`<sup>Required</sup> <a name="ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilter"></a>

```java
public CodedeployDeploymentGroupEc2TagFilterList getEc2TagFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList">CodedeployDeploymentGroupEc2TagFilterList</a>

---

##### `ec2TagSet`<sup>Required</sup> <a name="ec2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet"></a>

```java
public CodedeployDeploymentGroupEc2TagSetList getEc2TagSet();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList">CodedeployDeploymentGroupEc2TagSetList</a>

---

##### `ecsService`<sup>Required</sup> <a name="ecsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsService"></a>

```java
public CodedeployDeploymentGroupEcsServiceOutputReference getEcsService();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference">CodedeployDeploymentGroupEcsServiceOutputReference</a>

---

##### `loadBalancerInfo`<sup>Required</sup> <a name="loadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoOutputReference getLoadBalancerInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a>

---

##### `onPremisesInstanceTagFilter`<sup>Required</sup> <a name="onPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilter"></a>

```java
public CodedeployDeploymentGroupOnPremisesInstanceTagFilterList getOnPremisesInstanceTagFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList">CodedeployDeploymentGroupOnPremisesInstanceTagFilterList</a>

---

##### `triggerConfiguration`<sup>Required</sup> <a name="triggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfiguration"></a>

```java
public CodedeployDeploymentGroupTriggerConfigurationList getTriggerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList">CodedeployDeploymentGroupTriggerConfigurationList</a>

---

##### `alarmConfigurationInput`<sup>Optional</sup> <a name="alarmConfigurationInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput"></a>

```java
public CodedeployDeploymentGroupAlarmConfiguration getAlarmConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appNameInput"></a>

```java
public java.lang.String getAppNameInput();
```

- *Type:* java.lang.String

---

##### `autoRollbackConfigurationInput`<sup>Optional</sup> <a name="autoRollbackConfigurationInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput"></a>

```java
public CodedeployDeploymentGroupAutoRollbackConfiguration getAutoRollbackConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `autoscalingGroupsInput`<sup>Optional</sup> <a name="autoscalingGroupsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroupsInput"></a>

```java
public java.util.List<java.lang.String> getAutoscalingGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `blueGreenDeploymentConfigInput`<sup>Optional</sup> <a name="blueGreenDeploymentConfigInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigInput"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfig getBlueGreenDeploymentConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

---

##### `deploymentConfigNameInput`<sup>Optional</sup> <a name="deploymentConfigNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput"></a>

```java
public java.lang.String getDeploymentConfigNameInput();
```

- *Type:* java.lang.String

---

##### `deploymentGroupNameInput`<sup>Optional</sup> <a name="deploymentGroupNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput"></a>

```java
public java.lang.String getDeploymentGroupNameInput();
```

- *Type:* java.lang.String

---

##### `deploymentStyleInput`<sup>Optional</sup> <a name="deploymentStyleInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput"></a>

```java
public CodedeployDeploymentGroupDeploymentStyle getDeploymentStyleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `ec2TagFilterInput`<sup>Optional</sup> <a name="ec2TagFilterInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilterInput"></a>

```java
public java.lang.Object getEc2TagFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>>

---

##### `ec2TagSetInput`<sup>Optional</sup> <a name="ec2TagSetInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput"></a>

```java
public java.lang.Object getEc2TagSetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>>

---

##### `ecsServiceInput`<sup>Optional</sup> <a name="ecsServiceInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServiceInput"></a>

```java
public CodedeployDeploymentGroupEcsService getEcsServiceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerInfoInput`<sup>Optional</sup> <a name="loadBalancerInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfo getLoadBalancerInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `onPremisesInstanceTagFilterInput`<sup>Optional</sup> <a name="onPremisesInstanceTagFilterInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilterInput"></a>

```java
public java.lang.Object getOnPremisesInstanceTagFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>>

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput"></a>

```java
public java.lang.String getServiceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `triggerConfigurationInput`<sup>Optional</sup> <a name="triggerConfigurationInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationInput"></a>

```java
public java.lang.Object getTriggerConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

---

##### `autoscalingGroups`<sup>Required</sup> <a name="autoscalingGroups" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroups"></a>

```java
public java.util.List<java.lang.String> getAutoscalingGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentConfigName`<sup>Required</sup> <a name="deploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName"></a>

```java
public java.lang.String getDeploymentConfigName();
```

- *Type:* java.lang.String

---

##### `deploymentGroupName`<sup>Required</sup> <a name="deploymentGroupName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName"></a>

```java
public java.lang.String getDeploymentGroupName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentGroupAlarmConfiguration <a name="CodedeployDeploymentGroupAlarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupAlarmConfiguration;

CodedeployDeploymentGroupAlarmConfiguration.builder()
//  .alarms(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .ignorePollAlarmFailure(java.lang.Boolean)
//  .ignorePollAlarmFailure(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure">ignorePollAlarmFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}.

---

##### `ignorePollAlarmFailure`<sup>Optional</sup> <a name="ignorePollAlarmFailure" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure"></a>

```java
public java.lang.Object getIgnorePollAlarmFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}.

---

### CodedeployDeploymentGroupAutoRollbackConfiguration <a name="CodedeployDeploymentGroupAutoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupAutoRollbackConfiguration;

CodedeployDeploymentGroupAutoRollbackConfiguration.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .events(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}.

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}.

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfig <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupBlueGreenDeploymentConfig;

CodedeployDeploymentGroupBlueGreenDeploymentConfig.builder()
//  .deploymentReadyOption(CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption)
//  .greenFleetProvisioningOption(CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption)
//  .terminateBlueInstancesOnDeploymentSuccess(CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.deploymentReadyOption">deploymentReadyOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a></code> | deployment_ready_option block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.greenFleetProvisioningOption">greenFleetProvisioningOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a></code> | green_fleet_provisioning_option block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.terminateBlueInstancesOnDeploymentSuccess">terminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a></code> | terminate_blue_instances_on_deployment_success block. |

---

##### `deploymentReadyOption`<sup>Optional</sup> <a name="deploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.deploymentReadyOption"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption getDeploymentReadyOption();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

deployment_ready_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}

---

##### `greenFleetProvisioningOption`<sup>Optional</sup> <a name="greenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.greenFleetProvisioningOption"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption getGreenFleetProvisioningOption();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

green_fleet_provisioning_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}

---

##### `terminateBlueInstancesOnDeploymentSuccess`<sup>Optional</sup> <a name="terminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess getTerminateBlueInstancesOnDeploymentSuccess();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

terminate_blue_instances_on_deployment_success block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption;

CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.builder()
//  .actionOnTimeout(java.lang.String)
//  .waitTimeInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.actionOnTimeout">actionOnTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.waitTimeInMinutes">waitTimeInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}. |

---

##### `actionOnTimeout`<sup>Optional</sup> <a name="actionOnTimeout" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.actionOnTimeout"></a>

```java
public java.lang.String getActionOnTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}.

---

##### `waitTimeInMinutes`<sup>Optional</sup> <a name="waitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.waitTimeInMinutes"></a>

```java
public java.lang.Number getWaitTimeInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}.

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption;

CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption.builder()
//  .action(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}.

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;

CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.builder()
//  .action(java.lang.String)
//  .terminationWaitTimeInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes">terminationWaitTimeInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}.

---

##### `terminationWaitTimeInMinutes`<sup>Optional</sup> <a name="terminationWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes"></a>

```java
public java.lang.Number getTerminationWaitTimeInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}.

---

### CodedeployDeploymentGroupConfig <a name="CodedeployDeploymentGroupConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupConfig;

CodedeployDeploymentGroupConfig.builder()
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
    .appName(java.lang.String)
    .deploymentGroupName(java.lang.String)
    .serviceRoleArn(java.lang.String)
//  .alarmConfiguration(CodedeployDeploymentGroupAlarmConfiguration)
//  .autoRollbackConfiguration(CodedeployDeploymentGroupAutoRollbackConfiguration)
//  .autoscalingGroups(java.util.List<java.lang.String>)
//  .blueGreenDeploymentConfig(CodedeployDeploymentGroupBlueGreenDeploymentConfig)
//  .deploymentConfigName(java.lang.String)
//  .deploymentStyle(CodedeployDeploymentGroupDeploymentStyle)
//  .ec2TagFilter(IResolvable)
//  .ec2TagFilter(java.util.List<CodedeployDeploymentGroupEc2TagFilter>)
//  .ec2TagSet(IResolvable)
//  .ec2TagSet(java.util.List<CodedeployDeploymentGroupEc2TagSet>)
//  .ecsService(CodedeployDeploymentGroupEcsService)
//  .id(java.lang.String)
//  .loadBalancerInfo(CodedeployDeploymentGroupLoadBalancerInfo)
//  .onPremisesInstanceTagFilter(IResolvable)
//  .onPremisesInstanceTagFilter(java.util.List<CodedeployDeploymentGroupOnPremisesInstanceTagFilter>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .triggerConfiguration(IResolvable)
//  .triggerConfiguration(java.util.List<CodedeployDeploymentGroupTriggerConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.appName">appName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#app_name CodedeployDeploymentGroup#app_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName">deploymentGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration">alarmConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | alarm_configuration block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | auto_rollback_configuration block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoscalingGroups">autoscalingGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfig">blueGreenDeploymentConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a></code> | blue_green_deployment_config block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName">deploymentConfigName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle">deploymentStyle</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | deployment_style block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilter">ec2TagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>></code> | ec2_tag_filter block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet">ec2TagSet</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>></code> | ec2_tag_set block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsService">ecsService</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a></code> | ecs_service block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#id CodedeployDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo">loadBalancerInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | load_balancer_info block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilter">onPremisesInstanceTagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>></code> | on_premises_instance_tag_filter block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags_all CodedeployDeploymentGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfiguration">triggerConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>></code> | trigger_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#app_name CodedeployDeploymentGroup#app_name}.

---

##### `deploymentGroupName`<sup>Required</sup> <a name="deploymentGroupName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName"></a>

```java
public java.lang.String getDeploymentGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}.

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}.

---

##### `alarmConfiguration`<sup>Optional</sup> <a name="alarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration"></a>

```java
public CodedeployDeploymentGroupAlarmConfiguration getAlarmConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

alarm_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="autoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration"></a>

```java
public CodedeployDeploymentGroupAutoRollbackConfiguration getAutoRollbackConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

auto_rollback_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}

---

##### `autoscalingGroups`<sup>Optional</sup> <a name="autoscalingGroups" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoscalingGroups"></a>

```java
public java.util.List<java.lang.String> getAutoscalingGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}.

---

##### `blueGreenDeploymentConfig`<sup>Optional</sup> <a name="blueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfig"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfig getBlueGreenDeploymentConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

blue_green_deployment_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#blue_green_deployment_config CodedeployDeploymentGroup#blue_green_deployment_config}

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="deploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName"></a>

```java
public java.lang.String getDeploymentConfigName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}.

---

##### `deploymentStyle`<sup>Optional</sup> <a name="deploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle"></a>

```java
public CodedeployDeploymentGroupDeploymentStyle getDeploymentStyle();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

deployment_style block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_style CodedeployDeploymentGroup#deployment_style}

---

##### `ec2TagFilter`<sup>Optional</sup> <a name="ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilter"></a>

```java
public java.lang.Object getEc2TagFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>>

ec2_tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}

---

##### `ec2TagSet`<sup>Optional</sup> <a name="ec2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet"></a>

```java
public java.lang.Object getEc2TagSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>>

ec2_tag_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_set CodedeployDeploymentGroup#ec2_tag_set}

---

##### `ecsService`<sup>Optional</sup> <a name="ecsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsService"></a>

```java
public CodedeployDeploymentGroupEcsService getEcsService();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

ecs_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ecs_service CodedeployDeploymentGroup#ecs_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#id CodedeployDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerInfo`<sup>Optional</sup> <a name="loadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfo getLoadBalancerInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

load_balancer_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}

---

##### `onPremisesInstanceTagFilter`<sup>Optional</sup> <a name="onPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilter"></a>

```java
public java.lang.Object getOnPremisesInstanceTagFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>>

on_premises_instance_tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#on_premises_instance_tag_filter CodedeployDeploymentGroup#on_premises_instance_tag_filter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags_all CodedeployDeploymentGroup#tags_all}.

---

##### `triggerConfiguration`<sup>Optional</sup> <a name="triggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfiguration"></a>

```java
public java.lang.Object getTriggerConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>>

trigger_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_configuration CodedeployDeploymentGroup#trigger_configuration}

---

### CodedeployDeploymentGroupDeploymentStyle <a name="CodedeployDeploymentGroupDeploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupDeploymentStyle;

CodedeployDeploymentGroupDeploymentStyle.builder()
//  .deploymentOption(java.lang.String)
//  .deploymentType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption">deploymentOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}. |

---

##### `deploymentOption`<sup>Optional</sup> <a name="deploymentOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption"></a>

```java
public java.lang.String getDeploymentOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}.

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}.

---

### CodedeployDeploymentGroupEc2TagFilter <a name="CodedeployDeploymentGroupEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupEc2TagFilter;

CodedeployDeploymentGroupEc2TagFilter.builder()
//  .key(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}.

---

### CodedeployDeploymentGroupEc2TagSet <a name="CodedeployDeploymentGroupEc2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupEc2TagSet;

CodedeployDeploymentGroupEc2TagSet.builder()
//  .ec2TagFilter(IResolvable)
//  .ec2TagFilter(java.util.List<CodedeployDeploymentGroupEc2TagSetEc2TagFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagFilter">ec2TagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>></code> | ec2_tag_filter block. |

---

##### `ec2TagFilter`<sup>Optional</sup> <a name="ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagFilter"></a>

```java
public java.lang.Object getEc2TagFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>>

ec2_tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}

---

### CodedeployDeploymentGroupEc2TagSetEc2TagFilter <a name="CodedeployDeploymentGroupEc2TagSetEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupEc2TagSetEc2TagFilter;

CodedeployDeploymentGroupEc2TagSetEc2TagFilter.builder()
//  .key(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}.

---

### CodedeployDeploymentGroupEcsService <a name="CodedeployDeploymentGroupEcsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupEcsService;

CodedeployDeploymentGroupEcsService.builder()
    .clusterName(java.lang.String)
    .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}.

---

### CodedeployDeploymentGroupLoadBalancerInfo <a name="CodedeployDeploymentGroupLoadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfo;

CodedeployDeploymentGroupLoadBalancerInfo.builder()
//  .elbInfo(IResolvable)
//  .elbInfo(java.util.List<CodedeployDeploymentGroupLoadBalancerInfoElbInfo>)
//  .targetGroupInfo(IResolvable)
//  .targetGroupInfo(java.util.List<CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo>)
//  .targetGroupPairInfo(CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfo">elbInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>></code> | elb_info block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfo">targetGroupInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>></code> | target_group_info block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfo">targetGroupPairInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a></code> | target_group_pair_info block. |

---

##### `elbInfo`<sup>Optional</sup> <a name="elbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfo"></a>

```java
public java.lang.Object getElbInfo();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>>

elb_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#elb_info CodedeployDeploymentGroup#elb_info}

---

##### `targetGroupInfo`<sup>Optional</sup> <a name="targetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfo"></a>

```java
public java.lang.Object getTargetGroupInfo();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>>

target_group_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group_info CodedeployDeploymentGroup#target_group_info}

---

##### `targetGroupPairInfo`<sup>Optional</sup> <a name="targetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfo"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo getTargetGroupPairInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

target_group_pair_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group_pair_info CodedeployDeploymentGroup#target_group_pair_info}

---

### CodedeployDeploymentGroupLoadBalancerInfoElbInfo <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoElbInfo;

CodedeployDeploymentGroupLoadBalancerInfoElbInfo.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo;

CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo;

CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.builder()
    .prodTrafficRoute(CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute)
    .targetGroup(IResolvable)
    .targetGroup(java.util.List<CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup>)
//  .testTrafficRoute(CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.prodTrafficRoute">prodTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a></code> | prod_traffic_route block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.targetGroup">targetGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>></code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.testTrafficRoute">testTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a></code> | test_traffic_route block. |

---

##### `prodTrafficRoute`<sup>Required</sup> <a name="prodTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.prodTrafficRoute"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute getProdTrafficRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

prod_traffic_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.targetGroup"></a>

```java
public java.lang.Object getTargetGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>>

target_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group CodedeployDeploymentGroup#target_group}

---

##### `testTrafficRoute`<sup>Optional</sup> <a name="testTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.testTrafficRoute"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute getTestTrafficRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

test_traffic_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;

CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute.builder()
    .listenerArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute.property.listenerArns">listenerArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}. |

---

##### `listenerArns`<sup>Required</sup> <a name="listenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute.property.listenerArns"></a>

```java
public java.util.List<java.lang.String> getListenerArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup;

CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;

CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute.builder()
    .listenerArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute.property.listenerArns">listenerArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}. |

---

##### `listenerArns`<sup>Required</sup> <a name="listenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute.property.listenerArns"></a>

```java
public java.util.List<java.lang.String> getListenerArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}.

---

### CodedeployDeploymentGroupOnPremisesInstanceTagFilter <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupOnPremisesInstanceTagFilter;

CodedeployDeploymentGroupOnPremisesInstanceTagFilter.builder()
//  .key(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}.

---

### CodedeployDeploymentGroupTriggerConfiguration <a name="CodedeployDeploymentGroupTriggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupTriggerConfiguration;

CodedeployDeploymentGroupTriggerConfiguration.builder()
    .triggerEvents(java.util.List<java.lang.String>)
    .triggerName(java.lang.String)
    .triggerTargetArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerEvents">triggerEvents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerName">triggerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerTargetArn">triggerTargetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}. |

---

##### `triggerEvents`<sup>Required</sup> <a name="triggerEvents" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerEvents"></a>

```java
public java.util.List<java.lang.String> getTriggerEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}.

---

##### `triggerName`<sup>Required</sup> <a name="triggerName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerName"></a>

```java
public java.lang.String getTriggerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}.

---

##### `triggerTargetArn`<sup>Required</sup> <a name="triggerTargetArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerTargetArn"></a>

```java
public java.lang.String getTriggerTargetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentGroupAlarmConfigurationOutputReference <a name="CodedeployDeploymentGroupAlarmConfigurationOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupAlarmConfigurationOutputReference;

new CodedeployDeploymentGroupAlarmConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure">resetIgnorePollAlarmFailure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIgnorePollAlarmFailure` <a name="resetIgnorePollAlarmFailure" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure"></a>

```java
public void resetIgnorePollAlarmFailure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput">ignorePollAlarmFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure">ignorePollAlarmFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignorePollAlarmFailureInput`<sup>Optional</sup> <a name="ignorePollAlarmFailureInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput"></a>

```java
public java.lang.Object getIgnorePollAlarmFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignorePollAlarmFailure`<sup>Required</sup> <a name="ignorePollAlarmFailure" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure"></a>

```java
public java.lang.Object getIgnorePollAlarmFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupAlarmConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---


### CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference <a name="CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference;

new CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents">resetEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEvents` <a name="resetEvents" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents"></a>

```java
public void resetEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupAutoRollbackConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetActionOnTimeout">resetActionOnTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes">resetWaitTimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionOnTimeout` <a name="resetActionOnTimeout" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetActionOnTimeout"></a>

```java
public void resetActionOnTimeout()
```

##### `resetWaitTimeInMinutes` <a name="resetWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes"></a>

```java
public void resetWaitTimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput">actionOnTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput">waitTimeInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeout">actionOnTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutes">waitTimeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionOnTimeoutInput`<sup>Optional</sup> <a name="actionOnTimeoutInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput"></a>

```java
public java.lang.String getActionOnTimeoutInput();
```

- *Type:* java.lang.String

---

##### `waitTimeInMinutesInput`<sup>Optional</sup> <a name="waitTimeInMinutesInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput"></a>

```java
public java.lang.Number getWaitTimeInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `actionOnTimeout`<sup>Required</sup> <a name="actionOnTimeout" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeout"></a>

```java
public java.lang.String getActionOnTimeout();
```

- *Type:* java.lang.String

---

##### `waitTimeInMinutes`<sup>Required</sup> <a name="waitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutes"></a>

```java
public java.lang.Number getWaitTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resetAction"></a>

```java
public void resetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putDeploymentReadyOption">putDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putGreenFleetProvisioningOption">putGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putTerminateBlueInstancesOnDeploymentSuccess">putTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetDeploymentReadyOption">resetDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetGreenFleetProvisioningOption">resetGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess">resetTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeploymentReadyOption` <a name="putDeploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putDeploymentReadyOption"></a>

```java
public void putDeploymentReadyOption(CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putDeploymentReadyOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

---

##### `putGreenFleetProvisioningOption` <a name="putGreenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putGreenFleetProvisioningOption"></a>

```java
public void putGreenFleetProvisioningOption(CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putGreenFleetProvisioningOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

---

##### `putTerminateBlueInstancesOnDeploymentSuccess` <a name="putTerminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putTerminateBlueInstancesOnDeploymentSuccess"></a>

```java
public void putTerminateBlueInstancesOnDeploymentSuccess(CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putTerminateBlueInstancesOnDeploymentSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `resetDeploymentReadyOption` <a name="resetDeploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetDeploymentReadyOption"></a>

```java
public void resetDeploymentReadyOption()
```

##### `resetGreenFleetProvisioningOption` <a name="resetGreenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetGreenFleetProvisioningOption"></a>

```java
public void resetGreenFleetProvisioningOption()
```

##### `resetTerminateBlueInstancesOnDeploymentSuccess` <a name="resetTerminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess"></a>

```java
public void resetTerminateBlueInstancesOnDeploymentSuccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOption">deploymentReadyOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOption">greenFleetProvisioningOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccess">terminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOptionInput">deploymentReadyOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOptionInput">greenFleetProvisioningOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput">terminateBlueInstancesOnDeploymentSuccessInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploymentReadyOption`<sup>Required</sup> <a name="deploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOption"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference getDeploymentReadyOption();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference</a>

---

##### `greenFleetProvisioningOption`<sup>Required</sup> <a name="greenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOption"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference getGreenFleetProvisioningOption();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference</a>

---

##### `terminateBlueInstancesOnDeploymentSuccess`<sup>Required</sup> <a name="terminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference getTerminateBlueInstancesOnDeploymentSuccess();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference</a>

---

##### `deploymentReadyOptionInput`<sup>Optional</sup> <a name="deploymentReadyOptionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOptionInput"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption getDeploymentReadyOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

---

##### `greenFleetProvisioningOptionInput`<sup>Optional</sup> <a name="greenFleetProvisioningOptionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOptionInput"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption getGreenFleetProvisioningOptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

---

##### `terminateBlueInstancesOnDeploymentSuccessInput`<sup>Optional</sup> <a name="terminateBlueInstancesOnDeploymentSuccessInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess getTerminateBlueInstancesOnDeploymentSuccessInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes">resetTerminationWaitTimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetTerminationWaitTimeInMinutes` <a name="resetTerminationWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes"></a>

```java
public void resetTerminationWaitTimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput">terminationWaitTimeInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes">terminationWaitTimeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `terminationWaitTimeInMinutesInput`<sup>Optional</sup> <a name="terminationWaitTimeInMinutesInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput"></a>

```java
public java.lang.Number getTerminationWaitTimeInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `terminationWaitTimeInMinutes`<sup>Required</sup> <a name="terminationWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes"></a>

```java
public java.lang.Number getTerminationWaitTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

---


### CodedeployDeploymentGroupDeploymentStyleOutputReference <a name="CodedeployDeploymentGroupDeploymentStyleOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupDeploymentStyleOutputReference;

new CodedeployDeploymentGroupDeploymentStyleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption">resetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeploymentOption` <a name="resetDeploymentOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption"></a>

```java
public void resetDeploymentOption()
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType"></a>

```java
public void resetDeploymentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput">deploymentOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption">deploymentOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploymentOptionInput`<sup>Optional</sup> <a name="deploymentOptionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput"></a>

```java
public java.lang.String getDeploymentOptionInput();
```

- *Type:* java.lang.String

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `deploymentOption`<sup>Required</sup> <a name="deploymentOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption"></a>

```java
public java.lang.String getDeploymentOption();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupDeploymentStyle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---


### CodedeployDeploymentGroupEc2TagFilterList <a name="CodedeployDeploymentGroupEc2TagFilterList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupEc2TagFilterList;

new CodedeployDeploymentGroupEc2TagFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.get"></a>

```java
public CodedeployDeploymentGroupEc2TagFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>>

---


### CodedeployDeploymentGroupEc2TagFilterOutputReference <a name="CodedeployDeploymentGroupEc2TagFilterOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupEc2TagFilterOutputReference;

new CodedeployDeploymentGroupEc2TagFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### CodedeployDeploymentGroupEc2TagSetEc2TagFilterList <a name="CodedeployDeploymentGroupEc2TagSetEc2TagFilterList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList;

new CodedeployDeploymentGroupEc2TagSetEc2TagFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.get"></a>

```java
public CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>>

---


### CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference <a name="CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference;

new CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### CodedeployDeploymentGroupEc2TagSetList <a name="CodedeployDeploymentGroupEc2TagSetList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupEc2TagSetList;

new CodedeployDeploymentGroupEc2TagSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.get"></a>

```java
public CodedeployDeploymentGroupEc2TagSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>>

---


### CodedeployDeploymentGroupEc2TagSetOutputReference <a name="CodedeployDeploymentGroupEc2TagSetOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupEc2TagSetOutputReference;

new CodedeployDeploymentGroupEc2TagSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagFilter">putEc2TagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagFilter">resetEc2TagFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEc2TagFilter` <a name="putEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagFilter"></a>

```java
public void putEc2TagFilter(IResolvable OR java.util.List<CodedeployDeploymentGroupEc2TagSetEc2TagFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>>

---

##### `resetEc2TagFilter` <a name="resetEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagFilter"></a>

```java
public void resetEc2TagFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilter">ec2TagFilter</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList">CodedeployDeploymentGroupEc2TagSetEc2TagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilterInput">ec2TagFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ec2TagFilter`<sup>Required</sup> <a name="ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilter"></a>

```java
public CodedeployDeploymentGroupEc2TagSetEc2TagFilterList getEc2TagFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList">CodedeployDeploymentGroupEc2TagSetEc2TagFilterList</a>

---

##### `ec2TagFilterInput`<sup>Optional</sup> <a name="ec2TagFilterInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilterInput"></a>

```java
public java.lang.Object getEc2TagFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a> OR com.hashicorp.cdktf.IResolvable

---


### CodedeployDeploymentGroupEcsServiceOutputReference <a name="CodedeployDeploymentGroupEcsServiceOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupEcsServiceOutputReference;

new CodedeployDeploymentGroupEcsServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupEcsService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoList <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList;

new CodedeployDeploymentGroupLoadBalancerInfoElbInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.get"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>>

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference;

new CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a> OR com.hashicorp.cdktf.IResolvable

---


### CodedeployDeploymentGroupLoadBalancerInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoOutputReference;

new CodedeployDeploymentGroupLoadBalancerInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfo">putElbInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfo">putTargetGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfo">putTargetGroupPairInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfo">resetElbInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfo">resetTargetGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfo">resetTargetGroupPairInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putElbInfo` <a name="putElbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfo"></a>

```java
public void putElbInfo(IResolvable OR java.util.List<CodedeployDeploymentGroupLoadBalancerInfoElbInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfo.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>>

---

##### `putTargetGroupInfo` <a name="putTargetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfo"></a>

```java
public void putTargetGroupInfo(IResolvable OR java.util.List<CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfo.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>>

---

##### `putTargetGroupPairInfo` <a name="putTargetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfo"></a>

```java
public void putTargetGroupPairInfo(CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

---

##### `resetElbInfo` <a name="resetElbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfo"></a>

```java
public void resetElbInfo()
```

##### `resetTargetGroupInfo` <a name="resetTargetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfo"></a>

```java
public void resetTargetGroupInfo()
```

##### `resetTargetGroupPairInfo` <a name="resetTargetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfo"></a>

```java
public void resetTargetGroupPairInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfo">elbInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfo">targetGroupInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfo">targetGroupPairInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoInput">elbInfoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoInput">targetGroupInfoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoInput">targetGroupPairInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `elbInfo`<sup>Required</sup> <a name="elbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfo"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoElbInfoList getElbInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoList</a>

---

##### `targetGroupInfo`<sup>Required</sup> <a name="targetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfo"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList getTargetGroupInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList</a>

---

##### `targetGroupPairInfo`<sup>Required</sup> <a name="targetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfo"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference getTargetGroupPairInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference</a>

---

##### `elbInfoInput`<sup>Optional</sup> <a name="elbInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoInput"></a>

```java
public java.lang.Object getElbInfoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>>

---

##### `targetGroupInfoInput`<sup>Optional</sup> <a name="targetGroupInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoInput"></a>

```java
public java.lang.Object getTargetGroupInfoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>>

---

##### `targetGroupPairInfoInput`<sup>Optional</sup> <a name="targetGroupPairInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoInput"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo getTargetGroupPairInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.get"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a> OR com.hashicorp.cdktf.IResolvable

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putProdTrafficRoute">putProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTargetGroup">putTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTestTrafficRoute">putTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resetTestTrafficRoute">resetTestTrafficRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProdTrafficRoute` <a name="putProdTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putProdTrafficRoute"></a>

```java
public void putProdTrafficRoute(CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putProdTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

---

##### `putTargetGroup` <a name="putTargetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTargetGroup"></a>

```java
public void putTargetGroup(IResolvable OR java.util.List<CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>>

---

##### `putTestTrafficRoute` <a name="putTestTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTestTrafficRoute"></a>

```java
public void putTestTrafficRoute(CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTestTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

---

##### `resetTestTrafficRoute` <a name="resetTestTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resetTestTrafficRoute"></a>

```java
public void resetTestTrafficRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRoute">prodTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroup">targetGroup</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRoute">testTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRouteInput">prodTrafficRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroupInput">targetGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRouteInput">testTrafficRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prodTrafficRoute`<sup>Required</sup> <a name="prodTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRoute"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference getProdTrafficRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference</a>

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroup"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList getTargetGroup();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList</a>

---

##### `testTrafficRoute`<sup>Required</sup> <a name="testTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRoute"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference getTestTrafficRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference</a>

---

##### `prodTrafficRouteInput`<sup>Optional</sup> <a name="prodTrafficRouteInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRouteInput"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute getProdTrafficRouteInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

---

##### `targetGroupInput`<sup>Optional</sup> <a name="targetGroupInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroupInput"></a>

```java
public java.lang.Object getTargetGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>>

---

##### `testTrafficRouteInput`<sup>Optional</sup> <a name="testTrafficRouteInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRouteInput"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute getTestTrafficRouteInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArnsInput">listenerArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArns">listenerArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listenerArnsInput`<sup>Optional</sup> <a name="listenerArnsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArnsInput"></a>

```java
public java.util.List<java.lang.String> getListenerArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listenerArns`<sup>Required</sup> <a name="listenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArns"></a>

```java
public java.util.List<java.lang.String> getListenerArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.get"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a> OR com.hashicorp.cdktf.IResolvable

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArnsInput">listenerArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArns">listenerArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listenerArnsInput`<sup>Optional</sup> <a name="listenerArnsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArnsInput"></a>

```java
public java.util.List<java.lang.String> getListenerArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listenerArns`<sup>Required</sup> <a name="listenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArns"></a>

```java
public java.util.List<java.lang.String> getListenerArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.internalValue"></a>

```java
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFilterList <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilterList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList;

new CodedeployDeploymentGroupOnPremisesInstanceTagFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.get"></a>

```java
public CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>>

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference;

new CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### CodedeployDeploymentGroupTriggerConfigurationList <a name="CodedeployDeploymentGroupTriggerConfigurationList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupTriggerConfigurationList;

new CodedeployDeploymentGroupTriggerConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.get"></a>

```java
public CodedeployDeploymentGroupTriggerConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>>

---


### CodedeployDeploymentGroupTriggerConfigurationOutputReference <a name="CodedeployDeploymentGroupTriggerConfigurationOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codedeploy_deployment_group.CodedeployDeploymentGroupTriggerConfigurationOutputReference;

new CodedeployDeploymentGroupTriggerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEventsInput">triggerEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerNameInput">triggerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArnInput">triggerTargetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEvents">triggerEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerName">triggerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArn">triggerTargetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `triggerEventsInput`<sup>Optional</sup> <a name="triggerEventsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEventsInput"></a>

```java
public java.util.List<java.lang.String> getTriggerEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `triggerNameInput`<sup>Optional</sup> <a name="triggerNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerNameInput"></a>

```java
public java.lang.String getTriggerNameInput();
```

- *Type:* java.lang.String

---

##### `triggerTargetArnInput`<sup>Optional</sup> <a name="triggerTargetArnInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArnInput"></a>

```java
public java.lang.String getTriggerTargetArnInput();
```

- *Type:* java.lang.String

---

##### `triggerEvents`<sup>Required</sup> <a name="triggerEvents" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEvents"></a>

```java
public java.util.List<java.lang.String> getTriggerEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `triggerName`<sup>Required</sup> <a name="triggerName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerName"></a>

```java
public java.lang.String getTriggerName();
```

- *Type:* java.lang.String

---

##### `triggerTargetArn`<sup>Required</sup> <a name="triggerTargetArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArn"></a>

```java
public java.lang.String getTriggerTargetArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a> OR com.hashicorp.cdktf.IResolvable

---



