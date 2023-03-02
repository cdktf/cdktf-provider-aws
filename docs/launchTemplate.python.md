# `launchTemplate` Submodule <a name="`launchTemplate` Submodule" id="@cdktf/provider-aws.launchTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchTemplate <a name="LaunchTemplate" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_template aws_launch_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  block_device_mappings: typing.Union[IResolvable, typing.List[LaunchTemplateBlockDeviceMappings]] = None,
  capacity_reservation_specification: LaunchTemplateCapacityReservationSpecification = None,
  cpu_options: LaunchTemplateCpuOptions = None,
  credit_specification: LaunchTemplateCreditSpecification = None,
  default_version: typing.Union[int, float] = None,
  description: str = None,
  disable_api_stop: typing.Union[bool, IResolvable] = None,
  disable_api_termination: typing.Union[bool, IResolvable] = None,
  ebs_optimized: str = None,
  elastic_gpu_specifications: typing.Union[IResolvable, typing.List[LaunchTemplateElasticGpuSpecifications]] = None,
  elastic_inference_accelerator: LaunchTemplateElasticInferenceAccelerator = None,
  enclave_options: LaunchTemplateEnclaveOptions = None,
  hibernation_options: LaunchTemplateHibernationOptions = None,
  iam_instance_profile: LaunchTemplateIamInstanceProfile = None,
  id: str = None,
  image_id: str = None,
  instance_initiated_shutdown_behavior: str = None,
  instance_market_options: LaunchTemplateInstanceMarketOptions = None,
  instance_requirements: LaunchTemplateInstanceRequirements = None,
  instance_type: str = None,
  kernel_id: str = None,
  key_name: str = None,
  license_specification: typing.Union[IResolvable, typing.List[LaunchTemplateLicenseSpecification]] = None,
  maintenance_options: LaunchTemplateMaintenanceOptions = None,
  metadata_options: LaunchTemplateMetadataOptions = None,
  monitoring: LaunchTemplateMonitoring = None,
  name: str = None,
  name_prefix: str = None,
  network_interfaces: typing.Union[IResolvable, typing.List[LaunchTemplateNetworkInterfaces]] = None,
  placement: LaunchTemplatePlacement = None,
  private_dns_name_options: LaunchTemplatePrivateDnsNameOptions = None,
  ram_disk_id: str = None,
  security_group_names: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tag_specifications: typing.Union[IResolvable, typing.List[LaunchTemplateTagSpecifications]] = None,
  update_default_version: typing.Union[bool, IResolvable] = None,
  user_data: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.blockDeviceMappings">block_device_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>]]</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.cpuOptions">cpu_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | cpu_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.defaultVersion">default_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#default_version LaunchTemplate#default_version}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#description LaunchTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.disableApiStop">disable_api_stop</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_stop LaunchTemplate#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.disableApiTermination">disable_api_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.ebsOptimized">ebs_optimized</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.elasticGpuSpecifications">elastic_gpu_specifications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>]]</code> | elastic_gpu_specifications block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.elasticInferenceAccelerator">elastic_inference_accelerator</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a></code> | elastic_inference_accelerator block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.hibernationOptions">hibernation_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | hibernation_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.iamInstanceProfile">iam_instance_profile</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | iam_instance_profile block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#id LaunchTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#image_id LaunchTemplate#image_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.instanceMarketOptions">instance_market_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | instance_market_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.instanceRequirements">instance_requirements</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a></code> | instance_requirements block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_type LaunchTemplate#instance_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.kernelId">kernel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#kernel_id LaunchTemplate#kernel_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#key_name LaunchTemplate#key_name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.licenseSpecification">license_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>]]</code> | license_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name LaunchTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name_prefix LaunchTemplate#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.networkInterfaces">network_interfaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>]]</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.placement">placement</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.ramDiskId">ram_disk_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.securityGroupNames">security_group_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#security_group_names LaunchTemplate#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags LaunchTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags_all LaunchTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.tagSpecifications">tag_specifications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>]]</code> | tag_specifications block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.updateDefaultVersion">update_default_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#update_default_version LaunchTemplate#update_default_version}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#user_data LaunchTemplate#user_data}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.blockDeviceMappings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>]]

block_device_mappings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#block_device_mappings LaunchTemplate#block_device_mappings}

---

##### `capacity_reservation_specification`<sup>Optional</sup> <a name="capacity_reservation_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.capacityReservationSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_specification LaunchTemplate#capacity_reservation_specification}

---

##### `cpu_options`<sup>Optional</sup> <a name="cpu_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.cpuOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

cpu_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_options LaunchTemplate#cpu_options}

---

##### `credit_specification`<sup>Optional</sup> <a name="credit_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.creditSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#credit_specification LaunchTemplate#credit_specification}

---

##### `default_version`<sup>Optional</sup> <a name="default_version" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.defaultVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#default_version LaunchTemplate#default_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#description LaunchTemplate#description}.

---

##### `disable_api_stop`<sup>Optional</sup> <a name="disable_api_stop" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.disableApiStop"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_stop LaunchTemplate#disable_api_stop}.

---

##### `disable_api_termination`<sup>Optional</sup> <a name="disable_api_termination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.disableApiTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}.

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.ebsOptimized"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}.

---

##### `elastic_gpu_specifications`<sup>Optional</sup> <a name="elastic_gpu_specifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.elasticGpuSpecifications"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>]]

elastic_gpu_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#elastic_gpu_specifications LaunchTemplate#elastic_gpu_specifications}

---

##### `elastic_inference_accelerator`<sup>Optional</sup> <a name="elastic_inference_accelerator" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.elasticInferenceAccelerator"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

elastic_inference_accelerator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#elastic_inference_accelerator LaunchTemplate#elastic_inference_accelerator}

---

##### `enclave_options`<sup>Optional</sup> <a name="enclave_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.enclaveOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enclave_options LaunchTemplate#enclave_options}

---

##### `hibernation_options`<sup>Optional</sup> <a name="hibernation_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.hibernationOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

hibernation_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#hibernation_options LaunchTemplate#hibernation_options}

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

iam_instance_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#iam_instance_profile LaunchTemplate#iam_instance_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#id LaunchTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#image_id LaunchTemplate#image_id}.

---

##### `instance_initiated_shutdown_behavior`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.instanceInitiatedShutdownBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}.

---

##### `instance_market_options`<sup>Optional</sup> <a name="instance_market_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.instanceMarketOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

instance_market_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_market_options LaunchTemplate#instance_market_options}

---

##### `instance_requirements`<sup>Optional</sup> <a name="instance_requirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.instanceRequirements"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

instance_requirements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_requirements LaunchTemplate#instance_requirements}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_type LaunchTemplate#instance_type}.

---

##### `kernel_id`<sup>Optional</sup> <a name="kernel_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.kernelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#kernel_id LaunchTemplate#kernel_id}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.keyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#key_name LaunchTemplate#key_name}.

---

##### `license_specification`<sup>Optional</sup> <a name="license_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.licenseSpecification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>]]

license_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#license_specification LaunchTemplate#license_specification}

---

##### `maintenance_options`<sup>Optional</sup> <a name="maintenance_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.maintenanceOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#maintenance_options LaunchTemplate#maintenance_options}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#metadata_options LaunchTemplate#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.monitoring"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#monitoring LaunchTemplate#monitoring}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name LaunchTemplate#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name_prefix LaunchTemplate#name_prefix}.

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.networkInterfaces"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_interfaces LaunchTemplate#network_interfaces}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

placement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#placement LaunchTemplate#placement}

---

##### `private_dns_name_options`<sup>Optional</sup> <a name="private_dns_name_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.privateDnsNameOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#private_dns_name_options LaunchTemplate#private_dns_name_options}

---

##### `ram_disk_id`<sup>Optional</sup> <a name="ram_disk_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.ramDiskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}.

---

##### `security_group_names`<sup>Optional</sup> <a name="security_group_names" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.securityGroupNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#security_group_names LaunchTemplate#security_group_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags LaunchTemplate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags_all LaunchTemplate#tags_all}.

---

##### `tag_specifications`<sup>Optional</sup> <a name="tag_specifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.tagSpecifications"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>]]

tag_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tag_specifications LaunchTemplate#tag_specifications}

---

##### `update_default_version`<sup>Optional</sup> <a name="update_default_version" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.updateDefaultVersion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#update_default_version LaunchTemplate#update_default_version}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#user_data LaunchTemplate#user_data}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putBlockDeviceMappings">put_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCapacityReservationSpecification">put_capacity_reservation_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCpuOptions">put_cpu_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCreditSpecification">put_credit_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticGpuSpecifications">put_elastic_gpu_specifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticInferenceAccelerator">put_elastic_inference_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putEnclaveOptions">put_enclave_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putHibernationOptions">put_hibernation_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putIamInstanceProfile">put_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceMarketOptions">put_instance_market_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements">put_instance_requirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putLicenseSpecification">put_license_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMaintenanceOptions">put_maintenance_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions">put_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMonitoring">put_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putNetworkInterfaces">put_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPrivateDnsNameOptions">put_private_dns_name_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putTagSpecifications">put_tag_specifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetBlockDeviceMappings">reset_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCapacityReservationSpecification">reset_capacity_reservation_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCpuOptions">reset_cpu_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCreditSpecification">reset_credit_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDefaultVersion">reset_default_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiStop">reset_disable_api_stop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiTermination">reset_disable_api_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetElasticGpuSpecifications">reset_elastic_gpu_specifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetElasticInferenceAccelerator">reset_elastic_inference_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEnclaveOptions">reset_enclave_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetHibernationOptions">reset_hibernation_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetIamInstanceProfile">reset_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceInitiatedShutdownBehavior">reset_instance_initiated_shutdown_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceMarketOptions">reset_instance_market_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceRequirements">reset_instance_requirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKernelId">reset_kernel_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetLicenseSpecification">reset_license_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMaintenanceOptions">reset_maintenance_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMetadataOptions">reset_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMonitoring">reset_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNetworkInterfaces">reset_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPlacement">reset_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPrivateDnsNameOptions">reset_private_dns_name_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetRamDiskId">reset_ram_disk_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetSecurityGroupNames">reset_security_group_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagSpecifications">reset_tag_specifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUpdateDefaultVersion">reset_update_default_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_block_device_mappings` <a name="put_block_device_mappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putBlockDeviceMappings"></a>

```python
def put_block_device_mappings(
  value: typing.Union[IResolvable, typing.List[LaunchTemplateBlockDeviceMappings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putBlockDeviceMappings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>]]

---

##### `put_capacity_reservation_specification` <a name="put_capacity_reservation_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCapacityReservationSpecification"></a>

```python
def put_capacity_reservation_specification(
  capacity_reservation_preference: str = None,
  capacity_reservation_target: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget = None
) -> None
```

###### `capacity_reservation_preference`<sup>Optional</sup> <a name="capacity_reservation_preference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCapacityReservationSpecification.parameter.capacityReservationPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}.

---

###### `capacity_reservation_target`<sup>Optional</sup> <a name="capacity_reservation_target" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCapacityReservationSpecification.parameter.capacityReservationTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_target LaunchTemplate#capacity_reservation_target}

---

##### `put_cpu_options` <a name="put_cpu_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCpuOptions"></a>

```python
def put_cpu_options(
  core_count: typing.Union[int, float] = None,
  threads_per_core: typing.Union[int, float] = None
) -> None
```

###### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCpuOptions.parameter.coreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#core_count LaunchTemplate#core_count}.

---

###### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCpuOptions.parameter.threadsPerCore"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#threads_per_core LaunchTemplate#threads_per_core}.

---

##### `put_credit_specification` <a name="put_credit_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCreditSpecification"></a>

```python
def put_credit_specification(
  cpu_credits: str = None
) -> None
```

###### `cpu_credits`<sup>Optional</sup> <a name="cpu_credits" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCreditSpecification.parameter.cpuCredits"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_credits LaunchTemplate#cpu_credits}.

---

##### `put_elastic_gpu_specifications` <a name="put_elastic_gpu_specifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticGpuSpecifications"></a>

```python
def put_elastic_gpu_specifications(
  value: typing.Union[IResolvable, typing.List[LaunchTemplateElasticGpuSpecifications]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticGpuSpecifications.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>]]

---

##### `put_elastic_inference_accelerator` <a name="put_elastic_inference_accelerator" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticInferenceAccelerator"></a>

