# `opsworksRailsAppLayer` Submodule <a name="`opsworksRailsAppLayer` Submodule" id="@cdktf/provider-aws.opsworksRailsAppLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksRailsAppLayer <a name="OpsworksRailsAppLayer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer aws_opsworks_rails_app_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayer;

OpsworksRailsAppLayer.Builder.create(Construct scope, java.lang.String id)
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
//  .appServer(java.lang.String)
//  .autoAssignElasticIps(java.lang.Boolean)
//  .autoAssignElasticIps(IResolvable)
//  .autoAssignPublicIps(java.lang.Boolean)
//  .autoAssignPublicIps(IResolvable)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .bundlerVersion(java.lang.String)
//  .cloudwatchConfiguration(OpsworksRailsAppLayerCloudwatchConfiguration)
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
//  .ebsVolume(java.util.List<OpsworksRailsAppLayerEbsVolume>)
//  .elasticLoadBalancer(java.lang.String)
//  .id(java.lang.String)
//  .installUpdatesOnBoot(java.lang.Boolean)
//  .installUpdatesOnBoot(IResolvable)
//  .instanceShutdownTimeout(java.lang.Number)
//  .loadBasedAutoScaling(OpsworksRailsAppLayerLoadBasedAutoScaling)
//  .manageBundler(java.lang.Boolean)
//  .manageBundler(IResolvable)
//  .name(java.lang.String)
//  .passengerVersion(java.lang.String)
//  .rubygemsVersion(java.lang.String)
//  .rubyVersion(java.lang.String)
//  .systemPackages(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .useEbsOptimizedInstances(java.lang.Boolean)
//  .useEbsOptimizedInstances(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#stack_id OpsworksRailsAppLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.appServer">appServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#app_server OpsworksRailsAppLayer#app_server}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_healing OpsworksRailsAppLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.bundlerVersion">bundlerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#bundler_version OpsworksRailsAppLayer#bundler_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_json OpsworksRailsAppLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.ebsVolume">ebsVolume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>></code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#id OpsworksRailsAppLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.manageBundler">manageBundler</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#manage_bundler OpsworksRailsAppLayer#manage_bundler}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#name OpsworksRailsAppLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.passengerVersion">passengerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#passenger_version OpsworksRailsAppLayer#passenger_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.rubygemsVersion">rubygemsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#rubygems_version OpsworksRailsAppLayer#rubygems_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.rubyVersion">rubyVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ruby_version OpsworksRailsAppLayer#ruby_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#system_packages OpsworksRailsAppLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags OpsworksRailsAppLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags_all OpsworksRailsAppLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.stackId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#stack_id OpsworksRailsAppLayer#stack_id}.

---

##### `appServer`<sup>Optional</sup> <a name="appServer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.appServer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#app_server OpsworksRailsAppLayer#app_server}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.autoAssignElasticIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.autoAssignPublicIps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.autoHealing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_healing OpsworksRailsAppLayer#auto_healing}.

---

##### `bundlerVersion`<sup>Optional</sup> <a name="bundlerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.bundlerVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#bundler_version OpsworksRailsAppLayer#bundler_version}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.cloudwatchConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cloudwatch_configuration OpsworksRailsAppLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customConfigureRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customDeployRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customInstanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_json OpsworksRailsAppLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customSetupRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customShutdownRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.customUndeployRecipes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.drainElbOnShutdown"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.ebsVolume"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>>

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ebs_volume OpsworksRailsAppLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.elasticLoadBalancer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#id OpsworksRailsAppLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.installUpdatesOnBoot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.instanceShutdownTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.loadBasedAutoScaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_based_auto_scaling OpsworksRailsAppLayer#load_based_auto_scaling}

---

##### `manageBundler`<sup>Optional</sup> <a name="manageBundler" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.manageBundler"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#manage_bundler OpsworksRailsAppLayer#manage_bundler}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#name OpsworksRailsAppLayer#name}.

---

##### `passengerVersion`<sup>Optional</sup> <a name="passengerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.passengerVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#passenger_version OpsworksRailsAppLayer#passenger_version}.

---

##### `rubygemsVersion`<sup>Optional</sup> <a name="rubygemsVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.rubygemsVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#rubygems_version OpsworksRailsAppLayer#rubygems_version}.

