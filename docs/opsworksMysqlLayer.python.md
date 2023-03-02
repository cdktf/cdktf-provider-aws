# `opsworksMysqlLayer` Submodule <a name="`opsworksMysqlLayer` Submodule" id="@cdktf/provider-aws.opsworksMysqlLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksMysqlLayer <a name="OpsworksMysqlLayer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer aws_opsworks_mysql_layer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayer(
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
  cloudwatch_configuration: OpsworksMysqlLayerCloudwatchConfiguration = None,
  custom_configure_recipes: typing.List[str] = None,
  custom_deploy_recipes: typing.List[str] = None,
  custom_instance_profile_arn: str = None,
  custom_json: str = None,
  custom_security_group_ids: typing.List[str] = None,
  custom_setup_recipes: typing.List[str] = None,
  custom_shutdown_recipes: typing.List[str] = None,
  custom_undeploy_recipes: typing.List[str] = None,
  drain_elb_on_shutdown: typing.Union[bool, IResolvable] = None,
  ebs_volume: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerEbsVolume]] = None,
  elastic_load_balancer: str = None,
  id: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_shutdown_timeout: typing.Union[int, float] = None,
  load_based_auto_scaling: OpsworksMysqlLayerLoadBasedAutoScaling = None,
  name: str = None,
  root_password: str = None,
  root_password_on_all_instances: typing.Union[bool, IResolvable] = None,
  system_packages: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  use_ebs_optimized_instances: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#stack_id OpsworksMysqlLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_healing OpsworksMysqlLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_json OpsworksMysqlLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.ebsVolume">ebs_volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>]]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#id OpsworksMysqlLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#name OpsworksMysqlLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.rootPassword">root_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password OpsworksMysqlLayer#root_password}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.rootPasswordOnAllInstances">root_password_on_all_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#system_packages OpsworksMysqlLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags OpsworksMysqlLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags_all OpsworksMysqlLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.stackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#stack_id OpsworksMysqlLayer#stack_id}.

---

##### `auto_assign_elastic_ips`<sup>Optional</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.autoAssignElasticIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}.

---

##### `auto_assign_public_ips`<sup>Optional</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.autoAssignPublicIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.autoHealing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_healing OpsworksMysqlLayer#auto_healing}.

---

##### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.cloudwatchConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cloudwatch_configuration OpsworksMysqlLayer#cloudwatch_configuration}

---

##### `custom_configure_recipes`<sup>Optional</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customConfigureRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}.

---

##### `custom_deploy_recipes`<sup>Optional</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customDeployRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}.

---

##### `custom_instance_profile_arn`<sup>Optional</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customInstanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}.

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_json OpsworksMysqlLayer#custom_json}.

---

##### `custom_security_group_ids`<sup>Optional</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}.

---

##### `custom_setup_recipes`<sup>Optional</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customSetupRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}.

---

##### `custom_shutdown_recipes`<sup>Optional</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customShutdownRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}.

---

##### `custom_undeploy_recipes`<sup>Optional</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.customUndeployRecipes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}.

---

##### `drain_elb_on_shutdown`<sup>Optional</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.drainElbOnShutdown"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}.

---

##### `ebs_volume`<sup>Optional</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.ebsVolume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>]]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ebs_volume OpsworksMysqlLayer#ebs_volume}

---

##### `elastic_load_balancer`<sup>Optional</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.elasticLoadBalancer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#id OpsworksMysqlLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.installUpdatesOnBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}.

---

##### `instance_shutdown_timeout`<sup>Optional</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.instanceShutdownTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}.

---

##### `load_based_auto_scaling`<sup>Optional</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.loadBasedAutoScaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_based_auto_scaling OpsworksMysqlLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#name OpsworksMysqlLayer#name}.

---

##### `root_password`<sup>Optional</sup> <a name="root_password" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.rootPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password OpsworksMysqlLayer#root_password}.

---

##### `root_password_on_all_instances`<sup>Optional</sup> <a name="root_password_on_all_instances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.rootPasswordOnAllInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}.

---

##### `system_packages`<sup>Optional</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.systemPackages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#system_packages OpsworksMysqlLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags OpsworksMysqlLayer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags_all OpsworksMysqlLayer#tags_all}.

---

##### `use_ebs_optimized_instances`<sup>Optional</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.Initializer.parameter.useEbsOptimizedInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration">put_cloudwatch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putEbsVolume">put_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling">put_load_based_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignElasticIps">reset_auto_assign_elastic_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignPublicIps">reset_auto_assign_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoHealing">reset_auto_healing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCloudwatchConfiguration">reset_cloudwatch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomConfigureRecipes">reset_custom_configure_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomDeployRecipes">reset_custom_deploy_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomInstanceProfileArn">reset_custom_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomJson">reset_custom_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSecurityGroupIds">reset_custom_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSetupRecipes">reset_custom_setup_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomShutdownRecipes">reset_custom_shutdown_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomUndeployRecipes">reset_custom_undeploy_recipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetDrainElbOnShutdown">reset_drain_elb_on_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetEbsVolume">reset_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetElasticLoadBalancer">reset_elastic_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstallUpdatesOnBoot">reset_install_updates_on_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstanceShutdownTimeout">reset_instance_shutdown_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetLoadBasedAutoScaling">reset_load_based_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPassword">reset_root_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPasswordOnAllInstances">reset_root_password_on_all_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetSystemPackages">reset_system_packages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetUseEbsOptimizedInstances">reset_use_ebs_optimized_instances</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cloudwatch_configuration` <a name="put_cloudwatch_configuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration"></a>