```python
def put_elastic_inference_accelerator(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putElasticInferenceAccelerator.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#type LaunchTemplate#type}.

---

##### `put_enclave_options` <a name="put_enclave_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putEnclaveOptions"></a>

```python
def put_enclave_options(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putEnclaveOptions.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enabled LaunchTemplate#enabled}.

---

##### `put_hibernation_options` <a name="put_hibernation_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putHibernationOptions"></a>

```python
def put_hibernation_options(
  configured: typing.Union[bool, IResolvable]
) -> None
```

###### `configured`<sup>Required</sup> <a name="configured" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putHibernationOptions.parameter.configured"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#configured LaunchTemplate#configured}.

---

##### `put_iam_instance_profile` <a name="put_iam_instance_profile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putIamInstanceProfile"></a>

```python
def put_iam_instance_profile(
  arn: str = None,
  name: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putIamInstanceProfile.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#arn LaunchTemplate#arn}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putIamInstanceProfile.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name LaunchTemplate#name}.

---

##### `put_instance_market_options` <a name="put_instance_market_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceMarketOptions"></a>

```python
def put_instance_market_options(
  market_type: str = None,
  spot_options: LaunchTemplateInstanceMarketOptionsSpotOptions = None
) -> None
```

###### `market_type`<sup>Optional</sup> <a name="market_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceMarketOptions.parameter.marketType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#market_type LaunchTemplate#market_type}.

---

###### `spot_options`<sup>Optional</sup> <a name="spot_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceMarketOptions.parameter.spotOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

spot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_options LaunchTemplate#spot_options}

---

##### `put_instance_requirements` <a name="put_instance_requirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements"></a>

```python
def put_instance_requirements(
  memory_mib: LaunchTemplateInstanceRequirementsMemoryMib,
  vcpu_count: LaunchTemplateInstanceRequirementsVcpuCount,
  accelerator_count: LaunchTemplateInstanceRequirementsAcceleratorCount = None,
  accelerator_manufacturers: typing.List[str] = None,
  accelerator_names: typing.List[str] = None,
  accelerator_total_memory_mib: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib = None,
  accelerator_types: typing.List[str] = None,
  bare_metal: str = None,
  baseline_ebs_bandwidth_mbps: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps = None,
  burstable_performance: str = None,
  cpu_manufacturers: typing.List[str] = None,
  excluded_instance_types: typing.List[str] = None,
  instance_generations: typing.List[str] = None,
  local_storage: str = None,
  local_storage_types: typing.List[str] = None,
  memory_gib_per_vcpu: LaunchTemplateInstanceRequirementsMemoryGibPerVcpu = None,
  network_interface_count: LaunchTemplateInstanceRequirementsNetworkInterfaceCount = None,
  on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  require_hibernate_support: typing.Union[bool, IResolvable] = None,
  spot_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  total_local_storage_gb: LaunchTemplateInstanceRequirementsTotalLocalStorageGb = None
) -> None
```

###### `memory_mib`<sup>Required</sup> <a name="memory_mib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.memoryMib"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#memory_mib LaunchTemplate#memory_mib}

---

###### `vcpu_count`<sup>Required</sup> <a name="vcpu_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.vcpuCount"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#vcpu_count LaunchTemplate#vcpu_count}

---

###### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.acceleratorCount"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_count LaunchTemplate#accelerator_count}

---

###### `accelerator_manufacturers`<sup>Optional</sup> <a name="accelerator_manufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.acceleratorManufacturers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_manufacturers LaunchTemplate#accelerator_manufacturers}.

---

###### `accelerator_names`<sup>Optional</sup> <a name="accelerator_names" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.acceleratorNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_names LaunchTemplate#accelerator_names}.

---

###### `accelerator_total_memory_mib`<sup>Optional</sup> <a name="accelerator_total_memory_mib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.acceleratorTotalMemoryMib"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_total_memory_mib LaunchTemplate#accelerator_total_memory_mib}

---

###### `accelerator_types`<sup>Optional</sup> <a name="accelerator_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.acceleratorTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_types LaunchTemplate#accelerator_types}.

---

###### `bare_metal`<sup>Optional</sup> <a name="bare_metal" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.bareMetal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#bare_metal LaunchTemplate#bare_metal}.

---

###### `baseline_ebs_bandwidth_mbps`<sup>Optional</sup> <a name="baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.baselineEbsBandwidthMbps"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#baseline_ebs_bandwidth_mbps LaunchTemplate#baseline_ebs_bandwidth_mbps}

---

###### `burstable_performance`<sup>Optional</sup> <a name="burstable_performance" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.burstablePerformance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#burstable_performance LaunchTemplate#burstable_performance}.

---

###### `cpu_manufacturers`<sup>Optional</sup> <a name="cpu_manufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.cpuManufacturers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_manufacturers LaunchTemplate#cpu_manufacturers}.

---

###### `excluded_instance_types`<sup>Optional</sup> <a name="excluded_instance_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.excludedInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#excluded_instance_types LaunchTemplate#excluded_instance_types}.

---

###### `instance_generations`<sup>Optional</sup> <a name="instance_generations" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.instanceGenerations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_generations LaunchTemplate#instance_generations}.

---

###### `local_storage`<sup>Optional</sup> <a name="local_storage" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.localStorage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#local_storage LaunchTemplate#local_storage}.

---

###### `local_storage_types`<sup>Optional</sup> <a name="local_storage_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.localStorageTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#local_storage_types LaunchTemplate#local_storage_types}.

---

###### `memory_gib_per_vcpu`<sup>Optional</sup> <a name="memory_gib_per_vcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.memoryGibPerVcpu"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#memory_gib_per_vcpu LaunchTemplate#memory_gib_per_vcpu}

---

###### `network_interface_count`<sup>Optional</sup> <a name="network_interface_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.networkInterfaceCount"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_interface_count LaunchTemplate#network_interface_count}

---

###### `on_demand_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.onDemandMaxPricePercentageOverLowestPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#on_demand_max_price_percentage_over_lowest_price LaunchTemplate#on_demand_max_price_percentage_over_lowest_price}.

---

###### `require_hibernate_support`<sup>Optional</sup> <a name="require_hibernate_support" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.requireHibernateSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#require_hibernate_support LaunchTemplate#require_hibernate_support}.

---

###### `spot_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.spotMaxPricePercentageOverLowestPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_max_price_percentage_over_lowest_price LaunchTemplate#spot_max_price_percentage_over_lowest_price}.

---

###### `total_local_storage_gb`<sup>Optional</sup> <a name="total_local_storage_gb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.totalLocalStorageGb"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#total_local_storage_gb LaunchTemplate#total_local_storage_gb}

---

##### `put_license_specification` <a name="put_license_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putLicenseSpecification"></a>

```python
def put_license_specification(
  value: typing.Union[IResolvable, typing.List[LaunchTemplateLicenseSpecification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putLicenseSpecification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>]]

---

##### `put_maintenance_options` <a name="put_maintenance_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMaintenanceOptions"></a>

```python
def put_maintenance_options(
  auto_recovery: str = None
) -> None
```

###### `auto_recovery`<sup>Optional</sup> <a name="auto_recovery" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMaintenanceOptions.parameter.autoRecovery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#auto_recovery LaunchTemplate#auto_recovery}.

---

##### `put_metadata_options` <a name="put_metadata_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions"></a>

```python
def put_metadata_options(
  http_endpoint: str = None,
  http_protocol_ipv6: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None,
  instance_metadata_tags: str = None
) -> None
```

###### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions.parameter.httpEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_endpoint LaunchTemplate#http_endpoint}.

---

###### `http_protocol_ipv6`<sup>Optional</sup> <a name="http_protocol_ipv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions.parameter.httpProtocolIpv6"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}.

---

###### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions.parameter.httpPutResponseHopLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}.

---

###### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions.parameter.httpTokens"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_tokens LaunchTemplate#http_tokens}.

---

###### `instance_metadata_tags`<sup>Optional</sup> <a name="instance_metadata_tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions.parameter.instanceMetadataTags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_metadata_tags LaunchTemplate#instance_metadata_tags}.

---

##### `put_monitoring` <a name="put_monitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMonitoring"></a>

```python
def put_monitoring(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMonitoring.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enabled LaunchTemplate#enabled}.

---

##### `put_network_interfaces` <a name="put_network_interfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putNetworkInterfaces"></a>

```python
def put_network_interfaces(
  value: typing.Union[IResolvable, typing.List[LaunchTemplateNetworkInterfaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putNetworkInterfaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>]]

---

##### `put_placement` <a name="put_placement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement"></a>

```python
def put_placement(
  affinity: str = None,
  availability_zone: str = None,
  group_name: str = None,
  host_id: str = None,
  host_resource_group_arn: str = None,
  partition_number: typing.Union[int, float] = None,
  spread_domain: str = None,
  tenancy: str = None
) -> None
```

###### `affinity`<sup>Optional</sup> <a name="affinity" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement.parameter.affinity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#affinity LaunchTemplate#affinity}.

---

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#availability_zone LaunchTemplate#availability_zone}.

---

###### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement.parameter.groupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#group_name LaunchTemplate#group_name}.

---

###### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement.parameter.hostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#host_id LaunchTemplate#host_id}.

---

###### `host_resource_group_arn`<sup>Optional</sup> <a name="host_resource_group_arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement.parameter.hostResourceGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#host_resource_group_arn LaunchTemplate#host_resource_group_arn}.

---

###### `partition_number`<sup>Optional</sup> <a name="partition_number" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement.parameter.partitionNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#partition_number LaunchTemplate#partition_number}.

---

###### `spread_domain`<sup>Optional</sup> <a name="spread_domain" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement.parameter.spreadDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spread_domain LaunchTemplate#spread_domain}.

---

###### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement.parameter.tenancy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tenancy LaunchTemplate#tenancy}.

---

##### `put_private_dns_name_options` <a name="put_private_dns_name_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPrivateDnsNameOptions"></a>

```python
def put_private_dns_name_options(
  enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable] = None,
  enable_resource_name_dns_a_record: typing.Union[bool, IResolvable] = None,
  hostname_type: str = None
) -> None
```

###### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPrivateDnsNameOptions.parameter.enableResourceNameDnsAaaaRecord"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enable_resource_name_dns_aaaa_record LaunchTemplate#enable_resource_name_dns_aaaa_record}.

---

###### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPrivateDnsNameOptions.parameter.enableResourceNameDnsARecord"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enable_resource_name_dns_a_record LaunchTemplate#enable_resource_name_dns_a_record}.

---

###### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPrivateDnsNameOptions.parameter.hostnameType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#hostname_type LaunchTemplate#hostname_type}.

---

##### `put_tag_specifications` <a name="put_tag_specifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putTagSpecifications"></a>

```python
def put_tag_specifications(
  value: typing.Union[IResolvable, typing.List[LaunchTemplateTagSpecifications]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putTagSpecifications.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>]]

---

##### `reset_block_device_mappings` <a name="reset_block_device_mappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetBlockDeviceMappings"></a>

```python
def reset_block_device_mappings() -> None
```

##### `reset_capacity_reservation_specification` <a name="reset_capacity_reservation_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCapacityReservationSpecification"></a>

```python
def reset_capacity_reservation_specification() -> None
```

##### `reset_cpu_options` <a name="reset_cpu_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCpuOptions"></a>

```python
def reset_cpu_options() -> None
```

##### `reset_credit_specification` <a name="reset_credit_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCreditSpecification"></a>

```python
def reset_credit_specification() -> None
```

##### `reset_default_version` <a name="reset_default_version" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDefaultVersion"></a>

```python
def reset_default_version() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_api_stop` <a name="reset_disable_api_stop" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiStop"></a>

```python
def reset_disable_api_stop() -> None
```

##### `reset_disable_api_termination` <a name="reset_disable_api_termination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiTermination"></a>

```python
def reset_disable_api_termination() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_elastic_gpu_specifications` <a name="reset_elastic_gpu_specifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetElasticGpuSpecifications"></a>

```python
def reset_elastic_gpu_specifications() -> None
```

##### `reset_elastic_inference_accelerator` <a name="reset_elastic_inference_accelerator" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetElasticInferenceAccelerator"></a>

```python
def reset_elastic_inference_accelerator() -> None
```

##### `reset_enclave_options` <a name="reset_enclave_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEnclaveOptions"></a>

```python
def reset_enclave_options() -> None
```

##### `reset_hibernation_options` <a name="reset_hibernation_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetHibernationOptions"></a>

```python
def reset_hibernation_options() -> None
```

##### `reset_iam_instance_profile` <a name="reset_iam_instance_profile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetIamInstanceProfile"></a>

```python
def reset_iam_instance_profile() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_instance_initiated_shutdown_behavior` <a name="reset_instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceInitiatedShutdownBehavior"></a>

```python
def reset_instance_initiated_shutdown_behavior() -> None
```

##### `reset_instance_market_options` <a name="reset_instance_market_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceMarketOptions"></a>

```python
def reset_instance_market_options() -> None
```

##### `reset_instance_requirements` <a name="reset_instance_requirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceRequirements"></a>

```python
def reset_instance_requirements() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_kernel_id` <a name="reset_kernel_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKernelId"></a>

```python
def reset_kernel_id() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_license_specification` <a name="reset_license_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetLicenseSpecification"></a>

```python
def reset_license_specification() -> None
```

##### `reset_maintenance_options` <a name="reset_maintenance_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMaintenanceOptions"></a>

```python
def reset_maintenance_options() -> None
```

##### `reset_metadata_options` <a name="reset_metadata_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMetadataOptions"></a>

```python
def reset_metadata_options() -> None
```

##### `reset_monitoring` <a name="reset_monitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMonitoring"></a>

```python
def reset_monitoring() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_network_interfaces` <a name="reset_network_interfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNetworkInterfaces"></a>

```python
def reset_network_interfaces() -> None
```

##### `reset_placement` <a name="reset_placement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPlacement"></a>

```python
def reset_placement() -> None
```

##### `reset_private_dns_name_options` <a name="reset_private_dns_name_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPrivateDnsNameOptions"></a>

```python
def reset_private_dns_name_options() -> None
```

##### `reset_ram_disk_id` <a name="reset_ram_disk_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetRamDiskId"></a>

```python
def reset_ram_disk_id() -> None
```

##### `reset_security_group_names` <a name="reset_security_group_names" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetSecurityGroupNames"></a>

```python
def reset_security_group_names() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_tag_specifications` <a name="reset_tag_specifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagSpecifications"></a>

```python
def reset_tag_specifications() -> None
```

##### `reset_update_default_version` <a name="reset_update_default_version" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUpdateDefaultVersion"></a>

```python
def reset_update_default_version() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappings">block_device_mappings</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList">LaunchTemplateBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference">LaunchTemplateCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptions">cpu_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference">LaunchTemplateCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference">LaunchTemplateCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticGpuSpecifications">elastic_gpu_specifications</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList">LaunchTemplateElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticInferenceAccelerator">elastic_inference_accelerator</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference">LaunchTemplateElasticInferenceAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference">LaunchTemplateEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptions">hibernation_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference">LaunchTemplateHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfile">iam_instance_profile</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference">LaunchTemplateIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptions">instance_market_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference">LaunchTemplateInstanceMarketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirements">instance_requirements</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference">LaunchTemplateInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.latestVersion">latest_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecification">license_specification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList">LaunchTemplateLicenseSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference">LaunchTemplateMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference">LaunchTemplateMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference">LaunchTemplateMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList">LaunchTemplateNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference">LaunchTemplatePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference">LaunchTemplatePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecifications">tag_specifications</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList">LaunchTemplateTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappingsInput">block_device_mappings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecificationInput">capacity_reservation_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptionsInput">cpu_options_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecificationInput">credit_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersionInput">default_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStopInput">disable_api_stop_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTerminationInput">disable_api_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticGpuSpecificationsInput">elastic_gpu_specifications_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticInferenceAcceleratorInput">elastic_inference_accelerator_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptionsInput">enclave_options_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptionsInput">hibernation_options_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehaviorInput">instance_initiated_shutdown_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptionsInput">instance_market_options_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirementsInput">instance_requirements_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelIdInput">kernel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecificationInput">license_specification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptionsInput">maintenance_options_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptionsInput">metadata_options_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoringInput">monitoring_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfacesInput">network_interfaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placementInput">placement_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptionsInput">private_dns_name_options_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskIdInput">ram_disk_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNamesInput">security_group_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecificationsInput">tag_specifications_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersionInput">update_default_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersion">default_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStop">disable_api_stop</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTermination">disable_api_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimized">ebs_optimized</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelId">kernel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskId">ram_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNames">security_group_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersion">update_default_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `block_device_mappings`<sup>Required</sup> <a name="block_device_mappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappings"></a>

```python
block_device_mappings: LaunchTemplateBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList">LaunchTemplateBlockDeviceMappingsList</a>

---

##### `capacity_reservation_specification`<sup>Required</sup> <a name="capacity_reservation_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecification"></a>

```python
capacity_reservation_specification: LaunchTemplateCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference">LaunchTemplateCapacityReservationSpecificationOutputReference</a>

---

##### `cpu_options`<sup>Required</sup> <a name="cpu_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptions"></a>

```python
cpu_options: LaunchTemplateCpuOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference">LaunchTemplateCpuOptionsOutputReference</a>

---

##### `credit_specification`<sup>Required</sup> <a name="credit_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecification"></a>

```python
credit_specification: LaunchTemplateCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference">LaunchTemplateCreditSpecificationOutputReference</a>

---

##### `elastic_gpu_specifications`<sup>Required</sup> <a name="elastic_gpu_specifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticGpuSpecifications"></a>

```python
elastic_gpu_specifications: LaunchTemplateElasticGpuSpecificationsList
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList">LaunchTemplateElasticGpuSpecificationsList</a>

---

##### `elastic_inference_accelerator`<sup>Required</sup> <a name="elastic_inference_accelerator" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticInferenceAccelerator"></a>

```python
elastic_inference_accelerator: LaunchTemplateElasticInferenceAcceleratorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference">LaunchTemplateElasticInferenceAcceleratorOutputReference</a>

---

##### `enclave_options`<sup>Required</sup> <a name="enclave_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptions"></a>

```python
enclave_options: LaunchTemplateEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference">LaunchTemplateEnclaveOptionsOutputReference</a>

---

##### `hibernation_options`<sup>Required</sup> <a name="hibernation_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptions"></a>

```python
hibernation_options: LaunchTemplateHibernationOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference">LaunchTemplateHibernationOptionsOutputReference</a>

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfile"></a>

```python
iam_instance_profile: LaunchTemplateIamInstanceProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference">LaunchTemplateIamInstanceProfileOutputReference</a>

---

##### `instance_market_options`<sup>Required</sup> <a name="instance_market_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptions"></a>

```python
instance_market_options: LaunchTemplateInstanceMarketOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference">LaunchTemplateInstanceMarketOptionsOutputReference</a>

---

##### `instance_requirements`<sup>Required</sup> <a name="instance_requirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirements"></a>

```python
instance_requirements: LaunchTemplateInstanceRequirementsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference">LaunchTemplateInstanceRequirementsOutputReference</a>

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.latestVersion"></a>

```python
latest_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_specification`<sup>Required</sup> <a name="license_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecification"></a>

```python
license_specification: LaunchTemplateLicenseSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList">LaunchTemplateLicenseSpecificationList</a>

---

##### `maintenance_options`<sup>Required</sup> <a name="maintenance_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptions"></a>

```python
maintenance_options: LaunchTemplateMaintenanceOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference">LaunchTemplateMaintenanceOptionsOutputReference</a>

---

##### `metadata_options`<sup>Required</sup> <a name="metadata_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptions"></a>

```python
metadata_options: LaunchTemplateMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference">LaunchTemplateMetadataOptionsOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoring"></a>

```python
monitoring: LaunchTemplateMonitoringOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference">LaunchTemplateMonitoringOutputReference</a>

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfaces"></a>

```python
network_interfaces: LaunchTemplateNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList">LaunchTemplateNetworkInterfacesList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placement"></a>

```python
placement: LaunchTemplatePlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference">LaunchTemplatePlacementOutputReference</a>

---

##### `private_dns_name_options`<sup>Required</sup> <a name="private_dns_name_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: LaunchTemplatePrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference">LaunchTemplatePrivateDnsNameOptionsOutputReference</a>

---

##### `tag_specifications`<sup>Required</sup> <a name="tag_specifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecifications"></a>

```python
tag_specifications: LaunchTemplateTagSpecificationsList
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList">LaunchTemplateTagSpecificationsList</a>

---

##### `block_device_mappings_input`<sup>Optional</sup> <a name="block_device_mappings_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappingsInput"></a>

```python
block_device_mappings_input: typing.Union[IResolvable, typing.List[LaunchTemplateBlockDeviceMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>]]

---

##### `capacity_reservation_specification_input`<sup>Optional</sup> <a name="capacity_reservation_specification_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecificationInput"></a>

```python
capacity_reservation_specification_input: LaunchTemplateCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

---

##### `cpu_options_input`<sup>Optional</sup> <a name="cpu_options_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptionsInput"></a>

```python
cpu_options_input: LaunchTemplateCpuOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

---

##### `credit_specification_input`<sup>Optional</sup> <a name="credit_specification_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecificationInput"></a>

```python
credit_specification_input: LaunchTemplateCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

---

##### `default_version_input`<sup>Optional</sup> <a name="default_version_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersionInput"></a>

```python
default_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_api_stop_input`<sup>Optional</sup> <a name="disable_api_stop_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStopInput"></a>

```python
disable_api_stop_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_api_termination_input`<sup>Optional</sup> <a name="disable_api_termination_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTerminationInput"></a>

```python
disable_api_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: str
```

- *Type:* str

---

##### `elastic_gpu_specifications_input`<sup>Optional</sup> <a name="elastic_gpu_specifications_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticGpuSpecificationsInput"></a>

```python
elastic_gpu_specifications_input: typing.Union[IResolvable, typing.List[LaunchTemplateElasticGpuSpecifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>]]

---

##### `elastic_inference_accelerator_input`<sup>Optional</sup> <a name="elastic_inference_accelerator_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.elasticInferenceAcceleratorInput"></a>

```python
elastic_inference_accelerator_input: LaunchTemplateElasticInferenceAccelerator
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

---

##### `enclave_options_input`<sup>Optional</sup> <a name="enclave_options_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptionsInput"></a>

```python
enclave_options_input: LaunchTemplateEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

---

##### `hibernation_options_input`<sup>Optional</sup> <a name="hibernation_options_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptionsInput"></a>

```python
hibernation_options_input: LaunchTemplateHibernationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: LaunchTemplateIamInstanceProfile
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `instance_initiated_shutdown_behavior_input`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehaviorInput"></a>

```python
instance_initiated_shutdown_behavior_input: str
```

- *Type:* str

---

##### `instance_market_options_input`<sup>Optional</sup> <a name="instance_market_options_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptionsInput"></a>

```python
instance_market_options_input: LaunchTemplateInstanceMarketOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

---

##### `instance_requirements_input`<sup>Optional</sup> <a name="instance_requirements_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirementsInput"></a>

```python
instance_requirements_input: LaunchTemplateInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `kernel_id_input`<sup>Optional</sup> <a name="kernel_id_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelIdInput"></a>

```python
kernel_id_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `license_specification_input`<sup>Optional</sup> <a name="license_specification_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecificationInput"></a>

```python
license_specification_input: typing.Union[IResolvable, typing.List[LaunchTemplateLicenseSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>]]

---

##### `maintenance_options_input`<sup>Optional</sup> <a name="maintenance_options_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptionsInput"></a>

```python
maintenance_options_input: LaunchTemplateMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

---

##### `metadata_options_input`<sup>Optional</sup> <a name="metadata_options_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptionsInput"></a>

```python
metadata_options_input: LaunchTemplateMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

---

##### `monitoring_input`<sup>Optional</sup> <a name="monitoring_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoringInput"></a>

```python
monitoring_input: LaunchTemplateMonitoring
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `network_interfaces_input`<sup>Optional</sup> <a name="network_interfaces_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfacesInput"></a>

```python
network_interfaces_input: typing.Union[IResolvable, typing.List[LaunchTemplateNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>]]

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placementInput"></a>

```python
placement_input: LaunchTemplatePlacement
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

---

##### `private_dns_name_options_input`<sup>Optional</sup> <a name="private_dns_name_options_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptionsInput"></a>

```python
private_dns_name_options_input: LaunchTemplatePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

---

##### `ram_disk_id_input`<sup>Optional</sup> <a name="ram_disk_id_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskIdInput"></a>

```python
ram_disk_id_input: str
```

- *Type:* str

---

##### `security_group_names_input`<sup>Optional</sup> <a name="security_group_names_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNamesInput"></a>

```python
security_group_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tag_specifications_input`<sup>Optional</sup> <a name="tag_specifications_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecificationsInput"></a>

```python
tag_specifications_input: typing.Union[IResolvable, typing.List[LaunchTemplateTagSpecifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>]]

---

##### `update_default_version_input`<sup>Optional</sup> <a name="update_default_version_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersionInput"></a>

```python
update_default_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_version`<sup>Required</sup> <a name="default_version" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersion"></a>

```python
default_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_api_stop`<sup>Required</sup> <a name="disable_api_stop" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStop"></a>

```python
disable_api_stop: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_api_termination`<sup>Required</sup> <a name="disable_api_termination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTermination"></a>

```python
disable_api_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimized"></a>

```python
ebs_optimized: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_initiated_shutdown_behavior`<sup>Required</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehavior"></a>

```python
instance_initiated_shutdown_behavior: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `kernel_id`<sup>Required</sup> <a name="kernel_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelId"></a>

```python
kernel_id: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `ram_disk_id`<sup>Required</sup> <a name="ram_disk_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskId"></a>

```python
ram_disk_id: str
```

- *Type:* str

---

##### `security_group_names`<sup>Required</sup> <a name="security_group_names" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNames"></a>

```python
security_group_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `update_default_version`<sup>Required</sup> <a name="update_default_version" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersion"></a>

```python
update_default_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchTemplateBlockDeviceMappings <a name="LaunchTemplateBlockDeviceMappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateBlockDeviceMappings(
  device_name: str = None,
  ebs: LaunchTemplateBlockDeviceMappingsEbs = None,
  no_device: str = None,
  virtual_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#device_name LaunchTemplate#device_name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.noDevice">no_device</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#no_device LaunchTemplate#no_device}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#virtual_name LaunchTemplate#virtual_name}. |

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#device_name LaunchTemplate#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.ebs"></a>

```python
ebs: LaunchTemplateBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ebs LaunchTemplate#ebs}

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#no_device LaunchTemplate#no_device}.

---

##### `virtual_name`<sup>Optional</sup> <a name="virtual_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#virtual_name LaunchTemplate#virtual_name}.

---

### LaunchTemplateBlockDeviceMappingsEbs <a name="LaunchTemplateBlockDeviceMappingsEbs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateBlockDeviceMappingsEbs(
  delete_on_termination: str = None,
  encrypted: str = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.deleteOnTermination">delete_on_termination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#encrypted LaunchTemplate#encrypted}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#iops LaunchTemplate#iops}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#kms_key_id LaunchTemplate#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#snapshot_id LaunchTemplate#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#throughput LaunchTemplate#throughput}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#volume_size LaunchTemplate#volume_size}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#volume_type LaunchTemplate#volume_type}. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```python
delete_on_termination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.encrypted"></a>

```python
encrypted: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#encrypted LaunchTemplate#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#iops LaunchTemplate#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#kms_key_id LaunchTemplate#kms_key_id}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#snapshot_id LaunchTemplate#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#throughput LaunchTemplate#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#volume_size LaunchTemplate#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#volume_type LaunchTemplate#volume_type}.

---

### LaunchTemplateCapacityReservationSpecification <a name="LaunchTemplateCapacityReservationSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateCapacityReservationSpecification(
  capacity_reservation_preference: str = None,
  capacity_reservation_target: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationTarget">capacity_reservation_target</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `capacity_reservation_preference`<sup>Optional</sup> <a name="capacity_reservation_preference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}.

---

##### `capacity_reservation_target`<sup>Optional</sup> <a name="capacity_reservation_target" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationTarget"></a>

```python
capacity_reservation_target: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_target LaunchTemplate#capacity_reservation_target}

---

### LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget <a name="LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget(
  capacity_reservation_id: str = None,
  capacity_reservation_resource_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_id LaunchTemplate#capacity_reservation_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">capacity_reservation_resource_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_resource_group_arn LaunchTemplate#capacity_reservation_resource_group_arn}. |

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_id LaunchTemplate#capacity_reservation_id}.

---

##### `capacity_reservation_resource_group_arn`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```python
capacity_reservation_resource_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_resource_group_arn LaunchTemplate#capacity_reservation_resource_group_arn}.

---

### LaunchTemplateConfig <a name="LaunchTemplateConfig" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  block_device_mappings: typing.Union[IResolvable, typing.List[LaunchTemplateBlockDeviceMappings]] = None,
  capacity_reservation_specification: LaunchTemplateCapacityReservationSpecification = None,
  cpu_options: LaunchTemplateCpuOptions = None,
  credit_specification: LaunchTemplateCreditSpecification = None,
  default_version: typing.Union[int, float] = None,
  description: str = None,
  disable_api_stop: typing.Union[bool, IResolvable] = None,
  disable_api_termination: typing.Union[bool, IResolvable] = None,
  ebs_optimized: str = None,
  elastic_gpu_specifications: typing.Union[IResolvable, typing.List[LaunchTemplateElasticGpuSpecifications]] = None,
  elastic_inference_accelerator: LaunchTemplateElasticInferenceAccelerator = None,
  enclave_options: LaunchTemplateEnclaveOptions = None,
  hibernation_options: LaunchTemplateHibernationOptions = None,
  iam_instance_profile: LaunchTemplateIamInstanceProfile = None,
  id: str = None,
  image_id: str = None,
  instance_initiated_shutdown_behavior: str = None,
  instance_market_options: LaunchTemplateInstanceMarketOptions = None,
  instance_requirements: LaunchTemplateInstanceRequirements = None,
  instance_type: str = None,
  kernel_id: str = None,
  key_name: str = None,
  license_specification: typing.Union[IResolvable, typing.List[LaunchTemplateLicenseSpecification]] = None,
  maintenance_options: LaunchTemplateMaintenanceOptions = None,
  metadata_options: LaunchTemplateMetadataOptions = None,
  monitoring: LaunchTemplateMonitoring = None,
  name: str = None,
  name_prefix: str = None,
  network_interfaces: typing.Union[IResolvable, typing.List[LaunchTemplateNetworkInterfaces]] = None,
  placement: LaunchTemplatePlacement = None,
  private_dns_name_options: LaunchTemplatePrivateDnsNameOptions = None,
  ram_disk_id: str = None,
  security_group_names: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tag_specifications: typing.Union[IResolvable, typing.List[LaunchTemplateTagSpecifications]] = None,
  update_default_version: typing.Union[bool, IResolvable] = None,
  user_data: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.blockDeviceMappings">block_device_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>]]</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.cpuOptions">cpu_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | cpu_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.defaultVersion">default_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#default_version LaunchTemplate#default_version}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#description LaunchTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiStop">disable_api_stop</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_stop LaunchTemplate#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiTermination">disable_api_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ebsOptimized">ebs_optimized</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.elasticGpuSpecifications">elastic_gpu_specifications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>]]</code> | elastic_gpu_specifications block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.elasticInferenceAccelerator">elastic_inference_accelerator</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a></code> | elastic_inference_accelerator block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.hibernationOptions">hibernation_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | hibernation_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.iamInstanceProfile">iam_instance_profile</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | iam_instance_profile block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#id LaunchTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#image_id LaunchTemplate#image_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceMarketOptions">instance_market_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | instance_market_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceRequirements">instance_requirements</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a></code> | instance_requirements block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_type LaunchTemplate#instance_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.kernelId">kernel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#kernel_id LaunchTemplate#kernel_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#key_name LaunchTemplate#key_name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.licenseSpecification">license_specification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>]]</code> | license_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name LaunchTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name_prefix LaunchTemplate#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.networkInterfaces">network_interfaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>]]</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ramDiskId">ram_disk_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.securityGroupNames">security_group_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#security_group_names LaunchTemplate#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags LaunchTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags_all LaunchTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagSpecifications">tag_specifications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>]]</code> | tag_specifications block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.updateDefaultVersion">update_default_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#update_default_version LaunchTemplate#update_default_version}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#user_data LaunchTemplate#user_data}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.blockDeviceMappings"></a>

```python
block_device_mappings: typing.Union[IResolvable, typing.List[LaunchTemplateBlockDeviceMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>]]

block_device_mappings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#block_device_mappings LaunchTemplate#block_device_mappings}

---

##### `capacity_reservation_specification`<sup>Optional</sup> <a name="capacity_reservation_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.capacityReservationSpecification"></a>

```python
capacity_reservation_specification: LaunchTemplateCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_specification LaunchTemplate#capacity_reservation_specification}

---

##### `cpu_options`<sup>Optional</sup> <a name="cpu_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.cpuOptions"></a>

```python
cpu_options: LaunchTemplateCpuOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

cpu_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_options LaunchTemplate#cpu_options}

---

##### `credit_specification`<sup>Optional</sup> <a name="credit_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.creditSpecification"></a>

```python
credit_specification: LaunchTemplateCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#credit_specification LaunchTemplate#credit_specification}

---

##### `default_version`<sup>Optional</sup> <a name="default_version" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.defaultVersion"></a>

```python
default_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#default_version LaunchTemplate#default_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#description LaunchTemplate#description}.

---

##### `disable_api_stop`<sup>Optional</sup> <a name="disable_api_stop" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiStop"></a>

```python
disable_api_stop: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_stop LaunchTemplate#disable_api_stop}.

---

##### `disable_api_termination`<sup>Optional</sup> <a name="disable_api_termination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiTermination"></a>

```python
disable_api_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}.

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ebsOptimized"></a>

```python
ebs_optimized: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}.

