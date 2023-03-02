# `opsworksInstance` Submodule <a name="`opsworksInstance` Submodule" id="@cdktf/provider-aws.opsworksInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksInstance <a name="OpsworksInstance" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance aws_opsworks_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  layer_ids: typing.List[str],
  stack_id: str,
  agent_version: str = None,
  ami_id: str = None,
  architecture: str = None,
  auto_scaling_type: str = None,
  availability_zone: str = None,
  created_at: str = None,
  delete_ebs: typing.Union[bool, IResolvable] = None,
  delete_eip: typing.Union[bool, IResolvable] = None,
  ebs_block_device: typing.Union[IResolvable, typing.List[OpsworksInstanceEbsBlockDevice]] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  ecs_cluster_arn: str = None,
  elastic_ip: str = None,
  ephemeral_block_device: typing.Union[IResolvable, typing.List[OpsworksInstanceEphemeralBlockDevice]] = None,
  hostname: str = None,
  id: str = None,
  infrastructure_class: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_profile_arn: str = None,
  instance_type: str = None,
  os: str = None,
  root_block_device: typing.Union[IResolvable, typing.List[OpsworksInstanceRootBlockDevice]] = None,
  root_device_type: str = None,
  security_group_ids: typing.List[str] = None,
  ssh_key_name: str = None,
  state: str = None,
  status: str = None,
  subnet_id: str = None,
  tenancy: str = None,
  timeouts: OpsworksInstanceTimeouts = None,
  virtualization_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.layerIds">layer_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#layer_ids OpsworksInstance#layer_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#stack_id OpsworksInstance#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.agentVersion">agent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#agent_version OpsworksInstance#agent_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.amiId">ami_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ami_id OpsworksInstance#ami_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#architecture OpsworksInstance#architecture}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.autoScalingType">auto_scaling_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#auto_scaling_type OpsworksInstance#auto_scaling_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#availability_zone OpsworksInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.createdAt">created_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#created_at OpsworksInstance#created_at}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.deleteEbs">delete_ebs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_ebs OpsworksInstance#delete_ebs}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.deleteEip">delete_eip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_eip OpsworksInstance#delete_eip}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.ebsBlockDevice">ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>]]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ebs_optimized OpsworksInstance#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.ecsClusterArn">ecs_cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ecs_cluster_arn OpsworksInstance#ecs_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.elasticIp">elastic_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#elastic_ip OpsworksInstance#elastic_ip}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>]]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#hostname OpsworksInstance#hostname}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#id OpsworksInstance#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.infrastructureClass">infrastructure_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#infrastructure_class OpsworksInstance#infrastructure_class}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#install_updates_on_boot OpsworksInstance#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#instance_profile_arn OpsworksInstance#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#instance_type OpsworksInstance#instance_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#os OpsworksInstance#os}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.rootBlockDevice">root_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>]]</code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.rootDeviceType">root_device_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#root_device_type OpsworksInstance#root_device_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#security_group_ids OpsworksInstance#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.sshKeyName">ssh_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ssh_key_name OpsworksInstance#ssh_key_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#state OpsworksInstance#state}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#status OpsworksInstance#status}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#subnet_id OpsworksInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#tenancy OpsworksInstance#tenancy}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.virtualizationType">virtualization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#virtualization_type OpsworksInstance#virtualization_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `layer_ids`<sup>Required</sup> <a name="layer_ids" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.layerIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#layer_ids OpsworksInstance#layer_ids}.

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.stackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#stack_id OpsworksInstance#stack_id}.

---

##### `agent_version`<sup>Optional</sup> <a name="agent_version" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.agentVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#agent_version OpsworksInstance#agent_version}.

---

##### `ami_id`<sup>Optional</sup> <a name="ami_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.amiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ami_id OpsworksInstance#ami_id}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.architecture"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#architecture OpsworksInstance#architecture}.

---

