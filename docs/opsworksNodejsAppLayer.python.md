# `opsworksNodejsAppLayer` Submodule <a name="`opsworksNodejsAppLayer` Submodule" id="@cdktf/provider-aws.opsworksNodejsAppLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksNodejsAppLayer <a name="OpsworksNodejsAppLayer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer aws_opsworks_nodejs_app_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayer(
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
  cloudwatch_configuration: OpsworksNodejsAppLayerCloudwatchConfiguration = None,
  custom_configure_recipes: typing.List[str] = None,
  custom_deploy_recipes: typing.List[str] = None,
  custom_instance_profile_arn: str = None,
  custom_json: str = None,
  custom_security_group_ids: typing.List[str] = None,
  custom_setup_recipes: typing.List[str] = None,
  custom_shutdown_recipes: typing.List[str] = None,
  custom_undeploy_recipes: typing.List[str] = None,
  drain_elb_on_shutdown: typing.Union[bool, IResolvable] = None,
  ebs_volume: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerEbsVolume]] = None,
  elastic_load_balancer: str = None,
  id: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_shutdown_timeout: typing.Union[int, float] = None,
  load_based_auto_scaling: OpsworksNodejsAppLayerLoadBasedAutoScaling = None,
  name: str = None,
  nodejs_version: str = None,
  system_packages: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  use_ebs_optimized_instances: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#stack_id OpsworksNodejsAppLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_assign_elastic_ips OpsworksNodejsAppLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_assign_public_ips OpsworksNodejsAppLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_healing OpsworksNodejsAppLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration">OpsworksNodejsAppLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_configure_recipes OpsworksNodejsAppLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_deploy_recipes OpsworksNodejsAppLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_instance_profile_arn OpsworksNodejsAppLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_json OpsworksNodejsAppLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_security_group_ids OpsworksNodejsAppLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_setup_recipes OpsworksNodejsAppLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_shutdown_recipes OpsworksNodejsAppLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_undeploy_recipes OpsworksNodejsAppLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#drain_elb_on_shutdown OpsworksNodejsAppLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.ebsVolume">ebs_volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume">OpsworksNodejsAppLayerEbsVolume</a>]]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#elastic_load_balancer OpsworksNodejsAppLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#id OpsworksNodejsAppLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#install_updates_on_boot OpsworksNodejsAppLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#instance_shutdown_timeout OpsworksNodejsAppLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling">OpsworksNodejsAppLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#name OpsworksNodejsAppLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.nodejsVersion">nodejs_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#nodejs_version OpsworksNodejsAppLayer#nodejs_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#system_packages OpsworksNodejsAppLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#tags OpsworksNodejsAppLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#tags_all OpsworksNodejsAppLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#use_ebs_optimized_instances OpsworksNodejsAppLayer#use_ebs_optimized_instances}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.stackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#stack_id OpsworksNodejsAppLayer#stack_id}.

---

##### `auto_assign_elastic_ips`<sup>Optional</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.autoAssignElasticIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_assign_elastic_ips OpsworksNodejsAppLayer#auto_assign_elastic_ips}.

---

##### `auto_assign_public_ips`<sup>Optional</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.autoAssignPublicIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_assign_public_ips OpsworksNodejsAppLayer#auto_assign_public_ips}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.autoHealing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_healing OpsworksNodejsAppLayer#auto_healing}.

---

##### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.cloudwatchConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration">OpsworksNodejsAppLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#cloudwatch_configuration OpsworksNodejsAppLayer#cloudwatch_configuration}

---

##### `custom_configure_recipes`<sup>Optional</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customConfigureRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_configure_recipes OpsworksNodejsAppLayer#custom_configure_recipes}.

---

##### `custom_deploy_recipes`<sup>Optional</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customDeployRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_deploy_recipes OpsworksNodejsAppLayer#custom_deploy_recipes}.

---

##### `custom_instance_profile_arn`<sup>Optional</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customInstanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_instance_profile_arn OpsworksNodejsAppLayer#custom_instance_profile_arn}.

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_json OpsworksNodejsAppLayer#custom_json}.

---

##### `custom_security_group_ids`<sup>Optional</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_security_group_ids OpsworksNodejsAppLayer#custom_security_group_ids}.

---

##### `custom_setup_recipes`<sup>Optional</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customSetupRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_setup_recipes OpsworksNodejsAppLayer#custom_setup_recipes}.

---

##### `custom_shutdown_recipes`<sup>Optional</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customShutdownRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_shutdown_recipes OpsworksNodejsAppLayer#custom_shutdown_recipes}.

---

##### `custom_undeploy_recipes`<sup>Optional</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.customUndeployRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_undeploy_recipes OpsworksNodejsAppLayer#custom_undeploy_recipes}.

---

##### `drain_elb_on_shutdown`<sup>Optional</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.drainElbOnShutdown"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#drain_elb_on_shutdown OpsworksNodejsAppLayer#drain_elb_on_shutdown}.

---

##### `ebs_volume`<sup>Optional</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.ebsVolume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume">OpsworksNodejsAppLayerEbsVolume</a>]]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#ebs_volume OpsworksNodejsAppLayer#ebs_volume}

---

##### `elastic_load_balancer`<sup>Optional</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.elasticLoadBalancer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#elastic_load_balancer OpsworksNodejsAppLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#id OpsworksNodejsAppLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.installUpdatesOnBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#install_updates_on_boot OpsworksNodejsAppLayer#install_updates_on_boot}.