---

##### `elastic_gpu_specifications`<sup>Optional</sup> <a name="elastic_gpu_specifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.elasticGpuSpecifications"></a>

```python
elastic_gpu_specifications: typing.Union[IResolvable, typing.List[LaunchTemplateElasticGpuSpecifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>]]

elastic_gpu_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#elastic_gpu_specifications LaunchTemplate#elastic_gpu_specifications}

---

##### `elastic_inference_accelerator`<sup>Optional</sup> <a name="elastic_inference_accelerator" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.elasticInferenceAccelerator"></a>

```python
elastic_inference_accelerator: LaunchTemplateElasticInferenceAccelerator
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

elastic_inference_accelerator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#elastic_inference_accelerator LaunchTemplate#elastic_inference_accelerator}

---

##### `enclave_options`<sup>Optional</sup> <a name="enclave_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.enclaveOptions"></a>

```python
enclave_options: LaunchTemplateEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enclave_options LaunchTemplate#enclave_options}

---

##### `hibernation_options`<sup>Optional</sup> <a name="hibernation_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.hibernationOptions"></a>

```python
hibernation_options: LaunchTemplateHibernationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

hibernation_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#hibernation_options LaunchTemplate#hibernation_options}

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.iamInstanceProfile"></a>

```python
iam_instance_profile: LaunchTemplateIamInstanceProfile
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

iam_instance_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#iam_instance_profile LaunchTemplate#iam_instance_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#id LaunchTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#image_id LaunchTemplate#image_id}.

---

##### `instance_initiated_shutdown_behavior`<sup>Optional</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceInitiatedShutdownBehavior"></a>

```python
instance_initiated_shutdown_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}.

