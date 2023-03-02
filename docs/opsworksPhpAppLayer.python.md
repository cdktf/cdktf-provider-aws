# `opsworksPhpAppLayer` Submodule <a name="`opsworksPhpAppLayer` Submodule" id="@cdktf/provider-aws.opsworksPhpAppLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksPhpAppLayer <a name="OpsworksPhpAppLayer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer aws_opsworks_php_app_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayer(
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
  auto_assign_elastic_ips: typing.Union[bool, IResolvable] = None,
  auto_assign_public_ips: typing.Union[bool, IResolvable] = None,
  auto_healing: typing.Union[bool, IResolvable] = None,
  cloudwatch_configuration: OpsworksPhpAppLayerCloudwatchConfiguration = None,
  custom_configure_recipes: typing.List[str] = None,
  custom_deploy_recipes: typing.List[str] = None,
  custom_instance_profile_arn: str = None,
  custom_json: str = None,
  custom_security_group_ids: typing.List[str] = None,
  custom_setup_recipes: typing.List[str] = None,
  custom_shutdown_recipes: typing.List[str] = None,
  custom_undeploy_recipes: typing.List[str] = None,
  drain_elb_on_shutdown: typing.Union[bool, IResolvable] = None,
  ebs_volume: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerEbsVolume]] = None,
  elastic_load_balancer: str = None,
  id: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_shutdown_timeout: typing.Union[int, float] = None,
  load_based_auto_scaling: OpsworksPhpAppLayerLoadBasedAutoScaling = None,
  name: str = None,
  system_packages: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  use_ebs_optimized_instances: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#stack_id OpsworksPhpAppLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_assign_elastic_ips OpsworksPhpAppLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_assign_public_ips OpsworksPhpAppLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_healing OpsworksPhpAppLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration">OpsworksPhpAppLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_configure_recipes OpsworksPhpAppLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_deploy_recipes OpsworksPhpAppLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_instance_profile_arn OpsworksPhpAppLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_json OpsworksPhpAppLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_security_group_ids OpsworksPhpAppLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_setup_recipes OpsworksPhpAppLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_shutdown_recipes OpsworksPhpAppLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_undeploy_recipes OpsworksPhpAppLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#drain_elb_on_shutdown OpsworksPhpAppLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.ebsVolume">ebs_volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume">OpsworksPhpAppLayerEbsVolume</a>]]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#elastic_load_balancer OpsworksPhpAppLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#id OpsworksPhpAppLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#install_updates_on_boot OpsworksPhpAppLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#instance_shutdown_timeout OpsworksPhpAppLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling">OpsworksPhpAppLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#name OpsworksPhpAppLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#system_packages OpsworksPhpAppLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#tags OpsworksPhpAppLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#tags_all OpsworksPhpAppLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#use_ebs_optimized_instances OpsworksPhpAppLayer#use_ebs_optimized_instances}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.stackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#stack_id OpsworksPhpAppLayer#stack_id}.

---

##### `auto_assign_elastic_ips`<sup>Optional</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.autoAssignElasticIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_assign_elastic_ips OpsworksPhpAppLayer#auto_assign_elastic_ips}.

---

##### `auto_assign_public_ips`<sup>Optional</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.autoAssignPublicIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_assign_public_ips OpsworksPhpAppLayer#auto_assign_public_ips}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.autoHealing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_healing OpsworksPhpAppLayer#auto_healing}.

---

##### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.cloudwatchConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration">OpsworksPhpAppLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#cloudwatch_configuration OpsworksPhpAppLayer#cloudwatch_configuration}

---

##### `custom_configure_recipes`<sup>Optional</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customConfigureRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_configure_recipes OpsworksPhpAppLayer#custom_configure_recipes}.

---

##### `custom_deploy_recipes`<sup>Optional</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customDeployRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_deploy_recipes OpsworksPhpAppLayer#custom_deploy_recipes}.

---

##### `custom_instance_profile_arn`<sup>Optional</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customInstanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_instance_profile_arn OpsworksPhpAppLayer#custom_instance_profile_arn}.

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_json OpsworksPhpAppLayer#custom_json}.

---

##### `custom_security_group_ids`<sup>Optional</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_security_group_ids OpsworksPhpAppLayer#custom_security_group_ids}.

---

##### `custom_setup_recipes`<sup>Optional</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customSetupRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_setup_recipes OpsworksPhpAppLayer#custom_setup_recipes}.

---

##### `custom_shutdown_recipes`<sup>Optional</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customShutdownRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_shutdown_recipes OpsworksPhpAppLayer#custom_shutdown_recipes}.

---

##### `custom_undeploy_recipes`<sup>Optional</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.customUndeployRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_undeploy_recipes OpsworksPhpAppLayer#custom_undeploy_recipes}.

---

##### `drain_elb_on_shutdown`<sup>Optional</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.drainElbOnShutdown"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#drain_elb_on_shutdown OpsworksPhpAppLayer#drain_elb_on_shutdown}.

---

##### `ebs_volume`<sup>Optional</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.ebsVolume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume">OpsworksPhpAppLayerEbsVolume</a>]]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#ebs_volume OpsworksPhpAppLayer#ebs_volume}

---

##### `elastic_load_balancer`<sup>Optional</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.elasticLoadBalancer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#elastic_load_balancer OpsworksPhpAppLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#id OpsworksPhpAppLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.installUpdatesOnBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#install_updates_on_boot OpsworksPhpAppLayer#install_updates_on_boot}.

