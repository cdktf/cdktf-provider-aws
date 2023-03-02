# `emrCluster` Submodule <a name="`emrCluster` Submodule" id="@cdktf/provider-aws.emrCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrCluster <a name="EmrCluster" id="@cdktf/provider-aws.emrCluster.EmrCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster aws_emr_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  release_label: str,
  service_role: str,
  additional_info: str = None,
  applications: typing.List[str] = None,
  autoscaling_role: str = None,
  auto_termination_policy: EmrClusterAutoTerminationPolicy = None,
  bootstrap_action: typing.Union[IResolvable, typing.List[EmrClusterBootstrapAction]] = None,
  configurations: str = None,
  configurations_json: str = None,
  core_instance_fleet: EmrClusterCoreInstanceFleet = None,
  core_instance_group: EmrClusterCoreInstanceGroup = None,
  custom_ami_id: str = None,
  ebs_root_volume_size: typing.Union[int, float] = None,
  ec2_attributes: EmrClusterEc2Attributes = None,
  id: str = None,
  keep_job_flow_alive_when_no_steps: typing.Union[bool, IResolvable] = None,
  kerberos_attributes: EmrClusterKerberosAttributes = None,
  list_steps_states: typing.List[str] = None,
  log_encryption_kms_key_id: str = None,
  log_uri: str = None,
  master_instance_fleet: EmrClusterMasterInstanceFleet = None,
  master_instance_group: EmrClusterMasterInstanceGroup = None,
  scale_down_behavior: str = None,
  security_configuration: str = None,
  step: typing.Union[IResolvable, typing.List[EmrClusterStep]] = None,
  step_concurrency_level: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  termination_protection: typing.Union[bool, IResolvable] = None,
  visible_to_all_users: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.releaseLabel">release_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.additionalInfo">additional_info</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.applications">applications</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.autoscalingRole">autoscaling_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.autoTerminationPolicy">auto_termination_policy</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | auto_termination_policy block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.bootstrapAction">bootstrap_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>]]</code> | bootstrap_action block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.configurations">configurations</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.configurationsJson">configurations_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.coreInstanceFleet">core_instance_fleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | core_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.coreInstanceGroup">core_instance_group</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | core_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.customAmiId">custom_ami_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.ebsRootVolumeSize">ebs_root_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.ec2Attributes">ec2_attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | ec2_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.keepJobFlowAliveWhenNoSteps">keep_job_flow_alive_when_no_steps</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.kerberosAttributes">kerberos_attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | kerberos_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.listStepsStates">list_steps_states</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.logEncryptionKmsKeyId">log_encryption_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.logUri">log_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.masterInstanceFleet">master_instance_fleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | master_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.masterInstanceGroup">master_instance_group</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | master_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scaleDownBehavior">scale_down_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.securityConfiguration">security_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.step">step</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.stepConcurrencyLevel">step_concurrency_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.terminationProtection">termination_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.visibleToAllUsers">visible_to_all_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.releaseLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}.

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.serviceRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}.

---

##### `additional_info`<sup>Optional</sup> <a name="additional_info" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.additionalInfo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.applications"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}.

---

##### `autoscaling_role`<sup>Optional</sup> <a name="autoscaling_role" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.autoscalingRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}.

---

##### `auto_termination_policy`<sup>Optional</sup> <a name="auto_termination_policy" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.autoTerminationPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

auto_termination_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#auto_termination_policy EmrCluster#auto_termination_policy}

---

##### `bootstrap_action`<sup>Optional</sup> <a name="bootstrap_action" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.bootstrapAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>]]

bootstrap_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bootstrap_action EmrCluster#bootstrap_action}

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.configurations"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}.

---

##### `configurations_json`<sup>Optional</sup> <a name="configurations_json" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.configurationsJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}.

---

##### `core_instance_fleet`<sup>Optional</sup> <a name="core_instance_fleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.coreInstanceFleet"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

core_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_fleet EmrCluster#core_instance_fleet}

---

##### `core_instance_group`<sup>Optional</sup> <a name="core_instance_group" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.coreInstanceGroup"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

core_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_group EmrCluster#core_instance_group}

---

##### `custom_ami_id`<sup>Optional</sup> <a name="custom_ami_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.customAmiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}.

---

##### `ebs_root_volume_size`<sup>Optional</sup> <a name="ebs_root_volume_size" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.ebsRootVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}.

---

##### `ec2_attributes`<sup>Optional</sup> <a name="ec2_attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.ec2Attributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

ec2_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ec2_attributes EmrCluster#ec2_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keep_job_flow_alive_when_no_steps`<sup>Optional</sup> <a name="keep_job_flow_alive_when_no_steps" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.keepJobFlowAliveWhenNoSteps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}.

---

##### `kerberos_attributes`<sup>Optional</sup> <a name="kerberos_attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.kerberosAttributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

kerberos_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kerberos_attributes EmrCluster#kerberos_attributes}

---

##### `list_steps_states`<sup>Optional</sup> <a name="list_steps_states" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.listStepsStates"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}.

---

##### `log_encryption_kms_key_id`<sup>Optional</sup> <a name="log_encryption_kms_key_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.logEncryptionKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}.

---

##### `log_uri`<sup>Optional</sup> <a name="log_uri" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.logUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}.

---

##### `master_instance_fleet`<sup>Optional</sup> <a name="master_instance_fleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.masterInstanceFleet"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

master_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_fleet EmrCluster#master_instance_fleet}

---

##### `master_instance_group`<sup>Optional</sup> <a name="master_instance_group" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.masterInstanceGroup"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

master_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_group EmrCluster#master_instance_group}

---

##### `scale_down_behavior`<sup>Optional</sup> <a name="scale_down_behavior" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scaleDownBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}.

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.securityConfiguration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.step"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}.

---

##### `step_concurrency_level`<sup>Optional</sup> <a name="step_concurrency_level" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.stepConcurrencyLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}.

---

##### `termination_protection`<sup>Optional</sup> <a name="termination_protection" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.terminationProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}.

---

##### `visible_to_all_users`<sup>Optional</sup> <a name="visible_to_all_users" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.visibleToAllUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy">put_auto_termination_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction">put_bootstrap_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet">put_core_instance_fleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup">put_core_instance_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes">put_ec2_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes">put_kerberos_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet">put_master_instance_fleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup">put_master_instance_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putStep">put_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAdditionalInfo">reset_additional_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetApplications">reset_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoscalingRole">reset_autoscaling_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoTerminationPolicy">reset_auto_termination_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetBootstrapAction">reset_bootstrap_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurations">reset_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurationsJson">reset_configurations_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceFleet">reset_core_instance_fleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceGroup">reset_core_instance_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCustomAmiId">reset_custom_ami_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetEbsRootVolumeSize">reset_ebs_root_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetEc2Attributes">reset_ec2_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetKeepJobFlowAliveWhenNoSteps">reset_keep_job_flow_alive_when_no_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetKerberosAttributes">reset_kerberos_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetListStepsStates">reset_list_steps_states</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetLogEncryptionKmsKeyId">reset_log_encryption_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetLogUri">reset_log_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceFleet">reset_master_instance_fleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceGroup">reset_master_instance_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetScaleDownBehavior">reset_scale_down_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetSecurityConfiguration">reset_security_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetStep">reset_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetStepConcurrencyLevel">reset_step_concurrency_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTerminationProtection">reset_termination_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetVisibleToAllUsers">reset_visible_to_all_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.emrCluster.EmrCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.emrCluster.EmrCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auto_termination_policy` <a name="put_auto_termination_policy" id="@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy"></a>

```python
def put_auto_termination_policy(
  idle_timeout: typing.Union[int, float] = None
) -> None
```

###### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy.parameter.idleTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#idle_timeout EmrCluster#idle_timeout}.

---

##### `put_bootstrap_action` <a name="put_bootstrap_action" id="@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction"></a>

```python
def put_bootstrap_action(
  value: typing.Union[IResolvable, typing.List[EmrClusterBootstrapAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>]]

---

##### `put_core_instance_fleet` <a name="put_core_instance_fleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet"></a>

```python
def put_core_instance_fleet(
  instance_type_configs: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigs]] = None,
  launch_specifications: EmrClusterCoreInstanceFleetLaunchSpecifications = None,
  name: str = None,
  target_on_demand_capacity: typing.Union[int, float] = None,
  target_spot_capacity: typing.Union[int, float] = None
) -> None
```

###### `instance_type_configs`<sup>Optional</sup> <a name="instance_type_configs" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet.parameter.instanceTypeConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>]]

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}

---

###### `launch_specifications`<sup>Optional</sup> <a name="launch_specifications" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet.parameter.launchSpecifications"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

###### `target_on_demand_capacity`<sup>Optional</sup> <a name="target_on_demand_capacity" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet.parameter.targetOnDemandCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.

---

###### `target_spot_capacity`<sup>Optional</sup> <a name="target_spot_capacity" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet.parameter.targetSpotCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}.

---

##### `put_core_instance_group` <a name="put_core_instance_group" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup"></a>

```python
def put_core_instance_group(
  instance_type: str,
  autoscaling_policy: str = None,
  bid_price: str = None,
  ebs_config: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceGroupEbsConfig]] = None,
  instance_count: typing.Union[int, float] = None,
  name: str = None
) -> None
```

###### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

###### `autoscaling_policy`<sup>Optional</sup> <a name="autoscaling_policy" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup.parameter.autoscalingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_policy EmrCluster#autoscaling_policy}.

---

###### `bid_price`<sup>Optional</sup> <a name="bid_price" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup.parameter.bidPrice"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

###### `ebs_config`<sup>Optional</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup.parameter.ebsConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>]]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `put_ec2_attributes` <a name="put_ec2_attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes"></a>

```python
def put_ec2_attributes(
  instance_profile: str,
  additional_master_security_groups: str = None,
  additional_slave_security_groups: str = None,
  emr_managed_master_security_group: str = None,
  emr_managed_slave_security_group: str = None,
  key_name: str = None,
  service_access_security_group: str = None,
  subnet_id: str = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `instance_profile`<sup>Required</sup> <a name="instance_profile" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.instanceProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_profile EmrCluster#instance_profile}.

---

###### `additional_master_security_groups`<sup>Optional</sup> <a name="additional_master_security_groups" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.additionalMasterSecurityGroups"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_master_security_groups EmrCluster#additional_master_security_groups}.

---

###### `additional_slave_security_groups`<sup>Optional</sup> <a name="additional_slave_security_groups" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.additionalSlaveSecurityGroups"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_slave_security_groups EmrCluster#additional_slave_security_groups}.

---

###### `emr_managed_master_security_group`<sup>Optional</sup> <a name="emr_managed_master_security_group" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.emrManagedMasterSecurityGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}.

---

###### `emr_managed_slave_security_group`<sup>Optional</sup> <a name="emr_managed_slave_security_group" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.emrManagedSlaveSecurityGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}.

---

###### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.keyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#key_name EmrCluster#key_name}.

---

###### `service_access_security_group`<sup>Optional</sup> <a name="service_access_security_group" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.serviceAccessSecurityGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_access_security_group EmrCluster#service_access_security_group}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_id EmrCluster#subnet_id}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_ids EmrCluster#subnet_ids}.

---

##### `put_kerberos_attributes` <a name="put_kerberos_attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes"></a>

```python
def put_kerberos_attributes(
  kdc_admin_password: str,
  realm: str,
  ad_domain_join_password: str = None,
  ad_domain_join_user: str = None,
  cross_realm_trust_principal_password: str = None
) -> None
```

###### `kdc_admin_password`<sup>Required</sup> <a name="kdc_admin_password" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes.parameter.kdcAdminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kdc_admin_password EmrCluster#kdc_admin_password}.

---

###### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes.parameter.realm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#realm EmrCluster#realm}.

---

###### `ad_domain_join_password`<sup>Optional</sup> <a name="ad_domain_join_password" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes.parameter.adDomainJoinPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_password EmrCluster#ad_domain_join_password}.

---

###### `ad_domain_join_user`<sup>Optional</sup> <a name="ad_domain_join_user" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes.parameter.adDomainJoinUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_user EmrCluster#ad_domain_join_user}.

---

###### `cross_realm_trust_principal_password`<sup>Optional</sup> <a name="cross_realm_trust_principal_password" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes.parameter.crossRealmTrustPrincipalPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}.

---

##### `put_master_instance_fleet` <a name="put_master_instance_fleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet"></a>

```python
def put_master_instance_fleet(
  instance_type_configs: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigs]] = None,
  launch_specifications: EmrClusterMasterInstanceFleetLaunchSpecifications = None,
  name: str = None,
  target_on_demand_capacity: typing.Union[int, float] = None,
  target_spot_capacity: typing.Union[int, float] = None
) -> None
```

###### `instance_type_configs`<sup>Optional</sup> <a name="instance_type_configs" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet.parameter.instanceTypeConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>]]

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}