---

##### `instance_market_options`<sup>Optional</sup> <a name="instance_market_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceMarketOptions"></a>

```python
instance_market_options: LaunchTemplateInstanceMarketOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

instance_market_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_market_options LaunchTemplate#instance_market_options}

---

##### `instance_requirements`<sup>Optional</sup> <a name="instance_requirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceRequirements"></a>

```python
instance_requirements: LaunchTemplateInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

instance_requirements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_requirements LaunchTemplate#instance_requirements}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_type LaunchTemplate#instance_type}.

---

##### `kernel_id`<sup>Optional</sup> <a name="kernel_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.kernelId"></a>

```python
kernel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#kernel_id LaunchTemplate#kernel_id}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#key_name LaunchTemplate#key_name}.

---

##### `license_specification`<sup>Optional</sup> <a name="license_specification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.licenseSpecification"></a>

```python
license_specification: typing.Union[IResolvable, typing.List[LaunchTemplateLicenseSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>]]

license_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#license_specification LaunchTemplate#license_specification}

---

##### `maintenance_options`<sup>Optional</sup> <a name="maintenance_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.maintenanceOptions"></a>

```python
maintenance_options: LaunchTemplateMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#maintenance_options LaunchTemplate#maintenance_options}

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.metadataOptions"></a>

```python
metadata_options: LaunchTemplateMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#metadata_options LaunchTemplate#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.monitoring"></a>

```python
monitoring: LaunchTemplateMonitoring
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#monitoring LaunchTemplate#monitoring}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name LaunchTemplate#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name_prefix LaunchTemplate#name_prefix}.

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.networkInterfaces"></a>

```python
network_interfaces: typing.Union[IResolvable, typing.List[LaunchTemplateNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_interfaces LaunchTemplate#network_interfaces}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.placement"></a>

```python
placement: LaunchTemplatePlacement
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

placement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#placement LaunchTemplate#placement}

---

##### `private_dns_name_options`<sup>Optional</sup> <a name="private_dns_name_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: LaunchTemplatePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#private_dns_name_options LaunchTemplate#private_dns_name_options}

---

##### `ram_disk_id`<sup>Optional</sup> <a name="ram_disk_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ramDiskId"></a>

```python
ram_disk_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}.

---

##### `security_group_names`<sup>Optional</sup> <a name="security_group_names" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.securityGroupNames"></a>

```python
security_group_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#security_group_names LaunchTemplate#security_group_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags LaunchTemplate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags_all LaunchTemplate#tags_all}.

---

##### `tag_specifications`<sup>Optional</sup> <a name="tag_specifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagSpecifications"></a>

```python
tag_specifications: typing.Union[IResolvable, typing.List[LaunchTemplateTagSpecifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>]]

tag_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tag_specifications LaunchTemplate#tag_specifications}

---

##### `update_default_version`<sup>Optional</sup> <a name="update_default_version" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.updateDefaultVersion"></a>

```python
update_default_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#update_default_version LaunchTemplate#update_default_version}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#user_data LaunchTemplate#user_data}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}.

---

### LaunchTemplateCpuOptions <a name="LaunchTemplateCpuOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateCpuOptions(
  core_count: typing.Union[int, float] = None,
  threads_per_core: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#core_count LaunchTemplate#core_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#threads_per_core LaunchTemplate#threads_per_core}. |

---

##### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#core_count LaunchTemplate#core_count}.

---

##### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#threads_per_core LaunchTemplate#threads_per_core}.

---

### LaunchTemplateCreditSpecification <a name="LaunchTemplateCreditSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateCreditSpecification(
  cpu_credits: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_credits LaunchTemplate#cpu_credits}. |

---

##### `cpu_credits`<sup>Optional</sup> <a name="cpu_credits" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_credits LaunchTemplate#cpu_credits}.

---

### LaunchTemplateElasticGpuSpecifications <a name="LaunchTemplateElasticGpuSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateElasticGpuSpecifications(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#type LaunchTemplate#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#type LaunchTemplate#type}.

---

### LaunchTemplateElasticInferenceAccelerator <a name="LaunchTemplateElasticInferenceAccelerator" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateElasticInferenceAccelerator(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#type LaunchTemplate#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#type LaunchTemplate#type}.

---

### LaunchTemplateEnclaveOptions <a name="LaunchTemplateEnclaveOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateEnclaveOptions(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enabled LaunchTemplate#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enabled LaunchTemplate#enabled}.

---

### LaunchTemplateHibernationOptions <a name="LaunchTemplateHibernationOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateHibernationOptions(
  configured: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions.property.configured">configured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#configured LaunchTemplate#configured}. |

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions.property.configured"></a>

```python
configured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#configured LaunchTemplate#configured}.

---

### LaunchTemplateIamInstanceProfile <a name="LaunchTemplateIamInstanceProfile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateIamInstanceProfile(
  arn: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#arn LaunchTemplate#arn}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name LaunchTemplate#name}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#arn LaunchTemplate#arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#name LaunchTemplate#name}.

---

### LaunchTemplateInstanceMarketOptions <a name="LaunchTemplateInstanceMarketOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceMarketOptions(
  market_type: str = None,
  spot_options: LaunchTemplateInstanceMarketOptionsSpotOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.marketType">market_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#market_type LaunchTemplate#market_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.spotOptions">spot_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | spot_options block. |

---

##### `market_type`<sup>Optional</sup> <a name="market_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.marketType"></a>

```python
market_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#market_type LaunchTemplate#market_type}.

---

##### `spot_options`<sup>Optional</sup> <a name="spot_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.spotOptions"></a>

```python
spot_options: LaunchTemplateInstanceMarketOptionsSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

spot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_options LaunchTemplate#spot_options}

---

### LaunchTemplateInstanceMarketOptionsSpotOptions <a name="LaunchTemplateInstanceMarketOptionsSpotOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions(
  block_duration_minutes: typing.Union[int, float] = None,
  instance_interruption_behavior: str = None,
  max_price: str = None,
  spot_instance_type: str = None,
  valid_until: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#block_duration_minutes LaunchTemplate#block_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.instanceInterruptionBehavior">instance_interruption_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.maxPrice">max_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max_price LaunchTemplate#max_price}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.spotInstanceType">spot_instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_instance_type LaunchTemplate#spot_instance_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.validUntil">valid_until</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#valid_until LaunchTemplate#valid_until}. |

---

##### `block_duration_minutes`<sup>Optional</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.blockDurationMinutes"></a>

```python
block_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#block_duration_minutes LaunchTemplate#block_duration_minutes}.

---

##### `instance_interruption_behavior`<sup>Optional</sup> <a name="instance_interruption_behavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.instanceInterruptionBehavior"></a>

```python
instance_interruption_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}.

---

##### `max_price`<sup>Optional</sup> <a name="max_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.maxPrice"></a>

```python
max_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max_price LaunchTemplate#max_price}.

---

##### `spot_instance_type`<sup>Optional</sup> <a name="spot_instance_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.spotInstanceType"></a>

```python
spot_instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_instance_type LaunchTemplate#spot_instance_type}.

---

##### `valid_until`<sup>Optional</sup> <a name="valid_until" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.validUntil"></a>

