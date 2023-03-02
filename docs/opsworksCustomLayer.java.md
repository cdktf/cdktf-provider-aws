# `opsworksCustomLayer` Submodule <a name="`opsworksCustomLayer` Submodule" id="@cdktf/provider-aws.opsworksCustomLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksCustomLayer <a name="OpsworksCustomLayer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer aws_opsworks_custom_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayer;

OpsworksCustomLayer.Builder.create(Construct scope, java.lang.String id)
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
    .shortName(java.lang.String)
    .stackId(java.lang.String)
//  .autoAssignElasticIps(java.lang.Boolean)
//  .autoAssignElasticIps(IResolvable)
//  .autoAssignPublicIps(java.lang.Boolean)
//  .autoAssignPublicIps(IResolvable)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .cloudwatchConfiguration(OpsworksCustomLayerCloudwatchConfiguration)
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
//  .ebsVolume(java.util.List<OpsworksCustomLayerEbsVolume>)
//  .elasticLoadBalancer(java.lang.String)
//  .id(java.lang.String)
//  .installUpdatesOnBoot(java.lang.Boolean)
//  .installUpdatesOnBoot(IResolvable)
//  .instanceShutdownTimeout(java.lang.Number)
//  .loadBasedAutoScaling(OpsworksCustomLayerLoadBasedAutoScaling)
//  .systemPackages(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .useEbsOptimizedInstances(java.lang.Boolean)
//  .useEbsOptimizedInstances(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#name OpsworksCustomLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.shortName">shortName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#short_name OpsworksCustomLayer#short_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#stack_id OpsworksCustomLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_assign_elastic_ips OpsworksCustomLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_assign_public_ips OpsworksCustomLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_healing OpsworksCustomLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration">OpsworksCustomLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_configure_recipes OpsworksCustomLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_deploy_recipes OpsworksCustomLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_instance_profile_arn OpsworksCustomLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_json OpsworksCustomLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_security_group_ids OpsworksCustomLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_setup_recipes OpsworksCustomLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_shutdown_recipes OpsworksCustomLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_undeploy_recipes OpsworksCustomLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#drain_elb_on_shutdown OpsworksCustomLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.ebsVolume">ebsVolume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume">OpsworksCustomLayerEbsVolume</a>></code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#elastic_load_balancer OpsworksCustomLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#id OpsworksCustomLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#install_updates_on_boot OpsworksCustomLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#instance_shutdown_timeout OpsworksCustomLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling">OpsworksCustomLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#system_packages OpsworksCustomLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#tags OpsworksCustomLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#tags_all OpsworksCustomLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#use_ebs_optimized_instances OpsworksCustomLayer#use_ebs_optimized_instances}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#name OpsworksCustomLayer#name}.

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.shortName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#short_name OpsworksCustomLayer#short_name}.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.stackId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#stack_id OpsworksCustomLayer#stack_id}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.autoAssignElasticIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_assign_elastic_ips OpsworksCustomLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.autoAssignPublicIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_assign_public_ips OpsworksCustomLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.autoHealing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_healing OpsworksCustomLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.cloudwatchConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration">OpsworksCustomLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#cloudwatch_configuration OpsworksCustomLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customConfigureRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_configure_recipes OpsworksCustomLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customDeployRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_deploy_recipes OpsworksCustomLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customInstanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_instance_profile_arn OpsworksCustomLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_json OpsworksCustomLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_security_group_ids OpsworksCustomLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customSetupRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_setup_recipes OpsworksCustomLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customShutdownRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_shutdown_recipes OpsworksCustomLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.customUndeployRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_undeploy_recipes OpsworksCustomLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.drainElbOnShutdown"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#drain_elb_on_shutdown OpsworksCustomLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.ebsVolume"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume">OpsworksCustomLayerEbsVolume</a>>

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#ebs_volume OpsworksCustomLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.elasticLoadBalancer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#elastic_load_balancer OpsworksCustomLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#id OpsworksCustomLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.installUpdatesOnBoot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#install_updates_on_boot OpsworksCustomLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.instanceShutdownTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#instance_shutdown_timeout OpsworksCustomLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.loadBasedAutoScaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling">OpsworksCustomLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#load_based_auto_scaling OpsworksCustomLayer#load_based_auto_scaling}

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.systemPackages"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#system_packages OpsworksCustomLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#tags OpsworksCustomLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#tags_all OpsworksCustomLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.Initializer.parameter.useEbsOptimizedInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#use_ebs_optimized_instances OpsworksCustomLayer#use_ebs_optimized_instances}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.putLoadBasedAutoScaling">putLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetLoadBasedAutoScaling">resetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.putCloudwatchConfiguration"></a>