---

###### `launch_specifications`<sup>Optional</sup> <a name="launch_specifications" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet.parameter.launchSpecifications"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

###### `target_on_demand_capacity`<sup>Optional</sup> <a name="target_on_demand_capacity" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet.parameter.targetOnDemandCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.

---

###### `target_spot_capacity`<sup>Optional</sup> <a name="target_spot_capacity" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet.parameter.targetSpotCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}.

---

##### `put_master_instance_group` <a name="put_master_instance_group" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup"></a>

```python
def put_master_instance_group(
  instance_type: str,
  bid_price: str = None,
  ebs_config: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceGroupEbsConfig]] = None,
  instance_count: typing.Union[int, float] = None,
  name: str = None
) -> None
```

###### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

###### `bid_price`<sup>Optional</sup> <a name="bid_price" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup.parameter.bidPrice"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

###### `ebs_config`<sup>Optional</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup.parameter.ebsConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>]]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `put_step` <a name="put_step" id="@cdktf/provider-aws.emrCluster.EmrCluster.putStep"></a>

```python
def put_step(
  value: typing.Union[IResolvable, typing.List[EmrClusterStep]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putStep.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>]]

---

##### `reset_additional_info` <a name="reset_additional_info" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAdditionalInfo"></a>

```python
def reset_additional_info() -> None
```

##### `reset_applications` <a name="reset_applications" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetApplications"></a>

```python
def reset_applications() -> None
```

##### `reset_autoscaling_role` <a name="reset_autoscaling_role" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoscalingRole"></a>

```python
def reset_autoscaling_role() -> None
```

##### `reset_auto_termination_policy` <a name="reset_auto_termination_policy" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoTerminationPolicy"></a>

```python
def reset_auto_termination_policy() -> None
```

##### `reset_bootstrap_action` <a name="reset_bootstrap_action" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetBootstrapAction"></a>

```python
def reset_bootstrap_action() -> None
```

##### `reset_configurations` <a name="reset_configurations" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurations"></a>

```python
def reset_configurations() -> None
```

##### `reset_configurations_json` <a name="reset_configurations_json" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurationsJson"></a>

```python
def reset_configurations_json() -> None
```

##### `reset_core_instance_fleet` <a name="reset_core_instance_fleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceFleet"></a>

```python
def reset_core_instance_fleet() -> None
```

##### `reset_core_instance_group` <a name="reset_core_instance_group" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceGroup"></a>

```python
def reset_core_instance_group() -> None
```

##### `reset_custom_ami_id` <a name="reset_custom_ami_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCustomAmiId"></a>

```python
def reset_custom_ami_id() -> None
```

##### `reset_ebs_root_volume_size` <a name="reset_ebs_root_volume_size" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetEbsRootVolumeSize"></a>

```python
def reset_ebs_root_volume_size() -> None
```

##### `reset_ec2_attributes` <a name="reset_ec2_attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetEc2Attributes"></a>

```python
def reset_ec2_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_keep_job_flow_alive_when_no_steps` <a name="reset_keep_job_flow_alive_when_no_steps" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetKeepJobFlowAliveWhenNoSteps"></a>

```python
def reset_keep_job_flow_alive_when_no_steps() -> None
```

##### `reset_kerberos_attributes` <a name="reset_kerberos_attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetKerberosAttributes"></a>

```python
def reset_kerberos_attributes() -> None
```

##### `reset_list_steps_states` <a name="reset_list_steps_states" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetListStepsStates"></a>

```python
def reset_list_steps_states() -> None
```

##### `reset_log_encryption_kms_key_id` <a name="reset_log_encryption_kms_key_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetLogEncryptionKmsKeyId"></a>

```python
def reset_log_encryption_kms_key_id() -> None
```

##### `reset_log_uri` <a name="reset_log_uri" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetLogUri"></a>

```python
def reset_log_uri() -> None
```

##### `reset_master_instance_fleet` <a name="reset_master_instance_fleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceFleet"></a>

```python
def reset_master_instance_fleet() -> None
```

##### `reset_master_instance_group` <a name="reset_master_instance_group" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceGroup"></a>

```python
def reset_master_instance_group() -> None
```

##### `reset_scale_down_behavior` <a name="reset_scale_down_behavior" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetScaleDownBehavior"></a>

```python
def reset_scale_down_behavior() -> None
```

##### `reset_security_configuration` <a name="reset_security_configuration" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetSecurityConfiguration"></a>

```python
def reset_security_configuration() -> None
```

##### `reset_step` <a name="reset_step" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetStep"></a>

```python
def reset_step() -> None
```

##### `reset_step_concurrency_level` <a name="reset_step_concurrency_level" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetStepConcurrencyLevel"></a>

```python
def reset_step_concurrency_level() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_termination_protection` <a name="reset_termination_protection" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTerminationProtection"></a>

```python
def reset_termination_protection() -> None
```

##### `reset_visible_to_all_users` <a name="reset_visible_to_all_users" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetVisibleToAllUsers"></a>

```python
def reset_visible_to_all_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.emrCluster.EmrCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrCluster.EmrCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicy">auto_termination_policy</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference">EmrClusterAutoTerminationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapAction">bootstrap_action</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList">EmrClusterBootstrapActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.clusterState">cluster_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleet">core_instance_fleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference">EmrClusterCoreInstanceFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroup">core_instance_group</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference">EmrClusterCoreInstanceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2Attributes">ec2_attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference">EmrClusterEc2AttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributes">kerberos_attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference">EmrClusterKerberosAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleet">master_instance_fleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference">EmrClusterMasterInstanceFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroup">master_instance_group</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference">EmrClusterMasterInstanceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterPublicDns">master_public_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.step">step</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList">EmrClusterStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfoInput">additional_info_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.applicationsInput">applications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRoleInput">autoscaling_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicyInput">auto_termination_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapActionInput">bootstrap_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsInput">configurations_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJsonInput">configurations_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleetInput">core_instance_fleet_input</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroupInput">core_instance_group_input</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiIdInput">custom_ami_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSizeInput">ebs_root_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2AttributesInput">ec2_attributes_input</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoStepsInput">keep_job_flow_alive_when_no_steps_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributesInput">kerberos_attributes_input</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStatesInput">list_steps_states_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyIdInput">log_encryption_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logUriInput">log_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleetInput">master_instance_fleet_input</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroupInput">master_instance_group_input</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabelInput">release_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehaviorInput">scale_down_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfigurationInput">security_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRoleInput">service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevelInput">step_concurrency_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepInput">step_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtectionInput">termination_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsersInput">visible_to_all_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfo">additional_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.applications">applications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRole">autoscaling_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurations">configurations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJson">configurations_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiId">custom_ami_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSize">ebs_root_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoSteps">keep_job_flow_alive_when_no_steps</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStates">list_steps_states</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyId">log_encryption_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logUri">log_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabel">release_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehavior">scale_down_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRole">service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevel">step_concurrency_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtection">termination_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsers">visible_to_all_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_termination_policy`<sup>Required</sup> <a name="auto_termination_policy" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicy"></a>

```python
auto_termination_policy: EmrClusterAutoTerminationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference">EmrClusterAutoTerminationPolicyOutputReference</a>

---

##### `bootstrap_action`<sup>Required</sup> <a name="bootstrap_action" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapAction"></a>

```python
bootstrap_action: EmrClusterBootstrapActionList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList">EmrClusterBootstrapActionList</a>

---

##### `cluster_state`<sup>Required</sup> <a name="cluster_state" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.clusterState"></a>

```python
cluster_state: str
```

- *Type:* str

---

##### `core_instance_fleet`<sup>Required</sup> <a name="core_instance_fleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleet"></a>

```python
core_instance_fleet: EmrClusterCoreInstanceFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference">EmrClusterCoreInstanceFleetOutputReference</a>

---

##### `core_instance_group`<sup>Required</sup> <a name="core_instance_group" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroup"></a>

```python
core_instance_group: EmrClusterCoreInstanceGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference">EmrClusterCoreInstanceGroupOutputReference</a>

---

##### `ec2_attributes`<sup>Required</sup> <a name="ec2_attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2Attributes"></a>

```python
ec2_attributes: EmrClusterEc2AttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference">EmrClusterEc2AttributesOutputReference</a>