```python
valid_until: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#valid_until LaunchTemplate#valid_until}.

---

### LaunchTemplateInstanceRequirements <a name="LaunchTemplateInstanceRequirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirements(
  memory_mib: LaunchTemplateInstanceRequirementsMemoryMib,
  vcpu_count: LaunchTemplateInstanceRequirementsVcpuCount,
  accelerator_count: LaunchTemplateInstanceRequirementsAcceleratorCount = None,
  accelerator_manufacturers: typing.List[str] = None,
  accelerator_names: typing.List[str] = None,
  accelerator_total_memory_mib: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib = None,
  accelerator_types: typing.List[str] = None,
  bare_metal: str = None,
  baseline_ebs_bandwidth_mbps: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps = None,
  burstable_performance: str = None,
  cpu_manufacturers: typing.List[str] = None,
  excluded_instance_types: typing.List[str] = None,
  instance_generations: typing.List[str] = None,
  local_storage: str = None,
  local_storage_types: typing.List[str] = None,
  memory_gib_per_vcpu: LaunchTemplateInstanceRequirementsMemoryGibPerVcpu = None,
  network_interface_count: LaunchTemplateInstanceRequirementsNetworkInterfaceCount = None,
  on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  require_hibernate_support: typing.Union[bool, IResolvable] = None,
  spot_max_price_percentage_over_lowest_price: typing.Union[int, float] = None,
  total_local_storage_gb: LaunchTemplateInstanceRequirementsTotalLocalStorageGb = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryMib">memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a></code> | memory_mib block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.vcpuCount">vcpu_count</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a></code> | vcpu_count block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorCount">accelerator_count</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | accelerator_count block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorManufacturers">accelerator_manufacturers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_manufacturers LaunchTemplate#accelerator_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorNames">accelerator_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_names LaunchTemplate#accelerator_names}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTotalMemoryMib">accelerator_total_memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | accelerator_total_memory_mib block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_types LaunchTemplate#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.bareMetal">bare_metal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#bare_metal LaunchTemplate#bare_metal}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.baselineEbsBandwidthMbps">baseline_ebs_bandwidth_mbps</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | baseline_ebs_bandwidth_mbps block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.burstablePerformance">burstable_performance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#burstable_performance LaunchTemplate#burstable_performance}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.cpuManufacturers">cpu_manufacturers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_manufacturers LaunchTemplate#cpu_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#excluded_instance_types LaunchTemplate#excluded_instance_types}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.instanceGenerations">instance_generations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_generations LaunchTemplate#instance_generations}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorage">local_storage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#local_storage LaunchTemplate#local_storage}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorageTypes">local_storage_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#local_storage_types LaunchTemplate#local_storage_types}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryGibPerVcpu">memory_gib_per_vcpu</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | memory_gib_per_vcpu block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.networkInterfaceCount">network_interface_count</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | network_interface_count block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice">on_demand_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#on_demand_max_price_percentage_over_lowest_price LaunchTemplate#on_demand_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.requireHibernateSupport">require_hibernate_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#require_hibernate_support LaunchTemplate#require_hibernate_support}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice">spot_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_max_price_percentage_over_lowest_price LaunchTemplate#spot_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.totalLocalStorageGb">total_local_storage_gb</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | total_local_storage_gb block. |

---

##### `memory_mib`<sup>Required</sup> <a name="memory_mib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryMib"></a>

```python
memory_mib: LaunchTemplateInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#memory_mib LaunchTemplate#memory_mib}

---

##### `vcpu_count`<sup>Required</sup> <a name="vcpu_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.vcpuCount"></a>

```python
vcpu_count: LaunchTemplateInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#vcpu_count LaunchTemplate#vcpu_count}

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorCount"></a>

```python
accelerator_count: LaunchTemplateInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_count LaunchTemplate#accelerator_count}

---

##### `accelerator_manufacturers`<sup>Optional</sup> <a name="accelerator_manufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorManufacturers"></a>

```python
accelerator_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_manufacturers LaunchTemplate#accelerator_manufacturers}.

---

##### `accelerator_names`<sup>Optional</sup> <a name="accelerator_names" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorNames"></a>

```python
accelerator_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_names LaunchTemplate#accelerator_names}.

---

##### `accelerator_total_memory_mib`<sup>Optional</sup> <a name="accelerator_total_memory_mib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTotalMemoryMib"></a>

```python
accelerator_total_memory_mib: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_total_memory_mib LaunchTemplate#accelerator_total_memory_mib}

---

##### `accelerator_types`<sup>Optional</sup> <a name="accelerator_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#accelerator_types LaunchTemplate#accelerator_types}.

---

##### `bare_metal`<sup>Optional</sup> <a name="bare_metal" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.bareMetal"></a>

```python
bare_metal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#bare_metal LaunchTemplate#bare_metal}.

---

##### `baseline_ebs_bandwidth_mbps`<sup>Optional</sup> <a name="baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.baselineEbsBandwidthMbps"></a>

```python
baseline_ebs_bandwidth_mbps: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#baseline_ebs_bandwidth_mbps LaunchTemplate#baseline_ebs_bandwidth_mbps}

---

##### `burstable_performance`<sup>Optional</sup> <a name="burstable_performance" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.burstablePerformance"></a>

```python
burstable_performance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#burstable_performance LaunchTemplate#burstable_performance}.

---

##### `cpu_manufacturers`<sup>Optional</sup> <a name="cpu_manufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.cpuManufacturers"></a>

```python
cpu_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#cpu_manufacturers LaunchTemplate#cpu_manufacturers}.

---

##### `excluded_instance_types`<sup>Optional</sup> <a name="excluded_instance_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#excluded_instance_types LaunchTemplate#excluded_instance_types}.

---

##### `instance_generations`<sup>Optional</sup> <a name="instance_generations" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.instanceGenerations"></a>

```python
instance_generations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_generations LaunchTemplate#instance_generations}.

---

##### `local_storage`<sup>Optional</sup> <a name="local_storage" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorage"></a>

```python
local_storage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#local_storage LaunchTemplate#local_storage}.

---

##### `local_storage_types`<sup>Optional</sup> <a name="local_storage_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorageTypes"></a>

```python
local_storage_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#local_storage_types LaunchTemplate#local_storage_types}.

---

##### `memory_gib_per_vcpu`<sup>Optional</sup> <a name="memory_gib_per_vcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryGibPerVcpu"></a>

```python
memory_gib_per_vcpu: LaunchTemplateInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#memory_gib_per_vcpu LaunchTemplate#memory_gib_per_vcpu}

---

##### `network_interface_count`<sup>Optional</sup> <a name="network_interface_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.networkInterfaceCount"></a>

```python
network_interface_count: LaunchTemplateInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_interface_count LaunchTemplate#network_interface_count}

---

##### `on_demand_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```python
on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#on_demand_max_price_percentage_over_lowest_price LaunchTemplate#on_demand_max_price_percentage_over_lowest_price}.

---

##### `require_hibernate_support`<sup>Optional</sup> <a name="require_hibernate_support" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.requireHibernateSupport"></a>

```python
require_hibernate_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#require_hibernate_support LaunchTemplate#require_hibernate_support}.

---

##### `spot_max_price_percentage_over_lowest_price`<sup>Optional</sup> <a name="spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice"></a>

```python
spot_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_max_price_percentage_over_lowest_price LaunchTemplate#spot_max_price_percentage_over_lowest_price}.

---

##### `total_local_storage_gb`<sup>Optional</sup> <a name="total_local_storage_gb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.totalLocalStorageGb"></a>

```python
total_local_storage_gb: LaunchTemplateInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#total_local_storage_gb LaunchTemplate#total_local_storage_gb}

---

### LaunchTemplateInstanceRequirementsAcceleratorCount <a name="LaunchTemplateInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib <a name="LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps <a name="LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsMemoryGibPerVcpu <a name="LaunchTemplateInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsMemoryMib <a name="LaunchTemplateInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib(
  min: typing.Union[int, float],
  max: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

### LaunchTemplateInstanceRequirementsNetworkInterfaceCount <a name="LaunchTemplateInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsTotalLocalStorageGb <a name="LaunchTemplateInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsVcpuCount <a name="LaunchTemplateInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount(
  min: typing.Union[int, float],
  max: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}. |

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

### LaunchTemplateLicenseSpecification <a name="LaunchTemplateLicenseSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateLicenseSpecification(
  license_configuration_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification.property.licenseConfigurationArn">license_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#license_configuration_arn LaunchTemplate#license_configuration_arn}. |

---

##### `license_configuration_arn`<sup>Required</sup> <a name="license_configuration_arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification.property.licenseConfigurationArn"></a>

```python
license_configuration_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#license_configuration_arn LaunchTemplate#license_configuration_arn}.

---

### LaunchTemplateMaintenanceOptions <a name="LaunchTemplateMaintenanceOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateMaintenanceOptions(
  auto_recovery: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions.property.autoRecovery">auto_recovery</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#auto_recovery LaunchTemplate#auto_recovery}. |

---

##### `auto_recovery`<sup>Optional</sup> <a name="auto_recovery" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions.property.autoRecovery"></a>

```python
auto_recovery: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#auto_recovery LaunchTemplate#auto_recovery}.

---

### LaunchTemplateMetadataOptions <a name="LaunchTemplateMetadataOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateMetadataOptions(
  http_endpoint: str = None,
  http_protocol_ipv6: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None,
  instance_metadata_tags: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_endpoint LaunchTemplate#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpProtocolIpv6">http_protocol_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpTokens">http_tokens</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_tokens LaunchTemplate#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_metadata_tags LaunchTemplate#instance_metadata_tags}. |

---

##### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_endpoint LaunchTemplate#http_endpoint}.

---

##### `http_protocol_ipv6`<sup>Optional</sup> <a name="http_protocol_ipv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpProtocolIpv6"></a>

```python
http_protocol_ipv6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}.

---

##### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}.

---

##### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#http_tokens LaunchTemplate#http_tokens}.

---

##### `instance_metadata_tags`<sup>Optional</sup> <a name="instance_metadata_tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_metadata_tags LaunchTemplate#instance_metadata_tags}.

---

### LaunchTemplateMonitoring <a name="LaunchTemplateMonitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateMonitoring(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enabled LaunchTemplate#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enabled LaunchTemplate#enabled}.

---

### LaunchTemplateNetworkInterfaces <a name="LaunchTemplateNetworkInterfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateNetworkInterfaces(
  associate_carrier_ip_address: str = None,
  associate_public_ip_address: str = None,
  delete_on_termination: str = None,
  description: str = None,
  device_index: typing.Union[int, float] = None,
  interface_type: str = None,
  ipv4_address_count: typing.Union[int, float] = None,
  ipv4_addresses: typing.List[str] = None,
  ipv4_prefix_count: typing.Union[int, float] = None,
  ipv4_prefixes: typing.List[str] = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: typing.List[str] = None,
  ipv6_prefix_count: typing.Union[int, float] = None,
  ipv6_prefixes: typing.List[str] = None,
  network_card_index: typing.Union[int, float] = None,
  network_interface_id: str = None,
  private_ip_address: str = None,
  security_groups: typing.List[str] = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associateCarrierIpAddress">associate_carrier_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#associate_public_ip_address LaunchTemplate#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deleteOnTermination">delete_on_termination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#description LaunchTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#device_index LaunchTemplate#device_index}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.interfaceType">interface_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#interface_type LaunchTemplate#interface_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4AddressCount">ipv4_address_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_address_count LaunchTemplate#ipv4_address_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_addresses LaunchTemplate#ipv4_addresses}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4PrefixCount">ipv4_prefix_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_prefix_count LaunchTemplate#ipv4_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Prefixes">ipv4_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_prefixes LaunchTemplate#ipv4_prefixes}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_address_count LaunchTemplate#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_addresses LaunchTemplate#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6PrefixCount">ipv6_prefix_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_prefix_count LaunchTemplate#ipv6_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Prefixes">ipv6_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_prefixes LaunchTemplate#ipv6_prefixes}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkCardIndex">network_card_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_card_index LaunchTemplate#network_card_index}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_interface_id LaunchTemplate#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#private_ip_address LaunchTemplate#private_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#security_groups LaunchTemplate#security_groups}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#subnet_id LaunchTemplate#subnet_id}. |

---

##### `associate_carrier_ip_address`<sup>Optional</sup> <a name="associate_carrier_ip_address" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associateCarrierIpAddress"></a>

```python
associate_carrier_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#associate_public_ip_address LaunchTemplate#associate_public_ip_address}.

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deleteOnTermination"></a>

```python
delete_on_termination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#description LaunchTemplate#description}.

---

##### `device_index`<sup>Optional</sup> <a name="device_index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#device_index LaunchTemplate#device_index}.

---

##### `interface_type`<sup>Optional</sup> <a name="interface_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.interfaceType"></a>

```python
interface_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#interface_type LaunchTemplate#interface_type}.

---

##### `ipv4_address_count`<sup>Optional</sup> <a name="ipv4_address_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4AddressCount"></a>

```python
ipv4_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_address_count LaunchTemplate#ipv4_address_count}.

---

##### `ipv4_addresses`<sup>Optional</sup> <a name="ipv4_addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_addresses LaunchTemplate#ipv4_addresses}.

---

##### `ipv4_prefix_count`<sup>Optional</sup> <a name="ipv4_prefix_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4PrefixCount"></a>

```python
ipv4_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_prefix_count LaunchTemplate#ipv4_prefix_count}.

---

##### `ipv4_prefixes`<sup>Optional</sup> <a name="ipv4_prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Prefixes"></a>

```python
ipv4_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv4_prefixes LaunchTemplate#ipv4_prefixes}.

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_address_count LaunchTemplate#ipv6_address_count}.

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Addresses"></a>

```python
ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_addresses LaunchTemplate#ipv6_addresses}.

---

##### `ipv6_prefix_count`<sup>Optional</sup> <a name="ipv6_prefix_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6PrefixCount"></a>

```python
ipv6_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_prefix_count LaunchTemplate#ipv6_prefix_count}.

---

##### `ipv6_prefixes`<sup>Optional</sup> <a name="ipv6_prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Prefixes"></a>

```python
ipv6_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#ipv6_prefixes LaunchTemplate#ipv6_prefixes}.

---

##### `network_card_index`<sup>Optional</sup> <a name="network_card_index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkCardIndex"></a>

```python
network_card_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_card_index LaunchTemplate#network_card_index}.

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#network_interface_id LaunchTemplate#network_interface_id}.

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#private_ip_address LaunchTemplate#private_ip_address}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#security_groups LaunchTemplate#security_groups}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#subnet_id LaunchTemplate#subnet_id}.