```python
def put_cloudwatch_configuration(
  enabled: typing.Union[bool, IResolvable] = None,
  log_streams: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerCloudwatchConfigurationLogStreams]] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enabled OpsworksMysqlLayer#enabled}.

---

###### `log_streams`<sup>Optional</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putCloudwatchConfiguration.parameter.logStreams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>]]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_streams OpsworksMysqlLayer#log_streams}

---

##### `put_ebs_volume` <a name="put_ebs_volume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putEbsVolume"></a>

```python
def put_ebs_volume(
  value: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerEbsVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putEbsVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>]]

---

##### `put_load_based_auto_scaling` <a name="put_load_based_auto_scaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling"></a>

```python
def put_load_based_auto_scaling(
  downscaling: OpsworksMysqlLayerLoadBasedAutoScalingDownscaling = None,
  enable: typing.Union[bool, IResolvable] = None,
  upscaling: OpsworksMysqlLayerLoadBasedAutoScalingUpscaling = None
) -> None
```

###### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling.parameter.downscaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#downscaling OpsworksMysqlLayer#downscaling}

---

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enable OpsworksMysqlLayer#enable}.

---

###### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.putLoadBasedAutoScaling.parameter.upscaling"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#upscaling OpsworksMysqlLayer#upscaling}

---

##### `reset_auto_assign_elastic_ips` <a name="reset_auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignElasticIps"></a>

```python
def reset_auto_assign_elastic_ips() -> None
```

##### `reset_auto_assign_public_ips` <a name="reset_auto_assign_public_ips" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoAssignPublicIps"></a>

```python
def reset_auto_assign_public_ips() -> None
```

##### `reset_auto_healing` <a name="reset_auto_healing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetAutoHealing"></a>

```python
def reset_auto_healing() -> None
```

##### `reset_cloudwatch_configuration` <a name="reset_cloudwatch_configuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCloudwatchConfiguration"></a>

```python
def reset_cloudwatch_configuration() -> None
```

##### `reset_custom_configure_recipes` <a name="reset_custom_configure_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomConfigureRecipes"></a>

```python
def reset_custom_configure_recipes() -> None
```

##### `reset_custom_deploy_recipes` <a name="reset_custom_deploy_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomDeployRecipes"></a>

```python
def reset_custom_deploy_recipes() -> None
```

##### `reset_custom_instance_profile_arn` <a name="reset_custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomInstanceProfileArn"></a>

```python
def reset_custom_instance_profile_arn() -> None
```

##### `reset_custom_json` <a name="reset_custom_json" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomJson"></a>

```python
def reset_custom_json() -> None
```

##### `reset_custom_security_group_ids` <a name="reset_custom_security_group_ids" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSecurityGroupIds"></a>

```python
def reset_custom_security_group_ids() -> None
```

##### `reset_custom_setup_recipes` <a name="reset_custom_setup_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomSetupRecipes"></a>

```python
def reset_custom_setup_recipes() -> None
```

##### `reset_custom_shutdown_recipes` <a name="reset_custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomShutdownRecipes"></a>

```python
def reset_custom_shutdown_recipes() -> None
```

##### `reset_custom_undeploy_recipes` <a name="reset_custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetCustomUndeployRecipes"></a>

```python
def reset_custom_undeploy_recipes() -> None
```

##### `reset_drain_elb_on_shutdown` <a name="reset_drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetDrainElbOnShutdown"></a>

```python
def reset_drain_elb_on_shutdown() -> None
```

##### `reset_ebs_volume` <a name="reset_ebs_volume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetEbsVolume"></a>

```python
def reset_ebs_volume() -> None
```

##### `reset_elastic_load_balancer` <a name="reset_elastic_load_balancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetElasticLoadBalancer"></a>

```python
def reset_elastic_load_balancer() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_install_updates_on_boot` <a name="reset_install_updates_on_boot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstallUpdatesOnBoot"></a>

```python
def reset_install_updates_on_boot() -> None
```

##### `reset_instance_shutdown_timeout` <a name="reset_instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetInstanceShutdownTimeout"></a>

```python
def reset_instance_shutdown_timeout() -> None
```

##### `reset_load_based_auto_scaling` <a name="reset_load_based_auto_scaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetLoadBasedAutoScaling"></a>

```python
def reset_load_based_auto_scaling() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_root_password` <a name="reset_root_password" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPassword"></a>

```python
def reset_root_password() -> None
```

##### `reset_root_password_on_all_instances` <a name="reset_root_password_on_all_instances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetRootPasswordOnAllInstances"></a>

```python
def reset_root_password_on_all_instances() -> None
```

##### `reset_system_packages` <a name="reset_system_packages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetSystemPackages"></a>

```python
def reset_system_packages() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_use_ebs_optimized_instances` <a name="reset_use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.resetUseEbsOptimizedInstances"></a>