---

##### `kerberos_attributes`<sup>Required</sup> <a name="kerberos_attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributes"></a>

```python
kerberos_attributes: EmrClusterKerberosAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference">EmrClusterKerberosAttributesOutputReference</a>

---

##### `master_instance_fleet`<sup>Required</sup> <a name="master_instance_fleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleet"></a>

```python
master_instance_fleet: EmrClusterMasterInstanceFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference">EmrClusterMasterInstanceFleetOutputReference</a>

---

##### `master_instance_group`<sup>Required</sup> <a name="master_instance_group" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroup"></a>

```python
master_instance_group: EmrClusterMasterInstanceGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference">EmrClusterMasterInstanceGroupOutputReference</a>

---

##### `master_public_dns`<sup>Required</sup> <a name="master_public_dns" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterPublicDns"></a>

```python
master_public_dns: str
```

- *Type:* str

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.step"></a>

```python
step: EmrClusterStepList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList">EmrClusterStepList</a>

---

##### `additional_info_input`<sup>Optional</sup> <a name="additional_info_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfoInput"></a>

```python
additional_info_input: str
```

- *Type:* str

---

##### `applications_input`<sup>Optional</sup> <a name="applications_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.applicationsInput"></a>

```python
applications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autoscaling_role_input`<sup>Optional</sup> <a name="autoscaling_role_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRoleInput"></a>

```python
autoscaling_role_input: str
```

- *Type:* str

---

##### `auto_termination_policy_input`<sup>Optional</sup> <a name="auto_termination_policy_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicyInput"></a>

```python
auto_termination_policy_input: EmrClusterAutoTerminationPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

---

##### `bootstrap_action_input`<sup>Optional</sup> <a name="bootstrap_action_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapActionInput"></a>

```python
bootstrap_action_input: typing.Union[IResolvable, typing.List[EmrClusterBootstrapAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>]]

---

##### `configurations_input`<sup>Optional</sup> <a name="configurations_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsInput"></a>

```python
configurations_input: str
```

- *Type:* str

---

##### `configurations_json_input`<sup>Optional</sup> <a name="configurations_json_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJsonInput"></a>

```python
configurations_json_input: str
```

- *Type:* str

---

##### `core_instance_fleet_input`<sup>Optional</sup> <a name="core_instance_fleet_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleetInput"></a>

```python
core_instance_fleet_input: EmrClusterCoreInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

---

##### `core_instance_group_input`<sup>Optional</sup> <a name="core_instance_group_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroupInput"></a>

```python
core_instance_group_input: EmrClusterCoreInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

---

##### `custom_ami_id_input`<sup>Optional</sup> <a name="custom_ami_id_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiIdInput"></a>

```python
custom_ami_id_input: str
```

- *Type:* str

---

##### `ebs_root_volume_size_input`<sup>Optional</sup> <a name="ebs_root_volume_size_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSizeInput"></a>

```python
ebs_root_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ec2_attributes_input`<sup>Optional</sup> <a name="ec2_attributes_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2AttributesInput"></a>

```python
ec2_attributes_input: EmrClusterEc2Attributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `keep_job_flow_alive_when_no_steps_input`<sup>Optional</sup> <a name="keep_job_flow_alive_when_no_steps_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoStepsInput"></a>

```python
keep_job_flow_alive_when_no_steps_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos_attributes_input`<sup>Optional</sup> <a name="kerberos_attributes_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributesInput"></a>

```python
kerberos_attributes_input: EmrClusterKerberosAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

---

##### `list_steps_states_input`<sup>Optional</sup> <a name="list_steps_states_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStatesInput"></a>

```python
list_steps_states_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_encryption_kms_key_id_input`<sup>Optional</sup> <a name="log_encryption_kms_key_id_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyIdInput"></a>

```python
log_encryption_kms_key_id_input: str
```

- *Type:* str

---

##### `log_uri_input`<sup>Optional</sup> <a name="log_uri_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logUriInput"></a>

```python
log_uri_input: str
```

- *Type:* str

---

##### `master_instance_fleet_input`<sup>Optional</sup> <a name="master_instance_fleet_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleetInput"></a>

```python
master_instance_fleet_input: EmrClusterMasterInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

---

##### `master_instance_group_input`<sup>Optional</sup> <a name="master_instance_group_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroupInput"></a>

```python
master_instance_group_input: EmrClusterMasterInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `release_label_input`<sup>Optional</sup> <a name="release_label_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabelInput"></a>

```python
release_label_input: str
```

- *Type:* str

---

##### `scale_down_behavior_input`<sup>Optional</sup> <a name="scale_down_behavior_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehaviorInput"></a>

```python
scale_down_behavior_input: str
```

- *Type:* str

---

##### `security_configuration_input`<sup>Optional</sup> <a name="security_configuration_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfigurationInput"></a>

```python
security_configuration_input: str
```

- *Type:* str

---

##### `service_role_input`<sup>Optional</sup> <a name="service_role_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRoleInput"></a>

```python
service_role_input: str
```

- *Type:* str

---

##### `step_concurrency_level_input`<sup>Optional</sup> <a name="step_concurrency_level_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevelInput"></a>

```python
step_concurrency_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `step_input`<sup>Optional</sup> <a name="step_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepInput"></a>

```python
step_input: typing.Union[IResolvable, typing.List[EmrClusterStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `termination_protection_input`<sup>Optional</sup> <a name="termination_protection_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtectionInput"></a>

```python
termination_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `visible_to_all_users_input`<sup>Optional</sup> <a name="visible_to_all_users_input" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsersInput"></a>

```python
visible_to_all_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `additional_info`<sup>Required</sup> <a name="additional_info" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfo"></a>

```python
additional_info: str
```

- *Type:* str

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.applications"></a>

```python
applications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autoscaling_role`<sup>Required</sup> <a name="autoscaling_role" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRole"></a>

```python
autoscaling_role: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurations"></a>

```python
configurations: str
```

- *Type:* str

---

##### `configurations_json`<sup>Required</sup> <a name="configurations_json" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJson"></a>

```python
configurations_json: str
```

- *Type:* str

---

##### `custom_ami_id`<sup>Required</sup> <a name="custom_ami_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiId"></a>

```python
custom_ami_id: str
```

- *Type:* str

---

##### `ebs_root_volume_size`<sup>Required</sup> <a name="ebs_root_volume_size" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSize"></a>

```python
ebs_root_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `keep_job_flow_alive_when_no_steps`<sup>Required</sup> <a name="keep_job_flow_alive_when_no_steps" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoSteps"></a>

```python
keep_job_flow_alive_when_no_steps: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `list_steps_states`<sup>Required</sup> <a name="list_steps_states" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStates"></a>

```python
list_steps_states: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_encryption_kms_key_id`<sup>Required</sup> <a name="log_encryption_kms_key_id" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyId"></a>

```python
log_encryption_kms_key_id: str
```

- *Type:* str

---

##### `log_uri`<sup>Required</sup> <a name="log_uri" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabel"></a>

```python
release_label: str
```

- *Type:* str

---

##### `scale_down_behavior`<sup>Required</sup> <a name="scale_down_behavior" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehavior"></a>

```python
scale_down_behavior: str
```

- *Type:* str

---

##### `security_configuration`<sup>Required</sup> <a name="security_configuration" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

---

##### `step_concurrency_level`<sup>Required</sup> <a name="step_concurrency_level" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevel"></a>

```python
step_concurrency_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `termination_protection`<sup>Required</sup> <a name="termination_protection" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtection"></a>

```python
termination_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `visible_to_all_users`<sup>Required</sup> <a name="visible_to_all_users" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsers"></a>

```python
visible_to_all_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmrClusterAutoTerminationPolicy <a name="EmrClusterAutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterAutoTerminationPolicy(
  idle_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#idle_timeout EmrCluster#idle_timeout}. |

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#idle_timeout EmrCluster#idle_timeout}.

---

### EmrClusterBootstrapAction <a name="EmrClusterBootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterBootstrapAction(
  name: str,
  path: str,
  args: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#path EmrCluster#path}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.args">args</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#path EmrCluster#path}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}.

---

### EmrClusterConfig <a name="EmrClusterConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  release_label: str,
  service_role: str,
  additional_info: str = None,
  applications: typing.List[str] = None,
  autoscaling_role: str = None,
  auto_termination_policy: EmrClusterAutoTerminationPolicy = None,
  bootstrap_action: typing.Union[IResolvable, typing.List[EmrClusterBootstrapAction]] = None,
  configurations: str = None,
  configurations_json: str = None,
  core_instance_fleet: EmrClusterCoreInstanceFleet = None,
  core_instance_group: EmrClusterCoreInstanceGroup = None,
  custom_ami_id: str = None,
  ebs_root_volume_size: typing.Union[int, float] = None,
  ec2_attributes: EmrClusterEc2Attributes = None,
  id: str = None,
  keep_job_flow_alive_when_no_steps: typing.Union[bool, IResolvable] = None,
  kerberos_attributes: EmrClusterKerberosAttributes = None,
  list_steps_states: typing.List[str] = None,
  log_encryption_kms_key_id: str = None,
  log_uri: str = None,
  master_instance_fleet: EmrClusterMasterInstanceFleet = None,
  master_instance_group: EmrClusterMasterInstanceGroup = None,
  scale_down_behavior: str = None,
  security_configuration: str = None,
  step: typing.Union[IResolvable, typing.List[EmrClusterStep]] = None,
  step_concurrency_level: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  termination_protection: typing.Union[bool, IResolvable] = None,
  visible_to_all_users: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.releaseLabel">release_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.additionalInfo">additional_info</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.applications">applications</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoscalingRole">autoscaling_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoTerminationPolicy">auto_termination_policy</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | auto_termination_policy block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.bootstrapAction">bootstrap_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>]]</code> | bootstrap_action block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurations">configurations</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurationsJson">configurations_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceFleet">core_instance_fleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | core_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceGroup">core_instance_group</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | core_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.customAmiId">custom_ami_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ebsRootVolumeSize">ebs_root_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ec2Attributes">ec2_attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | ec2_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.keepJobFlowAliveWhenNoSteps">keep_job_flow_alive_when_no_steps</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.kerberosAttributes">kerberos_attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | kerberos_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.listStepsStates">list_steps_states</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logEncryptionKmsKeyId">log_encryption_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logUri">log_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceFleet">master_instance_fleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | master_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceGroup">master_instance_group</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | master_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.scaleDownBehavior">scale_down_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.step">step</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.stepConcurrencyLevel">step_concurrency_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.terminationProtection">termination_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.visibleToAllUsers">visible_to_all_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.releaseLabel"></a>