---

##### `instance_shutdown_timeout`<sup>Optional</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.instanceShutdownTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#instance_shutdown_timeout OpsworksNodejsAppLayer#instance_shutdown_timeout}.

---

##### `load_based_auto_scaling`<sup>Optional</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.loadBasedAutoScaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling">OpsworksNodejsAppLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#load_based_auto_scaling OpsworksNodejsAppLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#name OpsworksNodejsAppLayer#name}.

---

##### `nodejs_version`<sup>Optional</sup> <a name="nodejs_version" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.nodejsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#nodejs_version OpsworksNodejsAppLayer#nodejs_version}.

---

##### `system_packages`<sup>Optional</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.systemPackages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#system_packages OpsworksNodejsAppLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#tags OpsworksNodejsAppLayer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#tags_all OpsworksNodejsAppLayer#tags_all}.

---

##### `use_ebs_optimized_instances`<sup>Optional</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.Initializer.parameter.useEbsOptimizedInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#use_ebs_optimized_instances OpsworksNodejsAppLayer#use_ebs_optimized_instances}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putCloudwatchConfiguration">put_cloudwatch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putEbsVolume">put_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putLoadBasedAutoScaling">put_load_based_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetAutoAssignElasticIps">reset_auto_assign_elastic_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetAutoAssignPublicIps">reset_auto_assign_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetAutoHealing">reset_auto_healing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCloudwatchConfiguration">reset_cloudwatch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomConfigureRecipes">reset_custom_configure_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomDeployRecipes">reset_custom_deploy_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomInstanceProfileArn">reset_custom_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomJson">reset_custom_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomSecurityGroupIds">reset_custom_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomSetupRecipes">reset_custom_setup_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomShutdownRecipes">reset_custom_shutdown_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomUndeployRecipes">reset_custom_undeploy_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetDrainElbOnShutdown">reset_drain_elb_on_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetEbsVolume">reset_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetElasticLoadBalancer">reset_elastic_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetInstallUpdatesOnBoot">reset_install_updates_on_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetInstanceShutdownTimeout">reset_instance_shutdown_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetLoadBasedAutoScaling">reset_load_based_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetNodejsVersion">reset_nodejs_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetSystemPackages">reset_system_packages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetUseEbsOptimizedInstances">reset_use_ebs_optimized_instances</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cloudwatch_configuration` <a name="put_cloudwatch_configuration" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putCloudwatchConfiguration"></a>

