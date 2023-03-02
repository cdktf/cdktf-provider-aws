# `opsworksEcsClusterLayer` Submodule <a name="`opsworksEcsClusterLayer` Submodule" id="@cdktf/provider-aws.opsworksEcsClusterLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksEcsClusterLayer <a name="OpsworksEcsClusterLayer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer aws_opsworks_ecs_cluster_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ecs_cluster_arn: str,
  stack_id: str,
  auto_assign_elastic_ips: typing.Union[bool, IResolvable] = None,
  auto_assign_public_ips: typing.Union[bool, IResolvable] = None,
  auto_healing: typing.Union[bool, IResolvable] = None,
  cloudwatch_configuration: OpsworksEcsClusterLayerCloudwatchConfiguration = None,
  custom_configure_recipes: typing.List[str] = None,
  custom_deploy_recipes: typing.List[str] = None,
  custom_instance_profile_arn: str = None,
  custom_json: str = None,
  custom_security_group_ids: typing.List[str] = None,
  custom_setup_recipes: typing.List[str] = None,
  custom_shutdown_recipes: typing.List[str] = None,
  custom_undeploy_recipes: typing.List[str] = None,
  drain_elb_on_shutdown: typing.Union[bool, IResolvable] = None,
  ebs_volume: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerEbsVolume]] = None,
  elastic_load_balancer: str = None,
  id: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_shutdown_timeout: typing.Union[int, float] = None,
  load_based_auto_scaling: OpsworksEcsClusterLayerLoadBasedAutoScaling = None,
  name: str = None,
  system_packages: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  use_ebs_optimized_instances: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.ecsClusterArn">ecs_cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.ebsVolume">ebs_volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>]]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ecs_cluster_arn`<sup>Required</sup> <a name="ecs_cluster_arn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.ecsClusterArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}.

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.stackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}.

---

##### `auto_assign_elastic_ips`<sup>Optional</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoAssignElasticIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}.

---

##### `auto_assign_public_ips`<sup>Optional</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoAssignPublicIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.autoHealing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}.

---

##### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.cloudwatchConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cloudwatch_configuration OpsworksEcsClusterLayer#cloudwatch_configuration}

---

##### `custom_configure_recipes`<sup>Optional</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customConfigureRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}.

---

##### `custom_deploy_recipes`<sup>Optional</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customDeployRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}.

---

##### `custom_instance_profile_arn`<sup>Optional</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customInstanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}.

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}.

---

##### `custom_security_group_ids`<sup>Optional</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}.

---

##### `custom_setup_recipes`<sup>Optional</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customSetupRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}.

---

##### `custom_shutdown_recipes`<sup>Optional</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customShutdownRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}.

---

##### `custom_undeploy_recipes`<sup>Optional</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.customUndeployRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}.

---

##### `drain_elb_on_shutdown`<sup>Optional</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.drainElbOnShutdown"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}.

---

##### `ebs_volume`<sup>Optional</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.ebsVolume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>]]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ebs_volume OpsworksEcsClusterLayer#ebs_volume}

---

##### `elastic_load_balancer`<sup>Optional</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.elasticLoadBalancer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.installUpdatesOnBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}.

---

##### `instance_shutdown_timeout`<sup>Optional</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.instanceShutdownTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}.

---

##### `load_based_auto_scaling`<sup>Optional</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.loadBasedAutoScaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_based_auto_scaling OpsworksEcsClusterLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}.

---

##### `system_packages`<sup>Optional</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.systemPackages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}.

---

##### `use_ebs_optimized_instances`<sup>Optional</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.Initializer.parameter.useEbsOptimizedInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration">put_cloudwatch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume">put_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling">put_load_based_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignElasticIps">reset_auto_assign_elastic_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignPublicIps">reset_auto_assign_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoHealing">reset_auto_healing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCloudwatchConfiguration">reset_cloudwatch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomConfigureRecipes">reset_custom_configure_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomDeployRecipes">reset_custom_deploy_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomInstanceProfileArn">reset_custom_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomJson">reset_custom_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSecurityGroupIds">reset_custom_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSetupRecipes">reset_custom_setup_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomShutdownRecipes">reset_custom_shutdown_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomUndeployRecipes">reset_custom_undeploy_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetDrainElbOnShutdown">reset_drain_elb_on_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetEbsVolume">reset_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetElasticLoadBalancer">reset_elastic_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstallUpdatesOnBoot">reset_install_updates_on_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstanceShutdownTimeout">reset_instance_shutdown_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetLoadBasedAutoScaling">reset_load_based_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetSystemPackages">reset_system_packages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetUseEbsOptimizedInstances">reset_use_ebs_optimized_instances</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cloudwatch_configuration` <a name="put_cloudwatch_configuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration"></a>

