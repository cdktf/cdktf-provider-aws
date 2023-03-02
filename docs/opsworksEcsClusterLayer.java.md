# `opsworksEcsClusterLayer` Submodule <a name="`opsworksEcsClusterLayer` Submodule" id="@cdktf/provider-aws.opsworksEcsClusterLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksEcsClusterLayer <a name="OpsworksEcsClusterLayer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer aws_opsworks_ecs_cluster_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayer;

OpsworksEcsClusterLayer.Builder.create(Construct scope, java.lang.String id)
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
    .ecsClusterArn(java.lang.String)
    .stackId(java.lang.String)
//  .autoAssignElasticIps(java.lang.Boolean)
//  .autoAssignElasticIps(IResolvable)
//  .autoAssignPublicIps(java.lang.Boolean)
//  .autoAssignPublicIps(IResolvable)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .cloudwatchConfiguration(OpsworksEcsClusterLayerCloudwatchConfiguration)
//  .customConfigureRecipes(java.util.List<java.lang.String>)
//  .customDeployRecipes(java.util.List<java.lang.String>)
//  .customInstanceProfileArn(java.lang.String)
//  .customJson(java.lang.String)
//  .customSecurityGroupIds(java.util.List<java.lang.String>)
//  .customSetupRecipes(java.util.List<java.lang.String>)
//  .customShutdownRecipes(java.util.List<java.lang.String>)
//  .customUndeployRecipes(java.util.List<java.lang.String>)
//  .drainElbOnShutdown(java.lang.Boolean)
//  .drainElbOnShutdown(IResolvable)
//  .ebsVolume(IResolvable)
//  .ebsVolume(java.util.List<OpsworksEcsClusterLayerEbsVolume>)
//  .elasticLoadBalancer(java.lang.String)
//  .id(java.lang.String)
//  .installUpdatesOnBoot(java.lang.Boolean)
//  .installUpdatesOnBoot(IResolvable)
//  .instanceShutdownTimeout(java.lang.Number)
//  .loadBasedAutoScaling(OpsworksEcsClusterLayerLoadBasedAutoScaling)
//  .name(java.lang.String)
//  .systemPackages(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .useEbsOptimizedInstances(java.lang.Boolean)
//  .useEbsOptimizedInstances(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.ecsClusterArn">ecsClusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.ebsVolume">ebsVolume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>></code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ecsClusterArn`<sup>Required</sup> <a name="ecsClusterArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.ecsClusterArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.stackId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoAssignElasticIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoAssignPublicIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoHealing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.cloudwatchConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cloudwatch_configuration OpsworksEcsClusterLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customConfigureRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customDeployRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customInstanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customSetupRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customShutdownRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customUndeployRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.drainElbOnShutdown"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.ebsVolume"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>>

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ebs_volume OpsworksEcsClusterLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.elasticLoadBalancer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.installUpdatesOnBoot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.instanceShutdownTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.loadBasedAutoScaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_based_auto_scaling OpsworksEcsClusterLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.systemPackages"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.useEbsOptimizedInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling">putLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetLoadBasedAutoScaling">resetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration"></a>