---

### LaunchTemplatePlacement <a name="LaunchTemplatePlacement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplatePlacement(
  affinity: str = None,
  availability_zone: str = None,
  group_name: str = None,
  host_id: str = None,
  host_resource_group_arn: str = None,
  partition_number: typing.Union[int, float] = None,
  spread_domain: str = None,
  tenancy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.affinity">affinity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#affinity LaunchTemplate#affinity}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#availability_zone LaunchTemplate#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#group_name LaunchTemplate#group_name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostId">host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#host_id LaunchTemplate#host_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#host_resource_group_arn LaunchTemplate#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.partitionNumber">partition_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#partition_number LaunchTemplate#partition_number}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.spreadDomain">spread_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spread_domain LaunchTemplate#spread_domain}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tenancy LaunchTemplate#tenancy}. |

---

##### `affinity`<sup>Optional</sup> <a name="affinity" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.affinity"></a>

```python
affinity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#affinity LaunchTemplate#affinity}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#availability_zone LaunchTemplate#availability_zone}.

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#group_name LaunchTemplate#group_name}.

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#host_id LaunchTemplate#host_id}.

---

##### `host_resource_group_arn`<sup>Optional</sup> <a name="host_resource_group_arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#host_resource_group_arn LaunchTemplate#host_resource_group_arn}.

---

##### `partition_number`<sup>Optional</sup> <a name="partition_number" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.partitionNumber"></a>

```python
partition_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#partition_number LaunchTemplate#partition_number}.

---

##### `spread_domain`<sup>Optional</sup> <a name="spread_domain" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.spreadDomain"></a>

```python
spread_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spread_domain LaunchTemplate#spread_domain}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tenancy LaunchTemplate#tenancy}.

---

### LaunchTemplatePrivateDnsNameOptions <a name="LaunchTemplatePrivateDnsNameOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplatePrivateDnsNameOptions(
  enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable] = None,
  enable_resource_name_dns_a_record: typing.Union[bool, IResolvable] = None,
  hostname_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enable_resource_name_dns_aaaa_record LaunchTemplate#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enable_resource_name_dns_a_record LaunchTemplate#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.hostnameType">hostname_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#hostname_type LaunchTemplate#hostname_type}. |

---

##### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enable_resource_name_dns_aaaa_record LaunchTemplate#enable_resource_name_dns_aaaa_record}.

---

##### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#enable_resource_name_dns_a_record LaunchTemplate#enable_resource_name_dns_a_record}.

---

##### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#hostname_type LaunchTemplate#hostname_type}.

---

### LaunchTemplateTagSpecifications <a name="LaunchTemplateTagSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateTagSpecifications(
  resource_type: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#resource_type LaunchTemplate#resource_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags LaunchTemplate#tags}. |

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#resource_type LaunchTemplate#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#tags LaunchTemplate#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LaunchTemplateBlockDeviceMappingsEbsOutputReference <a name="LaunchTemplateBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```python
encrypted_input: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```python
encrypted: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

---


### LaunchTemplateBlockDeviceMappingsList <a name="LaunchTemplateBlockDeviceMappingsList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateBlockDeviceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LaunchTemplateBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LaunchTemplateBlockDeviceMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>]]

---


### LaunchTemplateBlockDeviceMappingsOutputReference <a name="LaunchTemplateBlockDeviceMappingsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs">put_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetEbs">reset_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetVirtualName">reset_virtual_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs` <a name="put_ebs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs"></a>

```python
def put_ebs(
  delete_on_termination: str = None,
  encrypted: str = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs.parameter.deleteOnTermination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}.

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs.parameter.encrypted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#encrypted LaunchTemplate#encrypted}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#iops LaunchTemplate#iops}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#kms_key_id LaunchTemplate#kms_key_id}.

---

###### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#snapshot_id LaunchTemplate#snapshot_id}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#throughput LaunchTemplate#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#volume_size LaunchTemplate#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#volume_type LaunchTemplate#volume_type}.

---

##### `reset_device_name` <a name="reset_device_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_ebs` <a name="reset_ebs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetEbs"></a>

```python
def reset_ebs() -> None
```

##### `reset_no_device` <a name="reset_no_device" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_virtual_name` <a name="reset_virtual_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```python
def reset_virtual_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference">LaunchTemplateBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebsInput">ebs_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice">no_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebs"></a>

```python
ebs: LaunchTemplateBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference">LaunchTemplateBlockDeviceMappingsEbsOutputReference</a>

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `ebs_input`<sup>Optional</sup> <a name="ebs_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```python
ebs_input: LaunchTemplateBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```python
no_device_input: str
```

- *Type:* str

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LaunchTemplateBlockDeviceMappings, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>, cdktf.IResolvable]

---


### LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">reset_capacity_reservation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">reset_capacity_reservation_resource_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capacity_reservation_id` <a name="reset_capacity_reservation_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```python
def reset_capacity_reservation_id() -> None
```

##### `reset_capacity_reservation_resource_group_arn` <a name="reset_capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```python
def reset_capacity_reservation_resource_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">capacity_reservation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">capacity_reservation_resource_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacity_reservation_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_id_input`<sup>Optional</sup> <a name="capacity_reservation_id_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```python
capacity_reservation_id_input: str
```

- *Type:* str

---

##### `capacity_reservation_resource_group_arn_input`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```python
capacity_reservation_resource_group_arn_input: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `capacity_reservation_resource_group_arn`<sup>Required</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```python
capacity_reservation_resource_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---


### LaunchTemplateCapacityReservationSpecificationOutputReference <a name="LaunchTemplateCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">put_capacity_reservation_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">reset_capacity_reservation_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">reset_capacity_reservation_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_reservation_target` <a name="put_capacity_reservation_target" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```python
def put_capacity_reservation_target(
  capacity_reservation_id: str = None,
  capacity_reservation_resource_group_arn: str = None
) -> None
```

###### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.capacityReservationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_id LaunchTemplate#capacity_reservation_id}.

---

###### `capacity_reservation_resource_group_arn`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.capacityReservationResourceGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#capacity_reservation_resource_group_arn LaunchTemplate#capacity_reservation_resource_group_arn}.

---

##### `reset_capacity_reservation_preference` <a name="reset_capacity_reservation_preference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```python
def reset_capacity_reservation_preference() -> None
```

##### `reset_capacity_reservation_target` <a name="reset_capacity_reservation_target" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```python
def reset_capacity_reservation_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacity_reservation_target</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference">LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">capacity_reservation_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">capacity_reservation_target_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_target`<sup>Required</sup> <a name="capacity_reservation_target" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```python
capacity_reservation_target: LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference">LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `capacity_reservation_preference_input`<sup>Optional</sup> <a name="capacity_reservation_preference_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```python
capacity_reservation_preference_input: str
```

- *Type:* str

---

##### `capacity_reservation_target_input`<sup>Optional</sup> <a name="capacity_reservation_target_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```python
capacity_reservation_target_input: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `capacity_reservation_preference`<sup>Required</sup> <a name="capacity_reservation_preference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

---


### LaunchTemplateCpuOptionsOutputReference <a name="LaunchTemplateCpuOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateCpuOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetCoreCount">reset_core_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetThreadsPerCore">reset_threads_per_core</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_core_count` <a name="reset_core_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetCoreCount"></a>

```python
def reset_core_count() -> None
```

##### `reset_threads_per_core` <a name="reset_threads_per_core" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetThreadsPerCore"></a>

```python
def reset_threads_per_core() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCountInput">core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCoreInput">threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_count_input`<sup>Optional</sup> <a name="core_count_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCountInput"></a>

```python
core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threads_per_core_input`<sup>Optional</sup> <a name="threads_per_core_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCoreInput"></a>

```python
threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateCpuOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

---


### LaunchTemplateCreditSpecificationOutputReference <a name="LaunchTemplateCreditSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateCreditSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resetCpuCredits">reset_cpu_credits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_credits` <a name="reset_cpu_credits" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resetCpuCredits"></a>

```python
def reset_cpu_credits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCreditsInput">cpu_credits_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_credits_input`<sup>Optional</sup> <a name="cpu_credits_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```python
cpu_credits_input: str
```

- *Type:* str

---

##### `cpu_credits`<sup>Required</sup> <a name="cpu_credits" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

---


### LaunchTemplateElasticGpuSpecificationsList <a name="LaunchTemplateElasticGpuSpecificationsList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateElasticGpuSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LaunchTemplateElasticGpuSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LaunchTemplateElasticGpuSpecifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>]]

---


### LaunchTemplateElasticGpuSpecificationsOutputReference <a name="LaunchTemplateElasticGpuSpecificationsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LaunchTemplateElasticGpuSpecifications, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>, cdktf.IResolvable]

---


### LaunchTemplateElasticInferenceAcceleratorOutputReference <a name="LaunchTemplateElasticInferenceAcceleratorOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateElasticInferenceAccelerator
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

---


### LaunchTemplateEnclaveOptionsOutputReference <a name="LaunchTemplateEnclaveOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateEnclaveOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

---


### LaunchTemplateHibernationOptionsOutputReference <a name="LaunchTemplateHibernationOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateHibernationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configuredInput">configured_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configured_input`<sup>Optional</sup> <a name="configured_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configuredInput"></a>

```python
configured_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configured"></a>

```python
configured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateHibernationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

---


### LaunchTemplateIamInstanceProfileOutputReference <a name="LaunchTemplateIamInstanceProfileOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateIamInstanceProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateIamInstanceProfile
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

---


### LaunchTemplateInstanceMarketOptionsOutputReference <a name="LaunchTemplateInstanceMarketOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions">put_spot_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetMarketType">reset_market_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetSpotOptions">reset_spot_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_spot_options` <a name="put_spot_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions"></a>

```python
def put_spot_options(
  block_duration_minutes: typing.Union[int, float] = None,
  instance_interruption_behavior: str = None,
  max_price: str = None,
  spot_instance_type: str = None,
  valid_until: str = None
) -> None
```

###### `block_duration_minutes`<sup>Optional</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions.parameter.blockDurationMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#block_duration_minutes LaunchTemplate#block_duration_minutes}.

---

###### `instance_interruption_behavior`<sup>Optional</sup> <a name="instance_interruption_behavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions.parameter.instanceInterruptionBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}.

---

###### `max_price`<sup>Optional</sup> <a name="max_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions.parameter.maxPrice"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max_price LaunchTemplate#max_price}.

---

###### `spot_instance_type`<sup>Optional</sup> <a name="spot_instance_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions.parameter.spotInstanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#spot_instance_type LaunchTemplate#spot_instance_type}.

---

###### `valid_until`<sup>Optional</sup> <a name="valid_until" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions.parameter.validUntil"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#valid_until LaunchTemplate#valid_until}.

---

##### `reset_market_type` <a name="reset_market_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetMarketType"></a>

```python
def reset_market_type() -> None
```

##### `reset_spot_options` <a name="reset_spot_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetSpotOptions"></a>

```python
def reset_spot_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions">spot_options</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference">LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketTypeInput">market_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptionsInput">spot_options_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketType">market_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spot_options`<sup>Required</sup> <a name="spot_options" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions"></a>

```python
spot_options: LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference">LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference</a>

---

##### `market_type_input`<sup>Optional</sup> <a name="market_type_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketTypeInput"></a>

```python
market_type_input: str
```

- *Type:* str

---

##### `spot_options_input`<sup>Optional</sup> <a name="spot_options_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptionsInput"></a>

```python
spot_options_input: LaunchTemplateInstanceMarketOptionsSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

---

##### `market_type`<sup>Required</sup> <a name="market_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketType"></a>

```python
market_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateInstanceMarketOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

---


### LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference <a name="LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetBlockDurationMinutes">reset_block_duration_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetInstanceInterruptionBehavior">reset_instance_interruption_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetMaxPrice">reset_max_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetSpotInstanceType">reset_spot_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetValidUntil">reset_valid_until</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_block_duration_minutes` <a name="reset_block_duration_minutes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetBlockDurationMinutes"></a>

```python
def reset_block_duration_minutes() -> None
```

##### `reset_instance_interruption_behavior` <a name="reset_instance_interruption_behavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetInstanceInterruptionBehavior"></a>

```python
def reset_instance_interruption_behavior() -> None
```

##### `reset_max_price` <a name="reset_max_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetMaxPrice"></a>

```python
def reset_max_price() -> None
```

##### `reset_spot_instance_type` <a name="reset_spot_instance_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetSpotInstanceType"></a>

```python
def reset_spot_instance_type() -> None
```

##### `reset_valid_until` <a name="reset_valid_until" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetValidUntil"></a>

```python
def reset_valid_until() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutesInput">block_duration_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput">instance_interruption_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPriceInput">max_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceTypeInput">spot_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntilInput">valid_until_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior">instance_interruption_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice">max_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType">spot_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil">valid_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_duration_minutes_input`<sup>Optional</sup> <a name="block_duration_minutes_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutesInput"></a>

```python
block_duration_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_interruption_behavior_input`<sup>Optional</sup> <a name="instance_interruption_behavior_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput"></a>

```python
instance_interruption_behavior_input: str
```

- *Type:* str

---

##### `max_price_input`<sup>Optional</sup> <a name="max_price_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPriceInput"></a>

```python
max_price_input: str
```

- *Type:* str

---

##### `spot_instance_type_input`<sup>Optional</sup> <a name="spot_instance_type_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceTypeInput"></a>

```python
spot_instance_type_input: str
```

- *Type:* str

---

##### `valid_until_input`<sup>Optional</sup> <a name="valid_until_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntilInput"></a>

```python
valid_until_input: str
```

- *Type:* str

---

##### `block_duration_minutes`<sup>Required</sup> <a name="block_duration_minutes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes"></a>

