# `opsworksHaproxyLayer` Submodule <a name="`opsworksHaproxyLayer` Submodule" id="@cdktf/provider-aws.opsworksHaproxyLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksHaproxyLayer <a name="OpsworksHaproxyLayer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer aws_opsworks_haproxy_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayer;

OpsworksHaproxyLayer.Builder.create(Construct scope, java.lang.String id)
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
    .stackId(java.lang.String)
    .statsPassword(java.lang.String)
//  .autoAssignElasticIps(java.lang.Boolean)
//  .autoAssignElasticIps(IResolvable)
//  .autoAssignPublicIps(java.lang.Boolean)
//  .autoAssignPublicIps(IResolvable)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .cloudwatchConfiguration(OpsworksHaproxyLayerCloudwatchConfiguration)
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
//  .ebsVolume(java.util.List<OpsworksHaproxyLayerEbsVolume>)
//  .elasticLoadBalancer(java.lang.String)
//  .healthcheckMethod(java.lang.String)
//  .healthcheckUrl(java.lang.String)
//  .id(java.lang.String)
//  .installUpdatesOnBoot(java.lang.Boolean)
//  .installUpdatesOnBoot(IResolvable)
//  .instanceShutdownTimeout(java.lang.Number)
//  .loadBasedAutoScaling(OpsworksHaproxyLayerLoadBasedAutoScaling)
//  .name(java.lang.String)
//  .statsEnabled(java.lang.Boolean)
//  .statsEnabled(IResolvable)
//  .statsUrl(java.lang.String)
//  .statsUser(java.lang.String)
//  .systemPackages(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .useEbsOptimizedInstances(java.lang.Boolean)
//  .useEbsOptimizedInstances(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stack_id OpsworksHaproxyLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.statsPassword">statsPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_password OpsworksHaproxyLayer#stats_password}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_elastic_ips OpsworksHaproxyLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_public_ips OpsworksHaproxyLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_healing OpsworksHaproxyLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_configure_recipes OpsworksHaproxyLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_deploy_recipes OpsworksHaproxyLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_instance_profile_arn OpsworksHaproxyLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_json OpsworksHaproxyLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_security_group_ids OpsworksHaproxyLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_setup_recipes OpsworksHaproxyLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_shutdown_recipes OpsworksHaproxyLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_undeploy_recipes OpsworksHaproxyLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#drain_elb_on_shutdown OpsworksHaproxyLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.ebsVolume">ebsVolume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>></code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#elastic_load_balancer OpsworksHaproxyLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.healthcheckMethod">healthcheckMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_method OpsworksHaproxyLayer#healthcheck_method}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.healthcheckUrl">healthcheckUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_url OpsworksHaproxyLayer#healthcheck_url}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#id OpsworksHaproxyLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#install_updates_on_boot OpsworksHaproxyLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_shutdown_timeout OpsworksHaproxyLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#name OpsworksHaproxyLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.statsEnabled">statsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_enabled OpsworksHaproxyLayer#stats_enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.statsUrl">statsUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_url OpsworksHaproxyLayer#stats_url}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.statsUser">statsUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_user OpsworksHaproxyLayer#stats_user}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#system_packages OpsworksHaproxyLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags OpsworksHaproxyLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags_all OpsworksHaproxyLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#use_ebs_optimized_instances OpsworksHaproxyLayer#use_ebs_optimized_instances}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.stackId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stack_id OpsworksHaproxyLayer#stack_id}.

---

##### `statsPassword`<sup>Required</sup> <a name="statsPassword" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.statsPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_password OpsworksHaproxyLayer#stats_password}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.autoAssignElasticIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_elastic_ips OpsworksHaproxyLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.autoAssignPublicIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_public_ips OpsworksHaproxyLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.autoHealing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_healing OpsworksHaproxyLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.cloudwatchConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cloudwatch_configuration OpsworksHaproxyLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customConfigureRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_configure_recipes OpsworksHaproxyLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customDeployRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_deploy_recipes OpsworksHaproxyLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customInstanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_instance_profile_arn OpsworksHaproxyLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_json OpsworksHaproxyLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_security_group_ids OpsworksHaproxyLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customSetupRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_setup_recipes OpsworksHaproxyLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customShutdownRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_shutdown_recipes OpsworksHaproxyLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.customUndeployRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_undeploy_recipes OpsworksHaproxyLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.drainElbOnShutdown"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#drain_elb_on_shutdown OpsworksHaproxyLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.ebsVolume"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>>

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ebs_volume OpsworksHaproxyLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.elasticLoadBalancer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#elastic_load_balancer OpsworksHaproxyLayer#elastic_load_balancer}.