```python
def reset_use_ebs_optimized_instances() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference">OpsworksMysqlLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolume">ebs_volume</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList">OpsworksMysqlLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIpsInput">auto_assign_elastic_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIpsInput">auto_assign_public_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealingInput">auto_healing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfigurationInput">cloudwatch_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipesInput">custom_configure_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipesInput">custom_deploy_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArnInput">custom_instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJsonInput">custom_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIdsInput">custom_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipesInput">custom_setup_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipesInput">custom_shutdown_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipesInput">custom_undeploy_recipes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdownInput">drain_elb_on_shutdown_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolumeInput">ebs_volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancerInput">elastic_load_balancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBootInput">install_updates_on_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeoutInput">instance_shutdown_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScalingInput">load_based_auto_scaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordInput">root_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstancesInput">root_password_on_all_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackIdInput">stack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackagesInput">system_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstancesInput">use_ebs_optimized_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJson">custom_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPassword">root_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstances">root_password_on_all_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_configuration`<sup>Required</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: OpsworksMysqlLayerCloudwatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference">OpsworksMysqlLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebs_volume`<sup>Required</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolume"></a>

```python
ebs_volume: OpsworksMysqlLayerEbsVolumeList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList">OpsworksMysqlLayerEbsVolumeList</a>

---

##### `load_based_auto_scaling`<sup>Required</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScaling"></a>

```python
load_based_auto_scaling: OpsworksMysqlLayerLoadBasedAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingOutputReference</a>

---

##### `auto_assign_elastic_ips_input`<sup>Optional</sup> <a name="auto_assign_elastic_ips_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIpsInput"></a>

```python
auto_assign_elastic_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_public_ips_input`<sup>Optional</sup> <a name="auto_assign_public_ips_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIpsInput"></a>

```python
auto_assign_public_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_healing_input`<sup>Optional</sup> <a name="auto_healing_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealingInput"></a>

```python
auto_healing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloudwatch_configuration_input`<sup>Optional</sup> <a name="cloudwatch_configuration_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.cloudwatchConfigurationInput"></a>

```python
cloudwatch_configuration_input: OpsworksMysqlLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

---

##### `custom_configure_recipes_input`<sup>Optional</sup> <a name="custom_configure_recipes_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipesInput"></a>

```python
custom_configure_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_deploy_recipes_input`<sup>Optional</sup> <a name="custom_deploy_recipes_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipesInput"></a>

```python
custom_deploy_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_instance_profile_arn_input`<sup>Optional</sup> <a name="custom_instance_profile_arn_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArnInput"></a>

```python
custom_instance_profile_arn_input: str
```

- *Type:* str

---

##### `custom_json_input`<sup>Optional</sup> <a name="custom_json_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJsonInput"></a>

```python
custom_json_input: str
```

- *Type:* str

---

##### `custom_security_group_ids_input`<sup>Optional</sup> <a name="custom_security_group_ids_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIdsInput"></a>

```python
custom_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_setup_recipes_input`<sup>Optional</sup> <a name="custom_setup_recipes_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipesInput"></a>

```python
custom_setup_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_shutdown_recipes_input`<sup>Optional</sup> <a name="custom_shutdown_recipes_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipesInput"></a>

```python
custom_shutdown_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_undeploy_recipes_input`<sup>Optional</sup> <a name="custom_undeploy_recipes_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipesInput"></a>

```python
custom_undeploy_recipes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drain_elb_on_shutdown_input`<sup>Optional</sup> <a name="drain_elb_on_shutdown_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdownInput"></a>

```python
drain_elb_on_shutdown_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_volume_input`<sup>Optional</sup> <a name="ebs_volume_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.ebsVolumeInput"></a>

```python
ebs_volume_input: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>]]

---

##### `elastic_load_balancer_input`<sup>Optional</sup> <a name="elastic_load_balancer_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancerInput"></a>

```python
elastic_load_balancer_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `install_updates_on_boot_input`<sup>Optional</sup> <a name="install_updates_on_boot_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBootInput"></a>

```python
install_updates_on_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_shutdown_timeout_input`<sup>Optional</sup> <a name="instance_shutdown_timeout_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeoutInput"></a>

```python
instance_shutdown_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_based_auto_scaling_input`<sup>Optional</sup> <a name="load_based_auto_scaling_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.loadBasedAutoScalingInput"></a>

```python
load_based_auto_scaling_input: OpsworksMysqlLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `root_password_input`<sup>Optional</sup> <a name="root_password_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordInput"></a>

```python
root_password_input: str
```

- *Type:* str

---

##### `root_password_on_all_instances_input`<sup>Optional</sup> <a name="root_password_on_all_instances_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstancesInput"></a>

```python
root_password_on_all_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stack_id_input`<sup>Optional</sup> <a name="stack_id_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackIdInput"></a>

```python
stack_id_input: str
```

- *Type:* str

---

##### `system_packages_input`<sup>Optional</sup> <a name="system_packages_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackagesInput"></a>

```python
system_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_ebs_optimized_instances_input`<sup>Optional</sup> <a name="use_ebs_optimized_instances_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstancesInput"></a>

```python
use_ebs_optimized_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_elastic_ips`<sup>Required</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignElasticIps"></a>

```python
auto_assign_elastic_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_assign_public_ips`<sup>Required</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoAssignPublicIps"></a>