---

##### `rubyVersion`<sup>Optional</sup> <a name="rubyVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.rubyVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ruby_version OpsworksRailsAppLayer#ruby_version}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.systemPackages"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#system_packages OpsworksRailsAppLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags OpsworksRailsAppLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags_all OpsworksRailsAppLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.useEbsOptimizedInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putLoadBasedAutoScaling">putLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAppServer">resetAppServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetBundlerVersion">resetBundlerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetLoadBasedAutoScaling">resetLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetManageBundler">resetManageBundler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetPassengerVersion">resetPassengerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubygemsVersion">resetRubygemsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubyVersion">resetRubyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration"></a>

```java
public void putCloudwatchConfiguration(OpsworksRailsAppLayerCloudwatchConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume"></a>

```java
public void putEbsVolume(IResolvable OR java.util.List<OpsworksRailsAppLayerEbsVolume> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>>

---

##### `putLoadBasedAutoScaling` <a name="putLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putLoadBasedAutoScaling"></a>

```java
public void putLoadBasedAutoScaling(OpsworksRailsAppLayerLoadBasedAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.putLoadBasedAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

---

##### `resetAppServer` <a name="resetAppServer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAppServer"></a>

```java
public void resetAppServer()
```

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignElasticIps"></a>

```java
public void resetAutoAssignElasticIps()
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignPublicIps"></a>

```java
public void resetAutoAssignPublicIps()
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoHealing"></a>

```java
public void resetAutoHealing()
```

##### `resetBundlerVersion` <a name="resetBundlerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetBundlerVersion"></a>

```java
public void resetBundlerVersion()
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCloudwatchConfiguration"></a>

```java
public void resetCloudwatchConfiguration()
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomConfigureRecipes"></a>

```java
public void resetCustomConfigureRecipes()
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomDeployRecipes"></a>

```java
public void resetCustomDeployRecipes()
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomInstanceProfileArn"></a>

```java
public void resetCustomInstanceProfileArn()
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomJson"></a>

```java
public void resetCustomJson()
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSecurityGroupIds"></a>

```java
public void resetCustomSecurityGroupIds()
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSetupRecipes"></a>

```java
public void resetCustomSetupRecipes()
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomShutdownRecipes"></a>

```java
public void resetCustomShutdownRecipes()
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomUndeployRecipes"></a>

```java
public void resetCustomUndeployRecipes()
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetDrainElbOnShutdown"></a>

```java
public void resetDrainElbOnShutdown()
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetEbsVolume"></a>

```java
public void resetEbsVolume()
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetElasticLoadBalancer"></a>

```java
public void resetElasticLoadBalancer()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetId"></a>

```java
public void resetId()
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstallUpdatesOnBoot"></a>

```java
public void resetInstallUpdatesOnBoot()
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstanceShutdownTimeout"></a>

```java
public void resetInstanceShutdownTimeout()
```

##### `resetLoadBasedAutoScaling` <a name="resetLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetLoadBasedAutoScaling"></a>

```java
public void resetLoadBasedAutoScaling()
```

##### `resetManageBundler` <a name="resetManageBundler" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetManageBundler"></a>

```java
public void resetManageBundler()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetName"></a>

```java
public void resetName()
```

##### `resetPassengerVersion` <a name="resetPassengerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetPassengerVersion"></a>

```java
public void resetPassengerVersion()
```

##### `resetRubygemsVersion` <a name="resetRubygemsVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubygemsVersion"></a>

```java
public void resetRubygemsVersion()
```

##### `resetRubyVersion` <a name="resetRubyVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubyVersion"></a>

```java
public void resetRubyVersion()
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetSystemPackages"></a>

```java
public void resetSystemPackages()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetUseEbsOptimizedInstances"></a>

```java
public void resetUseEbsOptimizedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayer;

OpsworksRailsAppLayer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayer;

OpsworksRailsAppLayer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayer;

OpsworksRailsAppLayer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference">OpsworksRailsAppLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList">OpsworksRailsAppLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServerInput">appServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersionInput">bundlerVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJsonInput">customJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScalingInput">loadBasedAutoScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundlerInput">manageBundlerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersionInput">passengerVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersionInput">rubygemsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersionInput">rubyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackIdInput">stackIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServer">appServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersion">bundlerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJson">customJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundler">manageBundler</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersion">passengerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersion">rubygemsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersion">rubyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackId">stackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfiguration"></a>

```java
public OpsworksRailsAppLayerCloudwatchConfigurationOutputReference getCloudwatchConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference">OpsworksRailsAppLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolume"></a>

```java
public OpsworksRailsAppLayerEbsVolumeList getEbsVolume();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList">OpsworksRailsAppLayerEbsVolumeList</a>

---

##### `loadBasedAutoScaling`<sup>Required</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScaling"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference getLoadBasedAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference</a>

---

##### `appServerInput`<sup>Optional</sup> <a name="appServerInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServerInput"></a>

```java
public java.lang.String getAppServerInput();
```

- *Type:* java.lang.String

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIpsInput"></a>

```java
public java.lang.Object getAutoAssignElasticIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIpsInput"></a>

```java
public java.lang.Object getAutoAssignPublicIpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealingInput"></a>

```java
public java.lang.Object getAutoHealingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bundlerVersionInput`<sup>Optional</sup> <a name="bundlerVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersionInput"></a>

```java
public java.lang.String getBundlerVersionInput();
```

- *Type:* java.lang.String

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfigurationInput"></a>

```java
public OpsworksRailsAppLayerCloudwatchConfiguration getCloudwatchConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArnInput"></a>

```java
public java.lang.String getCustomInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJsonInput"></a>

```java
public java.lang.String getCustomJsonInput();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipesInput"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdownInput"></a>

```java
public java.lang.Object getDrainElbOnShutdownInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolumeInput"></a>

```java
public java.lang.Object getEbsVolumeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>>

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancerInput"></a>

```java
public java.lang.String getElasticLoadBalancerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBootInput"></a>

```java
public java.lang.Object getInstallUpdatesOnBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeoutInput"></a>

```java
public java.lang.Number getInstanceShutdownTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `loadBasedAutoScalingInput`<sup>Optional</sup> <a name="loadBasedAutoScalingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.loadBasedAutoScalingInput"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScaling getLoadBasedAutoScalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

---

##### `manageBundlerInput`<sup>Optional</sup> <a name="manageBundlerInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundlerInput"></a>

```java
public java.lang.Object getManageBundlerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passengerVersionInput`<sup>Optional</sup> <a name="passengerVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersionInput"></a>

```java
public java.lang.String getPassengerVersionInput();
```

- *Type:* java.lang.String

---

##### `rubygemsVersionInput`<sup>Optional</sup> <a name="rubygemsVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersionInput"></a>

```java
public java.lang.String getRubygemsVersionInput();
```

- *Type:* java.lang.String

---

##### `rubyVersionInput`<sup>Optional</sup> <a name="rubyVersionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersionInput"></a>

```java
public java.lang.String getRubyVersionInput();
```

- *Type:* java.lang.String

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackIdInput"></a>

```java
public java.lang.String getStackIdInput();
```

- *Type:* java.lang.String

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackagesInput"></a>

```java
public java.util.List<java.lang.String> getSystemPackagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstancesInput"></a>

```java
public java.lang.Object getUseEbsOptimizedInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appServer`<sup>Required</sup> <a name="appServer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServer"></a>

```java
public java.lang.String getAppServer();
```

- *Type:* java.lang.String

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIps"></a>

```java
public java.lang.Object getAutoAssignElasticIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIps"></a>

```java
public java.lang.Object getAutoAssignPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bundlerVersion`<sup>Required</sup> <a name="bundlerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersion"></a>

```java
public java.lang.String getBundlerVersion();
```

- *Type:* java.lang.String

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArn"></a>

```java
public java.lang.String getCustomInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdown"></a>

```java
public java.lang.Object getDrainElbOnShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancer"></a>

```java
public java.lang.String getElasticLoadBalancer();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBoot"></a>

```java
public java.lang.Object getInstallUpdatesOnBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeout"></a>

```java
public java.lang.Number getInstanceShutdownTimeout();
```

- *Type:* java.lang.Number

---

##### `manageBundler`<sup>Required</sup> <a name="manageBundler" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundler"></a>

```java
public java.lang.Object getManageBundler();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `passengerVersion`<sup>Required</sup> <a name="passengerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersion"></a>

```java
public java.lang.String getPassengerVersion();
```

- *Type:* java.lang.String

---

##### `rubygemsVersion`<sup>Required</sup> <a name="rubygemsVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersion"></a>

```java
public java.lang.String getRubygemsVersion();
```

- *Type:* java.lang.String

---

##### `rubyVersion`<sup>Required</sup> <a name="rubyVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersion"></a>

```java
public java.lang.String getRubyVersion();
```

- *Type:* java.lang.String

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackages"></a>

```java
public java.util.List<java.lang.String> getSystemPackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstances"></a>

```java
public java.lang.Object getUseEbsOptimizedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksRailsAppLayerCloudwatchConfiguration <a name="OpsworksRailsAppLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerCloudwatchConfiguration;

OpsworksRailsAppLayerCloudwatchConfiguration.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .logStreams(IResolvable)
//  .logStreams(java.util.List<OpsworksRailsAppLayerCloudwatchConfigurationLogStreams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enabled OpsworksRailsAppLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>></code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enabled OpsworksRailsAppLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.logStreams"></a>

```java
public java.lang.Object getLogStreams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>>

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#log_streams OpsworksRailsAppLayer#log_streams}

---

### OpsworksRailsAppLayerCloudwatchConfigurationLogStreams <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams;

OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file OpsworksRailsAppLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#log_group_name OpsworksRailsAppLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_count OpsworksRailsAppLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_size OpsworksRailsAppLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#buffer_duration OpsworksRailsAppLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#datetime_format OpsworksRailsAppLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encoding OpsworksRailsAppLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file_fingerprint_lines OpsworksRailsAppLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#initial_position OpsworksRailsAppLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#multiline_start_pattern OpsworksRailsAppLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#time_zone OpsworksRailsAppLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file OpsworksRailsAppLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#log_group_name OpsworksRailsAppLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_count OpsworksRailsAppLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#batch_size OpsworksRailsAppLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```java
public java.lang.Number getBufferDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#buffer_duration OpsworksRailsAppLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```java
public java.lang.String getDatetimeFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#datetime_format OpsworksRailsAppLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encoding OpsworksRailsAppLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```java
public java.lang.String getFileFingerprintLines();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#file_fingerprint_lines OpsworksRailsAppLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```java
public java.lang.String getInitialPosition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#initial_position OpsworksRailsAppLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```java
public java.lang.String getMultilineStartPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#multiline_start_pattern OpsworksRailsAppLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#time_zone OpsworksRailsAppLayer#time_zone}.

---

### OpsworksRailsAppLayerConfig <a name="OpsworksRailsAppLayerConfig" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerConfig;

OpsworksRailsAppLayerConfig.builder()
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
//  .appServer(java.lang.String)
//  .autoAssignElasticIps(java.lang.Boolean)
//  .autoAssignElasticIps(IResolvable)
//  .autoAssignPublicIps(java.lang.Boolean)
//  .autoAssignPublicIps(IResolvable)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .bundlerVersion(java.lang.String)
//  .cloudwatchConfiguration(OpsworksRailsAppLayerCloudwatchConfiguration)
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
//  .ebsVolume(java.util.List<OpsworksRailsAppLayerEbsVolume>)
//  .elasticLoadBalancer(java.lang.String)
//  .id(java.lang.String)
//  .installUpdatesOnBoot(java.lang.Boolean)
//  .installUpdatesOnBoot(IResolvable)
//  .instanceShutdownTimeout(java.lang.Number)
//  .loadBasedAutoScaling(OpsworksRailsAppLayerLoadBasedAutoScaling)
//  .manageBundler(java.lang.Boolean)
//  .manageBundler(IResolvable)
//  .name(java.lang.String)
//  .passengerVersion(java.lang.String)
//  .rubygemsVersion(java.lang.String)
//  .rubyVersion(java.lang.String)
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
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#stack_id OpsworksRailsAppLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.appServer">appServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#app_server OpsworksRailsAppLayer#app_server}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_healing OpsworksRailsAppLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.bundlerVersion">bundlerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#bundler_version OpsworksRailsAppLayer#bundler_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customJson">customJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_json OpsworksRailsAppLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>></code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#id OpsworksRailsAppLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.loadBasedAutoScaling">loadBasedAutoScaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.manageBundler">manageBundler</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#manage_bundler OpsworksRailsAppLayer#manage_bundler}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#name OpsworksRailsAppLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.passengerVersion">passengerVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#passenger_version OpsworksRailsAppLayer#passenger_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubygemsVersion">rubygemsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#rubygems_version OpsworksRailsAppLayer#rubygems_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubyVersion">rubyVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ruby_version OpsworksRailsAppLayer#ruby_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.systemPackages">systemPackages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#system_packages OpsworksRailsAppLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags OpsworksRailsAppLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags_all OpsworksRailsAppLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#stack_id OpsworksRailsAppLayer#stack_id}.

---

##### `appServer`<sup>Optional</sup> <a name="appServer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.appServer"></a>

```java
public java.lang.String getAppServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#app_server OpsworksRailsAppLayer#app_server}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignElasticIps"></a>

```java
public java.lang.Object getAutoAssignElasticIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignPublicIps"></a>

```java
public java.lang.Object getAutoAssignPublicIps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#auto_healing OpsworksRailsAppLayer#auto_healing}.

---

##### `bundlerVersion`<sup>Optional</sup> <a name="bundlerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.bundlerVersion"></a>

```java
public java.lang.String getBundlerVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#bundler_version OpsworksRailsAppLayer#bundler_version}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.cloudwatchConfiguration"></a>

```java
public OpsworksRailsAppLayerCloudwatchConfiguration getCloudwatchConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cloudwatch_configuration OpsworksRailsAppLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customConfigureRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomConfigureRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customDeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomDeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customInstanceProfileArn"></a>

```java
public java.lang.String getCustomInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customJson"></a>

```java
public java.lang.String getCustomJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_json OpsworksRailsAppLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getCustomSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSetupRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomSetupRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customShutdownRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomShutdownRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customUndeployRecipes"></a>

```java
public java.util.List<java.lang.String> getCustomUndeployRecipes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.drainElbOnShutdown"></a>

```java
public java.lang.Object getDrainElbOnShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.ebsVolume"></a>

```java
public java.lang.Object getEbsVolume();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>>

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ebs_volume OpsworksRailsAppLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.elasticLoadBalancer"></a>

```java
public java.lang.String getElasticLoadBalancer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#id OpsworksRailsAppLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.installUpdatesOnBoot"></a>

```java
public java.lang.Object getInstallUpdatesOnBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.instanceShutdownTimeout"></a>

```java
public java.lang.Number getInstanceShutdownTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}.

---

##### `loadBasedAutoScaling`<sup>Optional</sup> <a name="loadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.loadBasedAutoScaling"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScaling getLoadBasedAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_based_auto_scaling OpsworksRailsAppLayer#load_based_auto_scaling}

---

##### `manageBundler`<sup>Optional</sup> <a name="manageBundler" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.manageBundler"></a>

```java
public java.lang.Object getManageBundler();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#manage_bundler OpsworksRailsAppLayer#manage_bundler}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#name OpsworksRailsAppLayer#name}.

---

##### `passengerVersion`<sup>Optional</sup> <a name="passengerVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.passengerVersion"></a>

```java
public java.lang.String getPassengerVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#passenger_version OpsworksRailsAppLayer#passenger_version}.

---

##### `rubygemsVersion`<sup>Optional</sup> <a name="rubygemsVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubygemsVersion"></a>

```java
public java.lang.String getRubygemsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#rubygems_version OpsworksRailsAppLayer#rubygems_version}.

---

##### `rubyVersion`<sup>Optional</sup> <a name="rubyVersion" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubyVersion"></a>

```java
public java.lang.String getRubyVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ruby_version OpsworksRailsAppLayer#ruby_version}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.systemPackages"></a>

```java
public java.util.List<java.lang.String> getSystemPackages();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#system_packages OpsworksRailsAppLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags OpsworksRailsAppLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#tags_all OpsworksRailsAppLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.useEbsOptimizedInstances"></a>

```java
public java.lang.Object getUseEbsOptimizedInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}.

---

### OpsworksRailsAppLayerEbsVolume <a name="OpsworksRailsAppLayerEbsVolume" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerEbsVolume;

OpsworksRailsAppLayerEbsVolume.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#mount_point OpsworksRailsAppLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#number_of_disks OpsworksRailsAppLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#size OpsworksRailsAppLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encrypted OpsworksRailsAppLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#iops OpsworksRailsAppLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#raid_level OpsworksRailsAppLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#type OpsworksRailsAppLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#mount_point OpsworksRailsAppLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#number_of_disks OpsworksRailsAppLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#size OpsworksRailsAppLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#encrypted OpsworksRailsAppLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#iops OpsworksRailsAppLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.raidLevel"></a>

```java
public java.lang.String getRaidLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#raid_level OpsworksRailsAppLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#type OpsworksRailsAppLayer#type}.

---

### OpsworksRailsAppLayerLoadBasedAutoScaling <a name="OpsworksRailsAppLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerLoadBasedAutoScaling;

OpsworksRailsAppLayerLoadBasedAutoScaling.builder()
//  .downscaling(OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .upscaling(OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enable OpsworksRailsAppLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.downscaling"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling getDownscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#downscaling OpsworksRailsAppLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#enable OpsworksRailsAppLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling.property.upscaling"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling getUpscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#upscaling OpsworksRailsAppLayer#upscaling}

---

### OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling <a name="OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling;

OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}.