```python
def put_cloudwatch_configuration(
  enabled: typing.Union[bool, IResolvable] = None,
  log_streams: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams]] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putCloudwatchConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#enabled OpsworksNodejsAppLayer#enabled}.

---

###### `log_streams`<sup>Optional</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putCloudwatchConfiguration.parameter.logStreams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams</a>]]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#log_streams OpsworksNodejsAppLayer#log_streams}

---

##### `put_ebs_volume` <a name="put_ebs_volume" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putEbsVolume"></a>

```python
def put_ebs_volume(
  value: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerEbsVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putEbsVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume">OpsworksNodejsAppLayerEbsVolume</a>]]

---

##### `put_load_based_auto_scaling` <a name="put_load_based_auto_scaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putLoadBasedAutoScaling"></a>

```python
def put_load_based_auto_scaling(
  downscaling: OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling = None,
  enable: typing.Union[bool, IResolvable] = None,
  upscaling: OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling = None
) -> None
```

###### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putLoadBasedAutoScaling.parameter.downscaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#downscaling OpsworksNodejsAppLayer#downscaling}

---

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putLoadBasedAutoScaling.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#enable OpsworksNodejsAppLayer#enable}.

---

###### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.putLoadBasedAutoScaling.parameter.upscaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#upscaling OpsworksNodejsAppLayer#upscaling}

---

##### `reset_auto_assign_elastic_ips` <a name="reset_auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetAutoAssignElasticIps"></a>

```python
def reset_auto_assign_elastic_ips() -> None
```

##### `reset_auto_assign_public_ips` <a name="reset_auto_assign_public_ips" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetAutoAssignPublicIps"></a>

```python
def reset_auto_assign_public_ips() -> None
```

##### `reset_auto_healing` <a name="reset_auto_healing" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetAutoHealing"></a>

```python
def reset_auto_healing() -> None
```

##### `reset_cloudwatch_configuration` <a name="reset_cloudwatch_configuration" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCloudwatchConfiguration"></a>

```python
def reset_cloudwatch_configuration() -> None
```

##### `reset_custom_configure_recipes` <a name="reset_custom_configure_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomConfigureRecipes"></a>

```python
def reset_custom_configure_recipes() -> None
```

##### `reset_custom_deploy_recipes` <a name="reset_custom_deploy_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomDeployRecipes"></a>

```python
def reset_custom_deploy_recipes() -> None
```

##### `reset_custom_instance_profile_arn` <a name="reset_custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomInstanceProfileArn"></a>

```python
def reset_custom_instance_profile_arn() -> None
```

##### `reset_custom_json` <a name="reset_custom_json" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomJson"></a>

```python
def reset_custom_json() -> None
```

##### `reset_custom_security_group_ids` <a name="reset_custom_security_group_ids" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomSecurityGroupIds"></a>

```python
def reset_custom_security_group_ids() -> None
```

##### `reset_custom_setup_recipes` <a name="reset_custom_setup_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomSetupRecipes"></a>

```python
def reset_custom_setup_recipes() -> None
```

##### `reset_custom_shutdown_recipes` <a name="reset_custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomShutdownRecipes"></a>

```python
def reset_custom_shutdown_recipes() -> None
```

##### `reset_custom_undeploy_recipes` <a name="reset_custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetCustomUndeployRecipes"></a>

```python
def reset_custom_undeploy_recipes() -> None
```

##### `reset_drain_elb_on_shutdown` <a name="reset_drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetDrainElbOnShutdown"></a>

```python
def reset_drain_elb_on_shutdown() -> None
```

##### `reset_ebs_volume` <a name="reset_ebs_volume" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetEbsVolume"></a>

```python
def reset_ebs_volume() -> None
```

##### `reset_elastic_load_balancer` <a name="reset_elastic_load_balancer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetElasticLoadBalancer"></a>

```python
def reset_elastic_load_balancer() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_install_updates_on_boot` <a name="reset_install_updates_on_boot" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetInstallUpdatesOnBoot"></a>

```python
def reset_install_updates_on_boot() -> None
```

##### `reset_instance_shutdown_timeout` <a name="reset_instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetInstanceShutdownTimeout"></a>

```python
def reset_instance_shutdown_timeout() -> None
```

##### `reset_load_based_auto_scaling` <a name="reset_load_based_auto_scaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetLoadBasedAutoScaling"></a>

```python
def reset_load_based_auto_scaling() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nodejs_version` <a name="reset_nodejs_version" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetNodejsVersion"></a>

```python
def reset_nodejs_version() -> None
```

##### `reset_system_packages` <a name="reset_system_packages" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetSystemPackages"></a>

```python
def reset_system_packages() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_use_ebs_optimized_instances` <a name="reset_use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.resetUseEbsOptimizedInstances"></a>

```python
def reset_use_ebs_optimized_instances() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference">OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.ebsVolume">ebs_volume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList">OpsworksNodejsAppLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference">OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoAssignElasticIpsInput">auto_assign_elastic_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoAssignPublicIpsInput">auto_assign_public_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoHealingInput">auto_healing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.cloudwatchConfigurationInput">cloudwatch_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration">OpsworksNodejsAppLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customConfigureRecipesInput">custom_configure_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customDeployRecipesInput">custom_deploy_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customInstanceProfileArnInput">custom_instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customJsonInput">custom_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customSecurityGroupIdsInput">custom_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customSetupRecipesInput">custom_setup_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customShutdownRecipesInput">custom_shutdown_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customUndeployRecipesInput">custom_undeploy_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.drainElbOnShutdownInput">drain_elb_on_shutdown_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.ebsVolumeInput">ebs_volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume">OpsworksNodejsAppLayerEbsVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.elasticLoadBalancerInput">elastic_load_balancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.installUpdatesOnBootInput">install_updates_on_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.instanceShutdownTimeoutInput">instance_shutdown_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.loadBasedAutoScalingInput">load_based_auto_scaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling">OpsworksNodejsAppLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.nodejsVersionInput">nodejs_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.stackIdInput">stack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.systemPackagesInput">system_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.useEbsOptimizedInstancesInput">use_ebs_optimized_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customJson">custom_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.nodejsVersion">nodejs_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_configuration`<sup>Required</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference">OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebs_volume`<sup>Required</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.ebsVolume"></a>

```python
ebs_volume: OpsworksNodejsAppLayerEbsVolumeList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList">OpsworksNodejsAppLayerEbsVolumeList</a>

---

##### `load_based_auto_scaling`<sup>Required</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.loadBasedAutoScaling"></a>

```python
load_based_auto_scaling: OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference">OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference</a>

---

##### `auto_assign_elastic_ips_input`<sup>Optional</sup> <a name="auto_assign_elastic_ips_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoAssignElasticIpsInput"></a>

```python
auto_assign_elastic_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_public_ips_input`<sup>Optional</sup> <a name="auto_assign_public_ips_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoAssignPublicIpsInput"></a>

```python
auto_assign_public_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_healing_input`<sup>Optional</sup> <a name="auto_healing_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoHealingInput"></a>

```python
auto_healing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloudwatch_configuration_input`<sup>Optional</sup> <a name="cloudwatch_configuration_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.cloudwatchConfigurationInput"></a>

```python
cloudwatch_configuration_input: OpsworksNodejsAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration">OpsworksNodejsAppLayerCloudwatchConfiguration</a>

---

##### `custom_configure_recipes_input`<sup>Optional</sup> <a name="custom_configure_recipes_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customConfigureRecipesInput"></a>

```python
custom_configure_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_deploy_recipes_input`<sup>Optional</sup> <a name="custom_deploy_recipes_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customDeployRecipesInput"></a>

```python
custom_deploy_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_instance_profile_arn_input`<sup>Optional</sup> <a name="custom_instance_profile_arn_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customInstanceProfileArnInput"></a>

```python
custom_instance_profile_arn_input: str
```

- *Type:* str

---

##### `custom_json_input`<sup>Optional</sup> <a name="custom_json_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customJsonInput"></a>

```python
custom_json_input: str
```

- *Type:* str

---

##### `custom_security_group_ids_input`<sup>Optional</sup> <a name="custom_security_group_ids_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customSecurityGroupIdsInput"></a>

```python
custom_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_setup_recipes_input`<sup>Optional</sup> <a name="custom_setup_recipes_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customSetupRecipesInput"></a>

```python
custom_setup_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_shutdown_recipes_input`<sup>Optional</sup> <a name="custom_shutdown_recipes_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customShutdownRecipesInput"></a>

```python
custom_shutdown_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_undeploy_recipes_input`<sup>Optional</sup> <a name="custom_undeploy_recipes_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customUndeployRecipesInput"></a>

```python
custom_undeploy_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drain_elb_on_shutdown_input`<sup>Optional</sup> <a name="drain_elb_on_shutdown_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.drainElbOnShutdownInput"></a>

```python
drain_elb_on_shutdown_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_volume_input`<sup>Optional</sup> <a name="ebs_volume_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.ebsVolumeInput"></a>

```python
ebs_volume_input: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume">OpsworksNodejsAppLayerEbsVolume</a>]]

---

##### `elastic_load_balancer_input`<sup>Optional</sup> <a name="elastic_load_balancer_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.elasticLoadBalancerInput"></a>

```python
elastic_load_balancer_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `install_updates_on_boot_input`<sup>Optional</sup> <a name="install_updates_on_boot_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.installUpdatesOnBootInput"></a>

```python
install_updates_on_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_shutdown_timeout_input`<sup>Optional</sup> <a name="instance_shutdown_timeout_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.instanceShutdownTimeoutInput"></a>

```python
instance_shutdown_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_based_auto_scaling_input`<sup>Optional</sup> <a name="load_based_auto_scaling_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.loadBasedAutoScalingInput"></a>

```python
load_based_auto_scaling_input: OpsworksNodejsAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling">OpsworksNodejsAppLayerLoadBasedAutoScaling</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nodejs_version_input`<sup>Optional</sup> <a name="nodejs_version_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.nodejsVersionInput"></a>

```python
nodejs_version_input: str
```

- *Type:* str

---

##### `stack_id_input`<sup>Optional</sup> <a name="stack_id_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.stackIdInput"></a>

```python
stack_id_input: str
```

- *Type:* str

---

##### `system_packages_input`<sup>Optional</sup> <a name="system_packages_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.systemPackagesInput"></a>

```python
system_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_ebs_optimized_instances_input`<sup>Optional</sup> <a name="use_ebs_optimized_instances_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.useEbsOptimizedInstancesInput"></a>

```python
use_ebs_optimized_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_elastic_ips`<sup>Required</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoAssignElasticIps"></a>

```python
auto_assign_elastic_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_public_ips`<sup>Required</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoAssignPublicIps"></a>

```python
auto_assign_public_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_healing`<sup>Required</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_configure_recipes`<sup>Required</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customConfigureRecipes"></a>

```python
custom_configure_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_deploy_recipes`<sup>Required</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customDeployRecipes"></a>

```python
custom_deploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_instance_profile_arn`<sup>Required</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customInstanceProfileArn"></a>

```python
custom_instance_profile_arn: str
```

- *Type:* str

---

##### `custom_json`<sup>Required</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

---

##### `custom_security_group_ids`<sup>Required</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customSecurityGroupIds"></a>

```python
custom_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_setup_recipes`<sup>Required</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customSetupRecipes"></a>

```python
custom_setup_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_shutdown_recipes`<sup>Required</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customShutdownRecipes"></a>

```python
custom_shutdown_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_undeploy_recipes`<sup>Required</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.customUndeployRecipes"></a>

```python
custom_undeploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drain_elb_on_shutdown`<sup>Required</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.drainElbOnShutdown"></a>

```python
drain_elb_on_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elastic_load_balancer`<sup>Required</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.elasticLoadBalancer"></a>

```python
elastic_load_balancer: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `install_updates_on_boot`<sup>Required</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_shutdown_timeout`<sup>Required</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.instanceShutdownTimeout"></a>

```python
instance_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nodejs_version`<sup>Required</sup> <a name="nodejs_version" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.nodejsVersion"></a>

```python
nodejs_version: str
```

- *Type:* str

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

##### `system_packages`<sup>Required</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.systemPackages"></a>

```python
system_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_ebs_optimized_instances`<sup>Required</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.useEbsOptimizedInstances"></a>

```python
use_ebs_optimized_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksNodejsAppLayerCloudwatchConfiguration <a name="OpsworksNodejsAppLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration(
  enabled: typing.Union[bool, IResolvable] = None,
  log_streams: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#enabled OpsworksNodejsAppLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration.property.logStreams">log_streams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams</a>]]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#enabled OpsworksNodejsAppLayer#enabled}.

---

##### `log_streams`<sup>Optional</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration.property.logStreams"></a>

```python
log_streams: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams</a>]]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#log_streams OpsworksNodejsAppLayer#log_streams}

---

### OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams <a name="OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams(
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
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#file OpsworksNodejsAppLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#log_group_name OpsworksNodejsAppLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#batch_count OpsworksNodejsAppLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#batch_size OpsworksNodejsAppLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration">buffer_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#buffer_duration OpsworksNodejsAppLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetime_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#datetime_format OpsworksNodejsAppLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#encoding OpsworksNodejsAppLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">file_fingerprint_lines</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#file_fingerprint_lines OpsworksNodejsAppLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.initialPosition">initial_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#initial_position OpsworksNodejsAppLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multiline_start_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#multiline_start_pattern OpsworksNodejsAppLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#time_zone OpsworksNodejsAppLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.file"></a>

```python
file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#file OpsworksNodejsAppLayer#file}.

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#log_group_name OpsworksNodejsAppLayer#log_group_name}.

---

##### `batch_count`<sup>Optional</sup> <a name="batch_count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#batch_count OpsworksNodejsAppLayer#batch_count}.

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#batch_size OpsworksNodejsAppLayer#batch_size}.

---

##### `buffer_duration`<sup>Optional</sup> <a name="buffer_duration" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```python
buffer_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#buffer_duration OpsworksNodejsAppLayer#buffer_duration}.

---

##### `datetime_format`<sup>Optional</sup> <a name="datetime_format" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```python
datetime_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#datetime_format OpsworksNodejsAppLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#encoding OpsworksNodejsAppLayer#encoding}.

---

##### `file_fingerprint_lines`<sup>Optional</sup> <a name="file_fingerprint_lines" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```python
file_fingerprint_lines: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#file_fingerprint_lines OpsworksNodejsAppLayer#file_fingerprint_lines}.

---

##### `initial_position`<sup>Optional</sup> <a name="initial_position" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```python
initial_position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#initial_position OpsworksNodejsAppLayer#initial_position}.

---

##### `multiline_start_pattern`<sup>Optional</sup> <a name="multiline_start_pattern" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```python
multiline_start_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#multiline_start_pattern OpsworksNodejsAppLayer#multiline_start_pattern}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#time_zone OpsworksNodejsAppLayer#time_zone}.

---

### OpsworksNodejsAppLayerConfig <a name="OpsworksNodejsAppLayerConfig" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig(
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
  cloudwatch_configuration: OpsworksNodejsAppLayerCloudwatchConfiguration = None,
  custom_configure_recipes: typing.List[str] = None,
  custom_deploy_recipes: typing.List[str] = None,
  custom_instance_profile_arn: str = None,
  custom_json: str = None,
  custom_security_group_ids: typing.List[str] = None,
  custom_setup_recipes: typing.List[str] = None,
  custom_shutdown_recipes: typing.List[str] = None,
  custom_undeploy_recipes: typing.List[str] = None,
  drain_elb_on_shutdown: typing.Union[bool, IResolvable] = None,
  ebs_volume: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerEbsVolume]] = None,
  elastic_load_balancer: str = None,
  id: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_shutdown_timeout: typing.Union[int, float] = None,
  load_based_auto_scaling: OpsworksNodejsAppLayerLoadBasedAutoScaling = None,
  name: str = None,
  nodejs_version: str = None,
  system_packages: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  use_ebs_optimized_instances: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#stack_id OpsworksNodejsAppLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_assign_elastic_ips OpsworksNodejsAppLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_assign_public_ips OpsworksNodejsAppLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_healing OpsworksNodejsAppLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration">OpsworksNodejsAppLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_configure_recipes OpsworksNodejsAppLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_deploy_recipes OpsworksNodejsAppLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_instance_profile_arn OpsworksNodejsAppLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_json OpsworksNodejsAppLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_security_group_ids OpsworksNodejsAppLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_setup_recipes OpsworksNodejsAppLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_shutdown_recipes OpsworksNodejsAppLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_undeploy_recipes OpsworksNodejsAppLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#drain_elb_on_shutdown OpsworksNodejsAppLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.ebsVolume">ebs_volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume">OpsworksNodejsAppLayerEbsVolume</a>]]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#elastic_load_balancer OpsworksNodejsAppLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#id OpsworksNodejsAppLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#install_updates_on_boot OpsworksNodejsAppLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#instance_shutdown_timeout OpsworksNodejsAppLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling">OpsworksNodejsAppLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#name OpsworksNodejsAppLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.nodejsVersion">nodejs_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#nodejs_version OpsworksNodejsAppLayer#nodejs_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#system_packages OpsworksNodejsAppLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#tags OpsworksNodejsAppLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#tags_all OpsworksNodejsAppLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#use_ebs_optimized_instances OpsworksNodejsAppLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#stack_id OpsworksNodejsAppLayer#stack_id}.