```python
release_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}.

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}.

---

##### `additional_info`<sup>Optional</sup> <a name="additional_info" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.additionalInfo"></a>

```python
additional_info: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.applications"></a>

```python
applications: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}.

---

##### `autoscaling_role`<sup>Optional</sup> <a name="autoscaling_role" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoscalingRole"></a>

```python
autoscaling_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}.

---

##### `auto_termination_policy`<sup>Optional</sup> <a name="auto_termination_policy" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoTerminationPolicy"></a>

```python
auto_termination_policy: EmrClusterAutoTerminationPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

auto_termination_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#auto_termination_policy EmrCluster#auto_termination_policy}

---

##### `bootstrap_action`<sup>Optional</sup> <a name="bootstrap_action" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.bootstrapAction"></a>

```python
bootstrap_action: typing.Union[IResolvable, typing.List[EmrClusterBootstrapAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>]]

bootstrap_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bootstrap_action EmrCluster#bootstrap_action}

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurations"></a>

```python
configurations: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}.

---

##### `configurations_json`<sup>Optional</sup> <a name="configurations_json" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurationsJson"></a>

```python
configurations_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}.

---

##### `core_instance_fleet`<sup>Optional</sup> <a name="core_instance_fleet" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceFleet"></a>

```python
core_instance_fleet: EmrClusterCoreInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

core_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_fleet EmrCluster#core_instance_fleet}

---

##### `core_instance_group`<sup>Optional</sup> <a name="core_instance_group" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceGroup"></a>

```python
core_instance_group: EmrClusterCoreInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

core_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_group EmrCluster#core_instance_group}

---

##### `custom_ami_id`<sup>Optional</sup> <a name="custom_ami_id" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.customAmiId"></a>

```python
custom_ami_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}.

---

##### `ebs_root_volume_size`<sup>Optional</sup> <a name="ebs_root_volume_size" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ebsRootVolumeSize"></a>

```python
ebs_root_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}.

---

##### `ec2_attributes`<sup>Optional</sup> <a name="ec2_attributes" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ec2Attributes"></a>

```python
ec2_attributes: EmrClusterEc2Attributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

ec2_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ec2_attributes EmrCluster#ec2_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keep_job_flow_alive_when_no_steps`<sup>Optional</sup> <a name="keep_job_flow_alive_when_no_steps" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.keepJobFlowAliveWhenNoSteps"></a>

```python
keep_job_flow_alive_when_no_steps: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}.

---

##### `kerberos_attributes`<sup>Optional</sup> <a name="kerberos_attributes" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.kerberosAttributes"></a>

```python
kerberos_attributes: EmrClusterKerberosAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

kerberos_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kerberos_attributes EmrCluster#kerberos_attributes}

---

##### `list_steps_states`<sup>Optional</sup> <a name="list_steps_states" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.listStepsStates"></a>

```python
list_steps_states: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}.

---

##### `log_encryption_kms_key_id`<sup>Optional</sup> <a name="log_encryption_kms_key_id" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logEncryptionKmsKeyId"></a>

```python
log_encryption_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}.

---

##### `log_uri`<sup>Optional</sup> <a name="log_uri" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}.

---

##### `master_instance_fleet`<sup>Optional</sup> <a name="master_instance_fleet" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceFleet"></a>

```python
master_instance_fleet: EmrClusterMasterInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

master_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_fleet EmrCluster#master_instance_fleet}

---

##### `master_instance_group`<sup>Optional</sup> <a name="master_instance_group" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceGroup"></a>

```python
master_instance_group: EmrClusterMasterInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

master_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_group EmrCluster#master_instance_group}

---

##### `scale_down_behavior`<sup>Optional</sup> <a name="scale_down_behavior" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.scaleDownBehavior"></a>

```python
scale_down_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}.

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.step"></a>

```python
step: typing.Union[IResolvable, typing.List[EmrClusterStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}.

---

##### `step_concurrency_level`<sup>Optional</sup> <a name="step_concurrency_level" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.stepConcurrencyLevel"></a>

```python
step_concurrency_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}.

---

##### `termination_protection`<sup>Optional</sup> <a name="termination_protection" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.terminationProtection"></a>

```python
termination_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}.

---

##### `visible_to_all_users`<sup>Optional</sup> <a name="visible_to_all_users" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.visibleToAllUsers"></a>

```python
visible_to_all_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}.

---

### EmrClusterCoreInstanceFleet <a name="EmrClusterCoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleet(
  instance_type_configs: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigs]] = None,
  launch_specifications: EmrClusterCoreInstanceFleetLaunchSpecifications = None,
  name: str = None,
  target_on_demand_capacity: typing.Union[int, float] = None,
  target_spot_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.instanceTypeConfigs">instance_type_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>]]</code> | instance_type_configs block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.launchSpecifications">launch_specifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | launch_specifications block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetOnDemandCapacity">target_on_demand_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetSpotCapacity">target_spot_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}. |

---

##### `instance_type_configs`<sup>Optional</sup> <a name="instance_type_configs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.instanceTypeConfigs"></a>

```python
instance_type_configs: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>]]

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}

---

##### `launch_specifications`<sup>Optional</sup> <a name="launch_specifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.launchSpecifications"></a>

```python
launch_specifications: EmrClusterCoreInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `target_on_demand_capacity`<sup>Optional</sup> <a name="target_on_demand_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetOnDemandCapacity"></a>

```python
target_on_demand_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.

---

##### `target_spot_capacity`<sup>Optional</sup> <a name="target_spot_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetSpotCapacity"></a>

```python
target_spot_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigs <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs(
  instance_type: str,
  bid_price: str = None,
  bid_price_as_percentage_of_on_demand_price: typing.Union[int, float] = None,
  configurations: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations]] = None,
  ebs_config: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig]] = None,
  weighted_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPrice">bid_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice">bid_price_as_percentage_of_on_demand_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.configurations">configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>]]</code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.ebsConfig">ebs_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>]]</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}. |

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `bid_price`<sup>Optional</sup> <a name="bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPrice"></a>

```python
bid_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `bid_price_as_percentage_of_on_demand_price`<sup>Optional</sup> <a name="bid_price_as_percentage_of_on_demand_price" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```python
bid_price_as_percentage_of_on_demand_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}.

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.configurations"></a>

```python
configurations: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>]]

configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}

---

##### `ebs_config`<sup>Optional</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.ebsConfig"></a>

```python
ebs_config: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `weighted_capacity`<sup>Optional</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations(
  classification: str = None,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.classification">classification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.classification"></a>

```python
classification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig(
  size: typing.Union[int, float],
  type: str,
  iops: typing.Union[int, float] = None,
  volumes_per_instance: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `volumes_per_instance`<sup>Optional</sup> <a name="volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterCoreInstanceFleetLaunchSpecifications <a name="EmrClusterCoreInstanceFleetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications(
  on_demand_specification: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification]] = None,
  spot_specification: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.onDemandSpecification">on_demand_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]</code> | on_demand_specification block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.spotSpecification">spot_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>]]</code> | spot_specification block. |

---

##### `on_demand_specification`<sup>Optional</sup> <a name="on_demand_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.onDemandSpecification"></a>

```python
on_demand_specification: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}

---

##### `spot_specification`<sup>Optional</sup> <a name="spot_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.spotSpecification"></a>

```python
spot_specification: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}

---

### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification(
  allocation_strategy: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification(
  allocation_strategy: str,
  timeout_action: str,
  timeout_duration_minutes: typing.Union[int, float],
  block_duration_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction">timeout_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes">timeout_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}. |

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

##### `timeout_action`<sup>Required</sup> <a name="timeout_action" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}.

---

##### `timeout_duration_minutes`<sup>Required</sup> <a name="timeout_duration_minutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes"></a>

```python
timeout_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}.

---

##### `block_duration_minutes`<sup>Optional</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes"></a>

```python
block_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}.

---

### EmrClusterCoreInstanceGroup <a name="EmrClusterCoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceGroup(
  instance_type: str,
  autoscaling_policy: str = None,
  bid_price: str = None,
  ebs_config: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceGroupEbsConfig]] = None,
  instance_count: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.autoscalingPolicy">autoscaling_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_policy EmrCluster#autoscaling_policy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.bidPrice">bid_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.ebsConfig">ebs_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>]]</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `autoscaling_policy`<sup>Optional</sup> <a name="autoscaling_policy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.autoscalingPolicy"></a>

```python
autoscaling_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_policy EmrCluster#autoscaling_policy}.

---

##### `bid_price`<sup>Optional</sup> <a name="bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.bidPrice"></a>

```python
bid_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `ebs_config`<sup>Optional</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.ebsConfig"></a>

```python
ebs_config: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceGroupEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>]]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterCoreInstanceGroupEbsConfig <a name="EmrClusterCoreInstanceGroupEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceGroupEbsConfig(
  size: typing.Union[int, float],
  type: str,
  iops: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volumes_per_instance: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}.

---

##### `volumes_per_instance`<sup>Optional</sup> <a name="volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterEc2Attributes <a name="EmrClusterEc2Attributes" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterEc2Attributes(
  instance_profile: str,
  additional_master_security_groups: str = None,
  additional_slave_security_groups: str = None,
  emr_managed_master_security_group: str = None,
  emr_managed_slave_security_group: str = None,
  key_name: str = None,
  service_access_security_group: str = None,
  subnet_id: str = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.instanceProfile">instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_profile EmrCluster#instance_profile}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalMasterSecurityGroups">additional_master_security_groups</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_master_security_groups EmrCluster#additional_master_security_groups}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalSlaveSecurityGroups">additional_slave_security_groups</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_slave_security_groups EmrCluster#additional_slave_security_groups}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedMasterSecurityGroup">emr_managed_master_security_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedSlaveSecurityGroup">emr_managed_slave_security_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#key_name EmrCluster#key_name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.serviceAccessSecurityGroup">service_access_security_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_access_security_group EmrCluster#service_access_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_id EmrCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_ids EmrCluster#subnet_ids}. |

---

##### `instance_profile`<sup>Required</sup> <a name="instance_profile" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.instanceProfile"></a>

```python
instance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_profile EmrCluster#instance_profile}.

---

##### `additional_master_security_groups`<sup>Optional</sup> <a name="additional_master_security_groups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalMasterSecurityGroups"></a>

