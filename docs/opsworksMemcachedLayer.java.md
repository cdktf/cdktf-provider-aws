# `opsworksMemcachedLayer` Submodule <a name="`opsworksMemcachedLayer` Submodule" id="@cdktf/provider-aws.opsworksMemcachedLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksMemcachedLayer <a name="OpsworksMemcachedLayer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer aws_opsworks_memcached_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayer;

OpsworksMemcachedLayer.Builder.create(Construct scope, java.lang.String id)
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
//  .allocatedMemory(java.lang.Number)
//  .autoAssignElasticIps(java.lang.Boolean)
//  .autoAssignElasticIps(IResolvable)
//  .autoAssignPublicIps(java.lang.Boolean)
//  .autoAssignPublicIps(IResolvable)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .cloudwatchConfiguration(OpsworksMemcachedLayerCloudwatchConfiguration)
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
//  .ebsVolume(java.util.List<OpsworksMemcachedLayerEbsVolume>)
//  .elasticLoadBalancer(java.lang.String)
//  .id(java.lang.String)
//  .installUpdatesOnBoot(java.lang.Boolean)
//  .installUpdatesOnBoot(IResolvable)
//  .instanceShutdownTimeout(java.lang.Number)
//  .loadBasedAutoScaling(OpsworksMemcachedLayerLoadBasedAutoScaling)
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
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#stack_id OpsworksMemcachedLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.allocatedMemory">allocatedMemory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#allocated_memory OpsworksMemcachedLayer#allocated_memory}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_healing OpsworksMemcachedLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_json OpsworksMemcachedLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.ebsVolume">ebsVolume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>></code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#id OpsworksMemcachedLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#name OpsworksMemcachedLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#system_packages OpsworksMemcachedLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags OpsworksMemcachedLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags_all OpsworksMemcachedLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.stackId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#stack_id OpsworksMemcachedLayer#stack_id}.

---

##### `allocatedMemory`<sup>Optional</sup> <a name="allocatedMemory" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.allocatedMemory"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#allocated_memory OpsworksMemcachedLayer#allocated_memory}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoAssignElasticIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoAssignPublicIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoHealing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_healing OpsworksMemcachedLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.cloudwatchConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cloudwatch_configuration OpsworksMemcachedLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customConfigureRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customDeployRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customInstanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_json OpsworksMemcachedLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customSetupRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customShutdownRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customUndeployRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.drainElbOnShutdown"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.ebsVolume"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>>

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ebs_volume OpsworksMemcachedLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.elasticLoadBalancer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#id OpsworksMemcachedLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.installUpdatesOnBoot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.instanceShutdownTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.loadBasedAutoScaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_based_auto_scaling OpsworksMemcachedLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#name OpsworksMemcachedLayer#name}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.systemPackages"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#system_packages OpsworksMemcachedLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags OpsworksMemcachedLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags_all OpsworksMemcachedLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.useEbsOptimizedInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putLoadBasedAutoScaling">putLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAllocatedMemory">resetAllocatedMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetLoadBasedAutoScaling">resetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putCloudwatchConfiguration"></a>

