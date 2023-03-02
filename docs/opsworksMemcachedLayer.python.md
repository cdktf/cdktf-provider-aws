# `opsworksMemcachedLayer` Submodule <a name="`opsworksMemcachedLayer` Submodule" id="@cdktf/provider-aws.opsworksMemcachedLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksMemcachedLayer <a name="OpsworksMemcachedLayer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer aws_opsworks_memcached_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stack_id: str,
  allocated_memory: typing.Union[int, float] = None,
  auto_assign_elastic_ips: typing.Union[bool, IResolvable] = None,
  auto_assign_public_ips: typing.Union[bool, IResolvable] = None,
  auto_healing: typing.Union[bool, IResolvable] = None,
  cloudwatch_configuration: OpsworksMemcachedLayerCloudwatchConfiguration = None,
  custom_configure_recipes: typing.List[str] = None,
  custom_deploy_recipes: typing.List[str] = None,
  custom_instance_profile_arn: str = None,
  custom_json: str = None,
  custom_security_group_ids: typing.List[str] = None,
  custom_setup_recipes: typing.List[str] = None,
  custom_shutdown_recipes: typing.List[str] = None,
  custom_undeploy_recipes: typing.List[str] = None,
  drain_elb_on_shutdown: typing.Union[bool, IResolvable] = None,
  ebs_volume: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerEbsVolume]] = None,
  elastic_load_balancer: str = None,
  id: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_shutdown_timeout: typing.Union[int, float] = None,
  load_based_auto_scaling: OpsworksMemcachedLayerLoadBasedAutoScaling = None,
  name: str = None,
  system_packages: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  use_ebs_optimized_instances: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#stack_id OpsworksMemcachedLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.allocatedMemory">allocated_memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#allocated_memory OpsworksMemcachedLayer#allocated_memory}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_healing OpsworksMemcachedLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_json OpsworksMemcachedLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.ebsVolume">ebs_volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>]]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#id OpsworksMemcachedLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#name OpsworksMemcachedLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#system_packages OpsworksMemcachedLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags OpsworksMemcachedLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags_all OpsworksMemcachedLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.stackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#stack_id OpsworksMemcachedLayer#stack_id}.

---

##### `allocated_memory`<sup>Optional</sup> <a name="allocated_memory" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.allocatedMemory"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#allocated_memory OpsworksMemcachedLayer#allocated_memory}.

---

##### `auto_assign_elastic_ips`<sup>Optional</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoAssignElasticIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}.

---

##### `auto_assign_public_ips`<sup>Optional</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoAssignPublicIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.autoHealing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_healing OpsworksMemcachedLayer#auto_healing}.

---

##### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.cloudwatchConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cloudwatch_configuration OpsworksMemcachedLayer#cloudwatch_configuration}

---

##### `custom_configure_recipes`<sup>Optional</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customConfigureRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}.

---

##### `custom_deploy_recipes`<sup>Optional</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customDeployRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}.

---

##### `custom_instance_profile_arn`<sup>Optional</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customInstanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}.

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_json OpsworksMemcachedLayer#custom_json}.

---

##### `custom_security_group_ids`<sup>Optional</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}.

---

##### `custom_setup_recipes`<sup>Optional</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customSetupRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}.

---

##### `custom_shutdown_recipes`<sup>Optional</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customShutdownRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}.

---

##### `custom_undeploy_recipes`<sup>Optional</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.customUndeployRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}.

---

##### `drain_elb_on_shutdown`<sup>Optional</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.drainElbOnShutdown"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}.

---

##### `ebs_volume`<sup>Optional</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.ebsVolume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>]]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ebs_volume OpsworksMemcachedLayer#ebs_volume}

---

##### `elastic_load_balancer`<sup>Optional</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.elasticLoadBalancer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#id OpsworksMemcachedLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.installUpdatesOnBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}.

---

##### `instance_shutdown_timeout`<sup>Optional</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.instanceShutdownTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}.

---

##### `load_based_auto_scaling`<sup>Optional</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.loadBasedAutoScaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_based_auto_scaling OpsworksMemcachedLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#name OpsworksMemcachedLayer#name}.

---

##### `system_packages`<sup>Optional</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.systemPackages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#system_packages OpsworksMemcachedLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags OpsworksMemcachedLayer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags_all OpsworksMemcachedLayer#tags_all}.

---