```python
additional_master_security_groups: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_master_security_groups EmrCluster#additional_master_security_groups}.

---

##### `additional_slave_security_groups`<sup>Optional</sup> <a name="additional_slave_security_groups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalSlaveSecurityGroups"></a>

```python
additional_slave_security_groups: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_slave_security_groups EmrCluster#additional_slave_security_groups}.

---

##### `emr_managed_master_security_group`<sup>Optional</sup> <a name="emr_managed_master_security_group" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedMasterSecurityGroup"></a>

```python
emr_managed_master_security_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}.

---

##### `emr_managed_slave_security_group`<sup>Optional</sup> <a name="emr_managed_slave_security_group" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedSlaveSecurityGroup"></a>

```python
emr_managed_slave_security_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#key_name EmrCluster#key_name}.

---

##### `service_access_security_group`<sup>Optional</sup> <a name="service_access_security_group" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.serviceAccessSecurityGroup"></a>

```python
service_access_security_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_access_security_group EmrCluster#service_access_security_group}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_id EmrCluster#subnet_id}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_ids EmrCluster#subnet_ids}.

---

### EmrClusterKerberosAttributes <a name="EmrClusterKerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterKerberosAttributes(
  kdc_admin_password: str,
  realm: str,
  ad_domain_join_password: str = None,
  ad_domain_join_user: str = None,
  cross_realm_trust_principal_password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.kdcAdminPassword">kdc_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kdc_admin_password EmrCluster#kdc_admin_password}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.realm">realm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#realm EmrCluster#realm}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinPassword">ad_domain_join_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_password EmrCluster#ad_domain_join_password}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinUser">ad_domain_join_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_user EmrCluster#ad_domain_join_user}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.crossRealmTrustPrincipalPassword">cross_realm_trust_principal_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}. |

---

##### `kdc_admin_password`<sup>Required</sup> <a name="kdc_admin_password" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.kdcAdminPassword"></a>

```python
kdc_admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kdc_admin_password EmrCluster#kdc_admin_password}.

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.realm"></a>

```python
realm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#realm EmrCluster#realm}.

---

##### `ad_domain_join_password`<sup>Optional</sup> <a name="ad_domain_join_password" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinPassword"></a>

```python
ad_domain_join_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_password EmrCluster#ad_domain_join_password}.

---

##### `ad_domain_join_user`<sup>Optional</sup> <a name="ad_domain_join_user" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinUser"></a>

```python
ad_domain_join_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_user EmrCluster#ad_domain_join_user}.

---

##### `cross_realm_trust_principal_password`<sup>Optional</sup> <a name="cross_realm_trust_principal_password" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.crossRealmTrustPrincipalPassword"></a>

```python
cross_realm_trust_principal_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}.

---

### EmrClusterMasterInstanceFleet <a name="EmrClusterMasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleet(
  instance_type_configs: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigs]] = None,
  launch_specifications: EmrClusterMasterInstanceFleetLaunchSpecifications = None,
  name: str = None,
  target_on_demand_capacity: typing.Union[int, float] = None,
  target_spot_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.instanceTypeConfigs">instance_type_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>]]</code> | instance_type_configs block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.launchSpecifications">launch_specifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | launch_specifications block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetOnDemandCapacity">target_on_demand_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetSpotCapacity">target_spot_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}. |

---

##### `instance_type_configs`<sup>Optional</sup> <a name="instance_type_configs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.instanceTypeConfigs"></a>

```python
instance_type_configs: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>]]

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}

---

##### `launch_specifications`<sup>Optional</sup> <a name="launch_specifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.launchSpecifications"></a>

```python
launch_specifications: EmrClusterMasterInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `target_on_demand_capacity`<sup>Optional</sup> <a name="target_on_demand_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetOnDemandCapacity"></a>

```python
target_on_demand_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.

---

##### `target_spot_capacity`<sup>Optional</sup> <a name="target_spot_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetSpotCapacity"></a>

```python
target_spot_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigs <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs(
  instance_type: str,
  bid_price: str = None,
  bid_price_as_percentage_of_on_demand_price: typing.Union[int, float] = None,
  configurations: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations]] = None,
  ebs_config: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig]] = None,
  weighted_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPrice">bid_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice">bid_price_as_percentage_of_on_demand_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.configurations">configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>]]</code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.ebsConfig">ebs_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>]]</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}. |

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `bid_price`<sup>Optional</sup> <a name="bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPrice"></a>

```python
bid_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `bid_price_as_percentage_of_on_demand_price`<sup>Optional</sup> <a name="bid_price_as_percentage_of_on_demand_price" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```python
bid_price_as_percentage_of_on_demand_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}.

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.configurations"></a>

```python
configurations: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>]]

configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}

---

##### `ebs_config`<sup>Optional</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.ebsConfig"></a>

```python
ebs_config: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `weighted_capacity`<sup>Optional</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations(
  classification: str = None,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.classification">classification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.classification"></a>

```python
classification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig(
  size: typing.Union[int, float],
  type: str,
  iops: typing.Union[int, float] = None,
  volumes_per_instance: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `volumes_per_instance`<sup>Optional</sup> <a name="volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterMasterInstanceFleetLaunchSpecifications <a name="EmrClusterMasterInstanceFleetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications(
  on_demand_specification: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification]] = None,
  spot_specification: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.onDemandSpecification">on_demand_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]</code> | on_demand_specification block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.spotSpecification">spot_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>]]</code> | spot_specification block. |

---

##### `on_demand_specification`<sup>Optional</sup> <a name="on_demand_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.onDemandSpecification"></a>

```python
on_demand_specification: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}

---

##### `spot_specification`<sup>Optional</sup> <a name="spot_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.spotSpecification"></a>

```python
spot_specification: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}

---

### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification(
  allocation_strategy: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification(
  allocation_strategy: str,
  timeout_action: str,
  timeout_duration_minutes: typing.Union[int, float],
  block_duration_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction">timeout_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes">timeout_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}. |

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

##### `timeout_action`<sup>Required</sup> <a name="timeout_action" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}.

---

##### `timeout_duration_minutes`<sup>Required</sup> <a name="timeout_duration_minutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes"></a>

```python
timeout_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}.

---

##### `block_duration_minutes`<sup>Optional</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes"></a>

```python
block_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}.

---

### EmrClusterMasterInstanceGroup <a name="EmrClusterMasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceGroup(
  instance_type: str,
  bid_price: str = None,
  ebs_config: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceGroupEbsConfig]] = None,
  instance_count: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.bidPrice">bid_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.ebsConfig">ebs_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>]]</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `bid_price`<sup>Optional</sup> <a name="bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.bidPrice"></a>

```python
bid_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `ebs_config`<sup>Optional</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.ebsConfig"></a>

```python
ebs_config: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceGroupEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>]]

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterMasterInstanceGroupEbsConfig <a name="EmrClusterMasterInstanceGroupEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceGroupEbsConfig(
  size: typing.Union[int, float],
  type: str,
  iops: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volumes_per_instance: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}.

---

##### `volumes_per_instance`<sup>Optional</sup> <a name="volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterStep <a name="EmrClusterStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterStep(
  action_on_failure: str = None,
  hadoop_jar_step: typing.Union[IResolvable, typing.List[EmrClusterStepHadoopJarStep]] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.actionOnFailure">action_on_failure</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#action_on_failure EmrCluster#action_on_failure}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.hadoopJarStep">hadoop_jar_step</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#hadoop_jar_step EmrCluster#hadoop_jar_step}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `action_on_failure`<sup>Optional</sup> <a name="action_on_failure" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.actionOnFailure"></a>

```python
action_on_failure: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#action_on_failure EmrCluster#action_on_failure}.

---

##### `hadoop_jar_step`<sup>Optional</sup> <a name="hadoop_jar_step" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.hadoopJarStep"></a>

```python
hadoop_jar_step: typing.Union[IResolvable, typing.List[EmrClusterStepHadoopJarStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#hadoop_jar_step EmrCluster#hadoop_jar_step}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterStepHadoopJarStep <a name="EmrClusterStepHadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterStepHadoopJarStep(
  args: typing.List[str] = None,
  jar: str = None,
  main_class: str = None,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.args">args</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.jar">jar</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#jar EmrCluster#jar}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.mainClass">main_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#main_class EmrCluster#main_class}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.jar"></a>

```python
jar: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#jar EmrCluster#jar}.

---

##### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#main_class EmrCluster#main_class}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrClusterAutoTerminationPolicyOutputReference <a name="EmrClusterAutoTerminationPolicyOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterAutoTerminationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeoutInput"></a>

```python
idle_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: EmrClusterAutoTerminationPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

---


### EmrClusterBootstrapActionList <a name="EmrClusterBootstrapActionList" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterBootstrapActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterBootstrapActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterBootstrapAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>]]

---


### EmrClusterBootstrapActionOutputReference <a name="EmrClusterBootstrapActionOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterBootstrapActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resetArgs">reset_args</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterBootstrapAction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>, cdktf.IResolvable]

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>]]

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification">reset_classification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classification` <a name="reset_classification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification"></a>

```python
def reset_classification() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput">classification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification">classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_input`<sup>Optional</sup> <a name="classification_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput"></a>

```python
classification_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification"></a>

```python
classification: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>, cdktf.IResolvable]

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance">reset_volumes_per_instance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_volumes_per_instance` <a name="reset_volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance"></a>

```python
def reset_volumes_per_instance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput">volumes_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volumes_per_instance_input`<sup>Optional</sup> <a name="volumes_per_instance_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```python
volumes_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volumes_per_instance`<sup>Required</sup> <a name="volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>, cdktf.IResolvable]

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>]]

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations">put_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig">put_ebs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice">reset_bid_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice">reset_bid_price_as_percentage_of_on_demand_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations">reset_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig">reset_ebs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity">reset_weighted_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configurations` <a name="put_configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations"></a>