---

##### `healthcheckMethod`<sup>Optional</sup> <a name="healthcheckMethod" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.healthcheckMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_method OpsworksHaproxyLayer#healthcheck_method}.

---

##### `healthcheckUrl`<sup>Optional</sup> <a name="healthcheckUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.healthcheckUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_url OpsworksHaproxyLayer#healthcheck_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#id OpsworksHaproxyLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.installUpdatesOnBoot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#install_updates_on_boot OpsworksHaproxyLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.instanceShutdownTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_shutdown_timeout OpsworksHaproxyLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.loadBasedAutoScaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_based_auto_scaling OpsworksHaproxyLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#name OpsworksHaproxyLayer#name}.

---

##### `statsEnabled`<sup>Optional</sup> <a name="statsEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.statsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_enabled OpsworksHaproxyLayer#stats_enabled}.

---

##### `statsUrl`<sup>Optional</sup> <a name="statsUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.statsUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_url OpsworksHaproxyLayer#stats_url}.

---

##### `statsUser`<sup>Optional</sup> <a name="statsUser" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.statsUser"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_user OpsworksHaproxyLayer#stats_user}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.systemPackages"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#system_packages OpsworksHaproxyLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags OpsworksHaproxyLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags_all OpsworksHaproxyLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.Initializer.parameter.useEbsOptimizedInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#use_ebs_optimized_instances OpsworksHaproxyLayer#use_ebs_optimized_instances}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putLoadBasedAutoScaling">putLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckMethod">resetHealthcheckMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckUrl">resetHealthcheckUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetLoadBasedAutoScaling">resetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsEnabled">resetStatsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUrl">resetStatsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUser">resetStatsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putCloudwatchConfiguration"></a>