```python
def put_cloudwatch_configuration(
  enabled: typing.Union[bool, IResolvable] = None,
  log_streams: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams]] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enabled OpsworksEcsClusterLayer#enabled}.

---

###### `log_streams`<sup>Optional</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putCloudwatchConfiguration.parameter.logStreams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>]]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#log_streams OpsworksEcsClusterLayer#log_streams}

---

##### `put_ebs_volume` <a name="put_ebs_volume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume"></a>

```python
def put_ebs_volume(
  value: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerEbsVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putEbsVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>]]

---

##### `put_load_based_auto_scaling` <a name="put_load_based_auto_scaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling"></a>

```python
def put_load_based_auto_scaling(
  downscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling = None,
  enable: typing.Union[bool, IResolvable] = None,
  upscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling = None
) -> None
```

###### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling.parameter.downscaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#downscaling OpsworksEcsClusterLayer#downscaling}

---

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enable OpsworksEcsClusterLayer#enable}.

---

###### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.putLoadBasedAutoScaling.parameter.upscaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#upscaling OpsworksEcsClusterLayer#upscaling}

---

##### `reset_auto_assign_elastic_ips` <a name="reset_auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignElasticIps"></a>

```python
def reset_auto_assign_elastic_ips() -> None
```

##### `reset_auto_assign_public_ips` <a name="reset_auto_assign_public_ips" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoAssignPublicIps"></a>

```python
def reset_auto_assign_public_ips() -> None
```

##### `reset_auto_healing` <a name="reset_auto_healing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetAutoHealing"></a>

```python
def reset_auto_healing() -> None
```

##### `reset_cloudwatch_configuration` <a name="reset_cloudwatch_configuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCloudwatchConfiguration"></a>

```python
def reset_cloudwatch_configuration() -> None
```

##### `reset_custom_configure_recipes` <a name="reset_custom_configure_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomConfigureRecipes"></a>

```python
def reset_custom_configure_recipes() -> None
```

##### `reset_custom_deploy_recipes` <a name="reset_custom_deploy_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomDeployRecipes"></a>

```python
def reset_custom_deploy_recipes() -> None
```

##### `reset_custom_instance_profile_arn` <a name="reset_custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomInstanceProfileArn"></a>

```python
def reset_custom_instance_profile_arn() -> None
```

##### `reset_custom_json` <a name="reset_custom_json" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomJson"></a>

```python
def reset_custom_json() -> None
```

##### `reset_custom_security_group_ids` <a name="reset_custom_security_group_ids" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSecurityGroupIds"></a>

```python
def reset_custom_security_group_ids() -> None
```

##### `reset_custom_setup_recipes` <a name="reset_custom_setup_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomSetupRecipes"></a>

```python
def reset_custom_setup_recipes() -> None
```

##### `reset_custom_shutdown_recipes` <a name="reset_custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomShutdownRecipes"></a>

```python
def reset_custom_shutdown_recipes() -> None
```

##### `reset_custom_undeploy_recipes` <a name="reset_custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetCustomUndeployRecipes"></a>

```python
def reset_custom_undeploy_recipes() -> None
```

##### `reset_drain_elb_on_shutdown` <a name="reset_drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetDrainElbOnShutdown"></a>

```python
def reset_drain_elb_on_shutdown() -> None
```

##### `reset_ebs_volume` <a name="reset_ebs_volume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetEbsVolume"></a>

```python
def reset_ebs_volume() -> None
```

##### `reset_elastic_load_balancer` <a name="reset_elastic_load_balancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetElasticLoadBalancer"></a>

```python
def reset_elastic_load_balancer() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_install_updates_on_boot` <a name="reset_install_updates_on_boot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstallUpdatesOnBoot"></a>

```python
def reset_install_updates_on_boot() -> None
```

##### `reset_instance_shutdown_timeout` <a name="reset_instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetInstanceShutdownTimeout"></a>

```python
def reset_instance_shutdown_timeout() -> None
```

##### `reset_load_based_auto_scaling` <a name="reset_load_based_auto_scaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetLoadBasedAutoScaling"></a>

```python
def reset_load_based_auto_scaling() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_system_packages` <a name="reset_system_packages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetSystemPackages"></a>

```python
def reset_system_packages() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_use_ebs_optimized_instances` <a name="reset_use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.resetUseEbsOptimizedInstances"></a>

```python
def reset_use_ebs_optimized_instances() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference">OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolume">ebs_volume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList">OpsworksEcsClusterLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIpsInput">auto_assign_elastic_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIpsInput">auto_assign_public_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealingInput">auto_healing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfigurationInput">cloudwatch_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipesInput">custom_configure_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipesInput">custom_deploy_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArnInput">custom_instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJsonInput">custom_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIdsInput">custom_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipesInput">custom_setup_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipesInput">custom_shutdown_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipesInput">custom_undeploy_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdownInput">drain_elb_on_shutdown_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolumeInput">ebs_volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArnInput">ecs_cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancerInput">elastic_load_balancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBootInput">install_updates_on_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeoutInput">instance_shutdown_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScalingInput">load_based_auto_scaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackIdInput">stack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackagesInput">system_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstancesInput">use_ebs_optimized_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJson">custom_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArn">ecs_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_configuration`<sup>Required</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference">OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebs_volume`<sup>Required</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolume"></a>

```python
ebs_volume: OpsworksEcsClusterLayerEbsVolumeList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList">OpsworksEcsClusterLayerEbsVolumeList</a>

---

##### `load_based_auto_scaling`<sup>Required</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScaling"></a>

```python
load_based_auto_scaling: OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference</a>

---

##### `auto_assign_elastic_ips_input`<sup>Optional</sup> <a name="auto_assign_elastic_ips_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIpsInput"></a>

```python
auto_assign_elastic_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_public_ips_input`<sup>Optional</sup> <a name="auto_assign_public_ips_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIpsInput"></a>

```python
auto_assign_public_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_healing_input`<sup>Optional</sup> <a name="auto_healing_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealingInput"></a>

```python
auto_healing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloudwatch_configuration_input`<sup>Optional</sup> <a name="cloudwatch_configuration_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.cloudwatchConfigurationInput"></a>

```python
cloudwatch_configuration_input: OpsworksEcsClusterLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

---

##### `custom_configure_recipes_input`<sup>Optional</sup> <a name="custom_configure_recipes_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipesInput"></a>

```python
custom_configure_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_deploy_recipes_input`<sup>Optional</sup> <a name="custom_deploy_recipes_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipesInput"></a>

```python
custom_deploy_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_instance_profile_arn_input`<sup>Optional</sup> <a name="custom_instance_profile_arn_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArnInput"></a>

```python
custom_instance_profile_arn_input: str
```

- *Type:* str

---

##### `custom_json_input`<sup>Optional</sup> <a name="custom_json_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJsonInput"></a>

```python
custom_json_input: str
```

- *Type:* str

---

##### `custom_security_group_ids_input`<sup>Optional</sup> <a name="custom_security_group_ids_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIdsInput"></a>

```python
custom_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_setup_recipes_input`<sup>Optional</sup> <a name="custom_setup_recipes_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipesInput"></a>

```python
custom_setup_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_shutdown_recipes_input`<sup>Optional</sup> <a name="custom_shutdown_recipes_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipesInput"></a>

```python
custom_shutdown_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_undeploy_recipes_input`<sup>Optional</sup> <a name="custom_undeploy_recipes_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipesInput"></a>

```python
custom_undeploy_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drain_elb_on_shutdown_input`<sup>Optional</sup> <a name="drain_elb_on_shutdown_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdownInput"></a>

```python
drain_elb_on_shutdown_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_volume_input`<sup>Optional</sup> <a name="ebs_volume_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ebsVolumeInput"></a>

```python
ebs_volume_input: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>]]

---

##### `ecs_cluster_arn_input`<sup>Optional</sup> <a name="ecs_cluster_arn_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArnInput"></a>

```python
ecs_cluster_arn_input: str
```

- *Type:* str

---