##### `use_ebs_optimized_instances`<sup>Optional</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.useEbsOptimizedInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putCloudwatchConfiguration">put_cloudwatch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putEbsVolume">put_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putLoadBasedAutoScaling">put_load_based_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAllocatedMemory">reset_allocated_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignElasticIps">reset_auto_assign_elastic_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignPublicIps">reset_auto_assign_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoHealing">reset_auto_healing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCloudwatchConfiguration">reset_cloudwatch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomConfigureRecipes">reset_custom_configure_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomDeployRecipes">reset_custom_deploy_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomInstanceProfileArn">reset_custom_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomJson">reset_custom_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSecurityGroupIds">reset_custom_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSetupRecipes">reset_custom_setup_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomShutdownRecipes">reset_custom_shutdown_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomUndeployRecipes">reset_custom_undeploy_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetDrainElbOnShutdown">reset_drain_elb_on_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetEbsVolume">reset_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetElasticLoadBalancer">reset_elastic_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstallUpdatesOnBoot">reset_install_updates_on_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstanceShutdownTimeout">reset_instance_shutdown_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetLoadBasedAutoScaling">reset_load_based_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetSystemPackages">reset_system_packages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetUseEbsOptimizedInstances">reset_use_ebs_optimized_instances</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cloudwatch_configuration` <a name="put_cloudwatch_configuration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putCloudwatchConfiguration"></a>

```python
def put_cloudwatch_configuration(
  enabled: typing.Union[bool, IResolvable] = None,
  log_streams: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerCloudwatchConfigurationLogStreams]] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putCloudwatchConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#enabled OpsworksMemcachedLayer#enabled}.

---

###### `log_streams`<sup>Optional</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putCloudwatchConfiguration.parameter.logStreams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>]]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#log_streams OpsworksMemcachedLayer#log_streams}

---

##### `put_ebs_volume` <a name="put_ebs_volume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putEbsVolume"></a>

```python
def put_ebs_volume(
  value: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerEbsVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putEbsVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>]]

---

##### `put_load_based_auto_scaling` <a name="put_load_based_auto_scaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putLoadBasedAutoScaling"></a>

```python
def put_load_based_auto_scaling(
  downscaling: OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling = None,
  enable: typing.Union[bool, IResolvable] = None,
  upscaling: OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling = None
) -> None
```

###### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putLoadBasedAutoScaling.parameter.downscaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#downscaling OpsworksMemcachedLayer#downscaling}

---

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putLoadBasedAutoScaling.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#enable OpsworksMemcachedLayer#enable}.

---

###### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.putLoadBasedAutoScaling.parameter.upscaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#upscaling OpsworksMemcachedLayer#upscaling}

---

##### `reset_allocated_memory` <a name="reset_allocated_memory" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAllocatedMemory"></a>

```python
def reset_allocated_memory() -> None
```

##### `reset_auto_assign_elastic_ips` <a name="reset_auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignElasticIps"></a>

```python
def reset_auto_assign_elastic_ips() -> None
```

##### `reset_auto_assign_public_ips` <a name="reset_auto_assign_public_ips" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignPublicIps"></a>

```python
def reset_auto_assign_public_ips() -> None
```

##### `reset_auto_healing` <a name="reset_auto_healing" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoHealing"></a>

```python
def reset_auto_healing() -> None
```

##### `reset_cloudwatch_configuration` <a name="reset_cloudwatch_configuration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCloudwatchConfiguration"></a>

```python
def reset_cloudwatch_configuration() -> None
```

##### `reset_custom_configure_recipes` <a name="reset_custom_configure_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomConfigureRecipes"></a>

```python
def reset_custom_configure_recipes() -> None
```

##### `reset_custom_deploy_recipes` <a name="reset_custom_deploy_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomDeployRecipes"></a>

```python
def reset_custom_deploy_recipes() -> None
```

##### `reset_custom_instance_profile_arn` <a name="reset_custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomInstanceProfileArn"></a>

```python
def reset_custom_instance_profile_arn() -> None
```

##### `reset_custom_json` <a name="reset_custom_json" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomJson"></a>

```python
def reset_custom_json() -> None
```

##### `reset_custom_security_group_ids` <a name="reset_custom_security_group_ids" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSecurityGroupIds"></a>

```python
def reset_custom_security_group_ids() -> None
```

##### `reset_custom_setup_recipes` <a name="reset_custom_setup_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSetupRecipes"></a>

```python
def reset_custom_setup_recipes() -> None
```

##### `reset_custom_shutdown_recipes` <a name="reset_custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomShutdownRecipes"></a>

```python
def reset_custom_shutdown_recipes() -> None
```

##### `reset_custom_undeploy_recipes` <a name="reset_custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomUndeployRecipes"></a>

```python
def reset_custom_undeploy_recipes() -> None
```

##### `reset_drain_elb_on_shutdown` <a name="reset_drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetDrainElbOnShutdown"></a>