```python
block_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_interruption_behavior`<sup>Required</sup> <a name="instance_interruption_behavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```python
instance_interruption_behavior: str
```

- *Type:* str

---

##### `max_price`<sup>Required</sup> <a name="max_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice"></a>

```python
max_price: str
```

- *Type:* str

---

##### `spot_instance_type`<sup>Required</sup> <a name="spot_instance_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType"></a>

```python
spot_instance_type: str
```

- *Type:* str

---

##### `valid_until`<sup>Required</sup> <a name="valid_until" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil"></a>

```python
valid_until: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateInstanceMarketOptionsSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

---


### LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference <a name="LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

---


### LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

---


### LaunchTemplateInstanceRequirementsMemoryMibOutputReference <a name="LaunchTemplateInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resetMax">reset_max</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resetMax"></a>

```python
def reset_max() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

---


### LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference <a name="LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

---


### LaunchTemplateInstanceRequirementsOutputReference <a name="LaunchTemplateInstanceRequirementsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorCount">put_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib">put_accelerator_total_memory_mib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps">put_baseline_ebs_bandwidth_mbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryGibPerVcpu">put_memory_gib_per_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryMib">put_memory_mib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkInterfaceCount">put_network_interface_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putTotalLocalStorageGb">put_total_local_storage_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putVcpuCount">put_vcpu_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorManufacturers">reset_accelerator_manufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorNames">reset_accelerator_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib">reset_accelerator_total_memory_mib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTypes">reset_accelerator_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBareMetal">reset_bare_metal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps">reset_baseline_ebs_bandwidth_mbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBurstablePerformance">reset_burstable_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetCpuManufacturers">reset_cpu_manufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetExcludedInstanceTypes">reset_excluded_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetInstanceGenerations">reset_instance_generations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorage">reset_local_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorageTypes">reset_local_storage_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetMemoryGibPerVcpu">reset_memory_gib_per_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetNetworkInterfaceCount">reset_network_interface_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice">reset_on_demand_max_price_percentage_over_lowest_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetRequireHibernateSupport">reset_require_hibernate_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice">reset_spot_max_price_percentage_over_lowest_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetTotalLocalStorageGb">reset_total_local_storage_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerator_count` <a name="put_accelerator_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorCount"></a>