---

##### `instance_shutdown_timeout`<sup>Optional</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.instanceShutdownTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#instance_shutdown_timeout OpsworksPhpAppLayer#instance_shutdown_timeout}.

---

##### `load_based_auto_scaling`<sup>Optional</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.loadBasedAutoScaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling">OpsworksPhpAppLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#load_based_auto_scaling OpsworksPhpAppLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#name OpsworksPhpAppLayer#name}.

---

##### `system_packages`<sup>Optional</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.systemPackages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#system_packages OpsworksPhpAppLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#tags OpsworksPhpAppLayer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#tags_all OpsworksPhpAppLayer#tags_all}.

---

##### `use_ebs_optimized_instances`<sup>Optional</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.Initializer.parameter.useEbsOptimizedInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#use_ebs_optimized_instances OpsworksPhpAppLayer#use_ebs_optimized_instances}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putCloudwatchConfiguration">put_cloudwatch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putEbsVolume">put_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putLoadBasedAutoScaling">put_load_based_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetAutoAssignElasticIps">reset_auto_assign_elastic_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetAutoAssignPublicIps">reset_auto_assign_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetAutoHealing">reset_auto_healing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCloudwatchConfiguration">reset_cloudwatch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomConfigureRecipes">reset_custom_configure_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomDeployRecipes">reset_custom_deploy_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomInstanceProfileArn">reset_custom_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomJson">reset_custom_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomSecurityGroupIds">reset_custom_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomSetupRecipes">reset_custom_setup_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomShutdownRecipes">reset_custom_shutdown_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomUndeployRecipes">reset_custom_undeploy_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetDrainElbOnShutdown">reset_drain_elb_on_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetEbsVolume">reset_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetElasticLoadBalancer">reset_elastic_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetInstallUpdatesOnBoot">reset_install_updates_on_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetInstanceShutdownTimeout">reset_instance_shutdown_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetLoadBasedAutoScaling">reset_load_based_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetSystemPackages">reset_system_packages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetUseEbsOptimizedInstances">reset_use_ebs_optimized_instances</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cloudwatch_configuration` <a name="put_cloudwatch_configuration" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putCloudwatchConfiguration"></a>