---

##### `auto_assign_elastic_ips`<sup>Optional</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.autoAssignElasticIps"></a>

```python
auto_assign_elastic_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_assign_elastic_ips OpsworksNodejsAppLayer#auto_assign_elastic_ips}.

---

##### `auto_assign_public_ips`<sup>Optional</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.autoAssignPublicIps"></a>

```python
auto_assign_public_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_assign_public_ips OpsworksNodejsAppLayer#auto_assign_public_ips}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#auto_healing OpsworksNodejsAppLayer#auto_healing}.

---

##### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: OpsworksNodejsAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration">OpsworksNodejsAppLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#cloudwatch_configuration OpsworksNodejsAppLayer#cloudwatch_configuration}

---

##### `custom_configure_recipes`<sup>Optional</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customConfigureRecipes"></a>

```python
custom_configure_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_configure_recipes OpsworksNodejsAppLayer#custom_configure_recipes}.

---

##### `custom_deploy_recipes`<sup>Optional</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customDeployRecipes"></a>

```python
custom_deploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_deploy_recipes OpsworksNodejsAppLayer#custom_deploy_recipes}.

---

##### `custom_instance_profile_arn`<sup>Optional</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customInstanceProfileArn"></a>

```python
custom_instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_instance_profile_arn OpsworksNodejsAppLayer#custom_instance_profile_arn}.

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_json OpsworksNodejsAppLayer#custom_json}.

---

##### `custom_security_group_ids`<sup>Optional</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customSecurityGroupIds"></a>

```python
custom_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_security_group_ids OpsworksNodejsAppLayer#custom_security_group_ids}.