```python
auto_assign_public_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_healing`<sup>Required</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_configure_recipes`<sup>Required</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customConfigureRecipes"></a>

```python
custom_configure_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_deploy_recipes`<sup>Required</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customDeployRecipes"></a>

```python
custom_deploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_instance_profile_arn`<sup>Required</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customInstanceProfileArn"></a>

```python
custom_instance_profile_arn: str
```

- *Type:* str

---

##### `custom_json`<sup>Required</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

---

##### `custom_security_group_ids`<sup>Required</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSecurityGroupIds"></a>

```python
custom_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_setup_recipes`<sup>Required</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customSetupRecipes"></a>

```python
custom_setup_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_shutdown_recipes`<sup>Required</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customShutdownRecipes"></a>

```python
custom_shutdown_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_undeploy_recipes`<sup>Required</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.customUndeployRecipes"></a>

```python
custom_undeploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `drain_elb_on_shutdown`<sup>Required</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.drainElbOnShutdown"></a>

```python
drain_elb_on_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elastic_load_balancer`<sup>Required</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.elasticLoadBalancer"></a>

```python
elastic_load_balancer: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `install_updates_on_boot`<sup>Required</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_shutdown_timeout`<sup>Required</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.instanceShutdownTimeout"></a>

```python
instance_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `root_password`<sup>Required</sup> <a name="root_password" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPassword"></a>

```python
root_password: str
```

- *Type:* str

---

##### `root_password_on_all_instances`<sup>Required</sup> <a name="root_password_on_all_instances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.rootPasswordOnAllInstances"></a>

```python
root_password_on_all_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

##### `system_packages`<sup>Required</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.systemPackages"></a>

```python
system_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_ebs_optimized_instances`<sup>Required</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.useEbsOptimizedInstances"></a>

```python
use_ebs_optimized_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksMysqlLayerCloudwatchConfiguration <a name="OpsworksMysqlLayerCloudwatchConfiguration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration(
  enabled: typing.Union[bool, IResolvable] = None,
  log_streams: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerCloudwatchConfigurationLogStreams]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enabled OpsworksMysqlLayer#enabled}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.logStreams">log_streams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>]]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enabled OpsworksMysqlLayer#enabled}.

---

##### `log_streams`<sup>Optional</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration.property.logStreams"></a>

```python
log_streams: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>]]

log_streams block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_streams OpsworksMysqlLayer#log_streams}

---

### OpsworksMysqlLayerCloudwatchConfigurationLogStreams <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams(
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file OpsworksMysqlLayer#file}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_group_name OpsworksMysqlLayer#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_count OpsworksMysqlLayer#batch_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_size OpsworksMysqlLayer#batch_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.bufferDuration">buffer_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#buffer_duration OpsworksMysqlLayer#buffer_duration}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetime_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#datetime_format OpsworksMysqlLayer#datetime_format}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encoding OpsworksMysqlLayer#encoding}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">file_fingerprint_lines</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file_fingerprint_lines OpsworksMysqlLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.initialPosition">initial_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#initial_position OpsworksMysqlLayer#initial_position}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multiline_start_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#multiline_start_pattern OpsworksMysqlLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#time_zone OpsworksMysqlLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.file"></a>

```python
file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file OpsworksMysqlLayer#file}.

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#log_group_name OpsworksMysqlLayer#log_group_name}.

---

##### `batch_count`<sup>Optional</sup> <a name="batch_count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_count OpsworksMysqlLayer#batch_count}.

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#batch_size OpsworksMysqlLayer#batch_size}.

---

##### `buffer_duration`<sup>Optional</sup> <a name="buffer_duration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```python
buffer_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#buffer_duration OpsworksMysqlLayer#buffer_duration}.

---

##### `datetime_format`<sup>Optional</sup> <a name="datetime_format" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```python
datetime_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#datetime_format OpsworksMysqlLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encoding OpsworksMysqlLayer#encoding}.

---

##### `file_fingerprint_lines`<sup>Optional</sup> <a name="file_fingerprint_lines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```python
file_fingerprint_lines: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#file_fingerprint_lines OpsworksMysqlLayer#file_fingerprint_lines}.

---

##### `initial_position`<sup>Optional</sup> <a name="initial_position" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```python
initial_position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#initial_position OpsworksMysqlLayer#initial_position}.

---

##### `multiline_start_pattern`<sup>Optional</sup> <a name="multiline_start_pattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```python
multiline_start_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#multiline_start_pattern OpsworksMysqlLayer#multiline_start_pattern}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#time_zone OpsworksMysqlLayer#time_zone}.

---