```python
def put_cloudwatch_configuration(
  enabled: typing.Union[bool, IResolvable] = None,
  log_streams: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerCloudwatchConfigurationLogStreams]] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putCloudwatchConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#enabled OpsworksPhpAppLayer#enabled}.

---

###### `log_streams`<sup>Optional</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putCloudwatchConfiguration.parameter.logStreams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams">OpsworksPhpAppLayerCloudwatchConfigurationLogStreams</a>]]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#log_streams OpsworksPhpAppLayer#log_streams}

---

##### `put_ebs_volume` <a name="put_ebs_volume" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putEbsVolume"></a>

```python
def put_ebs_volume(
  value: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerEbsVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putEbsVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume">OpsworksPhpAppLayerEbsVolume</a>]]

---

##### `put_load_based_auto_scaling` <a name="put_load_based_auto_scaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putLoadBasedAutoScaling"></a>

```python
def put_load_based_auto_scaling(
  downscaling: OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling = None,
  enable: typing.Union[bool, IResolvable] = None,
  upscaling: OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling = None
) -> None
```

###### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putLoadBasedAutoScaling.parameter.downscaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling">OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#downscaling OpsworksPhpAppLayer#downscaling}

---

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putLoadBasedAutoScaling.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#enable OpsworksPhpAppLayer#enable}.

---

###### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.putLoadBasedAutoScaling.parameter.upscaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling">OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#upscaling OpsworksPhpAppLayer#upscaling}

---

##### `reset_auto_assign_elastic_ips` <a name="reset_auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetAutoAssignElasticIps"></a>

```python
def reset_auto_assign_elastic_ips() -> None
```

##### `reset_auto_assign_public_ips` <a name="reset_auto_assign_public_ips" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetAutoAssignPublicIps"></a>

```python
def reset_auto_assign_public_ips() -> None
```

##### `reset_auto_healing` <a name="reset_auto_healing" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetAutoHealing"></a>

```python
def reset_auto_healing() -> None
```

##### `reset_cloudwatch_configuration` <a name="reset_cloudwatch_configuration" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCloudwatchConfiguration"></a>

```python
def reset_cloudwatch_configuration() -> None
```

##### `reset_custom_configure_recipes` <a name="reset_custom_configure_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomConfigureRecipes"></a>

```python
def reset_custom_configure_recipes() -> None
```

##### `reset_custom_deploy_recipes` <a name="reset_custom_deploy_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomDeployRecipes"></a>

```python
def reset_custom_deploy_recipes() -> None
```

##### `reset_custom_instance_profile_arn` <a name="reset_custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomInstanceProfileArn"></a>

```python
def reset_custom_instance_profile_arn() -> None
```

##### `reset_custom_json` <a name="reset_custom_json" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomJson"></a>

```python
def reset_custom_json() -> None
```

##### `reset_custom_security_group_ids` <a name="reset_custom_security_group_ids" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomSecurityGroupIds"></a>

```python
def reset_custom_security_group_ids() -> None
```

##### `reset_custom_setup_recipes` <a name="reset_custom_setup_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomSetupRecipes"></a>

```python
def reset_custom_setup_recipes() -> None
```

##### `reset_custom_shutdown_recipes` <a name="reset_custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomShutdownRecipes"></a>

```python
def reset_custom_shutdown_recipes() -> None
```

##### `reset_custom_undeploy_recipes` <a name="reset_custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetCustomUndeployRecipes"></a>

```python
def reset_custom_undeploy_recipes() -> None
```

##### `reset_drain_elb_on_shutdown` <a name="reset_drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetDrainElbOnShutdown"></a>

```python
def reset_drain_elb_on_shutdown() -> None
```

##### `reset_ebs_volume` <a name="reset_ebs_volume" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetEbsVolume"></a>

```python
def reset_ebs_volume() -> None
```

##### `reset_elastic_load_balancer` <a name="reset_elastic_load_balancer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetElasticLoadBalancer"></a>

```python
def reset_elastic_load_balancer() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_install_updates_on_boot` <a name="reset_install_updates_on_boot" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetInstallUpdatesOnBoot"></a>

```python
def reset_install_updates_on_boot() -> None
```

##### `reset_instance_shutdown_timeout` <a name="reset_instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetInstanceShutdownTimeout"></a>

```python
def reset_instance_shutdown_timeout() -> None
```

##### `reset_load_based_auto_scaling` <a name="reset_load_based_auto_scaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetLoadBasedAutoScaling"></a>

```python
def reset_load_based_auto_scaling() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_system_packages` <a name="reset_system_packages" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetSystemPackages"></a>

```python
def reset_system_packages() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_use_ebs_optimized_instances` <a name="reset_use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.resetUseEbsOptimizedInstances"></a>

```python
def reset_use_ebs_optimized_instances() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference">OpsworksPhpAppLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.ebsVolume">ebs_volume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList">OpsworksPhpAppLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference">OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoAssignElasticIpsInput">auto_assign_elastic_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoAssignPublicIpsInput">auto_assign_public_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoHealingInput">auto_healing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.cloudwatchConfigurationInput">cloudwatch_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration">OpsworksPhpAppLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customConfigureRecipesInput">custom_configure_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customDeployRecipesInput">custom_deploy_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customInstanceProfileArnInput">custom_instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customJsonInput">custom_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customSecurityGroupIdsInput">custom_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customSetupRecipesInput">custom_setup_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customShutdownRecipesInput">custom_shutdown_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customUndeployRecipesInput">custom_undeploy_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.drainElbOnShutdownInput">drain_elb_on_shutdown_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.ebsVolumeInput">ebs_volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume">OpsworksPhpAppLayerEbsVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.elasticLoadBalancerInput">elastic_load_balancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.installUpdatesOnBootInput">install_updates_on_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.instanceShutdownTimeoutInput">instance_shutdown_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.loadBasedAutoScalingInput">load_based_auto_scaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling">OpsworksPhpAppLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.stackIdInput">stack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.systemPackagesInput">system_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.useEbsOptimizedInstancesInput">use_ebs_optimized_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customJson">custom_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_configuration`<sup>Required</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: OpsworksPhpAppLayerCloudwatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference">OpsworksPhpAppLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebs_volume`<sup>Required</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.ebsVolume"></a>

```python
ebs_volume: OpsworksPhpAppLayerEbsVolumeList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList">OpsworksPhpAppLayerEbsVolumeList</a>

---

##### `load_based_auto_scaling`<sup>Required</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.loadBasedAutoScaling"></a>

```python
load_based_auto_scaling: OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference">OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference</a>

---

##### `auto_assign_elastic_ips_input`<sup>Optional</sup> <a name="auto_assign_elastic_ips_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoAssignElasticIpsInput"></a>

```python
auto_assign_elastic_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_public_ips_input`<sup>Optional</sup> <a name="auto_assign_public_ips_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoAssignPublicIpsInput"></a>

```python
auto_assign_public_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_healing_input`<sup>Optional</sup> <a name="auto_healing_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoHealingInput"></a>

```python
auto_healing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloudwatch_configuration_input`<sup>Optional</sup> <a name="cloudwatch_configuration_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.cloudwatchConfigurationInput"></a>

```python
cloudwatch_configuration_input: OpsworksPhpAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration">OpsworksPhpAppLayerCloudwatchConfiguration</a>

---

##### `custom_configure_recipes_input`<sup>Optional</sup> <a name="custom_configure_recipes_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customConfigureRecipesInput"></a>

```python
custom_configure_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_deploy_recipes_input`<sup>Optional</sup> <a name="custom_deploy_recipes_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customDeployRecipesInput"></a>

```python
custom_deploy_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_instance_profile_arn_input`<sup>Optional</sup> <a name="custom_instance_profile_arn_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customInstanceProfileArnInput"></a>

```python
custom_instance_profile_arn_input: str
```

- *Type:* str

---

##### `custom_json_input`<sup>Optional</sup> <a name="custom_json_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customJsonInput"></a>

```python
custom_json_input: str
```

- *Type:* str

---

##### `custom_security_group_ids_input`<sup>Optional</sup> <a name="custom_security_group_ids_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customSecurityGroupIdsInput"></a>

```python
custom_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_setup_recipes_input`<sup>Optional</sup> <a name="custom_setup_recipes_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customSetupRecipesInput"></a>

```python
custom_setup_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_shutdown_recipes_input`<sup>Optional</sup> <a name="custom_shutdown_recipes_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customShutdownRecipesInput"></a>

```python
custom_shutdown_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_undeploy_recipes_input`<sup>Optional</sup> <a name="custom_undeploy_recipes_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customUndeployRecipesInput"></a>

```python
custom_undeploy_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drain_elb_on_shutdown_input`<sup>Optional</sup> <a name="drain_elb_on_shutdown_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.drainElbOnShutdownInput"></a>

```python
drain_elb_on_shutdown_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_volume_input`<sup>Optional</sup> <a name="ebs_volume_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.ebsVolumeInput"></a>

```python
ebs_volume_input: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume">OpsworksPhpAppLayerEbsVolume</a>]]

---

##### `elastic_load_balancer_input`<sup>Optional</sup> <a name="elastic_load_balancer_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.elasticLoadBalancerInput"></a>

```python
elastic_load_balancer_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `install_updates_on_boot_input`<sup>Optional</sup> <a name="install_updates_on_boot_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.installUpdatesOnBootInput"></a>

```python
install_updates_on_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_shutdown_timeout_input`<sup>Optional</sup> <a name="instance_shutdown_timeout_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.instanceShutdownTimeoutInput"></a>

```python
instance_shutdown_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_based_auto_scaling_input`<sup>Optional</sup> <a name="load_based_auto_scaling_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.loadBasedAutoScalingInput"></a>

```python
load_based_auto_scaling_input: OpsworksPhpAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling">OpsworksPhpAppLayerLoadBasedAutoScaling</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `stack_id_input`<sup>Optional</sup> <a name="stack_id_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.stackIdInput"></a>

```python
stack_id_input: str
```

- *Type:* str

---

##### `system_packages_input`<sup>Optional</sup> <a name="system_packages_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.systemPackagesInput"></a>

```python
system_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_ebs_optimized_instances_input`<sup>Optional</sup> <a name="use_ebs_optimized_instances_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.useEbsOptimizedInstancesInput"></a>

```python
use_ebs_optimized_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_elastic_ips`<sup>Required</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoAssignElasticIps"></a>

```python
auto_assign_elastic_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_public_ips`<sup>Required</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoAssignPublicIps"></a>

```python
auto_assign_public_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_healing`<sup>Required</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_configure_recipes`<sup>Required</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customConfigureRecipes"></a>

```python
custom_configure_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_deploy_recipes`<sup>Required</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customDeployRecipes"></a>

```python
custom_deploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_instance_profile_arn`<sup>Required</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customInstanceProfileArn"></a>

```python
custom_instance_profile_arn: str
```

- *Type:* str

---

##### `custom_json`<sup>Required</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

---

##### `custom_security_group_ids`<sup>Required</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customSecurityGroupIds"></a>

```python
custom_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_setup_recipes`<sup>Required</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customSetupRecipes"></a>

```python
custom_setup_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_shutdown_recipes`<sup>Required</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customShutdownRecipes"></a>

```python
custom_shutdown_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_undeploy_recipes`<sup>Required</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.customUndeployRecipes"></a>

```python
custom_undeploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drain_elb_on_shutdown`<sup>Required</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.drainElbOnShutdown"></a>

```python
drain_elb_on_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elastic_load_balancer`<sup>Required</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.elasticLoadBalancer"></a>

```python
elastic_load_balancer: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `install_updates_on_boot`<sup>Required</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_shutdown_timeout`<sup>Required</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.instanceShutdownTimeout"></a>

```python
instance_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

##### `system_packages`<sup>Required</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.systemPackages"></a>

```python
system_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_ebs_optimized_instances`<sup>Required</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.useEbsOptimizedInstances"></a>

```python
use_ebs_optimized_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksPhpAppLayerCloudwatchConfiguration <a name="OpsworksPhpAppLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration(
  enabled: typing.Union[bool, IResolvable] = None,
  log_streams: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerCloudwatchConfigurationLogStreams]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#enabled OpsworksPhpAppLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration.property.logStreams">log_streams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams">OpsworksPhpAppLayerCloudwatchConfigurationLogStreams</a>]]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#enabled OpsworksPhpAppLayer#enabled}.

---

##### `log_streams`<sup>Optional</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration.property.logStreams"></a>

```python
log_streams: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams">OpsworksPhpAppLayerCloudwatchConfigurationLogStreams</a>]]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#log_streams OpsworksPhpAppLayer#log_streams}

---

### OpsworksPhpAppLayerCloudwatchConfigurationLogStreams <a name="OpsworksPhpAppLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams(
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
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#file OpsworksPhpAppLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#log_group_name OpsworksPhpAppLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#batch_count OpsworksPhpAppLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#batch_size OpsworksPhpAppLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration">buffer_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#buffer_duration OpsworksPhpAppLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetime_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#datetime_format OpsworksPhpAppLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#encoding OpsworksPhpAppLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">file_fingerprint_lines</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#file_fingerprint_lines OpsworksPhpAppLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.initialPosition">initial_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#initial_position OpsworksPhpAppLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multiline_start_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#multiline_start_pattern OpsworksPhpAppLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#time_zone OpsworksPhpAppLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.file"></a>

```python
file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#file OpsworksPhpAppLayer#file}.

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#log_group_name OpsworksPhpAppLayer#log_group_name}.

---

##### `batch_count`<sup>Optional</sup> <a name="batch_count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#batch_count OpsworksPhpAppLayer#batch_count}.

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#batch_size OpsworksPhpAppLayer#batch_size}.

---

##### `buffer_duration`<sup>Optional</sup> <a name="buffer_duration" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```python
buffer_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#buffer_duration OpsworksPhpAppLayer#buffer_duration}.

---

##### `datetime_format`<sup>Optional</sup> <a name="datetime_format" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```python
datetime_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#datetime_format OpsworksPhpAppLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#encoding OpsworksPhpAppLayer#encoding}.

---

##### `file_fingerprint_lines`<sup>Optional</sup> <a name="file_fingerprint_lines" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```python
file_fingerprint_lines: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#file_fingerprint_lines OpsworksPhpAppLayer#file_fingerprint_lines}.

---

##### `initial_position`<sup>Optional</sup> <a name="initial_position" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```python
initial_position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#initial_position OpsworksPhpAppLayer#initial_position}.

---

##### `multiline_start_pattern`<sup>Optional</sup> <a name="multiline_start_pattern" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```python
multiline_start_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#multiline_start_pattern OpsworksPhpAppLayer#multiline_start_pattern}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#time_zone OpsworksPhpAppLayer#time_zone}.

---

### OpsworksPhpAppLayerConfig <a name="OpsworksPhpAppLayerConfig" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stack_id: str,
  auto_assign_elastic_ips: typing.Union[bool, IResolvable] = None,
  auto_assign_public_ips: typing.Union[bool, IResolvable] = None,
  auto_healing: typing.Union[bool, IResolvable] = None,
  cloudwatch_configuration: OpsworksPhpAppLayerCloudwatchConfiguration = None,
  custom_configure_recipes: typing.List[str] = None,
  custom_deploy_recipes: typing.List[str] = None,
  custom_instance_profile_arn: str = None,
  custom_json: str = None,
  custom_security_group_ids: typing.List[str] = None,
  custom_setup_recipes: typing.List[str] = None,
  custom_shutdown_recipes: typing.List[str] = None,
  custom_undeploy_recipes: typing.List[str] = None,
  drain_elb_on_shutdown: typing.Union[bool, IResolvable] = None,
  ebs_volume: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerEbsVolume]] = None,
  elastic_load_balancer: str = None,
  id: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_shutdown_timeout: typing.Union[int, float] = None,
  load_based_auto_scaling: OpsworksPhpAppLayerLoadBasedAutoScaling = None,
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
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#stack_id OpsworksPhpAppLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_assign_elastic_ips OpsworksPhpAppLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_assign_public_ips OpsworksPhpAppLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_healing OpsworksPhpAppLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration">OpsworksPhpAppLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_configure_recipes OpsworksPhpAppLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_deploy_recipes OpsworksPhpAppLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_instance_profile_arn OpsworksPhpAppLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_json OpsworksPhpAppLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_security_group_ids OpsworksPhpAppLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_setup_recipes OpsworksPhpAppLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_shutdown_recipes OpsworksPhpAppLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_undeploy_recipes OpsworksPhpAppLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#drain_elb_on_shutdown OpsworksPhpAppLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.ebsVolume">ebs_volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume">OpsworksPhpAppLayerEbsVolume</a>]]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#elastic_load_balancer OpsworksPhpAppLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#id OpsworksPhpAppLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#install_updates_on_boot OpsworksPhpAppLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#instance_shutdown_timeout OpsworksPhpAppLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling">OpsworksPhpAppLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#name OpsworksPhpAppLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#system_packages OpsworksPhpAppLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#tags OpsworksPhpAppLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#tags_all OpsworksPhpAppLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#use_ebs_optimized_instances OpsworksPhpAppLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#stack_id OpsworksPhpAppLayer#stack_id}.