---

##### `custom_setup_recipes`<sup>Optional</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customSetupRecipes"></a>

```python
custom_setup_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_setup_recipes OpsworksNodejsAppLayer#custom_setup_recipes}.

---

##### `custom_shutdown_recipes`<sup>Optional</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customShutdownRecipes"></a>

```python
custom_shutdown_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_shutdown_recipes OpsworksNodejsAppLayer#custom_shutdown_recipes}.

---

##### `custom_undeploy_recipes`<sup>Optional</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.customUndeployRecipes"></a>

```python
custom_undeploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#custom_undeploy_recipes OpsworksNodejsAppLayer#custom_undeploy_recipes}.

---

##### `drain_elb_on_shutdown`<sup>Optional</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.drainElbOnShutdown"></a>

```python
drain_elb_on_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#drain_elb_on_shutdown OpsworksNodejsAppLayer#drain_elb_on_shutdown}.

---

##### `ebs_volume`<sup>Optional</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.ebsVolume"></a>

```python
ebs_volume: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume">OpsworksNodejsAppLayerEbsVolume</a>]]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#ebs_volume OpsworksNodejsAppLayer#ebs_volume}

---

##### `elastic_load_balancer`<sup>Optional</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.elasticLoadBalancer"></a>

```python
elastic_load_balancer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#elastic_load_balancer OpsworksNodejsAppLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#id OpsworksNodejsAppLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#install_updates_on_boot OpsworksNodejsAppLayer#install_updates_on_boot}.