```java
public void putCloudwatchConfiguration(OpsworksMemcachedLayerCloudwatchConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putEbsVolume"></a>

```java
public void putEbsVolume(IResolvable OR java.util.List<OpsworksMemcachedLayerEbsVolume> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putEbsVolume.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>>

---

##### `putLoadBasedAutoScaling` <a name="putLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putLoadBasedAutoScaling"></a>

```java
public void putLoadBasedAutoScaling(OpsworksMemcachedLayerLoadBasedAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a>

---

##### `resetAllocatedMemory` <a name="resetAllocatedMemory" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAllocatedMemory"></a>

```java
public void resetAllocatedMemory()
```

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignElasticIps"></a>

```java
public void resetAutoAssignElasticIps()
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignPublicIps"></a>

```java
public void resetAutoAssignPublicIps()
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoHealing"></a>

```java
public void resetAutoHealing()
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCloudwatchConfiguration"></a>

```java
public void resetCloudwatchConfiguration()
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomConfigureRecipes"></a>

```java
public void resetCustomConfigureRecipes()
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomDeployRecipes"></a>

```java
public void resetCustomDeployRecipes()
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomInstanceProfileArn"></a>

```java
public void resetCustomInstanceProfileArn()
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomJson"></a>

```java
public void resetCustomJson()
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSecurityGroupIds"></a>

```java
public void resetCustomSecurityGroupIds()
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSetupRecipes"></a>

```java
public void resetCustomSetupRecipes()
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomShutdownRecipes"></a>

```java
public void resetCustomShutdownRecipes()
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomUndeployRecipes"></a>

```java
public void resetCustomUndeployRecipes()
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetDrainElbOnShutdown"></a>

```java
public void resetDrainElbOnShutdown()
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetEbsVolume"></a>

```java
public void resetEbsVolume()
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetElasticLoadBalancer"></a>

```java
public void resetElasticLoadBalancer()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetId"></a>

```java
public void resetId()
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstallUpdatesOnBoot"></a>

```java
public void resetInstallUpdatesOnBoot()
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstanceShutdownTimeout"></a>

```java
public void resetInstanceShutdownTimeout()
```

##### `resetLoadBasedAutoScaling` <a name="resetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetLoadBasedAutoScaling"></a>

```java
public void resetLoadBasedAutoScaling()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetName"></a>

```java
public void resetName()
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetSystemPackages"></a>

```java
public void resetSystemPackages()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetUseEbsOptimizedInstances"></a>

```java
public void resetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayer;

OpsworksMemcachedLayer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayer;

OpsworksMemcachedLayer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayer;

OpsworksMemcachedLayer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference">OpsworksMemcachedLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList">OpsworksMemcachedLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemoryInput">allocatedMemoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJsonInput">customJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.loadBasedAutoScalingInput">loadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackIdInput">stackIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemory">allocatedMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJson">customJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackId">stackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfiguration"></a>

```java
public OpsworksMemcachedLayerCloudwatchConfigurationOutputReference getCloudwatchConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference">OpsworksMemcachedLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolume"></a>

```java
public OpsworksMemcachedLayerEbsVolumeList getEbsVolume();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList">OpsworksMemcachedLayerEbsVolumeList</a>

---

##### `loadBasedAutoScaling`<sup>Required</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.loadBasedAutoScaling"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference getLoadBasedAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference</a>

---

##### `allocatedMemoryInput`<sup>Optional</sup> <a name="allocatedMemoryInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemoryInput"></a>

```java
public java.lang.Number getAllocatedMemoryInput();
```

- *Type:* java.lang.Number

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIpsInput"></a>

```java
public java.lang.Object getAutoAssignElasticIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIpsInput"></a>

```java
public java.lang.Object getAutoAssignPublicIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealingInput"></a>

```java
public java.lang.Object getAutoHealingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfigurationInput"></a>

```java
public OpsworksMemcachedLayerCloudwatchConfiguration getCloudwatchConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArnInput"></a>

```java
public java.lang.String getCustomInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJsonInput"></a>

```java
public java.lang.String getCustomJsonInput();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdownInput"></a>

```java
public java.lang.Object getDrainElbOnShutdownInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolumeInput"></a>

```java
public java.lang.Object getEbsVolumeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>>

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancerInput"></a>

```java
public java.lang.String getElasticLoadBalancerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBootInput"></a>

```java
public java.lang.Object getInstallUpdatesOnBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeoutInput"></a>

```java
public java.lang.Number getInstanceShutdownTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `loadBasedAutoScalingInput`<sup>Optional</sup> <a name="loadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.loadBasedAutoScalingInput"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScaling getLoadBasedAutoScalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackIdInput"></a>

```java
public java.lang.String getStackIdInput();
```

- *Type:* java.lang.String

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackagesInput"></a>

```java
public java.util.List<java.lang.String> getSystemPackagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstancesInput"></a>

```java
public java.lang.Object getUseEbsOptimizedInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allocatedMemory`<sup>Required</sup> <a name="allocatedMemory" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemory"></a>

```java
public java.lang.Number getAllocatedMemory();
```

- *Type:* java.lang.Number

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIps"></a>

```java
public java.lang.Object getAutoAssignElasticIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIps"></a>

```java
public java.lang.Object getAutoAssignPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArn"></a>

```java
public java.lang.String getCustomInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdown"></a>

```java
public java.lang.Object getDrainElbOnShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancer"></a>

```java
public java.lang.String getElasticLoadBalancer();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBoot"></a>

```java
public java.lang.Object getInstallUpdatesOnBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeout"></a>

```java
public java.lang.Number getInstanceShutdownTimeout();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackages"></a>

```java
public java.util.List<java.lang.String> getSystemPackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstances"></a>

```java
public java.lang.Object getUseEbsOptimizedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksMemcachedLayerCloudwatchConfiguration <a name="OpsworksMemcachedLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerCloudwatchConfiguration;

OpsworksMemcachedLayerCloudwatchConfiguration.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .logStreams(IResolvable)
//  .logStreams(java.util.List<OpsworksMemcachedLayerCloudwatchConfigurationLogStreams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#enabled OpsworksMemcachedLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>></code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#enabled OpsworksMemcachedLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.logStreams"></a>

```java
public java.lang.Object getLogStreams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>>

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#log_streams OpsworksMemcachedLayer#log_streams}

---

### OpsworksMemcachedLayerCloudwatchConfigurationLogStreams <a name="OpsworksMemcachedLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams;

OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#file OpsworksMemcachedLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#log_group_name OpsworksMemcachedLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#batch_count OpsworksMemcachedLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#batch_size OpsworksMemcachedLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#buffer_duration OpsworksMemcachedLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#datetime_format OpsworksMemcachedLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#encoding OpsworksMemcachedLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#file_fingerprint_lines OpsworksMemcachedLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#initial_position OpsworksMemcachedLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#multiline_start_pattern OpsworksMemcachedLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#time_zone OpsworksMemcachedLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#file OpsworksMemcachedLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#log_group_name OpsworksMemcachedLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#batch_count OpsworksMemcachedLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#batch_size OpsworksMemcachedLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```java
public java.lang.Number getBufferDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#buffer_duration OpsworksMemcachedLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```java
public java.lang.String getDatetimeFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#datetime_format OpsworksMemcachedLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#encoding OpsworksMemcachedLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```java
public java.lang.String getFileFingerprintLines();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#file_fingerprint_lines OpsworksMemcachedLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```java
public java.lang.String getInitialPosition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#initial_position OpsworksMemcachedLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```java
public java.lang.String getMultilineStartPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#multiline_start_pattern OpsworksMemcachedLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#time_zone OpsworksMemcachedLayer#time_zone}.

---

### OpsworksMemcachedLayerConfig <a name="OpsworksMemcachedLayerConfig" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerConfig;

OpsworksMemcachedLayerConfig.builder()
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
//  .allocatedMemory(java.lang.Number)
//  .autoAssignElasticIps(java.lang.Boolean)
//  .autoAssignElasticIps(IResolvable)
//  .autoAssignPublicIps(java.lang.Boolean)
//  .autoAssignPublicIps(IResolvable)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .cloudwatchConfiguration(OpsworksMemcachedLayerCloudwatchConfiguration)
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
//  .ebsVolume(java.util.List<OpsworksMemcachedLayerEbsVolume>)
//  .elasticLoadBalancer(java.lang.String)
//  .id(java.lang.String)
//  .installUpdatesOnBoot(java.lang.Boolean)
//  .installUpdatesOnBoot(IResolvable)
//  .instanceShutdownTimeout(java.lang.Number)
//  .loadBasedAutoScaling(OpsworksMemcachedLayerLoadBasedAutoScaling)
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
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#stack_id OpsworksMemcachedLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.allocatedMemory">allocatedMemory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#allocated_memory OpsworksMemcachedLayer#allocated_memory}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_healing OpsworksMemcachedLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_json OpsworksMemcachedLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>></code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#id OpsworksMemcachedLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#name OpsworksMemcachedLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#system_packages OpsworksMemcachedLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags OpsworksMemcachedLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags_all OpsworksMemcachedLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#stack_id OpsworksMemcachedLayer#stack_id}.

---

##### `allocatedMemory`<sup>Optional</sup> <a name="allocatedMemory" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.allocatedMemory"></a>

```java
public java.lang.Number getAllocatedMemory();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#allocated_memory OpsworksMemcachedLayer#allocated_memory}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignElasticIps"></a>

```java
public java.lang.Object getAutoAssignElasticIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignPublicIps"></a>

```java
public java.lang.Object getAutoAssignPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_healing OpsworksMemcachedLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.cloudwatchConfiguration"></a>

```java
public OpsworksMemcachedLayerCloudwatchConfiguration getCloudwatchConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cloudwatch_configuration OpsworksMemcachedLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customConfigureRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customDeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customInstanceProfileArn"></a>

```java
public java.lang.String getCustomInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_json OpsworksMemcachedLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSetupRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customShutdownRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customUndeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.drainElbOnShutdown"></a>

```java
public java.lang.Object getDrainElbOnShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.ebsVolume"></a>

```java
public java.lang.Object getEbsVolume();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>>

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ebs_volume OpsworksMemcachedLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.elasticLoadBalancer"></a>

```java
public java.lang.String getElasticLoadBalancer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#id OpsworksMemcachedLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.installUpdatesOnBoot"></a>

```java
public java.lang.Object getInstallUpdatesOnBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.instanceShutdownTimeout"></a>

```java
public java.lang.Number getInstanceShutdownTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.loadBasedAutoScaling"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScaling getLoadBasedAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_based_auto_scaling OpsworksMemcachedLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#name OpsworksMemcachedLayer#name}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.systemPackages"></a>

```java
public java.util.List<java.lang.String> getSystemPackages();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#system_packages OpsworksMemcachedLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags OpsworksMemcachedLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags_all OpsworksMemcachedLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.useEbsOptimizedInstances"></a>

```java
public java.lang.Object getUseEbsOptimizedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}.