```python
def put_configurations(
  value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>]]

---

##### `put_ebs_config` <a name="put_ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig"></a>

```python
def put_ebs_config(
  value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

---

##### `reset_bid_price` <a name="reset_bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice"></a>

```python
def reset_bid_price() -> None
```

##### `reset_bid_price_as_percentage_of_on_demand_price` <a name="reset_bid_price_as_percentage_of_on_demand_price" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice"></a>

```python
def reset_bid_price_as_percentage_of_on_demand_price() -> None
```

##### `reset_configurations` <a name="reset_configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations"></a>

```python
def reset_configurations() -> None
```

##### `reset_ebs_config` <a name="reset_ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig"></a>

```python
def reset_ebs_config() -> None
```

##### `reset_weighted_capacity` <a name="reset_weighted_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity"></a>

```python
def reset_weighted_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig">ebs_config</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput">bid_price_as_percentage_of_on_demand_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput">bid_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput">configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput">ebs_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput">weighted_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice">bid_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice">bid_price_as_percentage_of_on_demand_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurations"></a>

```python
configurations: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList</a>

---

##### `ebs_config`<sup>Required</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig"></a>

```python
ebs_config: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList</a>

---

##### `bid_price_as_percentage_of_on_demand_price_input`<sup>Optional</sup> <a name="bid_price_as_percentage_of_on_demand_price_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput"></a>

```python
bid_price_as_percentage_of_on_demand_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bid_price_input`<sup>Optional</sup> <a name="bid_price_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput"></a>

```python
bid_price_input: str
```

- *Type:* str

---

##### `configurations_input`<sup>Optional</sup> <a name="configurations_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput"></a>

```python
configurations_input: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>]]

---

##### `ebs_config_input`<sup>Optional</sup> <a name="ebs_config_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput"></a>

```python
ebs_config_input: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `weighted_capacity_input`<sup>Optional</sup> <a name="weighted_capacity_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput"></a>

```python
weighted_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bid_price`<sup>Required</sup> <a name="bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice"></a>

```python
bid_price: str
```

- *Type:* str

---

##### `bid_price_as_percentage_of_on_demand_price`<sup>Required</sup> <a name="bid_price_as_percentage_of_on_demand_price" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```python
bid_price_as_percentage_of_on_demand_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `weighted_capacity`<sup>Required</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterCoreInstanceFleetInstanceTypeConfigs, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>, cdktf.IResolvable]

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>, cdktf.IResolvable]

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification">put_on_demand_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification">put_spot_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification">reset_on_demand_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification">reset_spot_specification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_demand_specification` <a name="put_on_demand_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification"></a>

```python
def put_on_demand_specification(
  value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

---

##### `put_spot_specification` <a name="put_spot_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification"></a>

```python
def put_spot_specification(
  value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

---

##### `reset_on_demand_specification` <a name="reset_on_demand_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification"></a>

```python
def reset_on_demand_specification() -> None
```

##### `reset_spot_specification` <a name="reset_spot_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification"></a>

```python
def reset_spot_specification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification">on_demand_specification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification">spot_specification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput">on_demand_specification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput">spot_specification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_demand_specification`<sup>Required</sup> <a name="on_demand_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification"></a>

```python
on_demand_specification: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a>

---

##### `spot_specification`<sup>Required</sup> <a name="spot_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification"></a>

```python
spot_specification: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList</a>

---

##### `on_demand_specification_input`<sup>Optional</sup> <a name="on_demand_specification_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput"></a>

```python
on_demand_specification_input: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

---

##### `spot_specification_input`<sup>Optional</sup> <a name="spot_specification_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput"></a>

```python
spot_specification_input: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: EmrClusterCoreInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes">reset_block_duration_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_block_duration_minutes` <a name="reset_block_duration_minutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes"></a>

```python
def reset_block_duration_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput">block_duration_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput">timeout_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput">timeout_duration_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction">timeout_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes">timeout_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `block_duration_minutes_input`<sup>Optional</sup> <a name="block_duration_minutes_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput"></a>

```python
block_duration_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_action_input`<sup>Optional</sup> <a name="timeout_action_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput"></a>

```python
timeout_action_input: str
```

- *Type:* str

---

##### `timeout_duration_minutes_input`<sup>Optional</sup> <a name="timeout_duration_minutes_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput"></a>

```python
timeout_duration_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `block_duration_minutes`<sup>Required</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes"></a>

```python
block_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_action`<sup>Required</sup> <a name="timeout_action" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

---

##### `timeout_duration_minutes`<sup>Required</sup> <a name="timeout_duration_minutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes"></a>

```python
timeout_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>, cdktf.IResolvable]

---


### EmrClusterCoreInstanceFleetOutputReference <a name="EmrClusterCoreInstanceFleetOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceFleetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs">put_instance_type_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications">put_launch_specifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetInstanceTypeConfigs">reset_instance_type_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetLaunchSpecifications">reset_launch_specifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetOnDemandCapacity">reset_target_on_demand_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetSpotCapacity">reset_target_spot_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_instance_type_configs` <a name="put_instance_type_configs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs"></a>

```python
def put_instance_type_configs(
  value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>]]

---

##### `put_launch_specifications` <a name="put_launch_specifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications"></a>

```python
def put_launch_specifications(
  on_demand_specification: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification]] = None,
  spot_specification: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification]] = None
) -> None
```

###### `on_demand_specification`<sup>Optional</sup> <a name="on_demand_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications.parameter.onDemandSpecification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}

---

###### `spot_specification`<sup>Optional</sup> <a name="spot_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications.parameter.spotSpecification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}

---

##### `reset_instance_type_configs` <a name="reset_instance_type_configs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetInstanceTypeConfigs"></a>

```python
def reset_instance_type_configs() -> None
```

##### `reset_launch_specifications` <a name="reset_launch_specifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetLaunchSpecifications"></a>

```python
def reset_launch_specifications() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_target_on_demand_capacity` <a name="reset_target_on_demand_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetOnDemandCapacity"></a>

```python
def reset_target_on_demand_capacity() -> None
```

##### `reset_target_spot_capacity` <a name="reset_target_spot_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetSpotCapacity"></a>

```python
def reset_target_spot_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigs">instance_type_configs</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecifications">launch_specifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference">EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedOnDemandCapacity">provisioned_on_demand_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedSpotCapacity">provisioned_spot_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigsInput">instance_type_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecificationsInput">launch_specifications_input</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacityInput">target_on_demand_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacityInput">target_spot_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacity">target_on_demand_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacity">target_spot_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_type_configs`<sup>Required</sup> <a name="instance_type_configs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigs"></a>

```python
instance_type_configs: EmrClusterCoreInstanceFleetInstanceTypeConfigsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsList</a>

---

##### `launch_specifications`<sup>Required</sup> <a name="launch_specifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecifications"></a>

```python
launch_specifications: EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference">EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference</a>

---

##### `provisioned_on_demand_capacity`<sup>Required</sup> <a name="provisioned_on_demand_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedOnDemandCapacity"></a>

```python
provisioned_on_demand_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_spot_capacity`<sup>Required</sup> <a name="provisioned_spot_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedSpotCapacity"></a>

```python
provisioned_spot_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_configs_input`<sup>Optional</sup> <a name="instance_type_configs_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigsInput"></a>

```python
instance_type_configs_input: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceFleetInstanceTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>]]

---

##### `launch_specifications_input`<sup>Optional</sup> <a name="launch_specifications_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecificationsInput"></a>

```python
launch_specifications_input: EmrClusterCoreInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_on_demand_capacity_input`<sup>Optional</sup> <a name="target_on_demand_capacity_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacityInput"></a>

```python
target_on_demand_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_spot_capacity_input`<sup>Optional</sup> <a name="target_spot_capacity_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacityInput"></a>

```python
target_spot_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_on_demand_capacity`<sup>Required</sup> <a name="target_on_demand_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacity"></a>

```python
target_on_demand_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_spot_capacity`<sup>Required</sup> <a name="target_spot_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacity"></a>

```python
target_spot_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.internalValue"></a>

```python
internal_value: EmrClusterCoreInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

---


### EmrClusterCoreInstanceGroupEbsConfigList <a name="EmrClusterCoreInstanceGroupEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceGroupEbsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterCoreInstanceGroupEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceGroupEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>]]

---


### EmrClusterCoreInstanceGroupEbsConfigOutputReference <a name="EmrClusterCoreInstanceGroupEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance">reset_volumes_per_instance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volumes_per_instance` <a name="reset_volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance"></a>

```python
def reset_volumes_per_instance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput">volumes_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volumes_per_instance_input`<sup>Optional</sup> <a name="volumes_per_instance_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```python
volumes_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volumes_per_instance`<sup>Required</sup> <a name="volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterCoreInstanceGroupEbsConfig, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>, cdktf.IResolvable]

---


### EmrClusterCoreInstanceGroupOutputReference <a name="EmrClusterCoreInstanceGroupOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterCoreInstanceGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig">put_ebs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetAutoscalingPolicy">reset_autoscaling_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetBidPrice">reset_bid_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetEbsConfig">reset_ebs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs_config` <a name="put_ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig"></a>

```python
def put_ebs_config(
  value: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceGroupEbsConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>]]

---

##### `reset_autoscaling_policy` <a name="reset_autoscaling_policy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetAutoscalingPolicy"></a>

```python
def reset_autoscaling_policy() -> None
```

##### `reset_bid_price` <a name="reset_bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetBidPrice"></a>

```python
def reset_bid_price() -> None
```

##### `reset_ebs_config` <a name="reset_ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetEbsConfig"></a>

```python
def reset_ebs_config() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfig">ebs_config</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList">EmrClusterCoreInstanceGroupEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicyInput">autoscaling_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPriceInput">bid_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfigInput">ebs_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicy">autoscaling_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPrice">bid_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_config`<sup>Required</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfig"></a>

```python
ebs_config: EmrClusterCoreInstanceGroupEbsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList">EmrClusterCoreInstanceGroupEbsConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `autoscaling_policy_input`<sup>Optional</sup> <a name="autoscaling_policy_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicyInput"></a>

```python
autoscaling_policy_input: str
```

- *Type:* str

---

##### `bid_price_input`<sup>Optional</sup> <a name="bid_price_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPriceInput"></a>

```python
bid_price_input: str
```

- *Type:* str

---

##### `ebs_config_input`<sup>Optional</sup> <a name="ebs_config_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfigInput"></a>

```python
ebs_config_input: typing.Union[IResolvable, typing.List[EmrClusterCoreInstanceGroupEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>]]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `autoscaling_policy`<sup>Required</sup> <a name="autoscaling_policy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicy"></a>

```python
autoscaling_policy: str
```

- *Type:* str

---

##### `bid_price`<sup>Required</sup> <a name="bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPrice"></a>

```python
bid_price: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.internalValue"></a>

```python
internal_value: EmrClusterCoreInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

---