```java
public void putCloudwatchConfiguration(OpsworksEcsClusterLayerCloudwatchConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume"></a>

```java
public void putEbsVolume(IResolvable OR java.util.List<OpsworksEcsClusterLayerEbsVolume> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>>

---

##### `putLoadBasedAutoScaling` <a name="putLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling"></a>

```java
public void putLoadBasedAutoScaling(OpsworksEcsClusterLayerLoadBasedAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

---

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignElasticIps"></a>

```java
public void resetAutoAssignElasticIps()
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignPublicIps"></a>

```java
public void resetAutoAssignPublicIps()
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoHealing"></a>

```java
public void resetAutoHealing()
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCloudwatchConfiguration"></a>

```java
public void resetCloudwatchConfiguration()
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomConfigureRecipes"></a>

```java
public void resetCustomConfigureRecipes()
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomDeployRecipes"></a>

```java
public void resetCustomDeployRecipes()
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomInstanceProfileArn"></a>

```java
public void resetCustomInstanceProfileArn()
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomJson"></a>

```java
public void resetCustomJson()
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSecurityGroupIds"></a>

```java
public void resetCustomSecurityGroupIds()
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSetupRecipes"></a>

```java
public void resetCustomSetupRecipes()
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomShutdownRecipes"></a>

```java
public void resetCustomShutdownRecipes()
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomUndeployRecipes"></a>

```java
public void resetCustomUndeployRecipes()
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetDrainElbOnShutdown"></a>

```java
public void resetDrainElbOnShutdown()
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetEbsVolume"></a>

```java
public void resetEbsVolume()
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetElasticLoadBalancer"></a>

```java
public void resetElasticLoadBalancer()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetId"></a>

```java
public void resetId()
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstallUpdatesOnBoot"></a>

```java
public void resetInstallUpdatesOnBoot()
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstanceShutdownTimeout"></a>

```java
public void resetInstanceShutdownTimeout()
```

##### `resetLoadBasedAutoScaling` <a name="resetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetLoadBasedAutoScaling"></a>

```java
public void resetLoadBasedAutoScaling()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetName"></a>

```java
public void resetName()
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetSystemPackages"></a>

```java
public void resetSystemPackages()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetUseEbsOptimizedInstances"></a>

```java
public void resetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayer;

OpsworksEcsClusterLayer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayer;

OpsworksEcsClusterLayer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayer;

OpsworksEcsClusterLayer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference">OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList">OpsworksEcsClusterLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJsonInput">customJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArnInput">ecsClusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScalingInput">loadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackIdInput">stackIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJson">customJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArn">ecsClusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackId">stackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfiguration"></a>

```java
public OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference getCloudwatchConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference">OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolume"></a>

```java
public OpsworksEcsClusterLayerEbsVolumeList getEbsVolume();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList">OpsworksEcsClusterLayerEbsVolumeList</a>

---

##### `loadBasedAutoScaling`<sup>Required</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScaling"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference getLoadBasedAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference</a>

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIpsInput"></a>

```java
public java.lang.Object getAutoAssignElasticIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIpsInput"></a>

```java
public java.lang.Object getAutoAssignPublicIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealingInput"></a>

```java
public java.lang.Object getAutoHealingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfigurationInput"></a>

```java
public OpsworksEcsClusterLayerCloudwatchConfiguration getCloudwatchConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArnInput"></a>

```java
public java.lang.String getCustomInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJsonInput"></a>

```java
public java.lang.String getCustomJsonInput();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdownInput"></a>

```java
public java.lang.Object getDrainElbOnShutdownInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolumeInput"></a>

```java
public java.lang.Object getEbsVolumeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>>

---

##### `ecsClusterArnInput`<sup>Optional</sup> <a name="ecsClusterArnInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArnInput"></a>

```java
public java.lang.String getEcsClusterArnInput();
```

- *Type:* java.lang.String

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancerInput"></a>

```java
public java.lang.String getElasticLoadBalancerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBootInput"></a>

```java
public java.lang.Object getInstallUpdatesOnBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeoutInput"></a>

```java
public java.lang.Number getInstanceShutdownTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `loadBasedAutoScalingInput`<sup>Optional</sup> <a name="loadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScalingInput"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScaling getLoadBasedAutoScalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackIdInput"></a>

```java
public java.lang.String getStackIdInput();
```

- *Type:* java.lang.String

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackagesInput"></a>

```java
public java.util.List<java.lang.String> getSystemPackagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstancesInput"></a>

```java
public java.lang.Object getUseEbsOptimizedInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIps"></a>

```java
public java.lang.Object getAutoAssignElasticIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIps"></a>

```java
public java.lang.Object getAutoAssignPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArn"></a>

```java
public java.lang.String getCustomInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdown"></a>

```java
public java.lang.Object getDrainElbOnShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ecsClusterArn`<sup>Required</sup> <a name="ecsClusterArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArn"></a>

```java
public java.lang.String getEcsClusterArn();
```

- *Type:* java.lang.String

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancer"></a>

```java
public java.lang.String getElasticLoadBalancer();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBoot"></a>

```java
public java.lang.Object getInstallUpdatesOnBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeout"></a>

```java
public java.lang.Number getInstanceShutdownTimeout();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackages"></a>

```java
public java.util.List<java.lang.String> getSystemPackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstances"></a>

```java
public java.lang.Object getUseEbsOptimizedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksEcsClusterLayerCloudwatchConfiguration <a name="OpsworksEcsClusterLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerCloudwatchConfiguration;

OpsworksEcsClusterLayerCloudwatchConfiguration.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .logStreams(IResolvable)
//  .logStreams(java.util.List<OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enabled OpsworksEcsClusterLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>></code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enabled OpsworksEcsClusterLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.logStreams"></a>

```java
public java.lang.Object getLogStreams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>>

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#log_streams OpsworksEcsClusterLayer#log_streams}

---

### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams;

OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.builder()
    .file(java.lang.String)
    .logGroupName(java.lang.String)
//  .batchCount(java.lang.Number)
//  .batchSize(java.lang.Number)
//  .bufferDuration(java.lang.Number)
//  .datetimeFormat(java.lang.String)
//  .encoding(java.lang.String)
//  .fileFingerprintLines(java.lang.String)
//  .initialPosition(java.lang.String)
//  .multilineStartPattern(java.lang.String)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file OpsworksEcsClusterLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#log_group_name OpsworksEcsClusterLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_count OpsworksEcsClusterLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_size OpsworksEcsClusterLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#buffer_duration OpsworksEcsClusterLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#datetime_format OpsworksEcsClusterLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encoding OpsworksEcsClusterLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file_fingerprint_lines OpsworksEcsClusterLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#initial_position OpsworksEcsClusterLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#multiline_start_pattern OpsworksEcsClusterLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#time_zone OpsworksEcsClusterLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file OpsworksEcsClusterLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#log_group_name OpsworksEcsClusterLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_count OpsworksEcsClusterLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_size OpsworksEcsClusterLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```java
public java.lang.Number getBufferDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#buffer_duration OpsworksEcsClusterLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```java
public java.lang.String getDatetimeFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#datetime_format OpsworksEcsClusterLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encoding OpsworksEcsClusterLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```java
public java.lang.String getFileFingerprintLines();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file_fingerprint_lines OpsworksEcsClusterLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```java
public java.lang.String getInitialPosition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#initial_position OpsworksEcsClusterLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```java
public java.lang.String getMultilineStartPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#multiline_start_pattern OpsworksEcsClusterLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#time_zone OpsworksEcsClusterLayer#time_zone}.

---

### OpsworksEcsClusterLayerConfig <a name="OpsworksEcsClusterLayerConfig" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerConfig;

OpsworksEcsClusterLayerConfig.builder()
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
    .ecsClusterArn(java.lang.String)
    .stackId(java.lang.String)
//  .autoAssignElasticIps(java.lang.Boolean)
//  .autoAssignElasticIps(IResolvable)
//  .autoAssignPublicIps(java.lang.Boolean)
//  .autoAssignPublicIps(IResolvable)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .cloudwatchConfiguration(OpsworksEcsClusterLayerCloudwatchConfiguration)
//  .customConfigureRecipes(java.util.List<java.lang.String>)
//  .customDeployRecipes(java.util.List<java.lang.String>)
//  .customInstanceProfileArn(java.lang.String)
//  .customJson(java.lang.String)
//  .customSecurityGroupIds(java.util.List<java.lang.String>)
//  .customSetupRecipes(java.util.List<java.lang.String>)
//  .customShutdownRecipes(java.util.List<java.lang.String>)
//  .customUndeployRecipes(java.util.List<java.lang.String>)
//  .drainElbOnShutdown(java.lang.Boolean)
//  .drainElbOnShutdown(IResolvable)
//  .ebsVolume(IResolvable)
//  .ebsVolume(java.util.List<OpsworksEcsClusterLayerEbsVolume>)
//  .elasticLoadBalancer(java.lang.String)
//  .id(java.lang.String)
//  .installUpdatesOnBoot(java.lang.Boolean)
//  .installUpdatesOnBoot(IResolvable)
//  .instanceShutdownTimeout(java.lang.Number)
//  .loadBasedAutoScaling(OpsworksEcsClusterLayerLoadBasedAutoScaling)
//  .name(java.lang.String)
//  .systemPackages(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .useEbsOptimizedInstances(java.lang.Boolean)
//  .useEbsOptimizedInstances(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ecsClusterArn">ecsClusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>></code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ecsClusterArn`<sup>Required</sup> <a name="ecsClusterArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ecsClusterArn"></a>

```java
public java.lang.String getEcsClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignElasticIps"></a>

```java
public java.lang.Object getAutoAssignElasticIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignPublicIps"></a>

```java
public java.lang.Object getAutoAssignPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.cloudwatchConfiguration"></a>

```java
public OpsworksEcsClusterLayerCloudwatchConfiguration getCloudwatchConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cloudwatch_configuration OpsworksEcsClusterLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customConfigureRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customDeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customInstanceProfileArn"></a>

```java
public java.lang.String getCustomInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSetupRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customShutdownRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customUndeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.drainElbOnShutdown"></a>

```java
public java.lang.Object getDrainElbOnShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ebsVolume"></a>

```java
public java.lang.Object getEbsVolume();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>>

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ebs_volume OpsworksEcsClusterLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.elasticLoadBalancer"></a>

```java
public java.lang.String getElasticLoadBalancer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.installUpdatesOnBoot"></a>

```java
public java.lang.Object getInstallUpdatesOnBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.instanceShutdownTimeout"></a>

```java
public java.lang.Number getInstanceShutdownTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.loadBasedAutoScaling"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScaling getLoadBasedAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_based_auto_scaling OpsworksEcsClusterLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.systemPackages"></a>

```java
public java.util.List<java.lang.String> getSystemPackages();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.useEbsOptimizedInstances"></a>

```java
public java.lang.Object getUseEbsOptimizedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}.