---

##### `instance_shutdown_timeout`<sup>Optional</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.instanceShutdownTimeout"></a>

```python
instance_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#instance_shutdown_timeout OpsworksNodejsAppLayer#instance_shutdown_timeout}.

---

##### `load_based_auto_scaling`<sup>Optional</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.loadBasedAutoScaling"></a>

```python
load_based_auto_scaling: OpsworksNodejsAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling">OpsworksNodejsAppLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#load_based_auto_scaling OpsworksNodejsAppLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#name OpsworksNodejsAppLayer#name}.

---

##### `nodejs_version`<sup>Optional</sup> <a name="nodejs_version" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.nodejsVersion"></a>

```python
nodejs_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#nodejs_version OpsworksNodejsAppLayer#nodejs_version}.

---

##### `system_packages`<sup>Optional</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.systemPackages"></a>

```python
system_packages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#system_packages OpsworksNodejsAppLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#tags OpsworksNodejsAppLayer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#tags_all OpsworksNodejsAppLayer#tags_all}.

---

##### `use_ebs_optimized_instances`<sup>Optional</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerConfig.property.useEbsOptimizedInstances"></a>

```python
use_ebs_optimized_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#use_ebs_optimized_instances OpsworksNodejsAppLayer#use_ebs_optimized_instances}.

---

### OpsworksNodejsAppLayerEbsVolume <a name="OpsworksNodejsAppLayerEbsVolume" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume(
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
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.mountPoint">mount_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#mount_point OpsworksNodejsAppLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.numberOfDisks">number_of_disks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#number_of_disks OpsworksNodejsAppLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#size OpsworksNodejsAppLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#encrypted OpsworksNodejsAppLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#iops OpsworksNodejsAppLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.raidLevel">raid_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#raid_level OpsworksNodejsAppLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#type OpsworksNodejsAppLayer#type}. |

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#mount_point OpsworksNodejsAppLayer#mount_point}.

---

##### `number_of_disks`<sup>Required</sup> <a name="number_of_disks" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.numberOfDisks"></a>

```python
number_of_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#number_of_disks OpsworksNodejsAppLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#size OpsworksNodejsAppLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#encrypted OpsworksNodejsAppLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#iops OpsworksNodejsAppLayer#iops}.

---

##### `raid_level`<sup>Optional</sup> <a name="raid_level" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.raidLevel"></a>

```python
raid_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#raid_level OpsworksNodejsAppLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#type OpsworksNodejsAppLayer#type}.

---

### OpsworksNodejsAppLayerLoadBasedAutoScaling <a name="OpsworksNodejsAppLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling(
  downscaling: OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling = None,
  enable: typing.Union[bool, IResolvable] = None,
  upscaling: OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#enable OpsworksNodejsAppLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling.property.downscaling"></a>

```python
downscaling: OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#downscaling OpsworksNodejsAppLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#enable OpsworksNodejsAppLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling.property.upscaling"></a>