```python
def reset_drain_elb_on_shutdown() -> None
```

##### `reset_ebs_volume` <a name="reset_ebs_volume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetEbsVolume"></a>

```python
def reset_ebs_volume() -> None
```

##### `reset_elastic_load_balancer` <a name="reset_elastic_load_balancer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetElasticLoadBalancer"></a>

```python
def reset_elastic_load_balancer() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_install_updates_on_boot` <a name="reset_install_updates_on_boot" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstallUpdatesOnBoot"></a>

```python
def reset_install_updates_on_boot() -> None
```

##### `reset_instance_shutdown_timeout` <a name="reset_instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstanceShutdownTimeout"></a>

```python
def reset_instance_shutdown_timeout() -> None
```

##### `reset_load_based_auto_scaling` <a name="reset_load_based_auto_scaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetLoadBasedAutoScaling"></a>

```python
def reset_load_based_auto_scaling() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_system_packages` <a name="reset_system_packages" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetSystemPackages"></a>

```python
def reset_system_packages() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_use_ebs_optimized_instances` <a name="reset_use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetUseEbsOptimizedInstances"></a>

```python
def reset_use_ebs_optimized_instances() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference">OpsworksMemcachedLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolume">ebs_volume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList">OpsworksMemcachedLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemoryInput">allocated_memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIpsInput">auto_assign_elastic_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIpsInput">auto_assign_public_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealingInput">auto_healing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfigurationInput">cloudwatch_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipesInput">custom_configure_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipesInput">custom_deploy_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArnInput">custom_instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJsonInput">custom_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIdsInput">custom_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipesInput">custom_setup_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipesInput">custom_shutdown_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipesInput">custom_undeploy_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdownInput">drain_elb_on_shutdown_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolumeInput">ebs_volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancerInput">elastic_load_balancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBootInput">install_updates_on_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeoutInput">instance_shutdown_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.loadBasedAutoScalingInput">load_based_auto_scaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackIdInput">stack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackagesInput">system_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstancesInput">use_ebs_optimized_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemory">allocated_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJson">custom_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_configuration`<sup>Required</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: OpsworksMemcachedLayerCloudwatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference">OpsworksMemcachedLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebs_volume`<sup>Required</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolume"></a>

```python
ebs_volume: OpsworksMemcachedLayerEbsVolumeList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList">OpsworksMemcachedLayerEbsVolumeList</a>

---

##### `load_based_auto_scaling`<sup>Required</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.loadBasedAutoScaling"></a>

```python
load_based_auto_scaling: OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference</a>

---

##### `allocated_memory_input`<sup>Optional</sup> <a name="allocated_memory_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemoryInput"></a>

```python
allocated_memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_assign_elastic_ips_input`<sup>Optional</sup> <a name="auto_assign_elastic_ips_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIpsInput"></a>

```python
auto_assign_elastic_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_public_ips_input`<sup>Optional</sup> <a name="auto_assign_public_ips_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIpsInput"></a>

```python
auto_assign_public_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_healing_input`<sup>Optional</sup> <a name="auto_healing_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealingInput"></a>

```python
auto_healing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloudwatch_configuration_input`<sup>Optional</sup> <a name="cloudwatch_configuration_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfigurationInput"></a>

```python
cloudwatch_configuration_input: OpsworksMemcachedLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

---

##### `custom_configure_recipes_input`<sup>Optional</sup> <a name="custom_configure_recipes_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipesInput"></a>

```python
custom_configure_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_deploy_recipes_input`<sup>Optional</sup> <a name="custom_deploy_recipes_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipesInput"></a>

```python
custom_deploy_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_instance_profile_arn_input`<sup>Optional</sup> <a name="custom_instance_profile_arn_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArnInput"></a>

```python
custom_instance_profile_arn_input: str
```

- *Type:* str

---

##### `custom_json_input`<sup>Optional</sup> <a name="custom_json_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJsonInput"></a>

```python
custom_json_input: str
```

- *Type:* str

---

##### `custom_security_group_ids_input`<sup>Optional</sup> <a name="custom_security_group_ids_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIdsInput"></a>

```python
custom_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_setup_recipes_input`<sup>Optional</sup> <a name="custom_setup_recipes_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipesInput"></a>

```python
custom_setup_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_shutdown_recipes_input`<sup>Optional</sup> <a name="custom_shutdown_recipes_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipesInput"></a>

```python
custom_shutdown_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_undeploy_recipes_input`<sup>Optional</sup> <a name="custom_undeploy_recipes_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipesInput"></a>

```python
custom_undeploy_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drain_elb_on_shutdown_input`<sup>Optional</sup> <a name="drain_elb_on_shutdown_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdownInput"></a>

```python
drain_elb_on_shutdown_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_volume_input`<sup>Optional</sup> <a name="ebs_volume_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolumeInput"></a>

```python
ebs_volume_input: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>]]