---

### OpsworksMemcachedLayerEbsVolume <a name="OpsworksMemcachedLayerEbsVolume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerEbsVolume;

OpsworksMemcachedLayerEbsVolume.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#mount_point OpsworksMemcachedLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#number_of_disks OpsworksMemcachedLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#size OpsworksMemcachedLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#encrypted OpsworksMemcachedLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#iops OpsworksMemcachedLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#raid_level OpsworksMemcachedLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#type OpsworksMemcachedLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#mount_point OpsworksMemcachedLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#number_of_disks OpsworksMemcachedLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#size OpsworksMemcachedLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#encrypted OpsworksMemcachedLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#iops OpsworksMemcachedLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.raidLevel"></a>

```java
public java.lang.String getRaidLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#raid_level OpsworksMemcachedLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#type OpsworksMemcachedLayer#type}.

---

### OpsworksMemcachedLayerLoadBasedAutoScaling <a name="OpsworksMemcachedLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerLoadBasedAutoScaling;

OpsworksMemcachedLayerLoadBasedAutoScaling.builder()
//  .downscaling(OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .upscaling(OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#enable OpsworksMemcachedLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.downscaling"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling getDownscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#downscaling OpsworksMemcachedLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#enable OpsworksMemcachedLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.upscaling"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling getUpscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#upscaling OpsworksMemcachedLayer#upscaling}

---

### OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling <a name="OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling;

OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#alarms OpsworksMemcachedLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cpu_threshold OpsworksMemcachedLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ignore_metrics_time OpsworksMemcachedLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_count OpsworksMemcachedLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_threshold OpsworksMemcachedLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#memory_threshold OpsworksMemcachedLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#thresholds_wait_time OpsworksMemcachedLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#alarms OpsworksMemcachedLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cpu_threshold OpsworksMemcachedLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ignore_metrics_time OpsworksMemcachedLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_count OpsworksMemcachedLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_threshold OpsworksMemcachedLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#memory_threshold OpsworksMemcachedLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#thresholds_wait_time OpsworksMemcachedLayer#thresholds_wait_time}.

---

### OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling <a name="OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling;

OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#alarms OpsworksMemcachedLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cpu_threshold OpsworksMemcachedLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ignore_metrics_time OpsworksMemcachedLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_count OpsworksMemcachedLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_threshold OpsworksMemcachedLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#memory_threshold OpsworksMemcachedLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#thresholds_wait_time OpsworksMemcachedLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#alarms OpsworksMemcachedLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cpu_threshold OpsworksMemcachedLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ignore_metrics_time OpsworksMemcachedLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_count OpsworksMemcachedLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_threshold OpsworksMemcachedLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#memory_threshold OpsworksMemcachedLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#thresholds_wait_time OpsworksMemcachedLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList;

new OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.get"></a>

```java
public OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>>