```python
upscaling: OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#upscaling OpsworksNodejsAppLayer#upscaling}

---

### OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling <a name="OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling(
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
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#alarms OpsworksNodejsAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#cpu_threshold OpsworksNodejsAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#ignore_metrics_time OpsworksNodejsAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#instance_count OpsworksNodejsAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#load_threshold OpsworksNodejsAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#memory_threshold OpsworksNodejsAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#thresholds_wait_time OpsworksNodejsAppLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#alarms OpsworksNodejsAppLayer#alarms}.

---

##### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#cpu_threshold OpsworksNodejsAppLayer#cpu_threshold}.

---

##### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#ignore_metrics_time OpsworksNodejsAppLayer#ignore_metrics_time}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#instance_count OpsworksNodejsAppLayer#instance_count}.

---

##### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#load_threshold OpsworksNodejsAppLayer#load_threshold}.

---

##### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#memory_threshold OpsworksNodejsAppLayer#memory_threshold}.

---

##### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#thresholds_wait_time OpsworksNodejsAppLayer#thresholds_wait_time}.

---

### OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling <a name="OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling(
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
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#alarms OpsworksNodejsAppLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#cpu_threshold OpsworksNodejsAppLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#ignore_metrics_time OpsworksNodejsAppLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#instance_count OpsworksNodejsAppLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#load_threshold OpsworksNodejsAppLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#memory_threshold OpsworksNodejsAppLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#thresholds_wait_time OpsworksNodejsAppLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#alarms OpsworksNodejsAppLayer#alarms}.

---

##### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#cpu_threshold OpsworksNodejsAppLayer#cpu_threshold}.

---

##### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#ignore_metrics_time OpsworksNodejsAppLayer#ignore_metrics_time}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#instance_count OpsworksNodejsAppLayer#instance_count}.

---

##### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#load_threshold OpsworksNodejsAppLayer#load_threshold}.

---

##### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#memory_threshold OpsworksNodejsAppLayer#memory_threshold}.

---

##### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#thresholds_wait_time OpsworksNodejsAppLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams</a>]]

---


### OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">reset_batch_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">reset_buffer_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">reset_datetime_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">reset_file_fingerprint_lines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">reset_initial_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">reset_multiline_start_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_count` <a name="reset_batch_count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```python
def reset_batch_count() -> None
```

##### `reset_batch_size` <a name="reset_batch_size" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_buffer_duration` <a name="reset_buffer_duration" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```python
def reset_buffer_duration() -> None
```

##### `reset_datetime_format` <a name="reset_datetime_format" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```python
def reset_datetime_format() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_file_fingerprint_lines` <a name="reset_file_fingerprint_lines" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```python
def reset_file_fingerprint_lines() -> None
```

##### `reset_initial_position` <a name="reset_initial_position" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```python
def reset_initial_position() -> None
```

##### `reset_multiline_start_pattern` <a name="reset_multiline_start_pattern" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```python
def reset_multiline_start_pattern() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batch_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">buffer_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetime_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">file_fingerprint_lines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initial_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multiline_start_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">buffer_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetime_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">file_fingerprint_lines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initial_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multiline_start_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_count_input`<sup>Optional</sup> <a name="batch_count_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```python
batch_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buffer_duration_input`<sup>Optional</sup> <a name="buffer_duration_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```python
buffer_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datetime_format_input`<sup>Optional</sup> <a name="datetime_format_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```python
datetime_format_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `file_fingerprint_lines_input`<sup>Optional</sup> <a name="file_fingerprint_lines_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```python
file_fingerprint_lines_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `initial_position_input`<sup>Optional</sup> <a name="initial_position_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```python
initial_position_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `multiline_start_pattern_input`<sup>Optional</sup> <a name="multiline_start_pattern_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```python
multiline_start_pattern_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `batch_count`<sup>Required</sup> <a name="batch_count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buffer_duration`<sup>Required</sup> <a name="buffer_duration" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```python
buffer_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datetime_format`<sup>Required</sup> <a name="datetime_format" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```python
datetime_format: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `file_fingerprint_lines`<sup>Required</sup> <a name="file_fingerprint_lines" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```python
file_fingerprint_lines: str
```

- *Type:* str

---

##### `initial_position`<sup>Required</sup> <a name="initial_position" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```python
initial_position: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `multiline_start_pattern`<sup>Required</sup> <a name="multiline_start_pattern" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```python
multiline_start_pattern: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams</a>, cdktf.IResolvable]

---


### OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference <a name="OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.putLogStreams">put_log_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.resetLogStreams">reset_log_streams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_streams` <a name="put_log_streams" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```python
def put_log_streams(
  value: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_streams` <a name="reset_log_streams" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```python
def reset_log_streams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.logStreams">log_streams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">log_streams_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration">OpsworksNodejsAppLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_streams`<sup>Required</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```python
log_streams: OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_streams_input`<sup>Optional</sup> <a name="log_streams_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```python
log_streams_input: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams">OpsworksNodejsAppLayerCloudwatchConfigurationLogStreams</a>]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksNodejsAppLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerCloudwatchConfiguration">OpsworksNodejsAppLayerCloudwatchConfiguration</a>

---


### OpsworksNodejsAppLayerEbsVolumeList <a name="OpsworksNodejsAppLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksNodejsAppLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume">OpsworksNodejsAppLayerEbsVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksNodejsAppLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume">OpsworksNodejsAppLayerEbsVolume</a>]]

---


### OpsworksNodejsAppLayerEbsVolumeOutputReference <a name="OpsworksNodejsAppLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.resetRaidLevel">reset_raid_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_raid_level` <a name="reset_raid_level" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```python
def reset_raid_level() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.numberOfDisksInput">number_of_disks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.raidLevelInput">raid_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.numberOfDisks">number_of_disks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.raidLevel">raid_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume">OpsworksNodejsAppLayerEbsVolume</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `number_of_disks_input`<sup>Optional</sup> <a name="number_of_disks_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```python
number_of_disks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `raid_level_input`<sup>Optional</sup> <a name="raid_level_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```python
raid_level_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `number_of_disks`<sup>Required</sup> <a name="number_of_disks" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```python
number_of_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `raid_level`<sup>Required</sup> <a name="raid_level" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.raidLevel"></a>

```python
raid_level: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksNodejsAppLayerEbsVolume, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerEbsVolume">OpsworksNodejsAppLayerEbsVolume</a>, cdktf.IResolvable]