##### `auto_scaling_type`<sup>Optional</sup> <a name="auto_scaling_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.autoScalingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#auto_scaling_type OpsworksInstance#auto_scaling_type}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#availability_zone OpsworksInstance#availability_zone}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.createdAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#created_at OpsworksInstance#created_at}.

---

##### `delete_ebs`<sup>Optional</sup> <a name="delete_ebs" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.deleteEbs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_ebs OpsworksInstance#delete_ebs}.

---

##### `delete_eip`<sup>Optional</sup> <a name="delete_eip" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.deleteEip"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_eip OpsworksInstance#delete_eip}.

---

##### `ebs_block_device`<sup>Optional</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.ebsBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>]]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ebs_block_device OpsworksInstance#ebs_block_device}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.ebsOptimized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ebs_optimized OpsworksInstance#ebs_optimized}.

---

##### `ecs_cluster_arn`<sup>Optional</sup> <a name="ecs_cluster_arn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.ecsClusterArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ecs_cluster_arn OpsworksInstance#ecs_cluster_arn}.

---

##### `elastic_ip`<sup>Optional</sup> <a name="elastic_ip" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.elasticIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#elastic_ip OpsworksInstance#elastic_ip}.

---

##### `ephemeral_block_device`<sup>Optional</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.ephemeralBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>]]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ephemeral_block_device OpsworksInstance#ephemeral_block_device}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#hostname OpsworksInstance#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#id OpsworksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_class`<sup>Optional</sup> <a name="infrastructure_class" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.infrastructureClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#infrastructure_class OpsworksInstance#infrastructure_class}.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.installUpdatesOnBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#install_updates_on_boot OpsworksInstance#install_updates_on_boot}.

---

##### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.instanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#instance_profile_arn OpsworksInstance#instance_profile_arn}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#instance_type OpsworksInstance#instance_type}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.os"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#os OpsworksInstance#os}.

---

##### `root_block_device`<sup>Optional</sup> <a name="root_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.rootBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>]]

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#root_block_device OpsworksInstance#root_block_device}

---

##### `root_device_type`<sup>Optional</sup> <a name="root_device_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.rootDeviceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#root_device_type OpsworksInstance#root_device_type}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#security_group_ids OpsworksInstance#security_group_ids}.

---

##### `ssh_key_name`<sup>Optional</sup> <a name="ssh_key_name" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.sshKeyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ssh_key_name OpsworksInstance#ssh_key_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#state OpsworksInstance#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#status OpsworksInstance#status}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#subnet_id OpsworksInstance#subnet_id}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.tenancy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#tenancy OpsworksInstance#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#timeouts OpsworksInstance#timeouts}

---

##### `virtualization_type`<sup>Optional</sup> <a name="virtualization_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.Initializer.parameter.virtualizationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#virtualization_type OpsworksInstance#virtualization_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putEbsBlockDevice">put_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putEphemeralBlockDevice">put_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putRootBlockDevice">put_root_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetAgentVersion">reset_agent_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetAmiId">reset_ami_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetArchitecture">reset_architecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetAutoScalingType">reset_auto_scaling_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetDeleteEbs">reset_delete_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetDeleteEip">reset_delete_eip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetEbsBlockDevice">reset_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetEcsClusterArn">reset_ecs_cluster_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetElasticIp">reset_elastic_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetEphemeralBlockDevice">reset_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetInfrastructureClass">reset_infrastructure_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetInstallUpdatesOnBoot">reset_install_updates_on_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetInstanceProfileArn">reset_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetOs">reset_os</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetRootBlockDevice">reset_root_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetRootDeviceType">reset_root_device_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetSshKeyName">reset_ssh_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetTenancy">reset_tenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetVirtualizationType">reset_virtualization_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_ebs_block_device` <a name="put_ebs_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putEbsBlockDevice"></a>