---

### OpsworksEcsClusterLayerEbsVolume <a name="OpsworksEcsClusterLayerEbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerEbsVolume;

OpsworksEcsClusterLayerEbsVolume.builder()
    .mountPoint(java.lang.String)
    .numberOfDisks(java.lang.Number)
    .size(java.lang.Number)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .iops(java.lang.Number)
//  .raidLevel(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#mount_point OpsworksEcsClusterLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#number_of_disks OpsworksEcsClusterLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#size OpsworksEcsClusterLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encrypted OpsworksEcsClusterLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#iops OpsworksEcsClusterLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#raid_level OpsworksEcsClusterLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#type OpsworksEcsClusterLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#mount_point OpsworksEcsClusterLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#number_of_disks OpsworksEcsClusterLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#size OpsworksEcsClusterLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encrypted OpsworksEcsClusterLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#iops OpsworksEcsClusterLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.raidLevel"></a>

```java
public java.lang.String getRaidLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#raid_level OpsworksEcsClusterLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#type OpsworksEcsClusterLayer#type}.

---

### OpsworksEcsClusterLayerLoadBasedAutoScaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerLoadBasedAutoScaling;

OpsworksEcsClusterLayerLoadBasedAutoScaling.builder()
//  .downscaling(OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .upscaling(OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enable OpsworksEcsClusterLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.downscaling"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling getDownscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#downscaling OpsworksEcsClusterLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enable OpsworksEcsClusterLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.upscaling"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling getUpscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#upscaling OpsworksEcsClusterLayer#upscaling}

---

### OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling;

OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.builder()
//  .alarms(java.util.List<java.lang.String>)
//  .cpuThreshold(java.lang.Number)
//  .ignoreMetricsTime(java.lang.Number)
//  .instanceCount(java.lang.Number)
//  .loadThreshold(java.lang.Number)
//  .memoryThreshold(java.lang.Number)
//  .thresholdsWaitTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}.

---

### OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling;

OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.builder()
//  .alarms(java.util.List<java.lang.String>)
//  .cpuThreshold(java.lang.Number)
//  .ignoreMetricsTime(java.lang.Number)
//  .instanceCount(java.lang.Number)
//  .loadThreshold(java.lang.Number)
//  .memoryThreshold(java.lang.Number)
//  .thresholdsWaitTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList;

new OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get"></a>

```java
public OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>>