---

##### `elastic_load_balancer_input`<sup>Optional</sup> <a name="elastic_load_balancer_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancerInput"></a>

```python
elastic_load_balancer_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `install_updates_on_boot_input`<sup>Optional</sup> <a name="install_updates_on_boot_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBootInput"></a>

```python
install_updates_on_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_shutdown_timeout_input`<sup>Optional</sup> <a name="instance_shutdown_timeout_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeoutInput"></a>

```python
instance_shutdown_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_based_auto_scaling_input`<sup>Optional</sup> <a name="load_based_auto_scaling_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.loadBasedAutoScalingInput"></a>

```python
load_based_auto_scaling_input: OpsworksMemcachedLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `stack_id_input`<sup>Optional</sup> <a name="stack_id_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackIdInput"></a>

```python
stack_id_input: str
```

- *Type:* str

---

##### `system_packages_input`<sup>Optional</sup> <a name="system_packages_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackagesInput"></a>

```python
system_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_ebs_optimized_instances_input`<sup>Optional</sup> <a name="use_ebs_optimized_instances_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstancesInput"></a>

```python
use_ebs_optimized_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allocated_memory`<sup>Required</sup> <a name="allocated_memory" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemory"></a>

```python
allocated_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_assign_elastic_ips`<sup>Required</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIps"></a>

```python
auto_assign_elastic_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_public_ips`<sup>Required</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIps"></a>

```python
auto_assign_public_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_healing`<sup>Required</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_configure_recipes`<sup>Required</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipes"></a>

```python
custom_configure_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_deploy_recipes`<sup>Required</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipes"></a>

```python
custom_deploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_instance_profile_arn`<sup>Required</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArn"></a>

```python
custom_instance_profile_arn: str
```

- *Type:* str

---

##### `custom_json`<sup>Required</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

---

##### `custom_security_group_ids`<sup>Required</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIds"></a>

```python
custom_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_setup_recipes`<sup>Required</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipes"></a>

```python
custom_setup_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_shutdown_recipes`<sup>Required</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipes"></a>

```python
custom_shutdown_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_undeploy_recipes`<sup>Required</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipes"></a>

```python
custom_undeploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drain_elb_on_shutdown`<sup>Required</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdown"></a>

```python
drain_elb_on_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elastic_load_balancer`<sup>Required</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancer"></a>

```python
elastic_load_balancer: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `install_updates_on_boot`<sup>Required</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_shutdown_timeout`<sup>Required</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeout"></a>

```python
instance_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

##### `system_packages`<sup>Required</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackages"></a>

```python
system_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_ebs_optimized_instances`<sup>Required</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstances"></a>

```python
use_ebs_optimized_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksMemcachedLayerCloudwatchConfiguration <a name="OpsworksMemcachedLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration(
  enabled: typing.Union[bool, IResolvable] = None,
  log_streams: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerCloudwatchConfigurationLogStreams]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#enabled OpsworksMemcachedLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.logStreams">log_streams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>]]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#enabled OpsworksMemcachedLayer#enabled}.

---

##### `log_streams`<sup>Optional</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.logStreams"></a>

```python
log_streams: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>]]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#log_streams OpsworksMemcachedLayer#log_streams}

---

### OpsworksMemcachedLayerCloudwatchConfigurationLogStreams <a name="OpsworksMemcachedLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams(
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
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#file OpsworksMemcachedLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#log_group_name OpsworksMemcachedLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#batch_count OpsworksMemcachedLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#batch_size OpsworksMemcachedLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.bufferDuration">buffer_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#buffer_duration OpsworksMemcachedLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetime_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#datetime_format OpsworksMemcachedLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#encoding OpsworksMemcachedLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">file_fingerprint_lines</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#file_fingerprint_lines OpsworksMemcachedLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.initialPosition">initial_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#initial_position OpsworksMemcachedLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multiline_start_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#multiline_start_pattern OpsworksMemcachedLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#time_zone OpsworksMemcachedLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.file"></a>

```python
file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#file OpsworksMemcachedLayer#file}.

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#log_group_name OpsworksMemcachedLayer#log_group_name}.

---

##### `batch_count`<sup>Optional</sup> <a name="batch_count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#batch_count OpsworksMemcachedLayer#batch_count}.

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#batch_size OpsworksMemcachedLayer#batch_size}.

---

##### `buffer_duration`<sup>Optional</sup> <a name="buffer_duration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```python
buffer_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#buffer_duration OpsworksMemcachedLayer#buffer_duration}.