---

### OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling <a name="OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling;

OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.builder()
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
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}.

---

##### `cpuThreshold`<sup>Optional</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}.

---

##### `ignoreMetricsTime`<sup>Optional</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}.

---

##### `loadThreshold`<sup>Optional</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}.

---

##### `memoryThreshold`<sup>Optional</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}.

---

##### `thresholdsWaitTime`<sup>Optional</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList;

new OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get"></a>

```java
public OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>>

---


### OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference;

new OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```java
public void resetBatchCount()
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```java
public void resetBatchSize()
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```java
public void resetBufferDuration()
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```java
public void resetDatetimeFormat()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```java
public void resetFileFingerprintLines()
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```java
public void resetInitialPosition()
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```java
public void resetMultilineStartPattern()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```java
public java.lang.Number getBatchCountInput();
```

- *Type:* java.lang.Number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```java
public java.lang.Number getBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```java
public java.lang.Number getBufferDurationInput();
```

- *Type:* java.lang.Number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```java
public java.lang.String getDatetimeFormatInput();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```java
public java.lang.String getFileFingerprintLinesInput();
```

- *Type:* java.lang.String

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```java
public java.lang.String getInitialPositionInput();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```java
public java.lang.String getMultilineStartPatternInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```java
public java.lang.Number getBufferDuration();
```