### EmrClusterEc2AttributesOutputReference <a name="EmrClusterEc2AttributesOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterEc2AttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalMasterSecurityGroups">reset_additional_master_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalSlaveSecurityGroups">reset_additional_slave_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedMasterSecurityGroup">reset_emr_managed_master_security_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedSlaveSecurityGroup">reset_emr_managed_slave_security_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetServiceAccessSecurityGroup">reset_service_access_security_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_master_security_groups` <a name="reset_additional_master_security_groups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalMasterSecurityGroups"></a>

```python
def reset_additional_master_security_groups() -> None
```

##### `reset_additional_slave_security_groups` <a name="reset_additional_slave_security_groups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalSlaveSecurityGroups"></a>

```python
def reset_additional_slave_security_groups() -> None
```

##### `reset_emr_managed_master_security_group` <a name="reset_emr_managed_master_security_group" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedMasterSecurityGroup"></a>

```python
def reset_emr_managed_master_security_group() -> None
```

##### `reset_emr_managed_slave_security_group` <a name="reset_emr_managed_slave_security_group" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedSlaveSecurityGroup"></a>

```python
def reset_emr_managed_slave_security_group() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_service_access_security_group` <a name="reset_service_access_security_group" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetServiceAccessSecurityGroup"></a>

```python
def reset_service_access_security_group() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroupsInput">additional_master_security_groups_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroupsInput">additional_slave_security_groups_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroupInput">emr_managed_master_security_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroupInput">emr_managed_slave_security_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfileInput">instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroupInput">service_access_security_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroups">additional_master_security_groups</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroups">additional_slave_security_groups</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroup">emr_managed_master_security_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroup">emr_managed_slave_security_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfile">instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroup">service_access_security_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_master_security_groups_input`<sup>Optional</sup> <a name="additional_master_security_groups_input" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroupsInput"></a>

```python
additional_master_security_groups_input: str
```

- *Type:* str

---

##### `additional_slave_security_groups_input`<sup>Optional</sup> <a name="additional_slave_security_groups_input" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroupsInput"></a>

```python
additional_slave_security_groups_input: str
```

- *Type:* str

---

##### `emr_managed_master_security_group_input`<sup>Optional</sup> <a name="emr_managed_master_security_group_input" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroupInput"></a>

```python
emr_managed_master_security_group_input: str
```

- *Type:* str

---

##### `emr_managed_slave_security_group_input`<sup>Optional</sup> <a name="emr_managed_slave_security_group_input" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroupInput"></a>

```python
emr_managed_slave_security_group_input: str
```

- *Type:* str

---

##### `instance_profile_input`<sup>Optional</sup> <a name="instance_profile_input" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfileInput"></a>

```python
instance_profile_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `service_access_security_group_input`<sup>Optional</sup> <a name="service_access_security_group_input" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroupInput"></a>

```python
service_access_security_group_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_master_security_groups`<sup>Required</sup> <a name="additional_master_security_groups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroups"></a>

```python
additional_master_security_groups: str
```

- *Type:* str

---

##### `additional_slave_security_groups`<sup>Required</sup> <a name="additional_slave_security_groups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroups"></a>

```python
additional_slave_security_groups: str
```

- *Type:* str

---

##### `emr_managed_master_security_group`<sup>Required</sup> <a name="emr_managed_master_security_group" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroup"></a>

```python
emr_managed_master_security_group: str
```

- *Type:* str

---

##### `emr_managed_slave_security_group`<sup>Required</sup> <a name="emr_managed_slave_security_group" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroup"></a>

```python
emr_managed_slave_security_group: str
```

- *Type:* str

---

##### `instance_profile`<sup>Required</sup> <a name="instance_profile" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfile"></a>

```python
instance_profile: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `service_access_security_group`<sup>Required</sup> <a name="service_access_security_group" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroup"></a>

```python
service_access_security_group: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.internalValue"></a>

```python
internal_value: EmrClusterEc2Attributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

---


### EmrClusterKerberosAttributesOutputReference <a name="EmrClusterKerberosAttributesOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterKerberosAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinPassword">reset_ad_domain_join_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinUser">reset_ad_domain_join_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetCrossRealmTrustPrincipalPassword">reset_cross_realm_trust_principal_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ad_domain_join_password` <a name="reset_ad_domain_join_password" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinPassword"></a>

```python
def reset_ad_domain_join_password() -> None
```

##### `reset_ad_domain_join_user` <a name="reset_ad_domain_join_user" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinUser"></a>

```python
def reset_ad_domain_join_user() -> None
```

##### `reset_cross_realm_trust_principal_password` <a name="reset_cross_realm_trust_principal_password" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetCrossRealmTrustPrincipalPassword"></a>

```python
def reset_cross_realm_trust_principal_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPasswordInput">ad_domain_join_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUserInput">ad_domain_join_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPasswordInput">cross_realm_trust_principal_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPasswordInput">kdc_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realmInput">realm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPassword">ad_domain_join_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUser">ad_domain_join_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPassword">cross_realm_trust_principal_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPassword">kdc_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realm">realm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_domain_join_password_input`<sup>Optional</sup> <a name="ad_domain_join_password_input" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPasswordInput"></a>

```python
ad_domain_join_password_input: str
```

- *Type:* str

---

##### `ad_domain_join_user_input`<sup>Optional</sup> <a name="ad_domain_join_user_input" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUserInput"></a>

```python
ad_domain_join_user_input: str
```

- *Type:* str

---

##### `cross_realm_trust_principal_password_input`<sup>Optional</sup> <a name="cross_realm_trust_principal_password_input" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPasswordInput"></a>

```python
cross_realm_trust_principal_password_input: str
```

- *Type:* str

---

##### `kdc_admin_password_input`<sup>Optional</sup> <a name="kdc_admin_password_input" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPasswordInput"></a>

```python
kdc_admin_password_input: str
```

- *Type:* str

---

##### `realm_input`<sup>Optional</sup> <a name="realm_input" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realmInput"></a>

```python
realm_input: str
```

- *Type:* str

---

##### `ad_domain_join_password`<sup>Required</sup> <a name="ad_domain_join_password" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPassword"></a>

```python
ad_domain_join_password: str
```

- *Type:* str

---

##### `ad_domain_join_user`<sup>Required</sup> <a name="ad_domain_join_user" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUser"></a>

```python
ad_domain_join_user: str
```

- *Type:* str

---

##### `cross_realm_trust_principal_password`<sup>Required</sup> <a name="cross_realm_trust_principal_password" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPassword"></a>

```python
cross_realm_trust_principal_password: str
```

- *Type:* str

---

##### `kdc_admin_password`<sup>Required</sup> <a name="kdc_admin_password" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPassword"></a>

```python
kdc_admin_password: str
```

- *Type:* str

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realm"></a>

```python
realm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.internalValue"></a>

```python
internal_value: EmrClusterKerberosAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>]]

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification">reset_classification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classification` <a name="reset_classification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification"></a>

```python
def reset_classification() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput">classification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification">classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_input`<sup>Optional</sup> <a name="classification_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput"></a>

```python
classification_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification"></a>

```python
classification: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>, cdktf.IResolvable]

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance">reset_volumes_per_instance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_volumes_per_instance` <a name="reset_volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance"></a>

```python
def reset_volumes_per_instance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput">volumes_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volumes_per_instance_input`<sup>Optional</sup> <a name="volumes_per_instance_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```python
volumes_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volumes_per_instance`<sup>Required</sup> <a name="volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>, cdktf.IResolvable]

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>]]

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations">put_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig">put_ebs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice">reset_bid_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice">reset_bid_price_as_percentage_of_on_demand_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations">reset_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig">reset_ebs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity">reset_weighted_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configurations` <a name="put_configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations"></a>

```python
def put_configurations(
  value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>]]

---

##### `put_ebs_config` <a name="put_ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig"></a>

```python
def put_ebs_config(
  value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

---

##### `reset_bid_price` <a name="reset_bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice"></a>

```python
def reset_bid_price() -> None
```

##### `reset_bid_price_as_percentage_of_on_demand_price` <a name="reset_bid_price_as_percentage_of_on_demand_price" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice"></a>

```python
def reset_bid_price_as_percentage_of_on_demand_price() -> None
```

##### `reset_configurations` <a name="reset_configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations"></a>

```python
def reset_configurations() -> None
```

##### `reset_ebs_config` <a name="reset_ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig"></a>

```python
def reset_ebs_config() -> None
```

##### `reset_weighted_capacity` <a name="reset_weighted_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity"></a>

```python
def reset_weighted_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig">ebs_config</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput">bid_price_as_percentage_of_on_demand_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput">bid_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput">configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput">ebs_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput">weighted_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice">bid_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice">bid_price_as_percentage_of_on_demand_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurations"></a>

```python
configurations: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList</a>

---

##### `ebs_config`<sup>Required</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig"></a>

```python
ebs_config: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList</a>

---

##### `bid_price_as_percentage_of_on_demand_price_input`<sup>Optional</sup> <a name="bid_price_as_percentage_of_on_demand_price_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput"></a>

```python
bid_price_as_percentage_of_on_demand_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bid_price_input`<sup>Optional</sup> <a name="bid_price_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput"></a>

```python
bid_price_input: str
```

- *Type:* str

---

##### `configurations_input`<sup>Optional</sup> <a name="configurations_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput"></a>

```python
configurations_input: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>]]

---

##### `ebs_config_input`<sup>Optional</sup> <a name="ebs_config_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput"></a>