```python
def put_ebs_block_device(
  value: typing.Union[IResolvable, typing.List[OpsworksInstanceEbsBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putEbsBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>]]

---

##### `put_ephemeral_block_device` <a name="put_ephemeral_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putEphemeralBlockDevice"></a>

```python
def put_ephemeral_block_device(
  value: typing.Union[IResolvable, typing.List[OpsworksInstanceEphemeralBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>]]

---

##### `put_root_block_device` <a name="put_root_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putRootBlockDevice"></a>

```python
def put_root_block_device(
  value: typing.Union[IResolvable, typing.List[OpsworksInstanceRootBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putRootBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#create OpsworksInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete OpsworksInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#update OpsworksInstance#update}.

---

##### `reset_agent_version` <a name="reset_agent_version" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetAgentVersion"></a>

```python
def reset_agent_version() -> None
```

##### `reset_ami_id` <a name="reset_ami_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetAmiId"></a>

```python
def reset_ami_id() -> None
```

##### `reset_architecture` <a name="reset_architecture" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetArchitecture"></a>

```python
def reset_architecture() -> None
```

##### `reset_auto_scaling_type` <a name="reset_auto_scaling_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetAutoScalingType"></a>

```python
def reset_auto_scaling_type() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_delete_ebs` <a name="reset_delete_ebs" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetDeleteEbs"></a>

```python
def reset_delete_ebs() -> None
```

##### `reset_delete_eip` <a name="reset_delete_eip" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetDeleteEip"></a>

```python
def reset_delete_eip() -> None
```

##### `reset_ebs_block_device` <a name="reset_ebs_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetEbsBlockDevice"></a>

```python
def reset_ebs_block_device() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_ecs_cluster_arn` <a name="reset_ecs_cluster_arn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetEcsClusterArn"></a>

```python
def reset_ecs_cluster_arn() -> None
```

##### `reset_elastic_ip` <a name="reset_elastic_ip" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetElasticIp"></a>

```python
def reset_elastic_ip() -> None
```

##### `reset_ephemeral_block_device` <a name="reset_ephemeral_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetEphemeralBlockDevice"></a>

```python
def reset_ephemeral_block_device() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_infrastructure_class` <a name="reset_infrastructure_class" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetInfrastructureClass"></a>

```python
def reset_infrastructure_class() -> None
```

##### `reset_install_updates_on_boot` <a name="reset_install_updates_on_boot" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetInstallUpdatesOnBoot"></a>

```python
def reset_install_updates_on_boot() -> None
```

##### `reset_instance_profile_arn` <a name="reset_instance_profile_arn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetInstanceProfileArn"></a>

```python
def reset_instance_profile_arn() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_os` <a name="reset_os" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetOs"></a>

```python
def reset_os() -> None
```

##### `reset_root_block_device` <a name="reset_root_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetRootBlockDevice"></a>

```python
def reset_root_block_device() -> None
```

##### `reset_root_device_type` <a name="reset_root_device_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetRootDeviceType"></a>

```python
def reset_root_device_type() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_ssh_key_name` <a name="reset_ssh_key_name" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetSshKeyName"></a>

```python
def reset_ssh_key_name() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tenancy` <a name="reset_tenancy" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetTenancy"></a>

```python
def reset_tenancy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtualization_type` <a name="reset_virtualization_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.resetVirtualizationType"></a>

```python
def reset_virtualization_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ebsBlockDevice">ebs_block_device</a></code> | <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList">OpsworksInstanceEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ec2InstanceId">ec2_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList">OpsworksInstanceEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.lastServiceErrorId">last_service_error_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.privateDns">private_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.publicDns">public_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.registeredBy">registered_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.reportedAgentVersion">reported_agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.reportedOsFamily">reported_os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.reportedOsName">reported_os_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.reportedOsVersion">reported_os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.rootBlockDevice">root_block_device</a></code> | <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList">OpsworksInstanceRootBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.rootDeviceVolumeId">root_device_volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.sshHostDsaKeyFingerprint">ssh_host_dsa_key_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.sshHostRsaKeyFingerprint">ssh_host_rsa_key_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference">OpsworksInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.agentVersionInput">agent_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.amiIdInput">ami_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.autoScalingTypeInput">auto_scaling_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.createdAtInput">created_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.deleteEbsInput">delete_ebs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.deleteEipInput">delete_eip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ebsBlockDeviceInput">ebs_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ecsClusterArnInput">ecs_cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.elasticIpInput">elastic_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ephemeralBlockDeviceInput">ephemeral_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.infrastructureClassInput">infrastructure_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.installUpdatesOnBootInput">install_updates_on_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.instanceProfileArnInput">instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.layerIdsInput">layer_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.osInput">os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.rootBlockDeviceInput">root_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.rootDeviceTypeInput">root_device_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.sshKeyNameInput">ssh_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.stackIdInput">stack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.tenancyInput">tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.virtualizationTypeInput">virtualization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.amiId">ami_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.autoScalingType">auto_scaling_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.deleteEbs">delete_ebs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.deleteEip">delete_eip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ecsClusterArn">ecs_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.elasticIp">elastic_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.infrastructureClass">infrastructure_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.layerIds">layer_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.rootDeviceType">root_device_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.sshKeyName">ssh_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.virtualizationType">virtualization_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ebs_block_device`<sup>Required</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ebsBlockDevice"></a>

```python
ebs_block_device: OpsworksInstanceEbsBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList">OpsworksInstanceEbsBlockDeviceList</a>

---

##### `ec2_instance_id`<sup>Required</sup> <a name="ec2_instance_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ec2InstanceId"></a>

```python
ec2_instance_id: str
```

- *Type:* str

---

##### `ephemeral_block_device`<sup>Required</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: OpsworksInstanceEphemeralBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList">OpsworksInstanceEphemeralBlockDeviceList</a>

---

##### `last_service_error_id`<sup>Required</sup> <a name="last_service_error_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.lastServiceErrorId"></a>

```python
last_service_error_id: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `private_dns`<sup>Required</sup> <a name="private_dns" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.privateDns"></a>

```python
private_dns: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `public_dns`<sup>Required</sup> <a name="public_dns" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.publicDns"></a>

```python
public_dns: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `registered_by`<sup>Required</sup> <a name="registered_by" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.registeredBy"></a>

```python
registered_by: str
```

- *Type:* str

---

##### `reported_agent_version`<sup>Required</sup> <a name="reported_agent_version" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.reportedAgentVersion"></a>

```python
reported_agent_version: str
```

- *Type:* str

---

##### `reported_os_family`<sup>Required</sup> <a name="reported_os_family" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.reportedOsFamily"></a>

```python
reported_os_family: str
```

- *Type:* str

---

##### `reported_os_name`<sup>Required</sup> <a name="reported_os_name" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.reportedOsName"></a>

```python
reported_os_name: str
```

- *Type:* str

---

##### `reported_os_version`<sup>Required</sup> <a name="reported_os_version" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.reportedOsVersion"></a>

```python
reported_os_version: str
```

- *Type:* str

---

##### `root_block_device`<sup>Required</sup> <a name="root_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.rootBlockDevice"></a>

```python
root_block_device: OpsworksInstanceRootBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList">OpsworksInstanceRootBlockDeviceList</a>

---

##### `root_device_volume_id`<sup>Required</sup> <a name="root_device_volume_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.rootDeviceVolumeId"></a>

```python
root_device_volume_id: str
```

- *Type:* str

---

##### `ssh_host_dsa_key_fingerprint`<sup>Required</sup> <a name="ssh_host_dsa_key_fingerprint" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.sshHostDsaKeyFingerprint"></a>

```python
ssh_host_dsa_key_fingerprint: str
```

- *Type:* str

---

##### `ssh_host_rsa_key_fingerprint`<sup>Required</sup> <a name="ssh_host_rsa_key_fingerprint" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.sshHostRsaKeyFingerprint"></a>

```python
ssh_host_rsa_key_fingerprint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.timeouts"></a>

```python
timeouts: OpsworksInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference">OpsworksInstanceTimeoutsOutputReference</a>

---

##### `agent_version_input`<sup>Optional</sup> <a name="agent_version_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.agentVersionInput"></a>

```python
agent_version_input: str
```

- *Type:* str

---

##### `ami_id_input`<sup>Optional</sup> <a name="ami_id_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.amiIdInput"></a>

```python
ami_id_input: str
```

- *Type:* str

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `auto_scaling_type_input`<sup>Optional</sup> <a name="auto_scaling_type_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.autoScalingTypeInput"></a>

```python
auto_scaling_type_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.createdAtInput"></a>

```python
created_at_input: str
```

- *Type:* str

---

##### `delete_ebs_input`<sup>Optional</sup> <a name="delete_ebs_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.deleteEbsInput"></a>

```python
delete_ebs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_eip_input`<sup>Optional</sup> <a name="delete_eip_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.deleteEipInput"></a>

```python
delete_eip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_block_device_input`<sup>Optional</sup> <a name="ebs_block_device_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ebsBlockDeviceInput"></a>

```python
ebs_block_device_input: typing.Union[IResolvable, typing.List[OpsworksInstanceEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>]]

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ecs_cluster_arn_input`<sup>Optional</sup> <a name="ecs_cluster_arn_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ecsClusterArnInput"></a>

```python
ecs_cluster_arn_input: str
```

- *Type:* str

---

##### `elastic_ip_input`<sup>Optional</sup> <a name="elastic_ip_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.elasticIpInput"></a>

```python
elastic_ip_input: str
```

- *Type:* str

---

##### `ephemeral_block_device_input`<sup>Optional</sup> <a name="ephemeral_block_device_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ephemeralBlockDeviceInput"></a>

```python
ephemeral_block_device_input: typing.Union[IResolvable, typing.List[OpsworksInstanceEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>]]

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `infrastructure_class_input`<sup>Optional</sup> <a name="infrastructure_class_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.infrastructureClassInput"></a>

```python
infrastructure_class_input: str
```

- *Type:* str

---

##### `install_updates_on_boot_input`<sup>Optional</sup> <a name="install_updates_on_boot_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.installUpdatesOnBootInput"></a>

```python
install_updates_on_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_profile_arn_input`<sup>Optional</sup> <a name="instance_profile_arn_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.instanceProfileArnInput"></a>

```python
instance_profile_arn_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `layer_ids_input`<sup>Optional</sup> <a name="layer_ids_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.layerIdsInput"></a>

```python
layer_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_input`<sup>Optional</sup> <a name="os_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.osInput"></a>

```python
os_input: str
```

- *Type:* str

---

##### `root_block_device_input`<sup>Optional</sup> <a name="root_block_device_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.rootBlockDeviceInput"></a>

```python
root_block_device_input: typing.Union[IResolvable, typing.List[OpsworksInstanceRootBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>]]

---

##### `root_device_type_input`<sup>Optional</sup> <a name="root_device_type_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.rootDeviceTypeInput"></a>

```python
root_device_type_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_key_name_input`<sup>Optional</sup> <a name="ssh_key_name_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.sshKeyNameInput"></a>

```python
ssh_key_name_input: str
```

- *Type:* str

---

##### `stack_id_input`<sup>Optional</sup> <a name="stack_id_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.stackIdInput"></a>

```python
stack_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tenancy_input`<sup>Optional</sup> <a name="tenancy_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.tenancyInput"></a>

```python
tenancy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[OpsworksInstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a>, cdktf.IResolvable]

---

##### `virtualization_type_input`<sup>Optional</sup> <a name="virtualization_type_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.virtualizationTypeInput"></a>

```python
virtualization_type_input: str
```

- *Type:* str

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `ami_id`<sup>Required</sup> <a name="ami_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.amiId"></a>

```python
ami_id: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `auto_scaling_type`<sup>Required</sup> <a name="auto_scaling_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.autoScalingType"></a>

```python
auto_scaling_type: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `delete_ebs`<sup>Required</sup> <a name="delete_ebs" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.deleteEbs"></a>

```python
delete_ebs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_eip`<sup>Required</sup> <a name="delete_eip" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.deleteEip"></a>

```python
delete_eip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ecs_cluster_arn`<sup>Required</sup> <a name="ecs_cluster_arn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.ecsClusterArn"></a>

```python
ecs_cluster_arn: str
```

- *Type:* str

---

##### `elastic_ip`<sup>Required</sup> <a name="elastic_ip" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.elasticIp"></a>

```python
elastic_ip: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_class`<sup>Required</sup> <a name="infrastructure_class" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.infrastructureClass"></a>

```python
infrastructure_class: str
```

- *Type:* str

---

##### `install_updates_on_boot`<sup>Required</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `layer_ids`<sup>Required</sup> <a name="layer_ids" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.layerIds"></a>

```python
layer_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `root_device_type`<sup>Required</sup> <a name="root_device_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.rootDeviceType"></a>

```python
root_device_type: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_key_name`<sup>Required</sup> <a name="ssh_key_name" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.sshKeyName"></a>

```python
ssh_key_name: str
```

- *Type:* str

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `virtualization_type`<sup>Required</sup> <a name="virtualization_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.virtualizationType"></a>

```python
virtualization_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksInstanceConfig <a name="OpsworksInstanceConfig" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  layer_ids: typing.List[str],
  stack_id: str,
  agent_version: str = None,
  ami_id: str = None,
  architecture: str = None,
  auto_scaling_type: str = None,
  availability_zone: str = None,
  created_at: str = None,
  delete_ebs: typing.Union[bool, IResolvable] = None,
  delete_eip: typing.Union[bool, IResolvable] = None,
  ebs_block_device: typing.Union[IResolvable, typing.List[OpsworksInstanceEbsBlockDevice]] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  ecs_cluster_arn: str = None,
  elastic_ip: str = None,
  ephemeral_block_device: typing.Union[IResolvable, typing.List[OpsworksInstanceEphemeralBlockDevice]] = None,
  hostname: str = None,
  id: str = None,
  infrastructure_class: str = None,
  install_updates_on_boot: typing.Union[bool, IResolvable] = None,
  instance_profile_arn: str = None,
  instance_type: str = None,
  os: str = None,
  root_block_device: typing.Union[IResolvable, typing.List[OpsworksInstanceRootBlockDevice]] = None,
  root_device_type: str = None,
  security_group_ids: typing.List[str] = None,
  ssh_key_name: str = None,
  state: str = None,
  status: str = None,
  subnet_id: str = None,
  tenancy: str = None,
  timeouts: OpsworksInstanceTimeouts = None,
  virtualization_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.layerIds">layer_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#layer_ids OpsworksInstance#layer_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.stackId">stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#stack_id OpsworksInstance#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.agentVersion">agent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#agent_version OpsworksInstance#agent_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.amiId">ami_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ami_id OpsworksInstance#ami_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#architecture OpsworksInstance#architecture}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.autoScalingType">auto_scaling_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#auto_scaling_type OpsworksInstance#auto_scaling_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#availability_zone OpsworksInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.createdAt">created_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#created_at OpsworksInstance#created_at}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.deleteEbs">delete_ebs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_ebs OpsworksInstance#delete_ebs}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.deleteEip">delete_eip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_eip OpsworksInstance#delete_eip}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.ebsBlockDevice">ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>]]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ebs_optimized OpsworksInstance#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.ecsClusterArn">ecs_cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ecs_cluster_arn OpsworksInstance#ecs_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.elasticIp">elastic_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#elastic_ip OpsworksInstance#elastic_ip}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>]]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#hostname OpsworksInstance#hostname}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#id OpsworksInstance#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.infrastructureClass">infrastructure_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#infrastructure_class OpsworksInstance#infrastructure_class}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.installUpdatesOnBoot">install_updates_on_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#install_updates_on_boot OpsworksInstance#install_updates_on_boot}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#instance_profile_arn OpsworksInstance#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#instance_type OpsworksInstance#instance_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#os OpsworksInstance#os}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.rootBlockDevice">root_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>]]</code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.rootDeviceType">root_device_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#root_device_type OpsworksInstance#root_device_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#security_group_ids OpsworksInstance#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.sshKeyName">ssh_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ssh_key_name OpsworksInstance#ssh_key_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#state OpsworksInstance#state}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#status OpsworksInstance#status}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#subnet_id OpsworksInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#tenancy OpsworksInstance#tenancy}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.virtualizationType">virtualization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#virtualization_type OpsworksInstance#virtualization_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `layer_ids`<sup>Required</sup> <a name="layer_ids" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.layerIds"></a>

```python
layer_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#layer_ids OpsworksInstance#layer_ids}.

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#stack_id OpsworksInstance#stack_id}.

---

##### `agent_version`<sup>Optional</sup> <a name="agent_version" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#agent_version OpsworksInstance#agent_version}.

---

##### `ami_id`<sup>Optional</sup> <a name="ami_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.amiId"></a>

```python
ami_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ami_id OpsworksInstance#ami_id}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#architecture OpsworksInstance#architecture}.

---

##### `auto_scaling_type`<sup>Optional</sup> <a name="auto_scaling_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.autoScalingType"></a>

```python
auto_scaling_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#auto_scaling_type OpsworksInstance#auto_scaling_type}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#availability_zone OpsworksInstance#availability_zone}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#created_at OpsworksInstance#created_at}.

---

##### `delete_ebs`<sup>Optional</sup> <a name="delete_ebs" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.deleteEbs"></a>

```python
delete_ebs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_ebs OpsworksInstance#delete_ebs}.

---

##### `delete_eip`<sup>Optional</sup> <a name="delete_eip" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.deleteEip"></a>

```python
delete_eip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_eip OpsworksInstance#delete_eip}.

---

##### `ebs_block_device`<sup>Optional</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.ebsBlockDevice"></a>

```python
ebs_block_device: typing.Union[IResolvable, typing.List[OpsworksInstanceEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>]]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ebs_block_device OpsworksInstance#ebs_block_device}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ebs_optimized OpsworksInstance#ebs_optimized}.

---

##### `ecs_cluster_arn`<sup>Optional</sup> <a name="ecs_cluster_arn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.ecsClusterArn"></a>

```python
ecs_cluster_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ecs_cluster_arn OpsworksInstance#ecs_cluster_arn}.

---

##### `elastic_ip`<sup>Optional</sup> <a name="elastic_ip" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.elasticIp"></a>

```python
elastic_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#elastic_ip OpsworksInstance#elastic_ip}.

---

##### `ephemeral_block_device`<sup>Optional</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: typing.Union[IResolvable, typing.List[OpsworksInstanceEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>]]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ephemeral_block_device OpsworksInstance#ephemeral_block_device}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#hostname OpsworksInstance#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#id OpsworksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_class`<sup>Optional</sup> <a name="infrastructure_class" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.infrastructureClass"></a>

```python
infrastructure_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#infrastructure_class OpsworksInstance#infrastructure_class}.

---

##### `install_updates_on_boot`<sup>Optional</sup> <a name="install_updates_on_boot" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.installUpdatesOnBoot"></a>

```python
install_updates_on_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#install_updates_on_boot OpsworksInstance#install_updates_on_boot}.

---

##### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#instance_profile_arn OpsworksInstance#instance_profile_arn}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#instance_type OpsworksInstance#instance_type}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.os"></a>

```python
os: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#os OpsworksInstance#os}.

---

##### `root_block_device`<sup>Optional</sup> <a name="root_block_device" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.rootBlockDevice"></a>

```python
root_block_device: typing.Union[IResolvable, typing.List[OpsworksInstanceRootBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>]]

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#root_block_device OpsworksInstance#root_block_device}

---

##### `root_device_type`<sup>Optional</sup> <a name="root_device_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.rootDeviceType"></a>

```python
root_device_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#root_device_type OpsworksInstance#root_device_type}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#security_group_ids OpsworksInstance#security_group_ids}.

---

##### `ssh_key_name`<sup>Optional</sup> <a name="ssh_key_name" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.sshKeyName"></a>

```python
ssh_key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ssh_key_name OpsworksInstance#ssh_key_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#state OpsworksInstance#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#status OpsworksInstance#status}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#subnet_id OpsworksInstance#subnet_id}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#tenancy OpsworksInstance#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.timeouts"></a>

```python
timeouts: OpsworksInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#timeouts OpsworksInstance#timeouts}

---

##### `virtualization_type`<sup>Optional</sup> <a name="virtualization_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceConfig.property.virtualizationType"></a>

```python
virtualization_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#virtualization_type OpsworksInstance#virtualization_type}.

---

### OpsworksInstanceEbsBlockDevice <a name="OpsworksInstanceEbsBlockDevice" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceEbsBlockDevice(
  device_name: str,
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  snapshot_id: str = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#device_name OpsworksInstance#device_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#iops OpsworksInstance#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#snapshot_id OpsworksInstance#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_size OpsworksInstance#volume_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_type OpsworksInstance#volume_type}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#device_name OpsworksInstance#device_name}.

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#iops OpsworksInstance#iops}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#snapshot_id OpsworksInstance#snapshot_id}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_size OpsworksInstance#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_type OpsworksInstance#volume_type}.

---

### OpsworksInstanceEphemeralBlockDevice <a name="OpsworksInstanceEphemeralBlockDevice" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceEphemeralBlockDevice(
  device_name: str,
  virtual_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#device_name OpsworksInstance#device_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#virtual_name OpsworksInstance#virtual_name}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#device_name OpsworksInstance#device_name}.

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#virtual_name OpsworksInstance#virtual_name}.

---

### OpsworksInstanceRootBlockDevice <a name="OpsworksInstanceRootBlockDevice" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceRootBlockDevice(
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#iops OpsworksInstance#iops}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_size OpsworksInstance#volume_size}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_type OpsworksInstance#volume_type}. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#iops OpsworksInstance#iops}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_size OpsworksInstance#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_type OpsworksInstance#volume_type}.

---

### OpsworksInstanceTimeouts <a name="OpsworksInstanceTimeouts" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#create OpsworksInstance#create}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete OpsworksInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#update OpsworksInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#create OpsworksInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete OpsworksInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#update OpsworksInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksInstanceEbsBlockDeviceList <a name="OpsworksInstanceEbsBlockDeviceList" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceEbsBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksInstanceEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksInstanceEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>]]

---


### OpsworksInstanceEbsBlockDeviceOutputReference <a name="OpsworksInstanceEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksInstanceEbsBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>, cdktf.IResolvable]

---


### OpsworksInstanceEphemeralBlockDeviceList <a name="OpsworksInstanceEphemeralBlockDeviceList" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksInstanceEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksInstanceEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>]]

---


### OpsworksInstanceEphemeralBlockDeviceOutputReference <a name="OpsworksInstanceEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksInstanceEphemeralBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>, cdktf.IResolvable]

---


### OpsworksInstanceRootBlockDeviceList <a name="OpsworksInstanceRootBlockDeviceList" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceRootBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpsworksInstanceRootBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpsworksInstanceRootBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>]]

---


### OpsworksInstanceRootBlockDeviceOutputReference <a name="OpsworksInstanceRootBlockDeviceOutputReference" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksInstanceRootBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>, cdktf.IResolvable]

---


### OpsworksInstanceTimeoutsOutputReference <a name="OpsworksInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_instance

opsworksInstance.OpsworksInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksInstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a>, cdktf.IResolvable]

---