- *Type:* java.lang.Number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```java
public java.lang.String getDatetimeFormat();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```java
public java.lang.String getFileFingerprintLines();
```

- *Type:* java.lang.String

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```java
public java.lang.String getInitialPosition();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```java
public java.lang.String getMultilineStartPattern();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksRailsAppLayerCloudwatchConfigurationOutputReference <a name="OpsworksRailsAppLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference;

new OpsworksRailsAppLayerCloudwatchConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```java
public void putLogStreams(IResolvable OR java.util.List<OpsworksRailsAppLayerCloudwatchConfigurationLogStreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```java
public void resetLogStreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList">OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```java
public OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList getLogStreams();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList">OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```java
public java.lang.Object getLogStreamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```java
public OpsworksRailsAppLayerCloudwatchConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---


### OpsworksRailsAppLayerEbsVolumeList <a name="OpsworksRailsAppLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerEbsVolumeList;

new OpsworksRailsAppLayerEbsVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get"></a>

```java
public OpsworksRailsAppLayerEbsVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>>

---


### OpsworksRailsAppLayerEbsVolumeOutputReference <a name="OpsworksRailsAppLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerEbsVolumeOutputReference;

new OpsworksRailsAppLayerEbsVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```java
public void resetRaidLevel()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```java
public java.lang.String getMountPointInput();
```

- *Type:* java.lang.String

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```java
public java.lang.Number getNumberOfDisksInput();
```

- *Type:* java.lang.Number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```java
public java.lang.String getRaidLevelInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevel"></a>

```java
public java.lang.String getRaidLevel();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference;

new OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```java
public void resetCpuThreshold()
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```java
public void resetIgnoreMetricsTime()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```java
public void resetLoadThreshold()
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```java
public void resetMemoryThreshold()
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```java
public void resetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```java
public java.lang.Number getCpuThresholdInput();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```java
public java.lang.Number getIgnoreMetricsTimeInput();
```

- *Type:* java.lang.Number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```java
public java.lang.Number getLoadThresholdInput();
```

- *Type:* java.lang.Number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```java
public java.lang.Number getMemoryThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```java
public java.lang.Number getThresholdsWaitTimeInput();
```

- *Type:* java.lang.Number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference <a name="OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference;

new OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling">putDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling">putUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling">resetDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling">resetUpscaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDownscaling` <a name="putDownscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```java
public void putDownscaling(OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `putUpscaling` <a name="putUpscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```java
public void putUpscaling(OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `resetDownscaling` <a name="resetDownscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```java
public void resetDownscaling()
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetUpscaling` <a name="resetUpscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```java
public void resetUpscaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference getDownscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference getUpscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscalingInput`<sup>Optional</sup> <a name="downscalingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling getDownscalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling">OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `upscalingInput`<sup>Optional</sup> <a name="upscalingInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling getUpscalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScaling">OpsworksRailsAppLayerLoadBasedAutoScaling</a>

---


### OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_rails_app_layer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference;

new OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">resetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">resetIgnoreMetricsTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">resetLoadThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">resetMemoryThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">resetThresholdsWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetCpuThreshold` <a name="resetCpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```java
public void resetCpuThreshold()
```

##### `resetIgnoreMetricsTime` <a name="resetIgnoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```java
public void resetIgnoreMetricsTime()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetLoadThreshold` <a name="resetLoadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```java
public void resetLoadThreshold()
```

##### `resetMemoryThreshold` <a name="resetMemoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```java
public void resetMemoryThreshold()
```

##### `resetThresholdsWaitTime` <a name="resetThresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```java
public void resetThresholdsWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpuThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignoreMetricsTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">loadThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memoryThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholdsWaitTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpuThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignoreMetricsTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memoryThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholdsWaitTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThresholdInput`<sup>Optional</sup> <a name="cpuThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```java
public java.lang.Number getCpuThresholdInput();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTimeInput`<sup>Optional</sup> <a name="ignoreMetricsTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```java
public java.lang.Number getIgnoreMetricsTimeInput();
```

- *Type:* java.lang.Number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `loadThresholdInput`<sup>Optional</sup> <a name="loadThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```java
public java.lang.Number getLoadThresholdInput();
```

- *Type:* java.lang.Number

---

##### `memoryThresholdInput`<sup>Optional</sup> <a name="memoryThresholdInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```java
public java.lang.Number getMemoryThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTimeInput`<sup>Optional</sup> <a name="thresholdsWaitTimeInput" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```java
public java.lang.Number getThresholdsWaitTimeInput();
```

- *Type:* java.lang.Number

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```java
public java.util.List<java.lang.String> getAlarms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuThreshold`<sup>Required</sup> <a name="cpuThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```java
public java.lang.Number getCpuThreshold();
```

- *Type:* java.lang.Number

---

##### `ignoreMetricsTime`<sup>Required</sup> <a name="ignoreMetricsTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```java
public java.lang.Number getIgnoreMetricsTime();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```java
public java.lang.Number getLoadThreshold();
```

- *Type:* java.lang.Number

---

##### `memoryThreshold`<sup>Required</sup> <a name="memoryThreshold" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```java
public java.lang.Number getMemoryThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdsWaitTime`<sup>Required</sup> <a name="thresholdsWaitTime" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```java
public java.lang.Number getThresholdsWaitTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```java
public OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksRailsAppLayer.OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling">OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling</a>

---