```python
ebs_config_input: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>]]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `weighted_capacity_input`<sup>Optional</sup> <a name="weighted_capacity_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput"></a>

```python
weighted_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bid_price`<sup>Required</sup> <a name="bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice"></a>

```python
bid_price: str
```

- *Type:* str

---

##### `bid_price_as_percentage_of_on_demand_price`<sup>Required</sup> <a name="bid_price_as_percentage_of_on_demand_price" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```python
bid_price_as_percentage_of_on_demand_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `weighted_capacity`<sup>Required</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterMasterInstanceFleetInstanceTypeConfigs, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>, cdktf.IResolvable]

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>, cdktf.IResolvable]

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification">put_on_demand_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification">put_spot_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification">reset_on_demand_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification">reset_spot_specification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_demand_specification` <a name="put_on_demand_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification"></a>

```python
def put_on_demand_specification(
  value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

---

##### `put_spot_specification` <a name="put_spot_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification"></a>

```python
def put_spot_specification(
  value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

---

##### `reset_on_demand_specification` <a name="reset_on_demand_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification"></a>

```python
def reset_on_demand_specification() -> None
```

##### `reset_spot_specification` <a name="reset_spot_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification"></a>

```python
def reset_spot_specification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification">on_demand_specification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification">spot_specification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput">on_demand_specification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput">spot_specification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_demand_specification`<sup>Required</sup> <a name="on_demand_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification"></a>

```python
on_demand_specification: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a>

---

##### `spot_specification`<sup>Required</sup> <a name="spot_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification"></a>

```python
spot_specification: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList</a>

---

##### `on_demand_specification_input`<sup>Optional</sup> <a name="on_demand_specification_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput"></a>

```python
on_demand_specification_input: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

---

##### `spot_specification_input`<sup>Optional</sup> <a name="spot_specification_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput"></a>

```python
spot_specification_input: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: EmrClusterMasterInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes">reset_block_duration_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_block_duration_minutes` <a name="reset_block_duration_minutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes"></a>

```python
def reset_block_duration_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput">block_duration_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput">timeout_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput">timeout_duration_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction">timeout_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes">timeout_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `block_duration_minutes_input`<sup>Optional</sup> <a name="block_duration_minutes_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput"></a>

```python
block_duration_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_action_input`<sup>Optional</sup> <a name="timeout_action_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput"></a>

```python
timeout_action_input: str
```

- *Type:* str

---

##### `timeout_duration_minutes_input`<sup>Optional</sup> <a name="timeout_duration_minutes_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput"></a>

```python
timeout_duration_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `block_duration_minutes`<sup>Required</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes"></a>

```python
block_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_action`<sup>Required</sup> <a name="timeout_action" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

---

##### `timeout_duration_minutes`<sup>Required</sup> <a name="timeout_duration_minutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes"></a>

```python
timeout_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>, cdktf.IResolvable]

---


### EmrClusterMasterInstanceFleetOutputReference <a name="EmrClusterMasterInstanceFleetOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceFleetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs">put_instance_type_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications">put_launch_specifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetInstanceTypeConfigs">reset_instance_type_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetLaunchSpecifications">reset_launch_specifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetOnDemandCapacity">reset_target_on_demand_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetSpotCapacity">reset_target_spot_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_instance_type_configs` <a name="put_instance_type_configs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs"></a>

```python
def put_instance_type_configs(
  value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>]]

---

##### `put_launch_specifications` <a name="put_launch_specifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications"></a>

```python
def put_launch_specifications(
  on_demand_specification: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification]] = None,
  spot_specification: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification]] = None
) -> None
```

###### `on_demand_specification`<sup>Optional</sup> <a name="on_demand_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications.parameter.onDemandSpecification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>]]

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}

---

###### `spot_specification`<sup>Optional</sup> <a name="spot_specification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications.parameter.spotSpecification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>]]

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}

---

##### `reset_instance_type_configs` <a name="reset_instance_type_configs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetInstanceTypeConfigs"></a>

```python
def reset_instance_type_configs() -> None
```

##### `reset_launch_specifications` <a name="reset_launch_specifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetLaunchSpecifications"></a>

```python
def reset_launch_specifications() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_target_on_demand_capacity` <a name="reset_target_on_demand_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetOnDemandCapacity"></a>

```python
def reset_target_on_demand_capacity() -> None
```

##### `reset_target_spot_capacity` <a name="reset_target_spot_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetSpotCapacity"></a>

```python
def reset_target_spot_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigs">instance_type_configs</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecifications">launch_specifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference">EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedOnDemandCapacity">provisioned_on_demand_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedSpotCapacity">provisioned_spot_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigsInput">instance_type_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecificationsInput">launch_specifications_input</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacityInput">target_on_demand_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacityInput">target_spot_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacity">target_on_demand_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacity">target_spot_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_type_configs`<sup>Required</sup> <a name="instance_type_configs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigs"></a>

```python
instance_type_configs: EmrClusterMasterInstanceFleetInstanceTypeConfigsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsList</a>

---

##### `launch_specifications`<sup>Required</sup> <a name="launch_specifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecifications"></a>

```python
launch_specifications: EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference">EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference</a>

---

##### `provisioned_on_demand_capacity`<sup>Required</sup> <a name="provisioned_on_demand_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedOnDemandCapacity"></a>

```python
provisioned_on_demand_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_spot_capacity`<sup>Required</sup> <a name="provisioned_spot_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedSpotCapacity"></a>

```python
provisioned_spot_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_configs_input`<sup>Optional</sup> <a name="instance_type_configs_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigsInput"></a>

```python
instance_type_configs_input: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceFleetInstanceTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>]]

---

##### `launch_specifications_input`<sup>Optional</sup> <a name="launch_specifications_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecificationsInput"></a>

```python
launch_specifications_input: EmrClusterMasterInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_on_demand_capacity_input`<sup>Optional</sup> <a name="target_on_demand_capacity_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacityInput"></a>

```python
target_on_demand_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_spot_capacity_input`<sup>Optional</sup> <a name="target_spot_capacity_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacityInput"></a>

```python
target_spot_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_on_demand_capacity`<sup>Required</sup> <a name="target_on_demand_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacity"></a>

```python
target_on_demand_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_spot_capacity`<sup>Required</sup> <a name="target_spot_capacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacity"></a>

```python
target_spot_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.internalValue"></a>

```python
internal_value: EmrClusterMasterInstanceFleet
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

---


### EmrClusterMasterInstanceGroupEbsConfigList <a name="EmrClusterMasterInstanceGroupEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceGroupEbsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterMasterInstanceGroupEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceGroupEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>]]

---


### EmrClusterMasterInstanceGroupEbsConfigOutputReference <a name="EmrClusterMasterInstanceGroupEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance">reset_volumes_per_instance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volumes_per_instance` <a name="reset_volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance"></a>

```python
def reset_volumes_per_instance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput">volumes_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volumes_per_instance_input`<sup>Optional</sup> <a name="volumes_per_instance_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```python
volumes_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volumes_per_instance`<sup>Required</sup> <a name="volumes_per_instance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterMasterInstanceGroupEbsConfig, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>, cdktf.IResolvable]

---


### EmrClusterMasterInstanceGroupOutputReference <a name="EmrClusterMasterInstanceGroupOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterMasterInstanceGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig">put_ebs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetBidPrice">reset_bid_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetEbsConfig">reset_ebs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs_config` <a name="put_ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig"></a>

```python
def put_ebs_config(
  value: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceGroupEbsConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>]]

---

##### `reset_bid_price` <a name="reset_bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetBidPrice"></a>

```python
def reset_bid_price() -> None
```

##### `reset_ebs_config` <a name="reset_ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetEbsConfig"></a>

```python
def reset_ebs_config() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfig">ebs_config</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList">EmrClusterMasterInstanceGroupEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPriceInput">bid_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfigInput">ebs_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPrice">bid_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_config`<sup>Required</sup> <a name="ebs_config" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfig"></a>

```python
ebs_config: EmrClusterMasterInstanceGroupEbsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList">EmrClusterMasterInstanceGroupEbsConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `bid_price_input`<sup>Optional</sup> <a name="bid_price_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPriceInput"></a>

```python
bid_price_input: str
```

- *Type:* str

---

##### `ebs_config_input`<sup>Optional</sup> <a name="ebs_config_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfigInput"></a>

```python
ebs_config_input: typing.Union[IResolvable, typing.List[EmrClusterMasterInstanceGroupEbsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>]]

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `bid_price`<sup>Required</sup> <a name="bid_price" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPrice"></a>

```python
bid_price: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.internalValue"></a>

```python
internal_value: EmrClusterMasterInstanceGroup
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

---


### EmrClusterStepHadoopJarStepList <a name="EmrClusterStepHadoopJarStepList" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterStepHadoopJarStepList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterStepHadoopJarStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterStepHadoopJarStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>]]

---


### EmrClusterStepHadoopJarStepOutputReference <a name="EmrClusterStepHadoopJarStepOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterStepHadoopJarStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetJar">reset_jar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetMainClass">reset_main_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_jar` <a name="reset_jar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetJar"></a>

```python
def reset_jar() -> None
```

##### `reset_main_class` <a name="reset_main_class" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetMainClass"></a>

```python
def reset_main_class() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jarInput">jar_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClassInput">main_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jar">jar</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClass">main_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_input`<sup>Optional</sup> <a name="jar_input" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jarInput"></a>

```python
jar_input: str
```

- *Type:* str

---

##### `main_class_input`<sup>Optional</sup> <a name="main_class_input" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClassInput"></a>

```python
main_class_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jar"></a>

```python
jar: str
```

- *Type:* str

---

##### `main_class`<sup>Required</sup> <a name="main_class" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterStepHadoopJarStep, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>, cdktf.IResolvable]

---


### EmrClusterStepList <a name="EmrClusterStepList" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterStepList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrClusterStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrClusterStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>]]

---


### EmrClusterStepOutputReference <a name="EmrClusterStepOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_cluster

emrCluster.EmrClusterStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep">put_hadoop_jar_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetActionOnFailure">reset_action_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetHadoopJarStep">reset_hadoop_jar_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hadoop_jar_step` <a name="put_hadoop_jar_step" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep"></a>

```python
def put_hadoop_jar_step(
  value: typing.Union[IResolvable, typing.List[EmrClusterStepHadoopJarStep]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>]]

---

##### `reset_action_on_failure` <a name="reset_action_on_failure" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetActionOnFailure"></a>

```python
def reset_action_on_failure() -> None
```

##### `reset_hadoop_jar_step` <a name="reset_hadoop_jar_step" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetHadoopJarStep"></a>

```python
def reset_hadoop_jar_step() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStep">hadoop_jar_step</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList">EmrClusterStepHadoopJarStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailureInput">action_on_failure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStepInput">hadoop_jar_step_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailure">action_on_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hadoop_jar_step`<sup>Required</sup> <a name="hadoop_jar_step" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStep"></a>

```python
hadoop_jar_step: EmrClusterStepHadoopJarStepList
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList">EmrClusterStepHadoopJarStepList</a>

---

##### `action_on_failure_input`<sup>Optional</sup> <a name="action_on_failure_input" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailureInput"></a>

```python
action_on_failure_input: str
```

- *Type:* str

---

##### `hadoop_jar_step_input`<sup>Optional</sup> <a name="hadoop_jar_step_input" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStepInput"></a>

```python
hadoop_jar_step_input: typing.Union[IResolvable, typing.List[EmrClusterStepHadoopJarStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `action_on_failure`<sup>Required</sup> <a name="action_on_failure" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailure"></a>

```python
action_on_failure: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EmrClusterStep, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>, cdktf.IResolvable]

---