---


### OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference;

new OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```java
public void resetBatchCount()
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```java
public void resetBatchSize()
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```java
public void resetBufferDuration()
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```java
public void resetDatetimeFormat()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```java
public void resetFileFingerprintLines()
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```java
public void resetInitialPosition()
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```java
public void resetMultilineStartPattern()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```java
public java.lang.Number getBatchCountInput();
```

- *Type:* java.lang.Number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```java
public java.lang.Number getBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```java
public java.lang.Number getBufferDurationInput();
```

- *Type:* java.lang.Number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```java
public java.lang.String getDatetimeFormatInput();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```java
public java.lang.String getFileFingerprintLinesInput();
```

- *Type:* java.lang.String

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```java
public java.lang.String getInitialPositionInput();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```java
public java.lang.String getMultilineStartPatternInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```java
public java.lang.Number getBufferDuration();
```

- *Type:* java.lang.Number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```java
public java.lang.String getDatetimeFormat();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```java
public java.lang.String getFileFingerprintLines();
```

- *Type:* java.lang.String

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```java
public java.lang.String getInitialPosition();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```java
public java.lang.String getMultilineStartPattern();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksMemcachedLayerCloudwatchConfigurationOutputReference <a name="OpsworksMemcachedLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference;

new OpsworksMemcachedLayerCloudwatchConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```java
public void putLogStreams(IResolvable OR java.util.List<OpsworksMemcachedLayerCloudwatchConfigurationLogStreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```java
public void resetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList">OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```java
public OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList getLogStreams();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList">OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```java
public java.lang.Object getLogStreamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```java
public OpsworksMemcachedLayerCloudwatchConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

---


### OpsworksMemcachedLayerEbsVolumeList <a name="OpsworksMemcachedLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerEbsVolumeList;

new OpsworksMemcachedLayerEbsVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.get"></a>

```java
public OpsworksMemcachedLayerEbsVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>>