```java
public void putCloudwatchConfiguration(OpsworksCustomLayerCloudwatchConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration">OpsworksCustomLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.putEbsVolume"></a>

```java
public void putEbsVolume(IResolvable OR java.util.List<OpsworksCustomLayerEbsVolume> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.putEbsVolume.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume">OpsworksCustomLayerEbsVolume</a>>

---

##### `putLoadBasedAutoScaling` <a name="putLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.putLoadBasedAutoScaling"></a>

```java
public void putLoadBasedAutoScaling(OpsworksCustomLayerLoadBasedAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling">OpsworksCustomLayerLoadBasedAutoScaling</a>

---

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetAutoAssignElasticIps"></a>

```java
public void resetAutoAssignElasticIps()
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetAutoAssignPublicIps"></a>

```java
public void resetAutoAssignPublicIps()
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetAutoHealing"></a>

```java
public void resetAutoHealing()
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCloudwatchConfiguration"></a>

```java
public void resetCloudwatchConfiguration()
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomConfigureRecipes"></a>

```java
public void resetCustomConfigureRecipes()
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomDeployRecipes"></a>

```java
public void resetCustomDeployRecipes()
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomInstanceProfileArn"></a>

```java
public void resetCustomInstanceProfileArn()
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomJson"></a>

```java
public void resetCustomJson()
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomSecurityGroupIds"></a>

```java
public void resetCustomSecurityGroupIds()
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomSetupRecipes"></a>

```java
public void resetCustomSetupRecipes()
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomShutdownRecipes"></a>

```java
public void resetCustomShutdownRecipes()
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetCustomUndeployRecipes"></a>

```java
public void resetCustomUndeployRecipes()
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetDrainElbOnShutdown"></a>

```java
public void resetDrainElbOnShutdown()
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetEbsVolume"></a>

```java
public void resetEbsVolume()
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetElasticLoadBalancer"></a>

```java
public void resetElasticLoadBalancer()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetId"></a>

```java
public void resetId()
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetInstallUpdatesOnBoot"></a>

```java
public void resetInstallUpdatesOnBoot()
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetInstanceShutdownTimeout"></a>

```java
public void resetInstanceShutdownTimeout()
```

##### `resetLoadBasedAutoScaling` <a name="resetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetLoadBasedAutoScaling"></a>

```java
public void resetLoadBasedAutoScaling()
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetSystemPackages"></a>

```java
public void resetSystemPackages()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.resetUseEbsOptimizedInstances"></a>

```java
public void resetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayer;

OpsworksCustomLayer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayer;

OpsworksCustomLayer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayer;

OpsworksCustomLayer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference">OpsworksCustomLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList">OpsworksCustomLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference">OpsworksCustomLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration">OpsworksCustomLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customJsonInput">customJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume">OpsworksCustomLayerEbsVolume</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.loadBasedAutoScalingInput">loadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling">OpsworksCustomLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.shortNameInput">shortNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.stackIdInput">stackIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customJson">customJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.shortName">shortName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.stackId">stackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.cloudwatchConfiguration"></a>

```java
public OpsworksCustomLayerCloudwatchConfigurationOutputReference getCloudwatchConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference">OpsworksCustomLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.ebsVolume"></a>

```java
public OpsworksCustomLayerEbsVolumeList getEbsVolume();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList">OpsworksCustomLayerEbsVolumeList</a>

---

##### `loadBasedAutoScaling`<sup>Required</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.loadBasedAutoScaling"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScalingOutputReference getLoadBasedAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference">OpsworksCustomLayerLoadBasedAutoScalingOutputReference</a>

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoAssignElasticIpsInput"></a>

```java
public java.lang.Object getAutoAssignElasticIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoAssignPublicIpsInput"></a>

```java
public java.lang.Object getAutoAssignPublicIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoHealingInput"></a>

```java
public java.lang.Object getAutoHealingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.cloudwatchConfigurationInput"></a>

```java
public OpsworksCustomLayerCloudwatchConfiguration getCloudwatchConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration">OpsworksCustomLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customConfigureRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customDeployRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customInstanceProfileArnInput"></a>

```java
public java.lang.String getCustomInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customJsonInput"></a>

```java
public java.lang.String getCustomJsonInput();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customSetupRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customShutdownRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customUndeployRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.drainElbOnShutdownInput"></a>

```java
public java.lang.Object getDrainElbOnShutdownInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.ebsVolumeInput"></a>

```java
public java.lang.Object getEbsVolumeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume">OpsworksCustomLayerEbsVolume</a>>

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.elasticLoadBalancerInput"></a>

```java
public java.lang.String getElasticLoadBalancerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.installUpdatesOnBootInput"></a>

```java
public java.lang.Object getInstallUpdatesOnBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.instanceShutdownTimeoutInput"></a>

```java
public java.lang.Number getInstanceShutdownTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `loadBasedAutoScalingInput`<sup>Optional</sup> <a name="loadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.loadBasedAutoScalingInput"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScaling getLoadBasedAutoScalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling">OpsworksCustomLayerLoadBasedAutoScaling</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.shortNameInput"></a>

```java
public java.lang.String getShortNameInput();
```

- *Type:* java.lang.String

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.stackIdInput"></a>

```java
public java.lang.String getStackIdInput();
```

- *Type:* java.lang.String

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.systemPackagesInput"></a>

```java
public java.util.List<java.lang.String> getSystemPackagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.useEbsOptimizedInstancesInput"></a>

```java
public java.lang.Object getUseEbsOptimizedInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoAssignElasticIps"></a>

```java
public java.lang.Object getAutoAssignElasticIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoAssignPublicIps"></a>

```java
public java.lang.Object getAutoAssignPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customConfigureRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customDeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customInstanceProfileArn"></a>

```java
public java.lang.String getCustomInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customSetupRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customShutdownRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.customUndeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.drainElbOnShutdown"></a>

```java
public java.lang.Object getDrainElbOnShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.elasticLoadBalancer"></a>

```java
public java.lang.String getElasticLoadBalancer();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.installUpdatesOnBoot"></a>

```java
public java.lang.Object getInstallUpdatesOnBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.instanceShutdownTimeout"></a>

```java
public java.lang.Number getInstanceShutdownTimeout();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.systemPackages"></a>

```java
public java.util.List<java.lang.String> getSystemPackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.useEbsOptimizedInstances"></a>

```java
public java.lang.Object getUseEbsOptimizedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksCustomLayerCloudwatchConfiguration <a name="OpsworksCustomLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerCloudwatchConfiguration;

OpsworksCustomLayerCloudwatchConfiguration.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .logStreams(IResolvable)
//  .logStreams(java.util.List<OpsworksCustomLayerCloudwatchConfigurationLogStreams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#enabled OpsworksCustomLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams">OpsworksCustomLayerCloudwatchConfigurationLogStreams</a>></code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#enabled OpsworksCustomLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration.property.logStreams"></a>

```java
public java.lang.Object getLogStreams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams">OpsworksCustomLayerCloudwatchConfigurationLogStreams</a>>

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#log_streams OpsworksCustomLayer#log_streams}

---

### OpsworksCustomLayerCloudwatchConfigurationLogStreams <a name="OpsworksCustomLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerCloudwatchConfigurationLogStreams;

OpsworksCustomLayerCloudwatchConfigurationLogStreams.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#file OpsworksCustomLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#log_group_name OpsworksCustomLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#batch_count OpsworksCustomLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#batch_size OpsworksCustomLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#buffer_duration OpsworksCustomLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#datetime_format OpsworksCustomLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#encoding OpsworksCustomLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#file_fingerprint_lines OpsworksCustomLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#initial_position OpsworksCustomLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#multiline_start_pattern OpsworksCustomLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#time_zone OpsworksCustomLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#file OpsworksCustomLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#log_group_name OpsworksCustomLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#batch_count OpsworksCustomLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#batch_size OpsworksCustomLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```java
public java.lang.Number getBufferDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#buffer_duration OpsworksCustomLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```java
public java.lang.String getDatetimeFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#datetime_format OpsworksCustomLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#encoding OpsworksCustomLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```java
public java.lang.String getFileFingerprintLines();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#file_fingerprint_lines OpsworksCustomLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```java
public java.lang.String getInitialPosition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#initial_position OpsworksCustomLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```java
public java.lang.String getMultilineStartPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#multiline_start_pattern OpsworksCustomLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#time_zone OpsworksCustomLayer#time_zone}.

---

### OpsworksCustomLayerConfig <a name="OpsworksCustomLayerConfig" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerConfig;

OpsworksCustomLayerConfig.builder()
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
    .shortName(java.lang.String)
    .stackId(java.lang.String)
//  .autoAssignElasticIps(java.lang.Boolean)
//  .autoAssignElasticIps(IResolvable)
//  .autoAssignPublicIps(java.lang.Boolean)
//  .autoAssignPublicIps(IResolvable)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .cloudwatchConfiguration(OpsworksCustomLayerCloudwatchConfiguration)
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
//  .ebsVolume(java.util.List<OpsworksCustomLayerEbsVolume>)
//  .elasticLoadBalancer(java.lang.String)
//  .id(java.lang.String)
//  .installUpdatesOnBoot(java.lang.Boolean)
//  .installUpdatesOnBoot(IResolvable)
//  .instanceShutdownTimeout(java.lang.Number)
//  .loadBasedAutoScaling(OpsworksCustomLayerLoadBasedAutoScaling)
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
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#name OpsworksCustomLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.shortName">shortName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#short_name OpsworksCustomLayer#short_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#stack_id OpsworksCustomLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_assign_elastic_ips OpsworksCustomLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_assign_public_ips OpsworksCustomLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_healing OpsworksCustomLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration">OpsworksCustomLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_configure_recipes OpsworksCustomLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_deploy_recipes OpsworksCustomLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_instance_profile_arn OpsworksCustomLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_json OpsworksCustomLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_security_group_ids OpsworksCustomLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_setup_recipes OpsworksCustomLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_shutdown_recipes OpsworksCustomLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_undeploy_recipes OpsworksCustomLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#drain_elb_on_shutdown OpsworksCustomLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume">OpsworksCustomLayerEbsVolume</a>></code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#elastic_load_balancer OpsworksCustomLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#id OpsworksCustomLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#install_updates_on_boot OpsworksCustomLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#instance_shutdown_timeout OpsworksCustomLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling">OpsworksCustomLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#system_packages OpsworksCustomLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#tags OpsworksCustomLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#tags_all OpsworksCustomLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#use_ebs_optimized_instances OpsworksCustomLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#name OpsworksCustomLayer#name}.

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#short_name OpsworksCustomLayer#short_name}.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#stack_id OpsworksCustomLayer#stack_id}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.autoAssignElasticIps"></a>

```java
public java.lang.Object getAutoAssignElasticIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_assign_elastic_ips OpsworksCustomLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.autoAssignPublicIps"></a>

```java
public java.lang.Object getAutoAssignPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_assign_public_ips OpsworksCustomLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_healing OpsworksCustomLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.cloudwatchConfiguration"></a>

```java
public OpsworksCustomLayerCloudwatchConfiguration getCloudwatchConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration">OpsworksCustomLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#cloudwatch_configuration OpsworksCustomLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customConfigureRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_configure_recipes OpsworksCustomLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customDeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_deploy_recipes OpsworksCustomLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customInstanceProfileArn"></a>

```java
public java.lang.String getCustomInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_instance_profile_arn OpsworksCustomLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_json OpsworksCustomLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_security_group_ids OpsworksCustomLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customSetupRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_setup_recipes OpsworksCustomLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customShutdownRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_shutdown_recipes OpsworksCustomLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.customUndeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_undeploy_recipes OpsworksCustomLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.drainElbOnShutdown"></a>

```java
public java.lang.Object getDrainElbOnShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#drain_elb_on_shutdown OpsworksCustomLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.ebsVolume"></a>

```java
public java.lang.Object getEbsVolume();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume">OpsworksCustomLayerEbsVolume</a>>

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#ebs_volume OpsworksCustomLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.elasticLoadBalancer"></a>

```java
public java.lang.String getElasticLoadBalancer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#elastic_load_balancer OpsworksCustomLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#id OpsworksCustomLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.installUpdatesOnBoot"></a>

```java
public java.lang.Object getInstallUpdatesOnBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#install_updates_on_boot OpsworksCustomLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.instanceShutdownTimeout"></a>

```java
public java.lang.Number getInstanceShutdownTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#instance_shutdown_timeout OpsworksCustomLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.loadBasedAutoScaling"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScaling getLoadBasedAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling">OpsworksCustomLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#load_based_auto_scaling OpsworksCustomLayer#load_based_auto_scaling}

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.systemPackages"></a>

```java
public java.util.List<java.lang.String> getSystemPackages();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#system_packages OpsworksCustomLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#tags OpsworksCustomLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#tags_all OpsworksCustomLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerConfig.property.useEbsOptimizedInstances"></a>

```java
public java.lang.Object getUseEbsOptimizedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#use_ebs_optimized_instances OpsworksCustomLayer#use_ebs_optimized_instances}.

---

### OpsworksCustomLayerEbsVolume <a name="OpsworksCustomLayerEbsVolume" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerEbsVolume;

OpsworksCustomLayerEbsVolume.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#mount_point OpsworksCustomLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#number_of_disks OpsworksCustomLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#size OpsworksCustomLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#encrypted OpsworksCustomLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#iops OpsworksCustomLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#raid_level OpsworksCustomLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#type OpsworksCustomLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#mount_point OpsworksCustomLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#number_of_disks OpsworksCustomLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#size OpsworksCustomLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#encrypted OpsworksCustomLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#iops OpsworksCustomLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.raidLevel"></a>

```java
public java.lang.String getRaidLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#raid_level OpsworksCustomLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#type OpsworksCustomLayer#type}.

---

### OpsworksCustomLayerLoadBasedAutoScaling <a name="OpsworksCustomLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerLoadBasedAutoScaling;

OpsworksCustomLayerLoadBasedAutoScaling.builder()
//  .downscaling(OpsworksCustomLayerLoadBasedAutoScalingDownscaling)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .upscaling(OpsworksCustomLayerLoadBasedAutoScalingUpscaling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling">OpsworksCustomLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#enable OpsworksCustomLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling">OpsworksCustomLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling.property.downscaling"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScalingDownscaling getDownscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling">OpsworksCustomLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#downscaling OpsworksCustomLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#enable OpsworksCustomLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling.property.upscaling"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScalingUpscaling getUpscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling">OpsworksCustomLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#upscaling OpsworksCustomLayer#upscaling}

---

### OpsworksCustomLayerLoadBasedAutoScalingDownscaling <a name="OpsworksCustomLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling;

OpsworksCustomLayerLoadBasedAutoScalingDownscaling.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#alarms OpsworksCustomLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#cpu_threshold OpsworksCustomLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#ignore_metrics_time OpsworksCustomLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#instance_count OpsworksCustomLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#load_threshold OpsworksCustomLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#memory_threshold OpsworksCustomLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#thresholds_wait_time OpsworksCustomLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#alarms OpsworksCustomLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#cpu_threshold OpsworksCustomLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#ignore_metrics_time OpsworksCustomLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#instance_count OpsworksCustomLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#load_threshold OpsworksCustomLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#memory_threshold OpsworksCustomLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#thresholds_wait_time OpsworksCustomLayer#thresholds_wait_time}.

---

### OpsworksCustomLayerLoadBasedAutoScalingUpscaling <a name="OpsworksCustomLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling;

OpsworksCustomLayerLoadBasedAutoScalingUpscaling.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#alarms OpsworksCustomLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#cpu_threshold OpsworksCustomLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#ignore_metrics_time OpsworksCustomLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#instance_count OpsworksCustomLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#load_threshold OpsworksCustomLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#memory_threshold OpsworksCustomLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#thresholds_wait_time OpsworksCustomLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#alarms OpsworksCustomLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#cpu_threshold OpsworksCustomLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#ignore_metrics_time OpsworksCustomLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#instance_count OpsworksCustomLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#load_threshold OpsworksCustomLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#memory_threshold OpsworksCustomLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#thresholds_wait_time OpsworksCustomLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksCustomLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksCustomLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList;

new OpsworksCustomLayerCloudwatchConfigurationLogStreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.get"></a>

```java
public OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams">OpsworksCustomLayerCloudwatchConfigurationLogStreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams">OpsworksCustomLayerCloudwatchConfigurationLogStreams</a>>

---


### OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference;

new OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```java
public void resetBatchCount()
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```java
public void resetBatchSize()
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```java
public void resetBufferDuration()
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```java
public void resetDatetimeFormat()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```java
public void resetFileFingerprintLines()
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```java
public void resetInitialPosition()
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```java
public void resetMultilineStartPattern()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams">OpsworksCustomLayerCloudwatchConfigurationLogStreams</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```java
public java.lang.Number getBatchCountInput();
```

- *Type:* java.lang.Number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```java
public java.lang.Number getBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```java
public java.lang.Number getBufferDurationInput();
```

- *Type:* java.lang.Number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```java
public java.lang.String getDatetimeFormatInput();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```java
public java.lang.String getFileFingerprintLinesInput();
```

- *Type:* java.lang.String

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```java
public java.lang.String getInitialPositionInput();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```java
public java.lang.String getMultilineStartPatternInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```java
public java.lang.Number getBufferDuration();
```

- *Type:* java.lang.Number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```java
public java.lang.String getDatetimeFormat();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```java
public java.lang.String getFileFingerprintLines();
```

- *Type:* java.lang.String

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```java
public java.lang.String getInitialPosition();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```java
public java.lang.String getMultilineStartPattern();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams">OpsworksCustomLayerCloudwatchConfigurationLogStreams</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksCustomLayerCloudwatchConfigurationOutputReference <a name="OpsworksCustomLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerCloudwatchConfigurationOutputReference;

new OpsworksCustomLayerCloudwatchConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```java
public void putLogStreams(IResolvable OR java.util.List<OpsworksCustomLayerCloudwatchConfigurationLogStreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams">OpsworksCustomLayerCloudwatchConfigurationLogStreams</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```java
public void resetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList">OpsworksCustomLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams">OpsworksCustomLayerCloudwatchConfigurationLogStreams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration">OpsworksCustomLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```java
public OpsworksCustomLayerCloudwatchConfigurationLogStreamsList getLogStreams();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreamsList">OpsworksCustomLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```java
public java.lang.Object getLogStreamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationLogStreams">OpsworksCustomLayerCloudwatchConfigurationLogStreams</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```java
public OpsworksCustomLayerCloudwatchConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerCloudwatchConfiguration">OpsworksCustomLayerCloudwatchConfiguration</a>

---


### OpsworksCustomLayerEbsVolumeList <a name="OpsworksCustomLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerEbsVolumeList;

new OpsworksCustomLayerEbsVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.get"></a>

```java
public OpsworksCustomLayerEbsVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume">OpsworksCustomLayerEbsVolume</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume">OpsworksCustomLayerEbsVolume</a>>

---


### OpsworksCustomLayerEbsVolumeOutputReference <a name="OpsworksCustomLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerEbsVolumeOutputReference;

new OpsworksCustomLayerEbsVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```java
public void resetRaidLevel()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume">OpsworksCustomLayerEbsVolume</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```java
public java.lang.String getMountPointInput();
```

- *Type:* java.lang.String

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```java
public java.lang.Number getNumberOfDisksInput();
```

- *Type:* java.lang.Number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```java
public java.lang.String getRaidLevelInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.raidLevel"></a>

```java
public java.lang.String getRaidLevel();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolumeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerEbsVolume">OpsworksCustomLayerEbsVolume</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference;

new OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```java
public void resetCpuThreshold()
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```java
public void resetIgnoreMetricsTime()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```java
public void resetLoadThreshold()
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```java
public void resetMemoryThreshold()
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```java
public void resetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling">OpsworksCustomLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```java
public java.lang.Number getCpuThresholdInput();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```java
public java.lang.Number getIgnoreMetricsTimeInput();
```

- *Type:* java.lang.Number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```java
public java.lang.Number getLoadThresholdInput();
```

- *Type:* java.lang.Number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```java
public java.lang.Number getMemoryThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```java
public java.lang.Number getThresholdsWaitTimeInput();
```

- *Type:* java.lang.Number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScalingDownscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling">OpsworksCustomLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksCustomLayerLoadBasedAutoScalingOutputReference <a name="OpsworksCustomLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference;

new OpsworksCustomLayerLoadBasedAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.putDownscaling">putDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.putUpscaling">putUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.resetDownscaling">resetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.resetUpscaling">resetUpscaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDownscaling` <a name="putDownscaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```java
public void putDownscaling(OpsworksCustomLayerLoadBasedAutoScalingDownscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling">OpsworksCustomLayerLoadBasedAutoScalingDownscaling</a>

---

##### `putUpscaling` <a name="putUpscaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```java
public void putUpscaling(OpsworksCustomLayerLoadBasedAutoScalingUpscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling">OpsworksCustomLayerLoadBasedAutoScalingUpscaling</a>

---

##### `resetDownscaling` <a name="resetDownscaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```java
public void resetDownscaling()
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetUpscaling` <a name="resetUpscaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```java
public void resetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling">OpsworksCustomLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling">OpsworksCustomLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling">OpsworksCustomLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference getDownscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference getUpscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscalingInput`<sup>Optional</sup> <a name="downscalingInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScalingDownscaling getDownscalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingDownscaling">OpsworksCustomLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `upscalingInput`<sup>Optional</sup> <a name="upscalingInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScalingUpscaling getUpscalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling">OpsworksCustomLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScaling">OpsworksCustomLayerLoadBasedAutoScaling</a>

---


### OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_custom_layer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference;

new OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```java
public void resetCpuThreshold()
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```java
public void resetIgnoreMetricsTime()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```java
public void resetLoadThreshold()
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```java
public void resetMemoryThreshold()
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```java
public void resetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling">OpsworksCustomLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```java
public java.lang.Number getCpuThresholdInput();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```java
public java.lang.Number getIgnoreMetricsTimeInput();
```

- *Type:* java.lang.Number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```java
public java.lang.Number getLoadThresholdInput();
```

- *Type:* java.lang.Number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```java
public java.lang.Number getMemoryThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```java
public java.lang.Number getThresholdsWaitTimeInput();
```

- *Type:* java.lang.Number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```java
public OpsworksCustomLayerLoadBasedAutoScalingUpscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksCustomLayer.OpsworksCustomLayerLoadBasedAutoScalingUpscaling">OpsworksCustomLayerLoadBasedAutoScalingUpscaling</a>

---