### OpsworksMysqlLayerConfig <a name="OpsworksMysqlLayerConfig" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerConfig(
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
  cloudwatch_configuration: OpsworksMysqlLayerCloudwatchConfiguration = None,
  custom_configure_recipes: typing.List[str] = None,
  custom_deploy_recipes: typing.List[str] = None,
  custom_instance_profile_arn: str = None,
  custom_json: str = None,
  custom_security_group_ids: typing.List[str] = None,
  custom_setup_recipes: typing.List[str] = None,
  custom_shutdown_recipes: typing.List[str] = None,
  custom_undeploy_recipes: typing.List[str] = None,
  drain_elb_on_shutdown: typing.Union[bool, IResolvable] = None,
  ebs_volume: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerEbsVolume]] = None,
  elastic_load_balancer: str = None,
  id: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_shutdown_timeout: typing.Union[int, float] = None,
  load_based_auto_scaling: OpsworksMysqlLayerLoadBasedAutoScaling = None,
  name: str = None,
  root_password: str = None,
  root_password_on_all_instances: typing.Union[bool, IResolvable] = None,
  system_packages: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  use_ebs_optimized_instances: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#stack_id OpsworksMysqlLayer#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignElasticIps">auto_assign_elastic_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignPublicIps">auto_assign_public_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_healing OpsworksMysqlLayer#auto_healing}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customConfigureRecipes">custom_configure_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customDeployRecipes">custom_deploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customInstanceProfileArn">custom_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_json OpsworksMysqlLayer#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSecurityGroupIds">custom_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSetupRecipes">custom_setup_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customShutdownRecipes">custom_shutdown_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customUndeployRecipes">custom_undeploy_recipes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.drainElbOnShutdown">drain_elb_on_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.ebsVolume">ebs_volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>]]</code> | ebs_volume block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.elasticLoadBalancer">elastic_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#id OpsworksMysqlLayer#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.instanceShutdownTimeout">instance_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.loadBasedAutoScaling">load_based_auto_scaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | load_based_auto_scaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#name OpsworksMysqlLayer#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPassword">root_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password OpsworksMysqlLayer#root_password}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPasswordOnAllInstances">root_password_on_all_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.systemPackages">system_packages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#system_packages OpsworksMysqlLayer#system_packages}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags OpsworksMysqlLayer#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags_all OpsworksMysqlLayer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.useEbsOptimizedInstances">use_ebs_optimized_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#stack_id OpsworksMysqlLayer#stack_id}.

---

##### `auto_assign_elastic_ips`<sup>Optional</sup> <a name="auto_assign_elastic_ips" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignElasticIps"></a>

```python
auto_assign_elastic_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_elastic_ips OpsworksMysqlLayer#auto_assign_elastic_ips}.

---

##### `auto_assign_public_ips`<sup>Optional</sup> <a name="auto_assign_public_ips" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoAssignPublicIps"></a>

```python
auto_assign_public_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_assign_public_ips OpsworksMysqlLayer#auto_assign_public_ips}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#auto_healing OpsworksMysqlLayer#auto_healing}.

---

##### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: OpsworksMysqlLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cloudwatch_configuration OpsworksMysqlLayer#cloudwatch_configuration}

---

##### `custom_configure_recipes`<sup>Optional</sup> <a name="custom_configure_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customConfigureRecipes"></a>

```python
custom_configure_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_configure_recipes OpsworksMysqlLayer#custom_configure_recipes}.

---

##### `custom_deploy_recipes`<sup>Optional</sup> <a name="custom_deploy_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customDeployRecipes"></a>

```python
custom_deploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_deploy_recipes OpsworksMysqlLayer#custom_deploy_recipes}.

---

##### `custom_instance_profile_arn`<sup>Optional</sup> <a name="custom_instance_profile_arn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customInstanceProfileArn"></a>

```python
custom_instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_instance_profile_arn OpsworksMysqlLayer#custom_instance_profile_arn}.

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_json OpsworksMysqlLayer#custom_json}.

---

##### `custom_security_group_ids`<sup>Optional</sup> <a name="custom_security_group_ids" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSecurityGroupIds"></a>

```python
custom_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_security_group_ids OpsworksMysqlLayer#custom_security_group_ids}.

---

##### `custom_setup_recipes`<sup>Optional</sup> <a name="custom_setup_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customSetupRecipes"></a>

```python
custom_setup_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_setup_recipes OpsworksMysqlLayer#custom_setup_recipes}.

---

##### `custom_shutdown_recipes`<sup>Optional</sup> <a name="custom_shutdown_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customShutdownRecipes"></a>

```python
custom_shutdown_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_shutdown_recipes OpsworksMysqlLayer#custom_shutdown_recipes}.

---

##### `custom_undeploy_recipes`<sup>Optional</sup> <a name="custom_undeploy_recipes" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.customUndeployRecipes"></a>

```python
custom_undeploy_recipes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#custom_undeploy_recipes OpsworksMysqlLayer#custom_undeploy_recipes}.

---

##### `drain_elb_on_shutdown`<sup>Optional</sup> <a name="drain_elb_on_shutdown" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.drainElbOnShutdown"></a>

```python
drain_elb_on_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#drain_elb_on_shutdown OpsworksMysqlLayer#drain_elb_on_shutdown}.

---

##### `ebs_volume`<sup>Optional</sup> <a name="ebs_volume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.ebsVolume"></a>

```python
ebs_volume: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>]]

ebs_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ebs_volume OpsworksMysqlLayer#ebs_volume}

---

##### `elastic_load_balancer`<sup>Optional</sup> <a name="elastic_load_balancer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.elasticLoadBalancer"></a>

```python
elastic_load_balancer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#elastic_load_balancer OpsworksMysqlLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#id OpsworksMysqlLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#install_updates_on_boot OpsworksMysqlLayer#install_updates_on_boot}.

---

##### `instance_shutdown_timeout`<sup>Optional</sup> <a name="instance_shutdown_timeout" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.instanceShutdownTimeout"></a>