---

##### `auto_assign_elastic_ips`<sup>Optional</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.autoAssignElasticIps"></a>

```python
auto_assign_elastic_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_assign_elastic_ips OpsworksPhpAppLayer#auto_assign_elastic_ips}.

---

##### `auto_assign_public_ips`<sup>Optional</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.autoAssignPublicIps"></a>

```python
auto_assign_public_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_assign_public_ips OpsworksPhpAppLayer#auto_assign_public_ips}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#auto_healing OpsworksPhpAppLayer#auto_healing}.

---

##### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: OpsworksPhpAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration">OpsworksPhpAppLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#cloudwatch_configuration OpsworksPhpAppLayer#cloudwatch_configuration}

---

##### `custom_configure_recipes`<sup>Optional</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customConfigureRecipes"></a>

```python
custom_configure_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_configure_recipes OpsworksPhpAppLayer#custom_configure_recipes}.

---

##### `custom_deploy_recipes`<sup>Optional</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customDeployRecipes"></a>

```python
custom_deploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_deploy_recipes OpsworksPhpAppLayer#custom_deploy_recipes}.

---

##### `custom_instance_profile_arn`<sup>Optional</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customInstanceProfileArn"></a>

```python
custom_instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_instance_profile_arn OpsworksPhpAppLayer#custom_instance_profile_arn}.

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_json OpsworksPhpAppLayer#custom_json}.

---

##### `custom_security_group_ids`<sup>Optional</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customSecurityGroupIds"></a>

```python
custom_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_security_group_ids OpsworksPhpAppLayer#custom_security_group_ids}.