##### `elastic_load_balancer_input`<sup>Optional</sup> <a name="elastic_load_balancer_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancerInput"></a>

```python
elastic_load_balancer_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `install_updates_on_boot_input`<sup>Optional</sup> <a name="install_updates_on_boot_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBootInput"></a>

```python
install_updates_on_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_shutdown_timeout_input`<sup>Optional</sup> <a name="instance_shutdown_timeout_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeoutInput"></a>

```python
instance_shutdown_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_based_auto_scaling_input`<sup>Optional</sup> <a name="load_based_auto_scaling_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.loadBasedAutoScalingInput"></a>

```python
load_based_auto_scaling_input: OpsworksEcsClusterLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `stack_id_input`<sup>Optional</sup> <a name="stack_id_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackIdInput"></a>

```python
stack_id_input: str
```

- *Type:* str

---

##### `system_packages_input`<sup>Optional</sup> <a name="system_packages_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackagesInput"></a>

```python
system_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_ebs_optimized_instances_input`<sup>Optional</sup> <a name="use_ebs_optimized_instances_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstancesInput"></a>

```python
use_ebs_optimized_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_elastic_ips`<sup>Required</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignElasticIps"></a>

```python
auto_assign_elastic_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_public_ips`<sup>Required</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoAssignPublicIps"></a>

```python
auto_assign_public_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_healing`<sup>Required</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_configure_recipes`<sup>Required</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customConfigureRecipes"></a>

```python
custom_configure_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_deploy_recipes`<sup>Required</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customDeployRecipes"></a>

```python
custom_deploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_instance_profile_arn`<sup>Required</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customInstanceProfileArn"></a>

```python
custom_instance_profile_arn: str
```

- *Type:* str

---

##### `custom_json`<sup>Required</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

---

##### `custom_security_group_ids`<sup>Required</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSecurityGroupIds"></a>

```python
custom_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_setup_recipes`<sup>Required</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customSetupRecipes"></a>

```python
custom_setup_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_shutdown_recipes`<sup>Required</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customShutdownRecipes"></a>

```python
custom_shutdown_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_undeploy_recipes`<sup>Required</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.customUndeployRecipes"></a>

```python
custom_undeploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drain_elb_on_shutdown`<sup>Required</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.drainElbOnShutdown"></a>

```python
drain_elb_on_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ecs_cluster_arn`<sup>Required</sup> <a name="ecs_cluster_arn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.ecsClusterArn"></a>

```python
ecs_cluster_arn: str
```

- *Type:* str

---

##### `elastic_load_balancer`<sup>Required</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.elasticLoadBalancer"></a>

```python
elastic_load_balancer: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `install_updates_on_boot`<sup>Required</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_shutdown_timeout`<sup>Required</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.instanceShutdownTimeout"></a>

```python
instance_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

##### `system_packages`<sup>Required</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.systemPackages"></a>

```python
system_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_ebs_optimized_instances`<sup>Required</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.useEbsOptimizedInstances"></a>

```python
use_ebs_optimized_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksEcsClusterLayerCloudwatchConfiguration <a name="OpsworksEcsClusterLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration(
  enabled: typing.Union[bool, IResolvable] = None,
  log_streams: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enabled OpsworksEcsClusterLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.logStreams">log_streams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>]]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enabled OpsworksEcsClusterLayer#enabled}.

---

##### `log_streams`<sup>Optional</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration.property.logStreams"></a>

```python
log_streams: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>]]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#log_streams OpsworksEcsClusterLayer#log_streams}

---

### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams(
  file: str,
  log_group_name: str,
  batch_count: typing.Union[int, float] = None,
  batch_size: typing.Union[int, float] = None,
  buffer_duration: typing.Union[int, float] = None,
  datetime_format: str = None,
  encoding: str = None,
  file_fingerprint_lines: str = None,
  initial_position: str = None,
  multiline_start_pattern: str = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file OpsworksEcsClusterLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#log_group_name OpsworksEcsClusterLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_count OpsworksEcsClusterLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_size OpsworksEcsClusterLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.bufferDuration">buffer_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#buffer_duration OpsworksEcsClusterLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetime_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#datetime_format OpsworksEcsClusterLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encoding OpsworksEcsClusterLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">file_fingerprint_lines</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file_fingerprint_lines OpsworksEcsClusterLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.initialPosition">initial_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#initial_position OpsworksEcsClusterLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multiline_start_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#multiline_start_pattern OpsworksEcsClusterLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#time_zone OpsworksEcsClusterLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.file"></a>