```java
public void putCloudwatchConfiguration(OpsworksHaproxyLayerCloudwatchConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putEbsVolume"></a>

```java
public void putEbsVolume(IResolvable OR java.util.List<OpsworksHaproxyLayerEbsVolume> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putEbsVolume.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>>

---

##### `putLoadBasedAutoScaling` <a name="putLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putLoadBasedAutoScaling"></a>

```java
public void putLoadBasedAutoScaling(OpsworksHaproxyLayerLoadBasedAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

---

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignElasticIps"></a>

```java
public void resetAutoAssignElasticIps()
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoAssignPublicIps"></a>

```java
public void resetAutoAssignPublicIps()
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetAutoHealing"></a>

```java
public void resetAutoHealing()
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCloudwatchConfiguration"></a>

```java
public void resetCloudwatchConfiguration()
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomConfigureRecipes"></a>

```java
public void resetCustomConfigureRecipes()
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomDeployRecipes"></a>

```java
public void resetCustomDeployRecipes()
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomInstanceProfileArn"></a>

```java
public void resetCustomInstanceProfileArn()
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomJson"></a>

```java
public void resetCustomJson()
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSecurityGroupIds"></a>

```java
public void resetCustomSecurityGroupIds()
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomSetupRecipes"></a>

```java
public void resetCustomSetupRecipes()
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomShutdownRecipes"></a>

```java
public void resetCustomShutdownRecipes()
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetCustomUndeployRecipes"></a>

```java
public void resetCustomUndeployRecipes()
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetDrainElbOnShutdown"></a>

```java
public void resetDrainElbOnShutdown()
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetEbsVolume"></a>

```java
public void resetEbsVolume()
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetElasticLoadBalancer"></a>

```java
public void resetElasticLoadBalancer()
```

##### `resetHealthcheckMethod` <a name="resetHealthcheckMethod" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckMethod"></a>

```java
public void resetHealthcheckMethod()
```

##### `resetHealthcheckUrl` <a name="resetHealthcheckUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetHealthcheckUrl"></a>

```java
public void resetHealthcheckUrl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetId"></a>

```java
public void resetId()
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstallUpdatesOnBoot"></a>

```java
public void resetInstallUpdatesOnBoot()
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetInstanceShutdownTimeout"></a>

```java
public void resetInstanceShutdownTimeout()
```

##### `resetLoadBasedAutoScaling` <a name="resetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetLoadBasedAutoScaling"></a>

```java
public void resetLoadBasedAutoScaling()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetName"></a>

```java
public void resetName()
```

##### `resetStatsEnabled` <a name="resetStatsEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsEnabled"></a>

```java
public void resetStatsEnabled()
```

##### `resetStatsUrl` <a name="resetStatsUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUrl"></a>

```java
public void resetStatsUrl()
```

##### `resetStatsUser` <a name="resetStatsUser" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetStatsUser"></a>

```java
public void resetStatsUser()
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetSystemPackages"></a>

```java
public void resetSystemPackages()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.resetUseEbsOptimizedInstances"></a>

```java
public void resetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayer;

OpsworksHaproxyLayer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayer;

OpsworksHaproxyLayer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayer;

OpsworksHaproxyLayer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference">OpsworksHaproxyLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList">OpsworksHaproxyLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJsonInput">customJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethodInput">healthcheckMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrlInput">healthcheckUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScalingInput">loadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackIdInput">stackIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabledInput">statsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPasswordInput">statsPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrlInput">statsUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUserInput">statsUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJson">customJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethod">healthcheckMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrl">healthcheckUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackId">stackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabled">statsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPassword">statsPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrl">statsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUser">statsUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfiguration"></a>

```java
public OpsworksHaproxyLayerCloudwatchConfigurationOutputReference getCloudwatchConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference">OpsworksHaproxyLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolume"></a>

```java
public OpsworksHaproxyLayerEbsVolumeList getEbsVolume();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList">OpsworksHaproxyLayerEbsVolumeList</a>

---

##### `loadBasedAutoScaling`<sup>Required</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScaling"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference getLoadBasedAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference</a>

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIpsInput"></a>

```java
public java.lang.Object getAutoAssignElasticIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIpsInput"></a>

```java
public java.lang.Object getAutoAssignPublicIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealingInput"></a>

```java
public java.lang.Object getAutoHealingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.cloudwatchConfigurationInput"></a>

```java
public OpsworksHaproxyLayerCloudwatchConfiguration getCloudwatchConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArnInput"></a>

```java
public java.lang.String getCustomInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJsonInput"></a>

```java
public java.lang.String getCustomJsonInput();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdownInput"></a>

```java
public java.lang.Object getDrainElbOnShutdownInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.ebsVolumeInput"></a>

```java
public java.lang.Object getEbsVolumeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>>

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancerInput"></a>

```java
public java.lang.String getElasticLoadBalancerInput();
```

- *Type:* java.lang.String

---

##### `healthcheckMethodInput`<sup>Optional</sup> <a name="healthcheckMethodInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethodInput"></a>

```java
public java.lang.String getHealthcheckMethodInput();
```

- *Type:* java.lang.String

---

##### `healthcheckUrlInput`<sup>Optional</sup> <a name="healthcheckUrlInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrlInput"></a>

```java
public java.lang.String getHealthcheckUrlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBootInput"></a>

```java
public java.lang.Object getInstallUpdatesOnBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeoutInput"></a>

```java
public java.lang.Number getInstanceShutdownTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `loadBasedAutoScalingInput`<sup>Optional</sup> <a name="loadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.loadBasedAutoScalingInput"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScaling getLoadBasedAutoScalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackIdInput"></a>

```java
public java.lang.String getStackIdInput();
```

- *Type:* java.lang.String

---

##### `statsEnabledInput`<sup>Optional</sup> <a name="statsEnabledInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabledInput"></a>

```java
public java.lang.Object getStatsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statsPasswordInput`<sup>Optional</sup> <a name="statsPasswordInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPasswordInput"></a>

```java
public java.lang.String getStatsPasswordInput();
```

- *Type:* java.lang.String

---

##### `statsUrlInput`<sup>Optional</sup> <a name="statsUrlInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrlInput"></a>

```java
public java.lang.String getStatsUrlInput();
```

- *Type:* java.lang.String

---

##### `statsUserInput`<sup>Optional</sup> <a name="statsUserInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUserInput"></a>

```java
public java.lang.String getStatsUserInput();
```

- *Type:* java.lang.String

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackagesInput"></a>

```java
public java.util.List<java.lang.String> getSystemPackagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstancesInput"></a>

```java
public java.lang.Object getUseEbsOptimizedInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignElasticIps"></a>

```java
public java.lang.Object getAutoAssignElasticIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoAssignPublicIps"></a>

```java
public java.lang.Object getAutoAssignPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customConfigureRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customDeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customInstanceProfileArn"></a>

```java
public java.lang.String getCustomInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customSetupRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customShutdownRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.customUndeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.drainElbOnShutdown"></a>

```java
public java.lang.Object getDrainElbOnShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.elasticLoadBalancer"></a>

```java
public java.lang.String getElasticLoadBalancer();
```

- *Type:* java.lang.String

---

##### `healthcheckMethod`<sup>Required</sup> <a name="healthcheckMethod" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckMethod"></a>

```java
public java.lang.String getHealthcheckMethod();
```

- *Type:* java.lang.String

---

##### `healthcheckUrl`<sup>Required</sup> <a name="healthcheckUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.healthcheckUrl"></a>

```java
public java.lang.String getHealthcheckUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.installUpdatesOnBoot"></a>

```java
public java.lang.Object getInstallUpdatesOnBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.instanceShutdownTimeout"></a>

```java
public java.lang.Number getInstanceShutdownTimeout();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

---

##### `statsEnabled`<sup>Required</sup> <a name="statsEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsEnabled"></a>

```java
public java.lang.Object getStatsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statsPassword`<sup>Required</sup> <a name="statsPassword" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsPassword"></a>

```java
public java.lang.String getStatsPassword();
```

- *Type:* java.lang.String

---

##### `statsUrl`<sup>Required</sup> <a name="statsUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUrl"></a>

```java
public java.lang.String getStatsUrl();
```

- *Type:* java.lang.String

---

##### `statsUser`<sup>Required</sup> <a name="statsUser" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.statsUser"></a>

```java
public java.lang.String getStatsUser();
```

- *Type:* java.lang.String

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.systemPackages"></a>

```java
public java.util.List<java.lang.String> getSystemPackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.useEbsOptimizedInstances"></a>

```java
public java.lang.Object getUseEbsOptimizedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksHaproxyLayerCloudwatchConfiguration <a name="OpsworksHaproxyLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerCloudwatchConfiguration;

OpsworksHaproxyLayerCloudwatchConfiguration.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .logStreams(IResolvable)
//  .logStreams(java.util.List<OpsworksHaproxyLayerCloudwatchConfigurationLogStreams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enabled OpsworksHaproxyLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>></code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enabled OpsworksHaproxyLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration.property.logStreams"></a>

```java
public java.lang.Object getLogStreams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>>

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#log_streams OpsworksHaproxyLayer#log_streams}

---

### OpsworksHaproxyLayerCloudwatchConfigurationLogStreams <a name="OpsworksHaproxyLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams;

OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file OpsworksHaproxyLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#log_group_name OpsworksHaproxyLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_count OpsworksHaproxyLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_size OpsworksHaproxyLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#buffer_duration OpsworksHaproxyLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#datetime_format OpsworksHaproxyLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encoding OpsworksHaproxyLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file_fingerprint_lines OpsworksHaproxyLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#initial_position OpsworksHaproxyLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#multiline_start_pattern OpsworksHaproxyLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#time_zone OpsworksHaproxyLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file OpsworksHaproxyLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#log_group_name OpsworksHaproxyLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_count OpsworksHaproxyLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#batch_size OpsworksHaproxyLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```java
public java.lang.Number getBufferDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#buffer_duration OpsworksHaproxyLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```java
public java.lang.String getDatetimeFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#datetime_format OpsworksHaproxyLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encoding OpsworksHaproxyLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```java
public java.lang.String getFileFingerprintLines();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#file_fingerprint_lines OpsworksHaproxyLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```java
public java.lang.String getInitialPosition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#initial_position OpsworksHaproxyLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```java
public java.lang.String getMultilineStartPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#multiline_start_pattern OpsworksHaproxyLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#time_zone OpsworksHaproxyLayer#time_zone}.

---

### OpsworksHaproxyLayerConfig <a name="OpsworksHaproxyLayerConfig" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerConfig;

OpsworksHaproxyLayerConfig.builder()
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
    .stackId(java.lang.String)
    .statsPassword(java.lang.String)
//  .autoAssignElasticIps(java.lang.Boolean)
//  .autoAssignElasticIps(IResolvable)
//  .autoAssignPublicIps(java.lang.Boolean)
//  .autoAssignPublicIps(IResolvable)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .cloudwatchConfiguration(OpsworksHaproxyLayerCloudwatchConfiguration)
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
//  .ebsVolume(java.util.List<OpsworksHaproxyLayerEbsVolume>)
//  .elasticLoadBalancer(java.lang.String)
//  .healthcheckMethod(java.lang.String)
//  .healthcheckUrl(java.lang.String)
//  .id(java.lang.String)
//  .installUpdatesOnBoot(java.lang.Boolean)
//  .installUpdatesOnBoot(IResolvable)
//  .instanceShutdownTimeout(java.lang.Number)
//  .loadBasedAutoScaling(OpsworksHaproxyLayerLoadBasedAutoScaling)
//  .name(java.lang.String)
//  .statsEnabled(java.lang.Boolean)
//  .statsEnabled(IResolvable)
//  .statsUrl(java.lang.String)
//  .statsUser(java.lang.String)
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
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stack_id OpsworksHaproxyLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsPassword">statsPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_password OpsworksHaproxyLayer#stats_password}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_elastic_ips OpsworksHaproxyLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_public_ips OpsworksHaproxyLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_healing OpsworksHaproxyLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_configure_recipes OpsworksHaproxyLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_deploy_recipes OpsworksHaproxyLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_instance_profile_arn OpsworksHaproxyLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_json OpsworksHaproxyLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_security_group_ids OpsworksHaproxyLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_setup_recipes OpsworksHaproxyLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_shutdown_recipes OpsworksHaproxyLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_undeploy_recipes OpsworksHaproxyLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#drain_elb_on_shutdown OpsworksHaproxyLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>></code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#elastic_load_balancer OpsworksHaproxyLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckMethod">healthcheckMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_method OpsworksHaproxyLayer#healthcheck_method}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckUrl">healthcheckUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_url OpsworksHaproxyLayer#healthcheck_url}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#id OpsworksHaproxyLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#install_updates_on_boot OpsworksHaproxyLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_shutdown_timeout OpsworksHaproxyLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#name OpsworksHaproxyLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsEnabled">statsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_enabled OpsworksHaproxyLayer#stats_enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUrl">statsUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_url OpsworksHaproxyLayer#stats_url}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUser">statsUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_user OpsworksHaproxyLayer#stats_user}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#system_packages OpsworksHaproxyLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags OpsworksHaproxyLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags_all OpsworksHaproxyLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#use_ebs_optimized_instances OpsworksHaproxyLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stack_id OpsworksHaproxyLayer#stack_id}.

---

##### `statsPassword`<sup>Required</sup> <a name="statsPassword" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsPassword"></a>

```java
public java.lang.String getStatsPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_password OpsworksHaproxyLayer#stats_password}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignElasticIps"></a>

```java
public java.lang.Object getAutoAssignElasticIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_elastic_ips OpsworksHaproxyLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoAssignPublicIps"></a>

```java
public java.lang.Object getAutoAssignPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_assign_public_ips OpsworksHaproxyLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#auto_healing OpsworksHaproxyLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.cloudwatchConfiguration"></a>

```java
public OpsworksHaproxyLayerCloudwatchConfiguration getCloudwatchConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cloudwatch_configuration OpsworksHaproxyLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customConfigureRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_configure_recipes OpsworksHaproxyLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customDeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_deploy_recipes OpsworksHaproxyLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customInstanceProfileArn"></a>

```java
public java.lang.String getCustomInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_instance_profile_arn OpsworksHaproxyLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_json OpsworksHaproxyLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_security_group_ids OpsworksHaproxyLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customSetupRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_setup_recipes OpsworksHaproxyLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customShutdownRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_shutdown_recipes OpsworksHaproxyLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.customUndeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#custom_undeploy_recipes OpsworksHaproxyLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.drainElbOnShutdown"></a>

```java
public java.lang.Object getDrainElbOnShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#drain_elb_on_shutdown OpsworksHaproxyLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.ebsVolume"></a>

```java
public java.lang.Object getEbsVolume();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>>

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ebs_volume OpsworksHaproxyLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.elasticLoadBalancer"></a>

```java
public java.lang.String getElasticLoadBalancer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#elastic_load_balancer OpsworksHaproxyLayer#elastic_load_balancer}.

---

##### `healthcheckMethod`<sup>Optional</sup> <a name="healthcheckMethod" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckMethod"></a>

```java
public java.lang.String getHealthcheckMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_method OpsworksHaproxyLayer#healthcheck_method}.

---

##### `healthcheckUrl`<sup>Optional</sup> <a name="healthcheckUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.healthcheckUrl"></a>

```java
public java.lang.String getHealthcheckUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#healthcheck_url OpsworksHaproxyLayer#healthcheck_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#id OpsworksHaproxyLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.installUpdatesOnBoot"></a>

```java
public java.lang.Object getInstallUpdatesOnBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#install_updates_on_boot OpsworksHaproxyLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.instanceShutdownTimeout"></a>

```java
public java.lang.Number getInstanceShutdownTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_shutdown_timeout OpsworksHaproxyLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.loadBasedAutoScaling"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScaling getLoadBasedAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_based_auto_scaling OpsworksHaproxyLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#name OpsworksHaproxyLayer#name}.

---

##### `statsEnabled`<sup>Optional</sup> <a name="statsEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsEnabled"></a>

```java
public java.lang.Object getStatsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_enabled OpsworksHaproxyLayer#stats_enabled}.

---

##### `statsUrl`<sup>Optional</sup> <a name="statsUrl" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUrl"></a>

```java
public java.lang.String getStatsUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_url OpsworksHaproxyLayer#stats_url}.

---

##### `statsUser`<sup>Optional</sup> <a name="statsUser" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.statsUser"></a>

```java
public java.lang.String getStatsUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#stats_user OpsworksHaproxyLayer#stats_user}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.systemPackages"></a>

```java
public java.util.List<java.lang.String> getSystemPackages();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#system_packages OpsworksHaproxyLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags OpsworksHaproxyLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#tags_all OpsworksHaproxyLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerConfig.property.useEbsOptimizedInstances"></a>

```java
public java.lang.Object getUseEbsOptimizedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#use_ebs_optimized_instances OpsworksHaproxyLayer#use_ebs_optimized_instances}.

---

### OpsworksHaproxyLayerEbsVolume <a name="OpsworksHaproxyLayerEbsVolume" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerEbsVolume;

OpsworksHaproxyLayerEbsVolume.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#mount_point OpsworksHaproxyLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#number_of_disks OpsworksHaproxyLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#size OpsworksHaproxyLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encrypted OpsworksHaproxyLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#iops OpsworksHaproxyLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#raid_level OpsworksHaproxyLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#type OpsworksHaproxyLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#mount_point OpsworksHaproxyLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#number_of_disks OpsworksHaproxyLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#size OpsworksHaproxyLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#encrypted OpsworksHaproxyLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#iops OpsworksHaproxyLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.raidLevel"></a>

```java
public java.lang.String getRaidLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#raid_level OpsworksHaproxyLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#type OpsworksHaproxyLayer#type}.

---

### OpsworksHaproxyLayerLoadBasedAutoScaling <a name="OpsworksHaproxyLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerLoadBasedAutoScaling;

OpsworksHaproxyLayerLoadBasedAutoScaling.builder()
//  .downscaling(OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .upscaling(OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enable OpsworksHaproxyLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.downscaling"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling getDownscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#downscaling OpsworksHaproxyLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#enable OpsworksHaproxyLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling.property.upscaling"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling getUpscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#upscaling OpsworksHaproxyLayer#upscaling}

---

### OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling <a name="OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling;

OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}.