---


### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference;

new OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```java
public void resetBatchCount()
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```java
public void resetBatchSize()
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```java
public void resetBufferDuration()
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```java
public void resetDatetimeFormat()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```java
public void resetFileFingerprintLines()
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```java
public void resetInitialPosition()
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```java
public void resetMultilineStartPattern()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```java
public java.lang.Number getBatchCountInput();
```

- *Type:* java.lang.Number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```java
public java.lang.Number getBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```java
public java.lang.Number getBufferDurationInput();
```

- *Type:* java.lang.Number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```java
public java.lang.String getDatetimeFormatInput();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```java
public java.lang.String getFileFingerprintLinesInput();
```

- *Type:* java.lang.String

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```java
public java.lang.String getInitialPositionInput();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```java
public java.lang.String getMultilineStartPatternInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```java
public java.lang.Number getBufferDuration();
```

- *Type:* java.lang.Number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```java
public java.lang.String getDatetimeFormat();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```java
public java.lang.String getFileFingerprintLines();
```

- *Type:* java.lang.String

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```java
public java.lang.String getInitialPosition();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```java
public java.lang.String getMultilineStartPattern();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference <a name="OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference;

new OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```java
public void putLogStreams(IResolvable OR java.util.List<OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```java
public void resetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```java
public OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList getLogStreams();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```java
public java.lang.Object getLogStreamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```java
public OpsworksEcsClusterLayerCloudwatchConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

---


### OpsworksEcsClusterLayerEbsVolumeList <a name="OpsworksEcsClusterLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerEbsVolumeList;

new OpsworksEcsClusterLayerEbsVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get"></a>

```java
public OpsworksEcsClusterLayerEbsVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>>