---

##### `custom_setup_recipes`<sup>Optional</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customSetupRecipes"></a>

```python
custom_setup_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_setup_recipes OpsworksPhpAppLayer#custom_setup_recipes}.

---

##### `custom_shutdown_recipes`<sup>Optional</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customShutdownRecipes"></a>

```python
custom_shutdown_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_shutdown_recipes OpsworksPhpAppLayer#custom_shutdown_recipes}.

---

##### `custom_undeploy_recipes`<sup>Optional</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.customUndeployRecipes"></a>

```python
custom_undeploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#custom_undeploy_recipes OpsworksPhpAppLayer#custom_undeploy_recipes}.

---

##### `drain_elb_on_shutdown`<sup>Optional</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.drainElbOnShutdown"></a>

```python
drain_elb_on_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#drain_elb_on_shutdown OpsworksPhpAppLayer#drain_elb_on_shutdown}.

---

##### `ebs_volume`<sup>Optional</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.ebsVolume"></a>

```python
ebs_volume: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume">OpsworksPhpAppLayerEbsVolume</a>]]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#ebs_volume OpsworksPhpAppLayer#ebs_volume}

---

##### `elastic_load_balancer`<sup>Optional</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.elasticLoadBalancer"></a>

```python
elastic_load_balancer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#elastic_load_balancer OpsworksPhpAppLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#id OpsworksPhpAppLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#install_updates_on_boot OpsworksPhpAppLayer#install_updates_on_boot}.