---

##### `datetime_format`<sup>Optional</sup> <a name="datetime_format" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```python
datetime_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#datetime_format OpsworksMemcachedLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#encoding OpsworksMemcachedLayer#encoding}.

---

##### `file_fingerprint_lines`<sup>Optional</sup> <a name="file_fingerprint_lines" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```python
file_fingerprint_lines: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#file_fingerprint_lines OpsworksMemcachedLayer#file_fingerprint_lines}.

---

##### `initial_position`<sup>Optional</sup> <a name="initial_position" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```python
initial_position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#initial_position OpsworksMemcachedLayer#initial_position}.

---

##### `multiline_start_pattern`<sup>Optional</sup> <a name="multiline_start_pattern" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```python
multiline_start_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#multiline_start_pattern OpsworksMemcachedLayer#multiline_start_pattern}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#time_zone OpsworksMemcachedLayer#time_zone}.

---

### OpsworksMemcachedLayerConfig <a name="OpsworksMemcachedLayerConfig" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stack_id: str,
  allocated_memory: typing.Union[int, float] = None,
  auto_assign_elastic_ips: typing.Union[bool, IResolvable] = None,
  auto_assign_public_ips: typing.Union[bool, IResolvable] = None,
  auto_healing: typing.Union[bool, IResolvable] = None,
  cloudwatch_configuration: OpsworksMemcachedLayerCloudwatchConfiguration = None,
  custom_configure_recipes: typing.List[str] = None,
  custom_deploy_recipes: typing.List[str] = None,
  custom_instance_profile_arn: str = None,
  custom_json: str = None,
  custom_security_group_ids: typing.List[str] = None,
  custom_setup_recipes: typing.List[str] = None,
  custom_shutdown_recipes: typing.List[str] = None,
  custom_undeploy_recipes: typing.List[str] = None,
  drain_elb_on_shutdown: typing.Union[bool, IResolvable] = None,
  ebs_volume: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerEbsVolume]] = None,
  elastic_load_balancer: str = None,
  id: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_shutdown_timeout: typing.Union[int, float] = None,
  load_based_auto_scaling: OpsworksMemcachedLayerLoadBasedAutoScaling = None,
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
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#stack_id OpsworksMemcachedLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.allocatedMemory">allocated_memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#allocated_memory OpsworksMemcachedLayer#allocated_memory}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_healing OpsworksMemcachedLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_json OpsworksMemcachedLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.ebsVolume">ebs_volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>]]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#id OpsworksMemcachedLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#name OpsworksMemcachedLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#system_packages OpsworksMemcachedLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags OpsworksMemcachedLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags_all OpsworksMemcachedLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#stack_id OpsworksMemcachedLayer#stack_id}.

---

##### `allocated_memory`<sup>Optional</sup> <a name="allocated_memory" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.allocatedMemory"></a>

```python
allocated_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#allocated_memory OpsworksMemcachedLayer#allocated_memory}.

---

##### `auto_assign_elastic_ips`<sup>Optional</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignElasticIps"></a>

```python
auto_assign_elastic_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}.

---

##### `auto_assign_public_ips`<sup>Optional</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignPublicIps"></a>

```python
auto_assign_public_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#auto_healing OpsworksMemcachedLayer#auto_healing}.

---

##### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: OpsworksMemcachedLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cloudwatch_configuration OpsworksMemcachedLayer#cloudwatch_configuration}

---

##### `custom_configure_recipes`<sup>Optional</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customConfigureRecipes"></a>

```python
custom_configure_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}.

---

##### `custom_deploy_recipes`<sup>Optional</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customDeployRecipes"></a>

```python
custom_deploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}.

---

##### `custom_instance_profile_arn`<sup>Optional</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customInstanceProfileArn"></a>

```python
custom_instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}.

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_json OpsworksMemcachedLayer#custom_json}.

---

##### `custom_security_group_ids`<sup>Optional</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSecurityGroupIds"></a>

```python
custom_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}.

---

##### `custom_setup_recipes`<sup>Optional</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSetupRecipes"></a>

```python
custom_setup_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}.

---

##### `custom_shutdown_recipes`<sup>Optional</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customShutdownRecipes"></a>

```python
custom_shutdown_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}.

---

##### `custom_undeploy_recipes`<sup>Optional</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customUndeployRecipes"></a>

```python
custom_undeploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}.

---

##### `drain_elb_on_shutdown`<sup>Optional</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.drainElbOnShutdown"></a>