```python
instance_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_shutdown_timeout OpsworksMysqlLayer#instance_shutdown_timeout}.

---

##### `load_based_auto_scaling`<sup>Optional</sup> <a name="load_based_auto_scaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.loadBasedAutoScaling"></a>

```python
load_based_auto_scaling: OpsworksMysqlLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

load_based_auto_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_based_auto_scaling OpsworksMysqlLayer#load_based_auto_scaling}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#name OpsworksMysqlLayer#name}.

---

##### `root_password`<sup>Optional</sup> <a name="root_password" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPassword"></a>

```python
root_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password OpsworksMysqlLayer#root_password}.

---

##### `root_password_on_all_instances`<sup>Optional</sup> <a name="root_password_on_all_instances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.rootPasswordOnAllInstances"></a>

```python
root_password_on_all_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#root_password_on_all_instances OpsworksMysqlLayer#root_password_on_all_instances}.

---

##### `system_packages`<sup>Optional</sup> <a name="system_packages" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.systemPackages"></a>

```python
system_packages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#system_packages OpsworksMysqlLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags OpsworksMysqlLayer#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#tags_all OpsworksMysqlLayer#tags_all}.

---

##### `use_ebs_optimized_instances`<sup>Optional</sup> <a name="use_ebs_optimized_instances" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerConfig.property.useEbsOptimizedInstances"></a>

```python
use_ebs_optimized_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#use_ebs_optimized_instances OpsworksMysqlLayer#use_ebs_optimized_instances}.

---

### OpsworksMysqlLayerEbsVolume <a name="OpsworksMysqlLayerEbsVolume" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume(
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.mountPoint">mount_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#mount_point OpsworksMysqlLayer#mount_point}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.numberOfDisks">number_of_disks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#number_of_disks OpsworksMysqlLayer#number_of_disks}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#size OpsworksMysqlLayer#size}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encrypted OpsworksMysqlLayer#encrypted}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#iops OpsworksMysqlLayer#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.raidLevel">raid_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#raid_level OpsworksMysqlLayer#raid_level}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#type OpsworksMysqlLayer#type}. |

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#mount_point OpsworksMysqlLayer#mount_point}.

---

##### `number_of_disks`<sup>Required</sup> <a name="number_of_disks" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.numberOfDisks"></a>

```python
number_of_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#number_of_disks OpsworksMysqlLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#size OpsworksMysqlLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#encrypted OpsworksMysqlLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#iops OpsworksMysqlLayer#iops}.

---

##### `raid_level`<sup>Optional</sup> <a name="raid_level" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.raidLevel"></a>

```python
raid_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#raid_level OpsworksMysqlLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#type OpsworksMysqlLayer#type}.

---

### OpsworksMysqlLayerLoadBasedAutoScaling <a name="OpsworksMysqlLayerLoadBasedAutoScaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling(
  downscaling: OpsworksMysqlLayerLoadBasedAutoScalingDownscaling = None,
  enable: typing.Union[bool, IResolvable] = None,
  upscaling: OpsworksMysqlLayerLoadBasedAutoScalingUpscaling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | downscaling block. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enable OpsworksMysqlLayer#enable}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | upscaling block. |

---

##### `downscaling`<sup>Optional</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.downscaling"></a>

```python
downscaling: OpsworksMysqlLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

downscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#downscaling OpsworksMysqlLayer#downscaling}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#enable OpsworksMysqlLayer#enable}.

---

##### `upscaling`<sup>Optional</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling.property.upscaling"></a>

```python
upscaling: OpsworksMysqlLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

upscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#upscaling OpsworksMysqlLayer#upscaling}

---

### OpsworksMysqlLayerLoadBasedAutoScalingDownscaling <a name="OpsworksMysqlLayerLoadBasedAutoScalingDownscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling(
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}.

---

##### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}.

---

##### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}.

---

##### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}.

---

##### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}.

---

##### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}.

---

### OpsworksMysqlLayerLoadBasedAutoScalingUpscaling <a name="OpsworksMysqlLayerLoadBasedAutoScalingUpscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling(
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
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}.

---

##### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}.

---

##### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}.

---

##### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}.

---

##### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}.

---

##### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>]]

---


### OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">reset_batch_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">reset_buffer_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">reset_datetime_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">reset_file_fingerprint_lines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">reset_initial_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">reset_multiline_start_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_count` <a name="reset_batch_count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```python
def reset_batch_count() -> None
```

##### `reset_batch_size` <a name="reset_batch_size" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_buffer_duration` <a name="reset_buffer_duration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```python
def reset_buffer_duration() -> None
```

##### `reset_datetime_format` <a name="reset_datetime_format" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```python
def reset_datetime_format() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_file_fingerprint_lines` <a name="reset_file_fingerprint_lines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```python
def reset_file_fingerprint_lines() -> None
```

##### `reset_initial_position` <a name="reset_initial_position" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```python
def reset_initial_position() -> None
```

##### `reset_multiline_start_pattern` <a name="reset_multiline_start_pattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```python
def reset_multiline_start_pattern() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batch_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">buffer_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetime_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">file_fingerprint_lines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initial_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multiline_start_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">buffer_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetime_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">file_fingerprint_lines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initial_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multiline_start_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_count_input`<sup>Optional</sup> <a name="batch_count_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```python
batch_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buffer_duration_input`<sup>Optional</sup> <a name="buffer_duration_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```python
buffer_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datetime_format_input`<sup>Optional</sup> <a name="datetime_format_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```python
datetime_format_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `file_fingerprint_lines_input`<sup>Optional</sup> <a name="file_fingerprint_lines_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```python
file_fingerprint_lines_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `initial_position_input`<sup>Optional</sup> <a name="initial_position_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```python
initial_position_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `multiline_start_pattern_input`<sup>Optional</sup> <a name="multiline_start_pattern_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```python
multiline_start_pattern_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `batch_count`<sup>Required</sup> <a name="batch_count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buffer_duration`<sup>Required</sup> <a name="buffer_duration" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```python
buffer_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datetime_format`<sup>Required</sup> <a name="datetime_format" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```python
datetime_format: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `file_fingerprint_lines`<sup>Required</sup> <a name="file_fingerprint_lines" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```python
file_fingerprint_lines: str
```