---

##### `instance_shutdown_timeout`<sup>Optional</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.instanceShutdownTimeout"></a>

```python
instance_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#instance_shutdown_timeout OpsworksPhpAppLayer#instance_shutdown_timeout}.

---

##### `load_based_auto_scaling`<sup>Optional</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.loadBasedAutoScaling"></a>

```python
load_based_auto_scaling: OpsworksPhpAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling">OpsworksPhpAppLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#load_based_auto_scaling OpsworksPhpAppLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#name OpsworksPhpAppLayer#name}.

---

##### `system_packages`<sup>Optional</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.systemPackages"></a>

```python
system_packages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#system_packages OpsworksPhpAppLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#tags OpsworksPhpAppLayer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#tags_all OpsworksPhpAppLayer#tags_all}.

---

##### `use_ebs_optimized_instances`<sup>Optional</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerConfig.property.useEbsOptimizedInstances"></a>

```python
use_ebs_optimized_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#use_ebs_optimized_instances OpsworksPhpAppLayer#use_ebs_optimized_instances}.

---

### OpsworksPhpAppLayerEbsVolume <a name="OpsworksPhpAppLayerEbsVolume" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume(
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
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.mountPoint">mount_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#mount_point OpsworksPhpAppLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.numberOfDisks">number_of_disks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#number_of_disks OpsworksPhpAppLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#size OpsworksPhpAppLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#encrypted OpsworksPhpAppLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#iops OpsworksPhpAppLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.raidLevel">raid_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#raid_level OpsworksPhpAppLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#type OpsworksPhpAppLayer#type}. |

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#mount_point OpsworksPhpAppLayer#mount_point}.

---

##### `number_of_disks`<sup>Required</sup> <a name="number_of_disks" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.numberOfDisks"></a>

```python
number_of_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#number_of_disks OpsworksPhpAppLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#size OpsworksPhpAppLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#encrypted OpsworksPhpAppLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#iops OpsworksPhpAppLayer#iops}.

---

##### `raid_level`<sup>Optional</sup> <a name="raid_level" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.raidLevel"></a>

```python
raid_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#raid_level OpsworksPhpAppLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#type OpsworksPhpAppLayer#type}.

---

### OpsworksPhpAppLayerLoadBasedAutoScaling <a name="OpsworksPhpAppLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling(
  downscaling: OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling = None,
  enable: typing.Union[bool, IResolvable] = None,
  upscaling: OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling">OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#enable OpsworksPhpAppLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling">OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling.property.downscaling"></a>

```python
downscaling: OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling">OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#downscaling OpsworksPhpAppLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#enable OpsworksPhpAppLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling.property.upscaling"></a>

```python
upscaling: OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling">OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#upscaling OpsworksPhpAppLayer#upscaling}

---

### OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling <a name="OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling(
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
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#alarms OpsworksPhpAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#cpu_threshold OpsworksPhpAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#ignore_metrics_time OpsworksPhpAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#instance_count OpsworksPhpAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#load_threshold OpsworksPhpAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#memory_threshold OpsworksPhpAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#thresholds_wait_time OpsworksPhpAppLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#alarms OpsworksPhpAppLayer#alarms}.

---

##### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#cpu_threshold OpsworksPhpAppLayer#cpu_threshold}.

---

##### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#ignore_metrics_time OpsworksPhpAppLayer#ignore_metrics_time}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#instance_count OpsworksPhpAppLayer#instance_count}.

---

##### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#load_threshold OpsworksPhpAppLayer#load_threshold}.

---

##### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#memory_threshold OpsworksPhpAppLayer#memory_threshold}.

---

##### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#thresholds_wait_time OpsworksPhpAppLayer#thresholds_wait_time}.

---

### OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling <a name="OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling(
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
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#alarms OpsworksPhpAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#cpu_threshold OpsworksPhpAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#ignore_metrics_time OpsworksPhpAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#instance_count OpsworksPhpAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#load_threshold OpsworksPhpAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#memory_threshold OpsworksPhpAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#thresholds_wait_time OpsworksPhpAppLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#alarms OpsworksPhpAppLayer#alarms}.