```python
drain_elb_on_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}.

---

##### `ebs_volume`<sup>Optional</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.ebsVolume"></a>

```python
ebs_volume: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>]]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ebs_volume OpsworksMemcachedLayer#ebs_volume}

---

##### `elastic_load_balancer`<sup>Optional</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.elasticLoadBalancer"></a>

```python
elastic_load_balancer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#id OpsworksMemcachedLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}.

---

##### `instance_shutdown_timeout`<sup>Optional</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.instanceShutdownTimeout"></a>

```python
instance_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}.

---

##### `load_based_auto_scaling`<sup>Optional</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.loadBasedAutoScaling"></a>

```python
load_based_auto_scaling: OpsworksMemcachedLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_based_auto_scaling OpsworksMemcachedLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#name OpsworksMemcachedLayer#name}.

---

##### `system_packages`<sup>Optional</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.systemPackages"></a>

```python
system_packages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#system_packages OpsworksMemcachedLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags OpsworksMemcachedLayer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#tags_all OpsworksMemcachedLayer#tags_all}.

---

##### `use_ebs_optimized_instances`<sup>Optional</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.useEbsOptimizedInstances"></a>

```python
use_ebs_optimized_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}.

---

### OpsworksMemcachedLayerEbsVolume <a name="OpsworksMemcachedLayerEbsVolume" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume(
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
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.mountPoint">mount_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#mount_point OpsworksMemcachedLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.numberOfDisks">number_of_disks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#number_of_disks OpsworksMemcachedLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#size OpsworksMemcachedLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#encrypted OpsworksMemcachedLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#iops OpsworksMemcachedLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.raidLevel">raid_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#raid_level OpsworksMemcachedLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#type OpsworksMemcachedLayer#type}. |

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#mount_point OpsworksMemcachedLayer#mount_point}.

---

##### `number_of_disks`<sup>Required</sup> <a name="number_of_disks" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.numberOfDisks"></a>

```python
number_of_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#number_of_disks OpsworksMemcachedLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#size OpsworksMemcachedLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#encrypted OpsworksMemcachedLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#iops OpsworksMemcachedLayer#iops}.

---

##### `raid_level`<sup>Optional</sup> <a name="raid_level" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.raidLevel"></a>

```python
raid_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#raid_level OpsworksMemcachedLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#type OpsworksMemcachedLayer#type}.

---

### OpsworksMemcachedLayerLoadBasedAutoScaling <a name="OpsworksMemcachedLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling(
  downscaling: OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling = None,
  enable: typing.Union[bool, IResolvable] = None,
  upscaling: OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#enable OpsworksMemcachedLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.downscaling"></a>

```python
downscaling: OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#downscaling OpsworksMemcachedLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#enable OpsworksMemcachedLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling.property.upscaling"></a>