---


### OpsworksMemcachedLayerEbsVolumeOutputReference <a name="OpsworksMemcachedLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerEbsVolumeOutputReference;

new OpsworksMemcachedLayerEbsVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```java
public void resetRaidLevel()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```java
public java.lang.String getMountPointInput();
```

- *Type:* java.lang.String

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```java
public java.lang.Number getNumberOfDisksInput();
```

- *Type:* java.lang.Number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```java
public java.lang.String getRaidLevelInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevel"></a>

```java
public java.lang.String getRaidLevel();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference;

new OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```java
public void resetCpuThreshold()
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```java
public void resetIgnoreMetricsTime()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```java
public void resetLoadThreshold()
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```java
public void resetMemoryThreshold()
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```java
public void resetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```java
public java.lang.Number getCpuThresholdInput();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```java
public java.lang.Number getIgnoreMetricsTimeInput();
```

- *Type:* java.lang.Number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```java
public java.lang.Number getLoadThresholdInput();
```

- *Type:* java.lang.Number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```java
public java.lang.Number getMemoryThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```java
public java.lang.Number getThresholdsWaitTimeInput();
```

- *Type:* java.lang.Number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference <a name="OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference;

new OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling">putDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling">putUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetDownscaling">resetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetUpscaling">resetUpscaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDownscaling` <a name="putDownscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```java
public void putDownscaling(OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a>

---

##### `putUpscaling` <a name="putUpscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```java
public void putUpscaling(OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a>

---

##### `resetDownscaling` <a name="resetDownscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```java
public void resetDownscaling()
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetUpscaling` <a name="resetUpscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```java
public void resetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference getDownscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference getUpscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscalingInput`<sup>Optional</sup> <a name="downscalingInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling getDownscalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `upscalingInput`<sup>Optional</sup> <a name="upscalingInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling getUpscalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a>

---


### OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_memcached_layer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference;

new OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```java
public void resetCpuThreshold()
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```java
public void resetIgnoreMetricsTime()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```java
public void resetLoadThreshold()
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```java
public void resetMemoryThreshold()
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```java
public void resetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```java
public java.lang.Number getCpuThresholdInput();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```java
public java.lang.Number getIgnoreMetricsTimeInput();
```

- *Type:* java.lang.Number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```java
public java.lang.Number getLoadThresholdInput();
```

- *Type:* java.lang.Number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```java
public java.lang.Number getMemoryThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```java
public java.lang.Number getThresholdsWaitTimeInput();
```

- *Type:* java.lang.Number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```java
public OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a>

---