```python
file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file OpsworksEcsClusterLayer#file}.

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#log_group_name OpsworksEcsClusterLayer#log_group_name}.

---

##### `batch_count`<sup>Optional</sup> <a name="batch_count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_count OpsworksEcsClusterLayer#batch_count}.

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#batch_size OpsworksEcsClusterLayer#batch_size}.

---

##### `buffer_duration`<sup>Optional</sup> <a name="buffer_duration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```python
buffer_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#buffer_duration OpsworksEcsClusterLayer#buffer_duration}.

---

##### `datetime_format`<sup>Optional</sup> <a name="datetime_format" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```python
datetime_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#datetime_format OpsworksEcsClusterLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encoding OpsworksEcsClusterLayer#encoding}.

---

##### `file_fingerprint_lines`<sup>Optional</sup> <a name="file_fingerprint_lines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```python
file_fingerprint_lines: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#file_fingerprint_lines OpsworksEcsClusterLayer#file_fingerprint_lines}.

---

##### `initial_position`<sup>Optional</sup> <a name="initial_position" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```python
initial_position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#initial_position OpsworksEcsClusterLayer#initial_position}.

---

##### `multiline_start_pattern`<sup>Optional</sup> <a name="multiline_start_pattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```python
multiline_start_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#multiline_start_pattern OpsworksEcsClusterLayer#multiline_start_pattern}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#time_zone OpsworksEcsClusterLayer#time_zone}.

---

### OpsworksEcsClusterLayerConfig <a name="OpsworksEcsClusterLayerConfig" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ecs_cluster_arn: str,
  stack_id: str,
  auto_assign_elastic_ips: typing.Union[bool, IResolvable] = None,
  auto_assign_public_ips: typing.Union[bool, IResolvable] = None,
  auto_healing: typing.Union[bool, IResolvable] = None,
  cloudwatch_configuration: OpsworksEcsClusterLayerCloudwatchConfiguration = None,
  custom_configure_recipes: typing.List[str] = None,
  custom_deploy_recipes: typing.List[str] = None,
  custom_instance_profile_arn: str = None,
  custom_json: str = None,
  custom_security_group_ids: typing.List[str] = None,
  custom_setup_recipes: typing.List[str] = None,
  custom_shutdown_recipes: typing.List[str] = None,
  custom_undeploy_recipes: typing.List[str] = None,
  drain_elb_on_shutdown: typing.Union[bool, IResolvable] = None,
  ebs_volume: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerEbsVolume]] = None,
  elastic_load_balancer: str = None,
  id: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_shutdown_timeout: typing.Union[int, float] = None,
  load_based_auto_scaling: OpsworksEcsClusterLayerLoadBasedAutoScaling = None,
  name: str = None,
  system_packages: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  use_ebs_optimized_instances: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ecsClusterArn">ecs_cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ebsVolume">ebs_volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>]]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ecs_cluster_arn`<sup>Required</sup> <a name="ecs_cluster_arn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ecsClusterArn"></a>

```python
ecs_cluster_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}.

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}.

---

##### `auto_assign_elastic_ips`<sup>Optional</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignElasticIps"></a>

```python
auto_assign_elastic_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}.

---

##### `auto_assign_public_ips`<sup>Optional</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoAssignPublicIps"></a>

```python
auto_assign_public_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}.

---

##### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: OpsworksEcsClusterLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cloudwatch_configuration OpsworksEcsClusterLayer#cloudwatch_configuration}

---

##### `custom_configure_recipes`<sup>Optional</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customConfigureRecipes"></a>

```python
custom_configure_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}.

---

##### `custom_deploy_recipes`<sup>Optional</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customDeployRecipes"></a>

```python
custom_deploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}.

---

##### `custom_instance_profile_arn`<sup>Optional</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customInstanceProfileArn"></a>

```python
custom_instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}.

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}.

---

##### `custom_security_group_ids`<sup>Optional</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSecurityGroupIds"></a>

```python
custom_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}.

---

##### `custom_setup_recipes`<sup>Optional</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customSetupRecipes"></a>