```python
upscaling: OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#upscaling OpsworksMemcachedLayer#upscaling}

---

### OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling <a name="OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling(
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
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#alarms OpsworksMemcachedLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cpu_threshold OpsworksMemcachedLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ignore_metrics_time OpsworksMemcachedLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_count OpsworksMemcachedLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_threshold OpsworksMemcachedLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#memory_threshold OpsworksMemcachedLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#thresholds_wait_time OpsworksMemcachedLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#alarms OpsworksMemcachedLayer#alarms}.

---

##### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cpu_threshold OpsworksMemcachedLayer#cpu_threshold}.

---

##### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ignore_metrics_time OpsworksMemcachedLayer#ignore_metrics_time}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_count OpsworksMemcachedLayer#instance_count}.

---

##### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_threshold OpsworksMemcachedLayer#load_threshold}.

---

##### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#memory_threshold OpsworksMemcachedLayer#memory_threshold}.

---

##### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#thresholds_wait_time OpsworksMemcachedLayer#thresholds_wait_time}.

---

### OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling <a name="OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling(
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
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#alarms OpsworksMemcachedLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cpu_threshold OpsworksMemcachedLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ignore_metrics_time OpsworksMemcachedLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_count OpsworksMemcachedLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_threshold OpsworksMemcachedLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#memory_threshold OpsworksMemcachedLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#thresholds_wait_time OpsworksMemcachedLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#alarms OpsworksMemcachedLayer#alarms}.

---

##### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cpu_threshold OpsworksMemcachedLayer#cpu_threshold}.

---

##### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ignore_metrics_time OpsworksMemcachedLayer#ignore_metrics_time}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_count OpsworksMemcachedLayer#instance_count}.

---

##### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_threshold OpsworksMemcachedLayer#load_threshold}.

---

##### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#memory_threshold OpsworksMemcachedLayer#memory_threshold}.

---

##### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#thresholds_wait_time OpsworksMemcachedLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>]]

---


### OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">reset_batch_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">reset_buffer_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">reset_datetime_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">reset_file_fingerprint_lines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">reset_initial_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">reset_multiline_start_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_count` <a name="reset_batch_count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```python
def reset_batch_count() -> None
```

##### `reset_batch_size` <a name="reset_batch_size" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_buffer_duration` <a name="reset_buffer_duration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```python
def reset_buffer_duration() -> None
```

##### `reset_datetime_format` <a name="reset_datetime_format" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```python
def reset_datetime_format() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_file_fingerprint_lines` <a name="reset_file_fingerprint_lines" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```python
def reset_file_fingerprint_lines() -> None
```

##### `reset_initial_position` <a name="reset_initial_position" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```python
def reset_initial_position() -> None
```

##### `reset_multiline_start_pattern` <a name="reset_multiline_start_pattern" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```python
def reset_multiline_start_pattern() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batch_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">buffer_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetime_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">file_fingerprint_lines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initial_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multiline_start_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">buffer_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetime_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">file_fingerprint_lines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initial_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multiline_start_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_count_input`<sup>Optional</sup> <a name="batch_count_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```python
batch_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buffer_duration_input`<sup>Optional</sup> <a name="buffer_duration_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```python
buffer_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datetime_format_input`<sup>Optional</sup> <a name="datetime_format_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```python
datetime_format_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `file_fingerprint_lines_input`<sup>Optional</sup> <a name="file_fingerprint_lines_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```python
file_fingerprint_lines_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `initial_position_input`<sup>Optional</sup> <a name="initial_position_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```python
initial_position_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `multiline_start_pattern_input`<sup>Optional</sup> <a name="multiline_start_pattern_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```python
multiline_start_pattern_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `batch_count`<sup>Required</sup> <a name="batch_count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buffer_duration`<sup>Required</sup> <a name="buffer_duration" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```python
buffer_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datetime_format`<sup>Required</sup> <a name="datetime_format" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```python
datetime_format: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `file_fingerprint_lines`<sup>Required</sup> <a name="file_fingerprint_lines" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```python
file_fingerprint_lines: str
```

- *Type:* str

---

##### `initial_position`<sup>Required</sup> <a name="initial_position" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```python
initial_position: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `multiline_start_pattern`<sup>Required</sup> <a name="multiline_start_pattern" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```python
multiline_start_pattern: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksMemcachedLayerCloudwatchConfigurationLogStreams, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>, cdktf.IResolvable]

---


### OpsworksMemcachedLayerCloudwatchConfigurationOutputReference <a name="OpsworksMemcachedLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.putLogStreams">put_log_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetLogStreams">reset_log_streams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_streams` <a name="put_log_streams" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```python
def put_log_streams(
  value: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerCloudwatchConfigurationLogStreams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_streams` <a name="reset_log_streams" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```python
def reset_log_streams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreams">log_streams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList">OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">log_streams_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_streams`<sup>Required</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```python
log_streams: OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList">OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_streams_input`<sup>Optional</sup> <a name="log_streams_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```python
log_streams_input: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksMemcachedLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

---


### OpsworksMemcachedLayerEbsVolumeList <a name="OpsworksMemcachedLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksMemcachedLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksMemcachedLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>]]

---


### OpsworksMemcachedLayerEbsVolumeOutputReference <a name="OpsworksMemcachedLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetRaidLevel">reset_raid_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_raid_level` <a name="reset_raid_level" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```python
def reset_raid_level() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisksInput">number_of_disks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevelInput">raid_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisks">number_of_disks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevel">raid_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `number_of_disks_input`<sup>Optional</sup> <a name="number_of_disks_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```python
number_of_disks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `raid_level_input`<sup>Optional</sup> <a name="raid_level_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```python
raid_level_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `number_of_disks`<sup>Required</sup> <a name="number_of_disks" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```python
number_of_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `raid_level`<sup>Required</sup> <a name="raid_level" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevel"></a>

```python
raid_level: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksMemcachedLayerEbsVolume, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>, cdktf.IResolvable]

---


### OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">reset_cpu_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">reset_ignore_metrics_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">reset_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">reset_memory_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">reset_thresholds_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarms` <a name="reset_alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_cpu_threshold` <a name="reset_cpu_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```python
def reset_cpu_threshold() -> None
```

##### `reset_ignore_metrics_time` <a name="reset_ignore_metrics_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```python
def reset_ignore_metrics_time() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_load_threshold` <a name="reset_load_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```python
def reset_load_threshold() -> None
```

##### `reset_memory_threshold` <a name="reset_memory_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```python
def reset_memory_threshold() -> None
```

##### `reset_thresholds_wait_time` <a name="reset_thresholds_wait_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```python
def reset_thresholds_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpu_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignore_metrics_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memory_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholds_wait_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```python
alarms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold_input`<sup>Optional</sup> <a name="cpu_threshold_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```python
cpu_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time_input`<sup>Optional</sup> <a name="ignore_metrics_time_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```python
ignore_metrics_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold_input`<sup>Optional</sup> <a name="load_threshold_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```python
load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold_input`<sup>Optional</sup> <a name="memory_threshold_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```python
memory_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time_input`<sup>Optional</sup> <a name="thresholds_wait_time_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```python
thresholds_wait_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold`<sup>Required</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time`<sup>Required</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold`<sup>Required</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold`<sup>Required</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time`<sup>Required</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference <a name="OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling">put_downscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling">put_upscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetDownscaling">reset_downscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetUpscaling">reset_upscaling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_downscaling` <a name="put_downscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

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

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.alarms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#alarms OpsworksMemcachedLayer#alarms}.

---

###### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.cpuThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cpu_threshold OpsworksMemcachedLayer#cpu_threshold}.

---

###### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.ignoreMetricsTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ignore_metrics_time OpsworksMemcachedLayer#ignore_metrics_time}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_count OpsworksMemcachedLayer#instance_count}.

---

###### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.loadThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_threshold OpsworksMemcachedLayer#load_threshold}.

---

###### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.memoryThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#memory_threshold OpsworksMemcachedLayer#memory_threshold}.

---

###### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.thresholdsWaitTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#thresholds_wait_time OpsworksMemcachedLayer#thresholds_wait_time}.

---

##### `put_upscaling` <a name="put_upscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

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

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.alarms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#alarms OpsworksMemcachedLayer#alarms}.

---

###### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.cpuThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#cpu_threshold OpsworksMemcachedLayer#cpu_threshold}.

---

###### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.ignoreMetricsTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#ignore_metrics_time OpsworksMemcachedLayer#ignore_metrics_time}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#instance_count OpsworksMemcachedLayer#instance_count}.

---

###### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.loadThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#load_threshold OpsworksMemcachedLayer#load_threshold}.

---

###### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.memoryThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#memory_threshold OpsworksMemcachedLayer#memory_threshold}.

---

###### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.thresholdsWaitTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer#thresholds_wait_time OpsworksMemcachedLayer#thresholds_wait_time}.

---

##### `reset_downscaling` <a name="reset_downscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```python
def reset_downscaling() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_upscaling` <a name="reset_upscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```python
def reset_upscaling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```python
downscaling: OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```python
upscaling: OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscaling_input`<sup>Optional</sup> <a name="downscaling_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```python
downscaling_input: OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling">OpsworksMemcachedLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upscaling_input`<sup>Optional</sup> <a name="upscaling_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```python
upscaling_input: OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksMemcachedLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScaling">OpsworksMemcachedLayerLoadBasedAutoScaling</a>

---


### OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_memcached_layer

opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">reset_cpu_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">reset_ignore_metrics_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">reset_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">reset_memory_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">reset_thresholds_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarms` <a name="reset_alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_cpu_threshold` <a name="reset_cpu_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```python
def reset_cpu_threshold() -> None
```

##### `reset_ignore_metrics_time` <a name="reset_ignore_metrics_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```python
def reset_ignore_metrics_time() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_load_threshold` <a name="reset_load_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```python
def reset_load_threshold() -> None
```

##### `reset_memory_threshold` <a name="reset_memory_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```python
def reset_memory_threshold() -> None
```

##### `reset_thresholds_wait_time` <a name="reset_thresholds_wait_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```python
def reset_thresholds_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpu_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignore_metrics_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memory_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholds_wait_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```python
alarms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold_input`<sup>Optional</sup> <a name="cpu_threshold_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```python
cpu_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time_input`<sup>Optional</sup> <a name="ignore_metrics_time_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```python
ignore_metrics_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold_input`<sup>Optional</sup> <a name="load_threshold_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```python
load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold_input`<sup>Optional</sup> <a name="memory_threshold_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```python
memory_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time_input`<sup>Optional</sup> <a name="thresholds_wait_time_input" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```python
thresholds_wait_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold`<sup>Required</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time`<sup>Required</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold`<sup>Required</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold`<sup>Required</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time`<sup>Required</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMemcachedLayer.OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling">OpsworksMemcachedLayerLoadBasedAutoScalingUpscaling</a>

---