- *Type:* str

---

##### `initial_position`<sup>Required</sup> <a name="initial_position" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```python
initial_position: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `multiline_start_pattern`<sup>Required</sup> <a name="multiline_start_pattern" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```python
multiline_start_pattern: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksMysqlLayerCloudwatchConfigurationLogStreams, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>, cdktf.IResolvable]

---


### OpsworksMysqlLayerCloudwatchConfigurationOutputReference <a name="OpsworksMysqlLayerCloudwatchConfigurationOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.putLogStreams">put_log_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetLogStreams">reset_log_streams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_log_streams` <a name="put_log_streams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```python
def put_log_streams(
  value: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerCloudwatchConfigurationLogStreams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_streams` <a name="reset_log_streams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```python
def reset_log_streams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreams">log_streams</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList">OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">log_streams_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_streams`<sup>Required</sup> <a name="log_streams" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```python
log_streams: OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList">OpsworksMysqlLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_streams_input`<sup>Optional</sup> <a name="log_streams_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```python
log_streams_input: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerCloudwatchConfigurationLogStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationLogStreams">OpsworksMysqlLayerCloudwatchConfigurationLogStreams</a>]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksMysqlLayerCloudwatchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerCloudwatchConfiguration">OpsworksMysqlLayerCloudwatchConfiguration</a>

---


### OpsworksMysqlLayerEbsVolumeList <a name="OpsworksMysqlLayerEbsVolumeList" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksMysqlLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksMysqlLayerEbsVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>]]

---


### OpsworksMysqlLayerEbsVolumeOutputReference <a name="OpsworksMysqlLayerEbsVolumeOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetRaidLevel">reset_raid_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_raid_level` <a name="reset_raid_level" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```python
def reset_raid_level() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisksInput">number_of_disks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevelInput">raid_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisks">number_of_disks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevel">raid_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `number_of_disks_input`<sup>Optional</sup> <a name="number_of_disks_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```python
number_of_disks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `raid_level_input`<sup>Optional</sup> <a name="raid_level_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```python
raid_level_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `number_of_disks`<sup>Required</sup> <a name="number_of_disks" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```python
number_of_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `raid_level`<sup>Required</sup> <a name="raid_level" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.raidLevel"></a>

```python
raid_level: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksMysqlLayerEbsVolume, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerEbsVolume">OpsworksMysqlLayerEbsVolume</a>, cdktf.IResolvable]

---


### OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold">reset_cpu_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime">reset_ignore_metrics_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold">reset_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold">reset_memory_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime">reset_thresholds_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarms` <a name="reset_alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_cpu_threshold` <a name="reset_cpu_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetCpuThreshold"></a>

```python
def reset_cpu_threshold() -> None
```

##### `reset_ignore_metrics_time` <a name="reset_ignore_metrics_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetIgnoreMetricsTime"></a>

```python
def reset_ignore_metrics_time() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_load_threshold` <a name="reset_load_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetLoadThreshold"></a>

```python
def reset_load_threshold() -> None
```

##### `reset_memory_threshold` <a name="reset_memory_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetMemoryThreshold"></a>

```python
def reset_memory_threshold() -> None
```

##### `reset_thresholds_wait_time` <a name="reset_thresholds_wait_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.resetThresholdsWaitTime"></a>

```python
def reset_thresholds_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput">alarms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput">cpu_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput">ignore_metrics_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput">load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput">memory_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput">thresholds_wait_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarmsInput"></a>

```python
alarms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold_input`<sup>Optional</sup> <a name="cpu_threshold_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThresholdInput"></a>

```python
cpu_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time_input`<sup>Optional</sup> <a name="ignore_metrics_time_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```python
ignore_metrics_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold_input`<sup>Optional</sup> <a name="load_threshold_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThresholdInput"></a>

```python
load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold_input`<sup>Optional</sup> <a name="memory_threshold_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThresholdInput"></a>

```python
memory_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time_input`<sup>Optional</sup> <a name="thresholds_wait_time_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```python
thresholds_wait_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold`<sup>Required</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time`<sup>Required</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold`<sup>Required</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold`<sup>Required</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time`<sup>Required</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksMysqlLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

---


### OpsworksMysqlLayerLoadBasedAutoScalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling">put_downscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling">put_upscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetDownscaling">reset_downscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetUpscaling">reset_upscaling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_downscaling` <a name="put_downscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling"></a>

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

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.alarms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}.