---

##### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#cpu_threshold OpsworksPhpAppLayer#cpu_threshold}.

---

##### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#ignore_metrics_time OpsworksPhpAppLayer#ignore_metrics_time}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#instance_count OpsworksPhpAppLayer#instance_count}.

---

##### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#load_threshold OpsworksPhpAppLayer#load_threshold}.

---

##### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#memory_threshold OpsworksPhpAppLayer#memory_threshold}.

---

##### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#thresholds_wait_time OpsworksPhpAppLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams">OpsworksPhpAppLayerCloudwatchConfigurationLogStreams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams">OpsworksPhpAppLayerCloudwatchConfigurationLogStreams</a>]]

---


### OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">reset_batch_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">reset_buffer_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">reset_datetime_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">reset_file_fingerprint_lines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">reset_initial_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">reset_multiline_start_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_count` <a name="reset_batch_count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```python
def reset_batch_count() -> None
```

##### `reset_batch_size` <a name="reset_batch_size" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_buffer_duration` <a name="reset_buffer_duration" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```python
def reset_buffer_duration() -> None
```

##### `reset_datetime_format` <a name="reset_datetime_format" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```python
def reset_datetime_format() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_file_fingerprint_lines` <a name="reset_file_fingerprint_lines" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```python
def reset_file_fingerprint_lines() -> None
```

##### `reset_initial_position` <a name="reset_initial_position" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```python
def reset_initial_position() -> None
```

##### `reset_multiline_start_pattern` <a name="reset_multiline_start_pattern" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```python
def reset_multiline_start_pattern() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batch_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">buffer_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetime_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">file_fingerprint_lines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initial_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multiline_start_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">buffer_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetime_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">file_fingerprint_lines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initial_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multiline_start_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams">OpsworksPhpAppLayerCloudwatchConfigurationLogStreams</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_count_input`<sup>Optional</sup> <a name="batch_count_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```python
batch_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buffer_duration_input`<sup>Optional</sup> <a name="buffer_duration_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```python
buffer_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datetime_format_input`<sup>Optional</sup> <a name="datetime_format_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```python
datetime_format_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `file_fingerprint_lines_input`<sup>Optional</sup> <a name="file_fingerprint_lines_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```python
file_fingerprint_lines_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `initial_position_input`<sup>Optional</sup> <a name="initial_position_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```python
initial_position_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `multiline_start_pattern_input`<sup>Optional</sup> <a name="multiline_start_pattern_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```python
multiline_start_pattern_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `batch_count`<sup>Required</sup> <a name="batch_count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buffer_duration`<sup>Required</sup> <a name="buffer_duration" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```python
buffer_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datetime_format`<sup>Required</sup> <a name="datetime_format" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```python
datetime_format: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `file_fingerprint_lines`<sup>Required</sup> <a name="file_fingerprint_lines" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```python
file_fingerprint_lines: str
```

- *Type:* str

---

##### `initial_position`<sup>Required</sup> <a name="initial_position" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```python
initial_position: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `multiline_start_pattern`<sup>Required</sup> <a name="multiline_start_pattern" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```python
multiline_start_pattern: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksPhpAppLayerCloudwatchConfigurationLogStreams, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams">OpsworksPhpAppLayerCloudwatchConfigurationLogStreams</a>, cdktf.IResolvable]

---


### OpsworksPhpAppLayerCloudwatchConfigurationOutputReference <a name="OpsworksPhpAppLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.putLogStreams">put_log_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.resetLogStreams">reset_log_streams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_streams` <a name="put_log_streams" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```python
def put_log_streams(
  value: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerCloudwatchConfigurationLogStreams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams">OpsworksPhpAppLayerCloudwatchConfigurationLogStreams</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_streams` <a name="reset_log_streams" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```python
def reset_log_streams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.logStreams">log_streams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList">OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">log_streams_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams">OpsworksPhpAppLayerCloudwatchConfigurationLogStreams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration">OpsworksPhpAppLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_streams`<sup>Required</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```python
log_streams: OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList">OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_streams_input`<sup>Optional</sup> <a name="log_streams_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```python
log_streams_input: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationLogStreams">OpsworksPhpAppLayerCloudwatchConfigurationLogStreams</a>]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksPhpAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerCloudwatchConfiguration">OpsworksPhpAppLayerCloudwatchConfiguration</a>

---


### OpsworksPhpAppLayerEbsVolumeList <a name="OpsworksPhpAppLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksPhpAppLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume">OpsworksPhpAppLayerEbsVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksPhpAppLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume">OpsworksPhpAppLayerEbsVolume</a>]]

---


### OpsworksPhpAppLayerEbsVolumeOutputReference <a name="OpsworksPhpAppLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.resetRaidLevel">reset_raid_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_raid_level` <a name="reset_raid_level" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```python
def reset_raid_level() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.numberOfDisksInput">number_of_disks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.raidLevelInput">raid_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.numberOfDisks">number_of_disks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.raidLevel">raid_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume">OpsworksPhpAppLayerEbsVolume</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `number_of_disks_input`<sup>Optional</sup> <a name="number_of_disks_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```python
number_of_disks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `raid_level_input`<sup>Optional</sup> <a name="raid_level_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```python
raid_level_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `number_of_disks`<sup>Required</sup> <a name="number_of_disks" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```python
number_of_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `raid_level`<sup>Required</sup> <a name="raid_level" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.raidLevel"></a>

```python
raid_level: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksPhpAppLayerEbsVolume, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerEbsVolume">OpsworksPhpAppLayerEbsVolume</a>, cdktf.IResolvable]