```python
custom_setup_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}.

---

##### `custom_shutdown_recipes`<sup>Optional</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customShutdownRecipes"></a>

```python
custom_shutdown_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}.

---

##### `custom_undeploy_recipes`<sup>Optional</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.customUndeployRecipes"></a>

```python
custom_undeploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}.

---

##### `drain_elb_on_shutdown`<sup>Optional</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.drainElbOnShutdown"></a>

```python
drain_elb_on_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}.

---

##### `ebs_volume`<sup>Optional</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.ebsVolume"></a>

```python
ebs_volume: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>]]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ebs_volume OpsworksEcsClusterLayer#ebs_volume}

---

##### `elastic_load_balancer`<sup>Optional</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.elasticLoadBalancer"></a>

```python
elastic_load_balancer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}.

---

##### `instance_shutdown_timeout`<sup>Optional</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.instanceShutdownTimeout"></a>

```python
instance_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}.

---

##### `load_based_auto_scaling`<sup>Optional</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.loadBasedAutoScaling"></a>

```python
load_based_auto_scaling: OpsworksEcsClusterLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_based_auto_scaling OpsworksEcsClusterLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}.

---

##### `system_packages`<sup>Optional</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.systemPackages"></a>

```python
system_packages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}.

---

##### `use_ebs_optimized_instances`<sup>Optional</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerConfig.property.useEbsOptimizedInstances"></a>

```python
use_ebs_optimized_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}.

---

### OpsworksEcsClusterLayerEbsVolume <a name="OpsworksEcsClusterLayerEbsVolume" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume(
  mount_point: str,
  number_of_disks: typing.Union[int, float],
  size: typing.Union[int, float],
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  raid_level: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.mountPoint">mount_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#mount_point OpsworksEcsClusterLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.numberOfDisks">number_of_disks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#number_of_disks OpsworksEcsClusterLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#size OpsworksEcsClusterLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encrypted OpsworksEcsClusterLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#iops OpsworksEcsClusterLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.raidLevel">raid_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#raid_level OpsworksEcsClusterLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#type OpsworksEcsClusterLayer#type}. |

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#mount_point OpsworksEcsClusterLayer#mount_point}.

---

##### `number_of_disks`<sup>Required</sup> <a name="number_of_disks" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.numberOfDisks"></a>

```python
number_of_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#number_of_disks OpsworksEcsClusterLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#size OpsworksEcsClusterLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#encrypted OpsworksEcsClusterLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#iops OpsworksEcsClusterLayer#iops}.

---

##### `raid_level`<sup>Optional</sup> <a name="raid_level" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.raidLevel"></a>

```python
raid_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#raid_level OpsworksEcsClusterLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#type OpsworksEcsClusterLayer#type}.

---

### OpsworksEcsClusterLayerLoadBasedAutoScaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling(
  downscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling = None,
  enable: typing.Union[bool, IResolvable] = None,
  upscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enable OpsworksEcsClusterLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.downscaling"></a>

```python
downscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#downscaling OpsworksEcsClusterLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#enable OpsworksEcsClusterLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling.property.upscaling"></a>

```python
upscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#upscaling OpsworksEcsClusterLayer#upscaling}

---

### OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling(
  alarms: typing.List[str] = None,
  cpu_threshold: typing.Union[int, float] = None,
  ignore_metrics_time: typing.Union[int, float] = None,
  instance_count: typing.Union[int, float] = None,
  load_threshold: typing.Union[int, float] = None,
  memory_threshold: typing.Union[int, float] = None,
  thresholds_wait_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}.

---

##### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}.

---

##### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}.

---

##### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}.

---

##### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}.

---

##### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}.

---

### OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling(
  alarms: typing.List[str] = None,
  cpu_threshold: typing.Union[int, float] = None,
  ignore_metrics_time: typing.Union[int, float] = None,
  instance_count: typing.Union[int, float] = None,
  load_threshold: typing.Union[int, float] = None,
  memory_threshold: typing.Union[int, float] = None,
  thresholds_wait_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}.

---

##### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}.

---

##### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}.

---

##### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}.

---

##### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}.

---

##### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>]]

---


### OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">reset_batch_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">reset_buffer_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">reset_datetime_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">reset_file_fingerprint_lines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">reset_initial_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">reset_multiline_start_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_count` <a name="reset_batch_count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```python
def reset_batch_count() -> None
```

##### `reset_batch_size` <a name="reset_batch_size" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_buffer_duration` <a name="reset_buffer_duration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```python
def reset_buffer_duration() -> None
```

##### `reset_datetime_format` <a name="reset_datetime_format" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```python
def reset_datetime_format() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_file_fingerprint_lines` <a name="reset_file_fingerprint_lines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```python
def reset_file_fingerprint_lines() -> None
```

##### `reset_initial_position` <a name="reset_initial_position" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```python
def reset_initial_position() -> None
```

##### `reset_multiline_start_pattern` <a name="reset_multiline_start_pattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```python
def reset_multiline_start_pattern() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batch_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">buffer_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetime_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">file_fingerprint_lines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initial_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multiline_start_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">buffer_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetime_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">file_fingerprint_lines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initial_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multiline_start_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_count_input`<sup>Optional</sup> <a name="batch_count_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```python
batch_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buffer_duration_input`<sup>Optional</sup> <a name="buffer_duration_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```python
buffer_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datetime_format_input`<sup>Optional</sup> <a name="datetime_format_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```python
datetime_format_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `file_fingerprint_lines_input`<sup>Optional</sup> <a name="file_fingerprint_lines_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```python
file_fingerprint_lines_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `initial_position_input`<sup>Optional</sup> <a name="initial_position_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```python
initial_position_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `multiline_start_pattern_input`<sup>Optional</sup> <a name="multiline_start_pattern_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```python
multiline_start_pattern_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `batch_count`<sup>Required</sup> <a name="batch_count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buffer_duration`<sup>Required</sup> <a name="buffer_duration" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```python
buffer_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datetime_format`<sup>Required</sup> <a name="datetime_format" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```python
datetime_format: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `file_fingerprint_lines`<sup>Required</sup> <a name="file_fingerprint_lines" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```python
file_fingerprint_lines: str
```

- *Type:* str

---

##### `initial_position`<sup>Required</sup> <a name="initial_position" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```python
initial_position: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `multiline_start_pattern`<sup>Required</sup> <a name="multiline_start_pattern" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```python
multiline_start_pattern: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>, cdktf.IResolvable]

---


### OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference <a name="OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams">put_log_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetLogStreams">reset_log_streams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_streams` <a name="put_log_streams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```python
def put_log_streams(
  value: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_streams` <a name="reset_log_streams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```python
def reset_log_streams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreams">log_streams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">log_streams_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_streams`<sup>Required</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```python
log_streams: OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_streams_input`<sup>Optional</sup> <a name="log_streams_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```python
log_streams_input: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams">OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams</a>]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksEcsClusterLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerCloudwatchConfiguration">OpsworksEcsClusterLayerCloudwatchConfiguration</a>

---


### OpsworksEcsClusterLayerEbsVolumeList <a name="OpsworksEcsClusterLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksEcsClusterLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksEcsClusterLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>]]

---


### OpsworksEcsClusterLayerEbsVolumeOutputReference <a name="OpsworksEcsClusterLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetRaidLevel">reset_raid_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_raid_level` <a name="reset_raid_level" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```python
def reset_raid_level() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisksInput">number_of_disks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevelInput">raid_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisks">number_of_disks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevel">raid_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `number_of_disks_input`<sup>Optional</sup> <a name="number_of_disks_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```python
number_of_disks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `raid_level_input`<sup>Optional</sup> <a name="raid_level_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```python
raid_level_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `number_of_disks`<sup>Required</sup> <a name="number_of_disks" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```python
number_of_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `raid_level`<sup>Required</sup> <a name="raid_level" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.raidLevel"></a>

```python
raid_level: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksEcsClusterLayerEbsVolume, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerEbsVolume">OpsworksEcsClusterLayerEbsVolume</a>, cdktf.IResolvable]

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">reset_cpu_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">reset_ignore_metrics_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">reset_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">reset_memory_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">reset_thresholds_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarms` <a name="reset_alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_cpu_threshold` <a name="reset_cpu_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```python
def reset_cpu_threshold() -> None
```

##### `reset_ignore_metrics_time` <a name="reset_ignore_metrics_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```python
def reset_ignore_metrics_time() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_load_threshold` <a name="reset_load_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```python
def reset_load_threshold() -> None
```

##### `reset_memory_threshold` <a name="reset_memory_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```python
def reset_memory_threshold() -> None
```

##### `reset_thresholds_wait_time` <a name="reset_thresholds_wait_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```python
def reset_thresholds_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpu_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignore_metrics_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memory_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholds_wait_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```python
alarms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold_input`<sup>Optional</sup> <a name="cpu_threshold_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```python
cpu_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time_input`<sup>Optional</sup> <a name="ignore_metrics_time_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```python
ignore_metrics_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold_input`<sup>Optional</sup> <a name="load_threshold_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```python
load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold_input`<sup>Optional</sup> <a name="memory_threshold_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```python
memory_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time_input`<sup>Optional</sup> <a name="thresholds_wait_time_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```python
thresholds_wait_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold`<sup>Required</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time`<sup>Required</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold`<sup>Required</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold`<sup>Required</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time`<sup>Required</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling">put_downscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling">put_upscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetDownscaling">reset_downscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetUpscaling">reset_upscaling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_downscaling` <a name="put_downscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

```python
def put_downscaling(
  alarms: typing.List[str] = None,
  cpu_threshold: typing.Union[int, float] = None,
  ignore_metrics_time: typing.Union[int, float] = None,
  instance_count: typing.Union[int, float] = None,
  load_threshold: typing.Union[int, float] = None,
  memory_threshold: typing.Union[int, float] = None,
  thresholds_wait_time: typing.Union[int, float] = None
) -> None
```

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.alarms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}.