---


### OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">reset_cpu_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">reset_ignore_metrics_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">reset_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">reset_memory_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">reset_thresholds_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarms` <a name="reset_alarms" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_cpu_threshold` <a name="reset_cpu_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```python
def reset_cpu_threshold() -> None
```

##### `reset_ignore_metrics_time` <a name="reset_ignore_metrics_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```python
def reset_ignore_metrics_time() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_load_threshold` <a name="reset_load_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```python
def reset_load_threshold() -> None
```

##### `reset_memory_threshold` <a name="reset_memory_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```python
def reset_memory_threshold() -> None
```

##### `reset_thresholds_wait_time` <a name="reset_thresholds_wait_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```python
def reset_thresholds_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpu_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignore_metrics_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memory_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholds_wait_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```python
alarms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold_input`<sup>Optional</sup> <a name="cpu_threshold_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```python
cpu_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time_input`<sup>Optional</sup> <a name="ignore_metrics_time_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```python
ignore_metrics_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold_input`<sup>Optional</sup> <a name="load_threshold_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```python
load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold_input`<sup>Optional</sup> <a name="memory_threshold_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```python
memory_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time_input`<sup>Optional</sup> <a name="thresholds_wait_time_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```python
thresholds_wait_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold`<sup>Required</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time`<sup>Required</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold`<sup>Required</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold`<sup>Required</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time`<sup>Required</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference <a name="OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling">put_downscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling">put_upscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling">reset_downscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling">reset_upscaling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_downscaling` <a name="put_downscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

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

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.alarms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#alarms OpsworksNodejsAppLayer#alarms}.

---

###### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.cpuThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#cpu_threshold OpsworksNodejsAppLayer#cpu_threshold}.

---

###### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.ignoreMetricsTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#ignore_metrics_time OpsworksNodejsAppLayer#ignore_metrics_time}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#instance_count OpsworksNodejsAppLayer#instance_count}.

---

###### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.loadThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#load_threshold OpsworksNodejsAppLayer#load_threshold}.

---

###### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.memoryThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#memory_threshold OpsworksNodejsAppLayer#memory_threshold}.

---

###### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.thresholdsWaitTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#thresholds_wait_time OpsworksNodejsAppLayer#thresholds_wait_time}.

---

##### `put_upscaling` <a name="put_upscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

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

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.alarms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#alarms OpsworksNodejsAppLayer#alarms}.

---

###### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.cpuThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#cpu_threshold OpsworksNodejsAppLayer#cpu_threshold}.

---

###### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.ignoreMetricsTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#ignore_metrics_time OpsworksNodejsAppLayer#ignore_metrics_time}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#instance_count OpsworksNodejsAppLayer#instance_count}.

---

###### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.loadThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#load_threshold OpsworksNodejsAppLayer#load_threshold}.

---

###### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.memoryThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#memory_threshold OpsworksNodejsAppLayer#memory_threshold}.

---

###### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.thresholdsWaitTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer#thresholds_wait_time OpsworksNodejsAppLayer#thresholds_wait_time}.

---

##### `reset_downscaling` <a name="reset_downscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```python
def reset_downscaling() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_upscaling` <a name="reset_upscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```python
def reset_upscaling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling">OpsworksNodejsAppLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```python
downscaling: OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksNodejsAppLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```python
upscaling: OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscaling_input`<sup>Optional</sup> <a name="downscaling_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```python
downscaling_input: OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upscaling_input`<sup>Optional</sup> <a name="upscaling_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```python
upscaling_input: OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksNodejsAppLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScaling">OpsworksNodejsAppLayerLoadBasedAutoScaling</a>

---


### OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_nodejs_app_layer

opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">reset_cpu_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">reset_ignore_metrics_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">reset_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">reset_memory_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">reset_thresholds_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarms` <a name="reset_alarms" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_cpu_threshold` <a name="reset_cpu_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```python
def reset_cpu_threshold() -> None
```

##### `reset_ignore_metrics_time` <a name="reset_ignore_metrics_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```python
def reset_ignore_metrics_time() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_load_threshold` <a name="reset_load_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```python
def reset_load_threshold() -> None
```

##### `reset_memory_threshold` <a name="reset_memory_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```python
def reset_memory_threshold() -> None
```

##### `reset_thresholds_wait_time` <a name="reset_thresholds_wait_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```python
def reset_thresholds_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpu_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignore_metrics_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memory_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholds_wait_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```python
alarms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold_input`<sup>Optional</sup> <a name="cpu_threshold_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```python
cpu_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time_input`<sup>Optional</sup> <a name="ignore_metrics_time_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```python
ignore_metrics_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold_input`<sup>Optional</sup> <a name="load_threshold_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```python
load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold_input`<sup>Optional</sup> <a name="memory_threshold_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```python
memory_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time_input`<sup>Optional</sup> <a name="thresholds_wait_time_input" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```python
thresholds_wait_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold`<sup>Required</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time`<sup>Required</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold`<sup>Required</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold`<sup>Required</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time`<sup>Required</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksNodejsAppLayer.OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling">OpsworksNodejsAppLayerLoadBasedAutoScalingUpscaling</a>

---