---

### OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling <a name="OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling;

OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList;

new OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.get"></a>

```java
public OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>>

---


### OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference;

new OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```java
public void resetBatchCount()
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```java
public void resetBatchSize()
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```java
public void resetBufferDuration()
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```java
public void resetDatetimeFormat()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```java
public void resetFileFingerprintLines()
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```java
public void resetInitialPosition()
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```java
public void resetMultilineStartPattern()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```java
public java.lang.Number getBatchCountInput();
```

- *Type:* java.lang.Number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```java
public java.lang.Number getBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```java
public java.lang.Number getBufferDurationInput();
```

- *Type:* java.lang.Number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```java
public java.lang.String getDatetimeFormatInput();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```java
public java.lang.String getFileFingerprintLinesInput();
```

- *Type:* java.lang.String

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```java
public java.lang.String getInitialPositionInput();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```java
public java.lang.String getMultilineStartPatternInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```java
public java.lang.Number getBufferDuration();
```

- *Type:* java.lang.Number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```java
public java.lang.String getDatetimeFormat();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```java
public java.lang.String getFileFingerprintLines();
```

- *Type:* java.lang.String

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```java
public java.lang.String getInitialPosition();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```java
public java.lang.String getMultilineStartPattern();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksHaproxyLayerCloudwatchConfigurationOutputReference <a name="OpsworksHaproxyLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference;

new OpsworksHaproxyLayerCloudwatchConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```java
public void putLogStreams(IResolvable OR java.util.List<OpsworksHaproxyLayerCloudwatchConfigurationLogStreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```java
public void resetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList">OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```java
public OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList getLogStreams();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList">OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```java
public java.lang.Object getLogStreamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationLogStreams">OpsworksHaproxyLayerCloudwatchConfigurationLogStreams</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```java
public OpsworksHaproxyLayerCloudwatchConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerCloudwatchConfiguration">OpsworksHaproxyLayerCloudwatchConfiguration</a>

---


### OpsworksHaproxyLayerEbsVolumeList <a name="OpsworksHaproxyLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerEbsVolumeList;

new OpsworksHaproxyLayerEbsVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.get"></a>

```java
public OpsworksHaproxyLayerEbsVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a>>

---


### OpsworksHaproxyLayerEbsVolumeOutputReference <a name="OpsworksHaproxyLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerEbsVolumeOutputReference;

new OpsworksHaproxyLayerEbsVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```java
public void resetRaidLevel()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```java
public java.lang.String getMountPointInput();
```

- *Type:* java.lang.String

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```java
public java.lang.Number getNumberOfDisksInput();
```

- *Type:* java.lang.Number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```java
public java.lang.String getRaidLevelInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.raidLevel"></a>

```java
public java.lang.String getRaidLevel();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolumeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerEbsVolume">OpsworksHaproxyLayerEbsVolume</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference;

new OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```java
public void resetCpuThreshold()
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```java
public void resetIgnoreMetricsTime()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```java
public void resetLoadThreshold()
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```java
public void resetMemoryThreshold()
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```java
public void resetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```java
public java.lang.Number getCpuThresholdInput();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```java
public java.lang.Number getIgnoreMetricsTimeInput();
```

- *Type:* java.lang.Number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```java
public java.lang.Number getLoadThresholdInput();
```

- *Type:* java.lang.Number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```java
public java.lang.Number getMemoryThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```java
public java.lang.Number getThresholdsWaitTimeInput();
```

- *Type:* java.lang.Number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference <a name="OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference;

new OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putDownscaling">putDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putUpscaling">putUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetDownscaling">resetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetUpscaling">resetUpscaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDownscaling` <a name="putDownscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```java
public void putDownscaling(OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

---

##### `putUpscaling` <a name="putUpscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```java
public void putUpscaling(OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

---

##### `resetDownscaling` <a name="resetDownscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```java
public void resetDownscaling()
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetUpscaling` <a name="resetUpscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```java
public void resetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference getDownscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference getUpscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscalingInput`<sup>Optional</sup> <a name="downscalingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling getDownscalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling">OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `upscalingInput`<sup>Optional</sup> <a name="upscalingInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling getUpscalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScaling">OpsworksHaproxyLayerLoadBasedAutoScaling</a>

---


### OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_haproxy_layer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference;

new OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```java
public void resetCpuThreshold()
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```java
public void resetIgnoreMetricsTime()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```java
public void resetLoadThreshold()
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```java
public void resetMemoryThreshold()
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```java
public void resetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```java
public java.lang.Number getCpuThresholdInput();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```java
public java.lang.Number getIgnoreMetricsTimeInput();
```

- *Type:* java.lang.Number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```java
public java.lang.Number getLoadThresholdInput();
```

- *Type:* java.lang.Number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```java
public java.lang.Number getMemoryThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```java
public java.lang.Number getThresholdsWaitTimeInput();
```

- *Type:* java.lang.Number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```java
public OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksHaproxyLayer.OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling">OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling</a>

---