---

###### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.cpuThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}.

---

###### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.ignoreMetricsTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}.

---

###### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.loadThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}.

---

###### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.memoryThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}.

---

###### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.thresholdsWaitTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}.

---

##### `put_upscaling` <a name="put_upscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

```python
def put_upscaling(
  alarms: typing.List[str] = None,
  cpu_threshold: typing.Union[int, float] = None,
  ignore_metrics_time: typing.Union[int, float] = None,
  instance_count: typing.Union[int, float] = None,
  load_threshold: typing.Union[int, float] = None,
  memory_threshold: typing.Union[int, float] = None,
  thresholds_wait_time: typing.Union[int, float] = None
) -> None
```

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.alarms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}.

---

###### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.cpuThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}.

---

###### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.ignoreMetricsTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}.

---

###### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.loadThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}.

---

###### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.memoryThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}.

---

###### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.thresholdsWaitTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}.

---

##### `reset_downscaling` <a name="reset_downscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```python
def reset_downscaling() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_upscaling` <a name="reset_upscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```python
def reset_upscaling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```python
downscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```python
upscaling: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscaling_input`<sup>Optional</sup> <a name="downscaling_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```python
downscaling_input: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upscaling_input`<sup>Optional</sup> <a name="upscaling_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```python
upscaling_input: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksEcsClusterLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScaling">OpsworksEcsClusterLayerLoadBasedAutoScaling</a>

---


### OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_ecs_cluster_layer

opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">reset_cpu_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">reset_ignore_metrics_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">reset_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">reset_memory_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">reset_thresholds_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarms` <a name="reset_alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_cpu_threshold` <a name="reset_cpu_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```python
def reset_cpu_threshold() -> None
```

##### `reset_ignore_metrics_time` <a name="reset_ignore_metrics_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```python
def reset_ignore_metrics_time() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_load_threshold` <a name="reset_load_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```python
def reset_load_threshold() -> None
```

##### `reset_memory_threshold` <a name="reset_memory_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```python
def reset_memory_threshold() -> None
```

##### `reset_thresholds_wait_time` <a name="reset_thresholds_wait_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```python
def reset_thresholds_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpu_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignore_metrics_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memory_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholds_wait_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```python
alarms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold_input`<sup>Optional</sup> <a name="cpu_threshold_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```python
cpu_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time_input`<sup>Optional</sup> <a name="ignore_metrics_time_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```python
ignore_metrics_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold_input`<sup>Optional</sup> <a name="load_threshold_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```python
load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold_input`<sup>Optional</sup> <a name="memory_threshold_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```python
memory_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time_input`<sup>Optional</sup> <a name="thresholds_wait_time_input" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```python
thresholds_wait_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold`<sup>Required</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time`<sup>Required</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold`<sup>Required</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold`<sup>Required</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time`<sup>Required</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksEcsClusterLayer.OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling">OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling</a>

---