---


### OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">reset_cpu_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">reset_ignore_metrics_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">reset_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">reset_memory_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">reset_thresholds_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarms` <a name="reset_alarms" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_cpu_threshold` <a name="reset_cpu_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```python
def reset_cpu_threshold() -> None
```

##### `reset_ignore_metrics_time` <a name="reset_ignore_metrics_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```python
def reset_ignore_metrics_time() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_load_threshold` <a name="reset_load_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```python
def reset_load_threshold() -> None
```

##### `reset_memory_threshold` <a name="reset_memory_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```python
def reset_memory_threshold() -> None
```

##### `reset_thresholds_wait_time` <a name="reset_thresholds_wait_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```python
def reset_thresholds_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpu_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignore_metrics_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memory_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholds_wait_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling">OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```python
alarms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold_input`<sup>Optional</sup> <a name="cpu_threshold_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```python
cpu_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time_input`<sup>Optional</sup> <a name="ignore_metrics_time_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```python
ignore_metrics_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold_input`<sup>Optional</sup> <a name="load_threshold_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```python
load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold_input`<sup>Optional</sup> <a name="memory_threshold_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```python
memory_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time_input`<sup>Optional</sup> <a name="thresholds_wait_time_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```python
thresholds_wait_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold`<sup>Required</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time`<sup>Required</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold`<sup>Required</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold`<sup>Required</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time`<sup>Required</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling">OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference <a name="OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putDownscaling">put_downscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putUpscaling">put_upscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling">reset_downscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling">reset_upscaling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_downscaling` <a name="put_downscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

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

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.alarms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#alarms OpsworksPhpAppLayer#alarms}.

---

###### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.cpuThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#cpu_threshold OpsworksPhpAppLayer#cpu_threshold}.

---

###### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.ignoreMetricsTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#ignore_metrics_time OpsworksPhpAppLayer#ignore_metrics_time}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#instance_count OpsworksPhpAppLayer#instance_count}.

---

###### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.loadThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#load_threshold OpsworksPhpAppLayer#load_threshold}.

---

###### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.memoryThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#memory_threshold OpsworksPhpAppLayer#memory_threshold}.

---

###### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.thresholdsWaitTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#thresholds_wait_time OpsworksPhpAppLayer#thresholds_wait_time}.

---

##### `put_upscaling` <a name="put_upscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

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

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.alarms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#alarms OpsworksPhpAppLayer#alarms}.

---

###### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.cpuThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#cpu_threshold OpsworksPhpAppLayer#cpu_threshold}.

---

###### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.ignoreMetricsTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#ignore_metrics_time OpsworksPhpAppLayer#ignore_metrics_time}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#instance_count OpsworksPhpAppLayer#instance_count}.

---

###### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.loadThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#load_threshold OpsworksPhpAppLayer#load_threshold}.

---

###### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.memoryThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#memory_threshold OpsworksPhpAppLayer#memory_threshold}.

---

###### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.thresholdsWaitTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer#thresholds_wait_time OpsworksPhpAppLayer#thresholds_wait_time}.

---

##### `reset_downscaling` <a name="reset_downscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```python
def reset_downscaling() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_upscaling` <a name="reset_upscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```python
def reset_upscaling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling">OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling">OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling">OpsworksPhpAppLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```python
downscaling: OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```python
upscaling: OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscaling_input`<sup>Optional</sup> <a name="downscaling_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```python
downscaling_input: OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling">OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upscaling_input`<sup>Optional</sup> <a name="upscaling_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```python
upscaling_input: OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling">OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksPhpAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScaling">OpsworksPhpAppLayerLoadBasedAutoScaling</a>

---


### OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_php_app_layer

opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">reset_cpu_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">reset_ignore_metrics_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">reset_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">reset_memory_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">reset_thresholds_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarms` <a name="reset_alarms" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_cpu_threshold` <a name="reset_cpu_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```python
def reset_cpu_threshold() -> None
```

##### `reset_ignore_metrics_time` <a name="reset_ignore_metrics_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```python
def reset_ignore_metrics_time() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_load_threshold` <a name="reset_load_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```python
def reset_load_threshold() -> None
```

##### `reset_memory_threshold` <a name="reset_memory_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```python
def reset_memory_threshold() -> None
```

##### `reset_thresholds_wait_time` <a name="reset_thresholds_wait_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```python
def reset_thresholds_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpu_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignore_metrics_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memory_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholds_wait_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling">OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```python
alarms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold_input`<sup>Optional</sup> <a name="cpu_threshold_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```python
cpu_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time_input`<sup>Optional</sup> <a name="ignore_metrics_time_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```python
ignore_metrics_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold_input`<sup>Optional</sup> <a name="load_threshold_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```python
load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold_input`<sup>Optional</sup> <a name="memory_threshold_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```python
memory_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time_input`<sup>Optional</sup> <a name="thresholds_wait_time_input" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```python
thresholds_wait_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold`<sup>Required</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time`<sup>Required</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold`<sup>Required</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold`<sup>Required</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time`<sup>Required</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksPhpAppLayer.OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling">OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling</a>

---