---


### OpsworksEcsClusterLayerEbsVolumeOutputReference <a name="OpsworksEcsClusterLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerEbsVolumeOutputReference;

new OpsworksEcsClusterLayerEbsVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```java
public void resetRaidLevel()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```java
public java.lang.String getMountPointInput();
```

- *Type:* java.lang.String

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```java
public java.lang.Number getNumberOfDisksInput();
```

- *Type:* java.lang.Number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```java
public java.lang.String getRaidLevelInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevel"></a>

```java
public java.lang.String getRaidLevel();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference;

new OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```java
public void resetCpuThreshold()
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```java
public void resetIgnoreMetricsTime()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```java
public void resetLoadThreshold()
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```java
public void resetMemoryThreshold()
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```java
public void resetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```java
public java.lang.Number getCpuThresholdInput();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```java
public java.lang.Number getIgnoreMetricsTimeInput();
```

- *Type:* java.lang.Number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```java
public java.lang.Number getLoadThresholdInput();
```

- *Type:* java.lang.Number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```java
public java.lang.Number getMemoryThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```java
public java.lang.Number getThresholdsWaitTimeInput();
```

- *Type:* java.lang.Number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference;

new OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling">putDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling">putUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetDownscaling">resetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetUpscaling">resetUpscaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDownscaling` <a name="putDownscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```java
public void putDownscaling(OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

---

##### `putUpscaling` <a name="putUpscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```java
public void putUpscaling(OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

---

##### `resetDownscaling` <a name="resetDownscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```java
public void resetDownscaling()
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetUpscaling` <a name="resetUpscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```java
public void resetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference getDownscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference getUpscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscalingInput`<sup>Optional</sup> <a name="downscalingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling getDownscalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `upscalingInput`<sup>Optional</sup> <a name="upscalingInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling getUpscalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_ecs_cluster_layer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference;

new OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```java
public void resetCpuThreshold()
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```java
public void resetIgnoreMetricsTime()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```java
public void resetLoadThreshold()
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```java
public void resetMemoryThreshold()
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```java
public void resetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```java
public java.lang.Number getCpuThresholdInput();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```java
public java.lang.Number getIgnoreMetricsTimeInput();
```

- *Type:* java.lang.Number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```java
public java.lang.Number getLoadThresholdInput();
```

- *Type:* java.lang.Number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```java
public java.lang.Number getMemoryThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```java
public java.lang.Number getThresholdsWaitTimeInput();
```

- *Type:* java.lang.Number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```java
public OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

---