---

###### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.cpuThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}.

---

###### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.ignoreMetricsTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}.

---

###### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.loadThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}.

---

###### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.memoryThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}.

---

###### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putDownscaling.parameter.thresholdsWaitTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}.

---

##### `put_upscaling` <a name="put_upscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling"></a>

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

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.alarms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#alarms OpsworksMysqlLayer#alarms}.

---

###### `cpu_threshold`<sup>Optional</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.cpuThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#cpu_threshold OpsworksMysqlLayer#cpu_threshold}.

---

###### `ignore_metrics_time`<sup>Optional</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.ignoreMetricsTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#ignore_metrics_time OpsworksMysqlLayer#ignore_metrics_time}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#instance_count OpsworksMysqlLayer#instance_count}.

---

###### `load_threshold`<sup>Optional</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.loadThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#load_threshold OpsworksMysqlLayer#load_threshold}.

---

###### `memory_threshold`<sup>Optional</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.memoryThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#memory_threshold OpsworksMysqlLayer#memory_threshold}.

---

###### `thresholds_wait_time`<sup>Optional</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.putUpscaling.parameter.thresholdsWaitTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer#thresholds_wait_time OpsworksMysqlLayer#thresholds_wait_time}.

---

##### `reset_downscaling` <a name="reset_downscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetDownscaling"></a>

```python
def reset_downscaling() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_upscaling` <a name="reset_upscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.resetUpscaling"></a>

```python
def reset_upscaling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscaling">downscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscaling">upscaling</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscalingInput">downscaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscalingInput">upscaling_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `downscaling`<sup>Required</sup> <a name="downscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscaling"></a>

```python
downscaling: OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingDownscalingOutputReference</a>

---

##### `upscaling`<sup>Required</sup> <a name="upscaling" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscaling"></a>

```python
upscaling: OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference">OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference</a>

---

##### `downscaling_input`<sup>Optional</sup> <a name="downscaling_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.downscalingInput"></a>

```python
downscaling_input: OpsworksMysqlLayerLoadBasedAutoScalingDownscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingDownscaling">OpsworksMysqlLayerLoadBasedAutoScalingDownscaling</a>

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upscaling_input`<sup>Optional</sup> <a name="upscaling_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.upscalingInput"></a>

```python
upscaling_input: OpsworksMysqlLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksMysqlLayerLoadBasedAutoScaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScaling">OpsworksMysqlLayerLoadBasedAutoScaling</a>

---


### OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference <a name="OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_mysql_layer

opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold">reset_cpu_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime">reset_ignore_metrics_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold">reset_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold">reset_memory_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime">reset_thresholds_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarms` <a name="reset_alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_cpu_threshold` <a name="reset_cpu_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetCpuThreshold"></a>

```python
def reset_cpu_threshold() -> None
```

##### `reset_ignore_metrics_time` <a name="reset_ignore_metrics_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetIgnoreMetricsTime"></a>

```python
def reset_ignore_metrics_time() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_load_threshold` <a name="reset_load_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetLoadThreshold"></a>

```python
def reset_load_threshold() -> None
```

##### `reset_memory_threshold` <a name="reset_memory_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetMemoryThreshold"></a>

```python
def reset_memory_threshold() -> None
```

##### `reset_thresholds_wait_time` <a name="reset_thresholds_wait_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.resetThresholdsWaitTime"></a>

```python
def reset_thresholds_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput">alarms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput">cpu_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput">ignore_metrics_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput">load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput">memory_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput">thresholds_wait_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold">cpu_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime">ignore_metrics_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold">load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold">memory_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime">thresholds_wait_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarmsInput"></a>

```python
alarms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold_input`<sup>Optional</sup> <a name="cpu_threshold_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThresholdInput"></a>

```python
cpu_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time_input`<sup>Optional</sup> <a name="ignore_metrics_time_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTimeInput"></a>

```python
ignore_metrics_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold_input`<sup>Optional</sup> <a name="load_threshold_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThresholdInput"></a>

```python
load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold_input`<sup>Optional</sup> <a name="memory_threshold_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThresholdInput"></a>

```python
memory_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time_input`<sup>Optional</sup> <a name="thresholds_wait_time_input" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTimeInput"></a>

```python
thresholds_wait_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_threshold`<sup>Required</sup> <a name="cpu_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.cpuThreshold"></a>

```python
cpu_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_metrics_time`<sup>Required</sup> <a name="ignore_metrics_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.ignoreMetricsTime"></a>

```python
ignore_metrics_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_threshold`<sup>Required</sup> <a name="load_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.loadThreshold"></a>

```python
load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_threshold`<sup>Required</sup> <a name="memory_threshold" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.memoryThreshold"></a>

```python
memory_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_wait_time`<sup>Required</sup> <a name="thresholds_wait_time" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.thresholdsWaitTime"></a>

```python
thresholds_wait_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscalingOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksMysqlLayerLoadBasedAutoScalingUpscaling
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksMysqlLayer.OpsworksMysqlLayerLoadBasedAutoScalingUpscaling">OpsworksMysqlLayerLoadBasedAutoScalingUpscaling</a>

---