```python
def put_accelerator_count(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

##### `put_accelerator_total_memory_mib` <a name="put_accelerator_total_memory_mib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib"></a>

```python
def put_accelerator_total_memory_mib(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

##### `put_baseline_ebs_bandwidth_mbps` <a name="put_baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps"></a>

```python
def put_baseline_ebs_bandwidth_mbps(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

##### `put_memory_gib_per_vcpu` <a name="put_memory_gib_per_vcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryGibPerVcpu"></a>

```python
def put_memory_gib_per_vcpu(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

##### `put_memory_mib` <a name="put_memory_mib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryMib"></a>

```python
def put_memory_mib(
  min: typing.Union[int, float],
  max: typing.Union[int, float] = None
) -> None
```

###### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryMib.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryMib.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `put_network_interface_count` <a name="put_network_interface_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkInterfaceCount"></a>

```python
def put_network_interface_count(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

##### `put_total_local_storage_gb` <a name="put_total_local_storage_gb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putTotalLocalStorageGb"></a>

```python
def put_total_local_storage_gb(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

##### `put_vcpu_count` <a name="put_vcpu_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putVcpuCount"></a>

```python
def put_vcpu_count(
  min: typing.Union[int, float],
  max: typing.Union[int, float] = None
) -> None
```

###### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putVcpuCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#min LaunchTemplate#min}.

---

###### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putVcpuCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template#max LaunchTemplate#max}.

---

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_manufacturers` <a name="reset_accelerator_manufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorManufacturers"></a>

```python
def reset_accelerator_manufacturers() -> None
```

##### `reset_accelerator_names` <a name="reset_accelerator_names" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorNames"></a>

```python
def reset_accelerator_names() -> None
```

##### `reset_accelerator_total_memory_mib` <a name="reset_accelerator_total_memory_mib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib"></a>

```python
def reset_accelerator_total_memory_mib() -> None
```

##### `reset_accelerator_types` <a name="reset_accelerator_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTypes"></a>

```python
def reset_accelerator_types() -> None
```

##### `reset_bare_metal` <a name="reset_bare_metal" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBareMetal"></a>

```python
def reset_bare_metal() -> None
```

##### `reset_baseline_ebs_bandwidth_mbps` <a name="reset_baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps"></a>

```python
def reset_baseline_ebs_bandwidth_mbps() -> None
```

##### `reset_burstable_performance` <a name="reset_burstable_performance" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBurstablePerformance"></a>

```python
def reset_burstable_performance() -> None
```

##### `reset_cpu_manufacturers` <a name="reset_cpu_manufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetCpuManufacturers"></a>

```python
def reset_cpu_manufacturers() -> None
```

##### `reset_excluded_instance_types` <a name="reset_excluded_instance_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```python
def reset_excluded_instance_types() -> None
```

##### `reset_instance_generations` <a name="reset_instance_generations" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetInstanceGenerations"></a>

```python
def reset_instance_generations() -> None
```

##### `reset_local_storage` <a name="reset_local_storage" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorage"></a>

```python
def reset_local_storage() -> None
```

##### `reset_local_storage_types` <a name="reset_local_storage_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorageTypes"></a>

```python
def reset_local_storage_types() -> None
```

##### `reset_memory_gib_per_vcpu` <a name="reset_memory_gib_per_vcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetMemoryGibPerVcpu"></a>

```python
def reset_memory_gib_per_vcpu() -> None
```

##### `reset_network_interface_count` <a name="reset_network_interface_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetNetworkInterfaceCount"></a>

```python
def reset_network_interface_count() -> None
```

##### `reset_on_demand_max_price_percentage_over_lowest_price` <a name="reset_on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice"></a>

```python
def reset_on_demand_max_price_percentage_over_lowest_price() -> None
```

##### `reset_require_hibernate_support` <a name="reset_require_hibernate_support" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetRequireHibernateSupport"></a>

```python
def reset_require_hibernate_support() -> None
```

##### `reset_spot_max_price_percentage_over_lowest_price` <a name="reset_spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice"></a>

```python
def reset_spot_max_price_percentage_over_lowest_price() -> None
```

##### `reset_total_local_storage_gb` <a name="reset_total_local_storage_gb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetTotalLocalStorageGb"></a>

```python
def reset_total_local_storage_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference">LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">accelerator_total_memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baseline_ebs_bandwidth_mbps</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu">memory_gib_per_vcpu</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference">LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMib">memory_mib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference">LaunchTemplateInstanceRequirementsMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount">network_interface_count</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference">LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb">total_local_storage_gb</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference">LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount">vcpu_count</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference">LaunchTemplateInstanceRequirementsVcpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturersInput">accelerator_manufacturers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNamesInput">accelerator_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput">accelerator_total_memory_mib_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypesInput">accelerator_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetalInput">bare_metal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput">baseline_ebs_bandwidth_mbps_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformanceInput">burstable_performance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturersInput">cpu_manufacturers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">excluded_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerationsInput">instance_generations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageInput">local_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypesInput">local_storage_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput">memory_gib_per_vcpu_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMibInput">memory_mib_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCountInput">network_interface_count_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput">on_demand_max_price_percentage_over_lowest_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupportInput">require_hibernate_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput">spot_max_price_percentage_over_lowest_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGbInput">total_local_storage_gb_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCountInput">vcpu_count_input</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers">accelerator_manufacturers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames">accelerator_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetal">bare_metal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance">burstable_performance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers">cpu_manufacturers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations">instance_generations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorage">local_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes">local_storage_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">on_demand_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport">require_hibernate_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spot_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference">LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `accelerator_total_memory_mib`<sup>Required</sup> <a name="accelerator_total_memory_mib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```python
accelerator_total_memory_mib: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a>

---

##### `baseline_ebs_bandwidth_mbps`<sup>Required</sup> <a name="baseline_ebs_bandwidth_mbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```python
baseline_ebs_bandwidth_mbps: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `memory_gib_per_vcpu`<sup>Required</sup> <a name="memory_gib_per_vcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```python
memory_gib_per_vcpu: LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference">LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference</a>

---

##### `memory_mib`<sup>Required</sup> <a name="memory_mib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMib"></a>

```python
memory_mib: LaunchTemplateInstanceRequirementsMemoryMibOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference">LaunchTemplateInstanceRequirementsMemoryMibOutputReference</a>

---

##### `network_interface_count`<sup>Required</sup> <a name="network_interface_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```python
network_interface_count: LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference">LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `total_local_storage_gb`<sup>Required</sup> <a name="total_local_storage_gb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```python
total_local_storage_gb: LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference">LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `vcpu_count`<sup>Required</sup> <a name="vcpu_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount"></a>

```python
vcpu_count: LaunchTemplateInstanceRequirementsVcpuCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference">LaunchTemplateInstanceRequirementsVcpuCountOutputReference</a>

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: LaunchTemplateInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

---

##### `accelerator_manufacturers_input`<sup>Optional</sup> <a name="accelerator_manufacturers_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturersInput"></a>

```python
accelerator_manufacturers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_names_input`<sup>Optional</sup> <a name="accelerator_names_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNamesInput"></a>

```python
accelerator_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_total_memory_mib_input`<sup>Optional</sup> <a name="accelerator_total_memory_mib_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput"></a>

```python
accelerator_total_memory_mib_input: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `accelerator_types_input`<sup>Optional</sup> <a name="accelerator_types_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypesInput"></a>

```python
accelerator_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bare_metal_input`<sup>Optional</sup> <a name="bare_metal_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetalInput"></a>

```python
bare_metal_input: str
```

- *Type:* str

---

##### `baseline_ebs_bandwidth_mbps_input`<sup>Optional</sup> <a name="baseline_ebs_bandwidth_mbps_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput"></a>

```python
baseline_ebs_bandwidth_mbps_input: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `burstable_performance_input`<sup>Optional</sup> <a name="burstable_performance_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformanceInput"></a>

```python
burstable_performance_input: str
```

- *Type:* str

---

##### `cpu_manufacturers_input`<sup>Optional</sup> <a name="cpu_manufacturers_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturersInput"></a>

```python
cpu_manufacturers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_instance_types_input`<sup>Optional</sup> <a name="excluded_instance_types_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```python
excluded_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_generations_input`<sup>Optional</sup> <a name="instance_generations_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerationsInput"></a>

```python
instance_generations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_storage_input`<sup>Optional</sup> <a name="local_storage_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageInput"></a>

```python
local_storage_input: str
```

- *Type:* str

---

##### `local_storage_types_input`<sup>Optional</sup> <a name="local_storage_types_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypesInput"></a>

```python
local_storage_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `memory_gib_per_vcpu_input`<sup>Optional</sup> <a name="memory_gib_per_vcpu_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput"></a>

```python
memory_gib_per_vcpu_input: LaunchTemplateInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `memory_mib_input`<sup>Optional</sup> <a name="memory_mib_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMibInput"></a>

```python
memory_mib_input: LaunchTemplateInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

---

##### `network_interface_count_input`<sup>Optional</sup> <a name="network_interface_count_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCountInput"></a>

```python
network_interface_count_input: LaunchTemplateInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

---

##### `on_demand_max_price_percentage_over_lowest_price_input`<sup>Optional</sup> <a name="on_demand_max_price_percentage_over_lowest_price_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput"></a>

```python
on_demand_max_price_percentage_over_lowest_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_hibernate_support_input`<sup>Optional</sup> <a name="require_hibernate_support_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupportInput"></a>

```python
require_hibernate_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spot_max_price_percentage_over_lowest_price_input`<sup>Optional</sup> <a name="spot_max_price_percentage_over_lowest_price_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput"></a>

```python
spot_max_price_percentage_over_lowest_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_local_storage_gb_input`<sup>Optional</sup> <a name="total_local_storage_gb_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGbInput"></a>

```python
total_local_storage_gb_input: LaunchTemplateInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

---

##### `vcpu_count_input`<sup>Optional</sup> <a name="vcpu_count_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCountInput"></a>

```python
vcpu_count_input: LaunchTemplateInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

---

##### `accelerator_manufacturers`<sup>Required</sup> <a name="accelerator_manufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```python
accelerator_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_names`<sup>Required</sup> <a name="accelerator_names" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```python
accelerator_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_types`<sup>Required</sup> <a name="accelerator_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bare_metal`<sup>Required</sup> <a name="bare_metal" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetal"></a>

```python
bare_metal: str
```

- *Type:* str

---

##### `burstable_performance`<sup>Required</sup> <a name="burstable_performance" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```python
burstable_performance: str
```

- *Type:* str

---

##### `cpu_manufacturers`<sup>Required</sup> <a name="cpu_manufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```python
cpu_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_instance_types`<sup>Required</sup> <a name="excluded_instance_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_generations`<sup>Required</sup> <a name="instance_generations" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```python
instance_generations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_storage`<sup>Required</sup> <a name="local_storage" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorage"></a>

```python
local_storage: str
```

- *Type:* str

---

##### `local_storage_types`<sup>Required</sup> <a name="local_storage_types" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```python
local_storage_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_demand_max_price_percentage_over_lowest_price`<sup>Required</sup> <a name="on_demand_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```python
on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_hibernate_support`<sup>Required</sup> <a name="require_hibernate_support" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```python
require_hibernate_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spot_max_price_percentage_over_lowest_price`<sup>Required</sup> <a name="spot_max_price_percentage_over_lowest_price" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```python
spot_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

---


### LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference <a name="LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

---


### LaunchTemplateInstanceRequirementsVcpuCountOutputReference <a name="LaunchTemplateInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resetMax">reset_max</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

---


### LaunchTemplateLicenseSpecificationList <a name="LaunchTemplateLicenseSpecificationList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateLicenseSpecificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LaunchTemplateLicenseSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LaunchTemplateLicenseSpecification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>]]

---


### LaunchTemplateLicenseSpecificationOutputReference <a name="LaunchTemplateLicenseSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateLicenseSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArnInput">license_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn">license_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `license_configuration_arn_input`<sup>Optional</sup> <a name="license_configuration_arn_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArnInput"></a>

```python
license_configuration_arn_input: str
```

- *Type:* str

---

##### `license_configuration_arn`<sup>Required</sup> <a name="license_configuration_arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn"></a>

```python
license_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LaunchTemplateLicenseSpecification, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>, cdktf.IResolvable]

---


### LaunchTemplateMaintenanceOptionsOutputReference <a name="LaunchTemplateMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resetAutoRecovery">reset_auto_recovery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_recovery` <a name="reset_auto_recovery" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```python
def reset_auto_recovery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecoveryInput">auto_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery">auto_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_recovery_input`<sup>Optional</sup> <a name="auto_recovery_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```python
auto_recovery_input: str
```

- *Type:* str

---

##### `auto_recovery`<sup>Required</sup> <a name="auto_recovery" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```python
auto_recovery: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

---


### LaunchTemplateMetadataOptionsOutputReference <a name="LaunchTemplateMetadataOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpEndpoint">reset_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpProtocolIpv6">reset_http_protocol_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">reset_http_put_response_hop_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpTokens">reset_http_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetInstanceMetadataTags">reset_instance_metadata_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_endpoint` <a name="reset_http_endpoint" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```python
def reset_http_endpoint() -> None
```

##### `reset_http_protocol_ipv6` <a name="reset_http_protocol_ipv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpProtocolIpv6"></a>

```python
def reset_http_protocol_ipv6() -> None
```

##### `reset_http_put_response_hop_limit` <a name="reset_http_put_response_hop_limit" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```python
def reset_http_put_response_hop_limit() -> None
```

##### `reset_http_tokens` <a name="reset_http_tokens" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpTokens"></a>

```python
def reset_http_tokens() -> None
```

##### `reset_instance_metadata_tags` <a name="reset_instance_metadata_tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```python
def reset_instance_metadata_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpointInput">http_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6Input">http_protocol_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">http_put_response_hop_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokensInput">http_tokens_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instance_metadata_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6">http_protocol_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_endpoint_input`<sup>Optional</sup> <a name="http_endpoint_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```python
http_endpoint_input: str
```

- *Type:* str

---

##### `http_protocol_ipv6_input`<sup>Optional</sup> <a name="http_protocol_ipv6_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6Input"></a>

```python
http_protocol_ipv6_input: str
```

- *Type:* str

---

##### `http_put_response_hop_limit_input`<sup>Optional</sup> <a name="http_put_response_hop_limit_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```python
http_put_response_hop_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens_input`<sup>Optional</sup> <a name="http_tokens_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokensInput"></a>

```python
http_tokens_input: str
```

- *Type:* str

---

##### `instance_metadata_tags_input`<sup>Optional</sup> <a name="instance_metadata_tags_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```python
instance_metadata_tags_input: str
```

- *Type:* str

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

---

##### `http_protocol_ipv6`<sup>Required</sup> <a name="http_protocol_ipv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```python
http_protocol_ipv6: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `instance_metadata_tags`<sup>Required</sup> <a name="instance_metadata_tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

---


### LaunchTemplateMonitoringOutputReference <a name="LaunchTemplateMonitoringOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateMonitoringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplateMonitoring
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

---


### LaunchTemplateNetworkInterfacesList <a name="LaunchTemplateNetworkInterfacesList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LaunchTemplateNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LaunchTemplateNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>]]

---


### LaunchTemplateNetworkInterfacesOutputReference <a name="LaunchTemplateNetworkInterfacesOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress">reset_associate_carrier_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociatePublicIpAddress">reset_associate_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeviceIndex">reset_device_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetInterfaceType">reset_interface_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4AddressCount">reset_ipv4_address_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Addresses">reset_ipv4_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4PrefixCount">reset_ipv4_prefix_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Prefixes">reset_ipv4_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6AddressCount">reset_ipv6_address_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Addresses">reset_ipv6_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6PrefixCount">reset_ipv6_prefix_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Prefixes">reset_ipv6_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkCardIndex">reset_network_card_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkInterfaceId">reset_network_interface_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_associate_carrier_ip_address` <a name="reset_associate_carrier_ip_address" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress"></a>

```python
def reset_associate_carrier_ip_address() -> None
```

##### `reset_associate_public_ip_address` <a name="reset_associate_public_ip_address" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociatePublicIpAddress"></a>

```python
def reset_associate_public_ip_address() -> None
```

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_device_index` <a name="reset_device_index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```python
def reset_device_index() -> None
```

##### `reset_interface_type` <a name="reset_interface_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetInterfaceType"></a>

```python
def reset_interface_type() -> None
```

##### `reset_ipv4_address_count` <a name="reset_ipv4_address_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4AddressCount"></a>

```python
def reset_ipv4_address_count() -> None
```

##### `reset_ipv4_addresses` <a name="reset_ipv4_addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Addresses"></a>

```python
def reset_ipv4_addresses() -> None
```

##### `reset_ipv4_prefix_count` <a name="reset_ipv4_prefix_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4PrefixCount"></a>

```python
def reset_ipv4_prefix_count() -> None
```

##### `reset_ipv4_prefixes` <a name="reset_ipv4_prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Prefixes"></a>

```python
def reset_ipv4_prefixes() -> None
```

##### `reset_ipv6_address_count` <a name="reset_ipv6_address_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6AddressCount"></a>

```python
def reset_ipv6_address_count() -> None
```

##### `reset_ipv6_addresses` <a name="reset_ipv6_addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Addresses"></a>

```python
def reset_ipv6_addresses() -> None
```

##### `reset_ipv6_prefix_count` <a name="reset_ipv6_prefix_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6PrefixCount"></a>

```python
def reset_ipv6_prefix_count() -> None
```

##### `reset_ipv6_prefixes` <a name="reset_ipv6_prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Prefixes"></a>

```python
def reset_ipv6_prefixes() -> None
```

##### `reset_network_card_index` <a name="reset_network_card_index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkCardIndex"></a>

```python
def reset_network_card_index() -> None
```

##### `reset_network_interface_id` <a name="reset_network_interface_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```python
def reset_network_interface_id() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput">associate_carrier_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddressInput">associate_public_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndexInput">device_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceTypeInput">interface_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCountInput">ipv4_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressesInput">ipv4_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCountInput">ipv4_prefix_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixesInput">ipv4_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCountInput">ipv6_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressesInput">ipv6_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCountInput">ipv6_prefix_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixesInput">ipv6_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndexInput">network_card_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress">associate_carrier_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceType">interface_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount">ipv4_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount">ipv4_prefix_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes">ipv4_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount">ipv6_prefix_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes">ipv6_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex">network_card_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associate_carrier_ip_address_input`<sup>Optional</sup> <a name="associate_carrier_ip_address_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput"></a>

```python
associate_carrier_ip_address_input: str
```

- *Type:* str

---

##### `associate_public_ip_address_input`<sup>Optional</sup> <a name="associate_public_ip_address_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddressInput"></a>

```python
associate_public_ip_address_input: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_index_input`<sup>Optional</sup> <a name="device_index_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```python
device_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interface_type_input`<sup>Optional</sup> <a name="interface_type_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceTypeInput"></a>

```python
interface_type_input: str
```

- *Type:* str

---

##### `ipv4_address_count_input`<sup>Optional</sup> <a name="ipv4_address_count_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCountInput"></a>

```python
ipv4_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_addresses_input`<sup>Optional</sup> <a name="ipv4_addresses_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressesInput"></a>

```python
ipv4_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_prefix_count_input`<sup>Optional</sup> <a name="ipv4_prefix_count_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCountInput"></a>

```python
ipv4_prefix_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_prefixes_input`<sup>Optional</sup> <a name="ipv4_prefixes_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixesInput"></a>

```python
ipv4_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_address_count_input`<sup>Optional</sup> <a name="ipv6_address_count_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCountInput"></a>

```python
ipv6_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses_input`<sup>Optional</sup> <a name="ipv6_addresses_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressesInput"></a>

```python
ipv6_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_prefix_count_input`<sup>Optional</sup> <a name="ipv6_prefix_count_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCountInput"></a>

```python
ipv6_prefix_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_prefixes_input`<sup>Optional</sup> <a name="ipv6_prefixes_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixesInput"></a>

```python
ipv6_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_card_index_input`<sup>Optional</sup> <a name="network_card_index_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndexInput"></a>

```python
network_card_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `associate_carrier_ip_address`<sup>Required</sup> <a name="associate_carrier_ip_address" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```python
associate_carrier_ip_address: str
```

- *Type:* str

---

##### `associate_public_ip_address`<sup>Required</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interface_type`<sup>Required</sup> <a name="interface_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceType"></a>

```python
interface_type: str
```

- *Type:* str

---

##### `ipv4_address_count`<sup>Required</sup> <a name="ipv4_address_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount"></a>

```python
ipv4_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_prefix_count`<sup>Required</sup> <a name="ipv4_prefix_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount"></a>

```python
ipv4_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_prefixes`<sup>Required</sup> <a name="ipv4_prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes"></a>

```python
ipv4_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_address_count`<sup>Required</sup> <a name="ipv6_address_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses`<sup>Required</sup> <a name="ipv6_addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```python
ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_prefix_count`<sup>Required</sup> <a name="ipv6_prefix_count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount"></a>

```python
ipv6_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_prefixes`<sup>Required</sup> <a name="ipv6_prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes"></a>

```python
ipv6_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_card_index`<sup>Required</sup> <a name="network_card_index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```python
network_card_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LaunchTemplateNetworkInterfaces, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>, cdktf.IResolvable]

---


### LaunchTemplatePlacementOutputReference <a name="LaunchTemplatePlacementOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplatePlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAffinity">reset_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostId">reset_host_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostResourceGroupArn">reset_host_resource_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetPartitionNumber">reset_partition_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetSpreadDomain">reset_spread_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetTenancy">reset_tenancy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_affinity` <a name="reset_affinity" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAffinity"></a>

```python
def reset_affinity() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_group_name` <a name="reset_group_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_host_id` <a name="reset_host_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostId"></a>

```python
def reset_host_id() -> None
```

##### `reset_host_resource_group_arn` <a name="reset_host_resource_group_arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostResourceGroupArn"></a>

```python
def reset_host_resource_group_arn() -> None
```

##### `reset_partition_number` <a name="reset_partition_number" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetPartitionNumber"></a>

```python
def reset_partition_number() -> None
```

##### `reset_spread_domain` <a name="reset_spread_domain" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetSpreadDomain"></a>

```python
def reset_spread_domain() -> None
```

##### `reset_tenancy` <a name="reset_tenancy" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetTenancy"></a>

```python
def reset_tenancy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinityInput">affinity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostIdInput">host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArnInput">host_resource_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumberInput">partition_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomainInput">spread_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancyInput">tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinity">affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumber">partition_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomain">spread_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `affinity_input`<sup>Optional</sup> <a name="affinity_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinityInput"></a>

```python
affinity_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `host_id_input`<sup>Optional</sup> <a name="host_id_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostIdInput"></a>

```python
host_id_input: str
```

- *Type:* str

---

##### `host_resource_group_arn_input`<sup>Optional</sup> <a name="host_resource_group_arn_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArnInput"></a>

```python
host_resource_group_arn_input: str
```

- *Type:* str

---

##### `partition_number_input`<sup>Optional</sup> <a name="partition_number_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumberInput"></a>

```python
partition_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spread_domain_input`<sup>Optional</sup> <a name="spread_domain_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomainInput"></a>

```python
spread_domain_input: str
```

- *Type:* str

---

##### `tenancy_input`<sup>Optional</sup> <a name="tenancy_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancyInput"></a>

```python
tenancy_input: str
```

- *Type:* str

---

##### `affinity`<sup>Required</sup> <a name="affinity" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinity"></a>

```python
affinity: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `host_resource_group_arn`<sup>Required</sup> <a name="host_resource_group_arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

---

##### `partition_number`<sup>Required</sup> <a name="partition_number" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumber"></a>

```python
partition_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spread_domain`<sup>Required</sup> <a name="spread_domain" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomain"></a>

```python
spread_domain: str
```

- *Type:* str

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplatePlacement
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

---


### LaunchTemplatePrivateDnsNameOptionsOutputReference <a name="LaunchTemplatePrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">reset_enable_resource_name_dns_aaaa_record</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">reset_enable_resource_name_dns_a_record</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetHostnameType">reset_hostname_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_resource_name_dns_aaaa_record` <a name="reset_enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```python
def reset_enable_resource_name_dns_aaaa_record() -> None
```

##### `reset_enable_resource_name_dns_a_record` <a name="reset_enable_resource_name_dns_a_record" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```python
def reset_enable_resource_name_dns_a_record() -> None
```

##### `reset_hostname_type` <a name="reset_hostname_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```python
def reset_hostname_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">enable_resource_name_dns_aaaa_record_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">enable_resource_name_dns_a_record_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">hostname_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType">hostname_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```python
enable_resource_name_dns_aaaa_record_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_resource_name_dns_a_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```python
enable_resource_name_dns_a_record_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hostname_type_input`<sup>Optional</sup> <a name="hostname_type_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```python
hostname_type_input: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record`<sup>Required</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_resource_name_dns_a_record`<sup>Required</sup> <a name="enable_resource_name_dns_a_record" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hostname_type`<sup>Required</sup> <a name="hostname_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchTemplatePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

---


### LaunchTemplateTagSpecificationsList <a name="LaunchTemplateTagSpecificationsList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateTagSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LaunchTemplateTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LaunchTemplateTagSpecifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>]]

---


### LaunchTemplateTagSpecificationsOutputReference <a name="LaunchTemplateTagSpecificationsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_template

launchTemplate.LaunchTemplateTagSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LaunchTemplateTagSpecifications, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>, cdktf.IResolvable]

---



